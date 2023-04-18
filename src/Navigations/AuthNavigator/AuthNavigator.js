
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StackHeader from '../Component/StackHeader';


import SignIn from '../../Screens/AuthStack/SignIn/SignIn';
import SignUp from '../../Screens/AuthStack/SigUp/SignUp';

function AuthNavigator() {
const Stack = createNativeStackNavigator();
console.log('AuthNavigator')
  return (
    <Stack.Navigator
      headerMode="screen"
      screenOptions={{
         header:({navigation, route, options, back })=>(
             <StackHeader route={route} options={options} back={back} navigation={navigation}/>
         ),
          headerShown: true,
          headerTitleStyle: {
            fontWeight: 'bold',
          },        
      }}
    
    >
      <Stack.Screen name="SignIn" component={SignIn}  />
      <Stack.Screen name="SignUp" component={SignUp} />
     
    </Stack.Navigator>
  );
}

export default AuthNavigator;