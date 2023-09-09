/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Home';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntIcon from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const tabNavigatorScreenOption = () => ({
    headerShown: false,
    tabBarStyle: {
      backgroundColor: 'black',
    },
    tabBarItemStyle: {
      margin: 5,
    },
  });

  return (
    <Tab.Navigator screenOptions={tabNavigatorScreenOption}>
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesomeIcon name="home" color={color} size={size} />
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <AntIcon name="profile" color={color} size={size} />
          ),
        }}
        name="Profile"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Contact',
          tabBarIcon: ({color, size}) => (
            <AntIcon name="contacts" color={color} size={size} />
          ),
        }}
        name="Contact"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="settings" color={color} size={size} />
          ),
        }}
        name="Settings"
        component={Home}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
