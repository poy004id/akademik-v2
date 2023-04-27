// import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StackHeader from '../../components/StackHeader';
import {View} from 'react-native';

import Home, {HomeScreenOptions} from '../../../screens/AppNavigator/HomeStack';
import Test, {TestScreenOptions} from '../../../screens/AppNavigator/HomeStack/Test';
import Test2 from '../../../screens/AppNavigator/HomeStack/Test2';
import Test3 from '../../../screens/AppNavigator/HomeStack/Test3';
import TestRedux from '../../../screens/AppNavigator/HomeStack/testRedux';

console.log('HomeStack', HomeScreenOptions)
function HomeStack() {
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
      <Stack.Screen name="Home" component={Home}  options={HomeScreenOptions} />
      <Stack.Screen name="Test" component={Test} options={TestScreenOptions}/>
      <Stack.Screen name="Test2" component={Test2} />
      <Stack.Screen name="Test3" component={Test3} />
      <Stack.Screen name="TestRedux" component={TestRedux} />
     
    </Stack.Navigator>
  );
}

export default HomeStack;