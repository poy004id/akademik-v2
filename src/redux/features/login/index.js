import { createSlice } from "@reduxjs/toolkit";
export const snackbarSlice = createSlice({
    name: "snackbar",
    initialState: {
        username: '',
        password: '',
        error: '',
        isLoading: false,
    },
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload.value;
        },
        setPassword: (state, action) => {
            state.password = action.payload.value;
        },
        setError: (state, action) => {
            state.error = action.payload.value;
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload.value;
        }
    }
});

export const { setEmail, setPassword, setError , setIsLoading} = snackbarSlice.actions;
export default snackbarSlice.reducer;