import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNav from './src/Navigations/AppNav';
import AppNavigator from './src/Navigations/AppNavigator';
import AuthNavigator from './src/Navigations/AuthNavigator';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  return (
    <NavigationContainer>
      {/* {isAuthenticated ?  <AppNavigator /> : <AuthNavigator />} */}
      <AppNavigator />
    </NavigationContainer>
  );
}
