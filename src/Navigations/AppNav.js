
import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import Home from '../Screens/HomeStack';

const index = () => {

  const AppStack = createNativeStackNavigator();
  return (
    <AppStack.Navigator  
    headerMode="screen"
    screenOptions={{
      //  header:({navigation, route, options, back })=>(
      //      <StackHeader route={route} options={options} back={back} navigation={navigation}/>
      //  ),
        headerShown: true,
        headerTitleStyle: {
          fontWeight: 'bold',
        },        
    }}
    >
      <AppStack.Screen name="Home" component={Home} />
    </AppStack.Navigator>
  )


}

export default index