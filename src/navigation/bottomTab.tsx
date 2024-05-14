import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootTabParamList } from './types';
import Delivery from '../module/delivery';
import Dining from '../module/dining';
import Live from '../module/live';

const BottomTab = () => {

    const Tab = createBottomTabNavigator<RootTabParamList>();

    return (
        <Tab.Navigator
            initialRouteName="DeliveryTab"
            screenOptions={{
                tabBarActiveTintColor: '#FFF',
                headerShown: false,
                tabBarStyle: {
                    height: 80,
                    // backgroundColor: ,
                    // borderColor: ,
                    paddingBottom: 18
                }

            }}

        >
            <Tab.Screen name="DeliveryTab" component={Delivery}
                options={{
                    tabBarLabel: 'Delivery',
                    // tabBarIcon: ({ color }) => (
                       
                    // ),
                }}
            />
            <Tab.Screen name="DiningTab" component={Dining}
                options={{
                    tabBarLabel: 'Dining',
                    // tabBarIcon: ({ color }) => (
                       
                    // ),
                }} />
            <Tab.Screen name="LiveTab" component={Live}
                options={{
                    tabBarLabel: 'Live',
                    // tabBarIcon: ({ color }) => (
                     
                    // ),
                }} />
        </Tab.Navigator>
    )
}

export default BottomTab
