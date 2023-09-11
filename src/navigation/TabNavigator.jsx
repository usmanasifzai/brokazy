/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntIcon from 'react-native-vector-icons/AntDesign';

import Home from '../screens/Home/Home';
import {CONTACT, HOME, PROFILE, SETTINGS} from '../constants/navigation';

const Tab = createBottomTabNavigator();

const tabNavigatorScreenOption = () => ({
  headerShown: false,
  tabBarStyle: {
    backgroundColor: 'black',
  },
  tabBarItemStyle: {
    margin: 5,
  },
});

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={tabNavigatorScreenOption}>
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesomeIcon name="home" color={color} size={size} />
          ),
        }}
        name={HOME}
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <AntIcon name="profile" color={color} size={size} />
          ),
        }}
        name={PROFILE}
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <AntIcon name="contacts" color={color} size={size} />
          ),
        }}
        name={CONTACT}
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="settings" color={color} size={size} />
          ),
        }}
        name={SETTINGS}
        component={Home}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
