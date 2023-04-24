
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StackHeader from '../components/StackHeader';


import SignIn from '../../screens/authStack/SignIn';
import SignUp from '../../screens/authStack/SigUp';
import VerifyEmail from '../../screens/authStack/VerifyEmail';
import ForgotPassword from '../../screens/authStack/ForgotPassword';

function AuthNavigator() {
const Stack = createNativeStackNavigator();
console.log('AuthNavigator')
  return (
    <Stack.Navigator
      headerMode="screen"
      screenOptions={{
         header:({navigation, route, options, back })=>(
             <StackHeader route={route} options={options} back={back} navigation={navigation} />
         ),
          headerShown: true,
          headerTitleStyle: {
            fontWeight: 'bold',
          },        
      }}
    
    >
      <Stack.Screen name="SignIn" component={SignIn}  />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="VerifyEmail" component={VerifyEmail}  />
      <Stack.Screen name="ForgotPassword"  component={ForgotPassword} options={{headerTitle: 'Lupa Password'}} />
     
    </Stack.Navigator>
  );
}

export default AuthNavigator;