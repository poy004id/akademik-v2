import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StackHeader from '../Component/StackHeader';
import Logbook from '../../Screens/Logbook';

function LogbookNavigator() {
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
      <Stack.Screen name="Logbook" component={Logbook} />
    </Stack.Navigator>
  );
}

export default LogbookNavigator;