import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StackHeader from '../../components/StackHeader';

import Attendance from '../../../screens/AttendanceStack';

function AttendanceStack() {
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
      <Stack.Screen name="Presensi" component={Attendance} />
    </Stack.Navigator>
  );
}

export default AttendanceStack;