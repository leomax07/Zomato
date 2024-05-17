import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {RootStackParamList} from './types';
import BottomTab from './bottomTab';
import TodayScreen from '../module/live/TodayScreen';

const MainNavigator = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator initialRouteName="BottomTab">
      <Stack.Screen
        options={{headerShown: false}}
        name="BottomTab"
        component={BottomTab}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="TodayScreen"
        component={TodayScreen}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
