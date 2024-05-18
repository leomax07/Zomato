import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootTabParamList} from './types';
import Delivery from '../module/delivery';
import Dining from '../module/dining';
import Live from '../module/live';
import { Image, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';

const BottomTab = () => {
  const Tab = createBottomTabNavigator<RootTabParamList>();

    return (
        <Tab.Navigator
            initialRouteName="DeliveryTab"
            screenOptions={({ route }: { route: RouteProp<RootTabParamList, keyof RootTabParamList> }) => 
            ({
                tabBarActiveTintColor: '#000',
                headerShown: false,
                tabBarStyle: {
                    height: 80,
                    paddingBottom: 18,
                    backgroundColor: route.name === 'LiveTab' ? '#000' : '#FFF',
                },
                tabBarLabelStyle: ({ focused }: { focused: boolean }) => ({
                    fontSize: 12,
                    fontWeight: 700,
                    color: focused ? '#000' : '#808080',
                }),
                tabBarIconStyle: {
                    width: 30,
                    height: 30,
                },
            })}
          
        >
            <Tab.Screen name="DeliveryTab" component={Delivery}
                options={{
                    tabBarLabel: 'Delivery',
                    tabBarIcon: ({ color, focused }) => (
                        <Image
                            source={
                                focused
                                    ? require("../assets/deliveryactive.png")
                                    : require("../assets/deliveryinactive.png")
                            }
                            style={styles.image}
                        />
                    ),
                }}
            />
            <Tab.Screen name="DiningTab" component={Dining}
                options={{
                    tabBarLabel: 'Dining',
                    tabBarIcon: ({ color, focused }) => (
                        <Image
                            source={
                                focused
                                    ? require("../assets/foodtrayactive.png")
                                    : require("../assets/foodtrayinactive.png")
                            }
                            style={styles.image}
                        />
                    ),
                }} />
            <Tab.Screen name="LiveTab" component={Live}
                options={{
                    tabBarLabel: 'Live',
                    tabBarIcon: ({ color, focused }) => (
                        <Image
                            source={
                                focused
                                    ? require("../assets/ticketactive.png")
                                    : require("../assets/ticketinactive.png")
                            }
                            style={styles.image}
                        />
                    ),
                }} />
        </Tab.Navigator>
    )
}

export default BottomTab

const styles = StyleSheet.create({
    image:{
        height:30,
        width:30
    }
})
