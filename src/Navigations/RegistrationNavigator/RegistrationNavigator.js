
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StackHeader from '../components/StackHeader';
import Welcome from '../../screens/registrationStack/Welcome';
import Registration, {RegistrationScreenOptions} from '../../screens/registrationStack/Registration';
import {Text} from 'react-native';


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
        <Stack.Screen name="Welcome" component={Welcome}  
          options={RegistrationScreenOptions}
        />
        <Stack.Screen name="Registration" component={Registration}
          options={
            RegistrationScreenOptions}
        />


    </Stack.Navigator>
  );
}

export default AuthNavigator;