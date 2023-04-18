// import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StackHeader from '../Component/StackHeader';
import {View} from 'react-native';

import Home, {HomeScreenOptions} from '../../Screens/HomeStack';
// import Home, { HomeScreenOptions } from '../../Screens/HomeStack/Home';

import Test, {TestScreenOptions} from '../../Screens/HomeStack/Test';
import Test2 from '../../Screens/HomeStack/Test2';
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
     
    </Stack.Navigator>
  );
}

export default HomeStack;