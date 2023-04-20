import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './src/navigations/appNavigator';
import AuthNavigator from './src/navigations/authNavigator';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  return (
    <NavigationContainer>
      {/* {isAuthenticated ?  <AppNavigator /> : <AuthNavigator />} */}
      <AppNavigator />
    </NavigationContainer>
  );
}
