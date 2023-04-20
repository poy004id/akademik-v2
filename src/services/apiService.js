import axios from 'axios';
// create axios interceptor to add the token to the header and named it with  apiService
const apiService = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});
// export the apiService

apiService.interceptors.request.use(
    async config => {
        // const token = await AsyncStorage.getItem('token');
        if (token) {
            // config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

apiService.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response.status === 401) {
            // AsyncStorage.removeItem('token');
            // AsyncStorage.removeItem('user');
            // navigate to login screen
        }   
        return Promise.reject(error);
    }
);




export default apiService;


