
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StackHeader from '../components/StackHeader';


import SignIn from '../../screens/AuthNavigator/SignIn';
import SignUp from '../../screens/AuthNavigator/SignUp';
import VerifyEmail from '../../screens/AuthNavigator/VerifyEmail';
import ResetPassword from '../../screens/AuthNavigator/ResetPassword';
import ForgotPassword from '../../screens/AuthNavigator/ForgotPassword';
import Test from '../../screens/AuthNavigator/Test';

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
      <Stack.Screen name="SignIn" component={SignIn}  options={{headerTitle: 'Sign In'}} />
      <Stack.Screen name="SignUp" component={SignUp} options={{headerTitle: 'Sign Up'}} />
      <Stack.Screen name="VerifyEmail" component={VerifyEmail} options={{headerTitle: 'Verifikasi Email'}} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} options={{headerTitle: 'Reset Password'}} />
      <Stack.Screen name="ForgotPassword"  component={ForgotPassword} options={{headerTitle: 'Lupa Password'}} />
      <Stack.Screen name="Test" component={Test} />
    </Stack.Navigator>
  );
}

export default AuthNavigator;