import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Plans from '../screens/plans/Plans';
import BottomTabNavigator from './TabNavigator';
import CardDetails from '../screens/card-details/card-details';
import {BOTTOM, PLAN, CARDDETAILS} from '../constants/navigation';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={BOTTOM} component={BottomTabNavigator} />
      <Stack.Screen name={PLAN} component={Plans} />
      <Stack.Screen name={CARDDETAILS} component={CardDetails} />
    </Stack.Navigator>
  );
};

export {MainStackNavigator};
