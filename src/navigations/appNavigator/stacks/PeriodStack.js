import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StackHeader from '../../components/StackHeader';
import Period from '../../../screens/periodStack';

function PeriodStack() {
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
      <Stack.Screen name="Periode" component={Period} />
    </Stack.Navigator>
  );
}

export default PeriodStack;