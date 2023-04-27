import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { BottomNavigation, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { CommonActions } from '@react-navigation/native';


import HomeStack from './stacks/HomeStack';
import LogbookStack from './stacks/LogbookStack';
import AccountStack from './stacks/AccountStack';
import AttendancetStack from './stacks/AttendanceStack';
import PeriodStack from './stacks/PeriodStack';

function AppNavigator() {
  const Tab = createBottomTabNavigator();
  return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
        tabBar={({ navigation, state, descriptors, insets }) => (
          <BottomNavigation.Bar
            navigationState={state}
            safeAreaInsets={insets}
            onTabPress={({ route, preventDefault }) => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });
  
              if (event.defaultPrevented) {
                preventDefault();
              } else {
               navigation.dispatch({
                  ...CommonActions.navigate(route.name, route.params),
                  target: state.key,
                });
              }
            }}
            renderIcon={({ route, focused, color }) => {
              const { options } = descriptors[route.key];
              if (options.tabBarIcon) {
                return options.tabBarIcon({ focused, color, size: 24 });
              }
  
              return null;
            }}
            getLabelText={({ route }) => {
              const { options } = descriptors[route.key];
              const label =
                options.tabBarLabel !== undefined
                  ? options.tabBarLabel
                  : options.title !== undefined
                  ? options.title
                  : route.title;
  
              return label;
            }}
          />
        )}
      >
        <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="home" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="PeriodStack"
        component={PeriodStack}
        options={{
          tabBarLabel: 'Periode',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="calendar" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="LogbookStack"
        component={LogbookStack}
        options={{
          tabBarLabel: 'Logbook',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="book" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="AttendancetStack"
        component={AttendancetStack}
        options={{
          tabBarLabel: 'Presensi',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="fingerprint" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="AccountStack"
        component={AccountStack}
        options={{
          tabBarLabel: 'Akun',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="account" size={size} color={color} />;
          },
        }}
      />
      </Tab.Navigator>
  );
}
export default AppNavigator;