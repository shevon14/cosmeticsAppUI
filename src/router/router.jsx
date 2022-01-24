import React from "react";
import { View, Text } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import BottomTabBar from "../components/bottomTab";

import HomeScreen from '../screens/home';
import ProductDetailScreen from '../screens/productDetails';

const homeStack = createStackNavigator({
    home: {
        screen: HomeScreen,
    },
    details: {
        screen: ProductDetailScreen,
    }
}, {
    defaultNavigationOptions: {
        headerShown: false,
    }
});

const bottomStack = createBottomTabNavigator({
    home: {
        screen: homeStack,
    },
}, {
    initialRouteName: 'home',
    tabBarComponent: () => (
        <View style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
        }}>
            <BottomTabBar />
        </View>
    )
});

const router = createAppContainer(bottomStack);

export default router;