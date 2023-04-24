
import AppNavigator from './src/navigations/appNavigator';
import AuthNavigator from './src/navigations/authNavigator';
import {useEffect, useState, useCallback} from 'react'
import auth from '@react-native-firebase/auth'
// import { getNewToken, Logout } from './src/service/firebase/auth.js';
import {NavigationContainer} from '@react-navigation/native';

import { StatusBar } from 'react-native';
import { useTheme } from 'react-native-paper';
// import { appleAuth } from '@invertase/react-native-apple-authentication';
// import {enableLatestRenderer} from 'react-native-maps';
// enableLatestRenderer();

import SplashScreen from './src/screens/SplashScreen';
// import {getRegistrationData} from './src/screen/Home/useData';

const App = () => {
    const {colors} = useTheme();
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();


    useEffect(() => {
        const subscriber = auth().onUserChanged(onAuthStateChanged);
        return () => {
          subscriber(); // unsubscribe from onUserChanged event
        };
      }, [onAuthStateChanged]);

    const onAuthStateChanged = useCallback(async (user) => {
        console.log('onAuthStateChanged called', JSON.stringify(user));
        try {
          // if (appleAuth.isSupported && user?.providerData[0]?.uid && user?.providerData[0]?.providerId === 'apple.com') {
            // const auth = await appleAuth.getCredentialStateForUser(user?.providerData[0]?.uid);
          //   if (!auth) {
          //     return await Logout();
          //   }
          // }
          if (user) {
            // await getNewToken();
            // await getRegistrationData();
          }
          setUser(user);
          if (initializing)
            setTimeout(() => {
              setInitializing(false);
            }, 1000);
    
        } catch (error) {
          console.log('error getCredentialStateForUser', error);
        }
      }, []);

    return (
        <NavigationContainer>
            {/* <StatusBar backgroundColor={colors.primary} barStyle="light-content"/> */}
            {initializing && <SplashScreen isLoading={initializing} />}
            {user?.emailVerified? <AppNavigator/> :
            <AuthNavigator/>
            // <AppNavigator/>
            }
        </NavigationContainer>
    )
}

export default App
