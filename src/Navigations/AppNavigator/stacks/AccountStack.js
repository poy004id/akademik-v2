import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StackHeader from '../../components/StackHeader';
import Account from '../../../screens/accountStack';

function AccountStack() {
const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      headerMode="screen"
      screenOptions={{
        header:({navigation, route, options, back })=>(
            <StackHeader route={route} options={options} back={back} navigation={navigation}/>
        ),
          headerShown: true,      
      }}
    >
      <Stack.Screen name="Akun" component={Account} />
    </Stack.Navigator>
  );
}

export default AccountStack;