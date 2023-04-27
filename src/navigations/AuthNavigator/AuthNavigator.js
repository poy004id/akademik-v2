
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StackHeader from '../components/StackHeader';


import SignIn from '../../Screens/AuthStack/SignIn';
import SignUp from '../../Screens/AuthStack/SignUp';
import VerifyEmail from '../../Screens/AuthStack/VerifyEmail';
import ResetPassword from '../../Screens/AuthStack/ResetPassword';
import ForgotPassword from '../../Screens/AuthStack/ForgotPassword';
import Test from '../../Screens/AuthStack/Test';

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