import React from "react";
import color from "../../src/theme/color";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { WishList,Account,Recent,MyOrder,Home } from "../../src/Screens/bottom";

import { MaterialCommunityIcons } from '@expo/vector-icons';

const ClientTab = createBottomTabNavigator();
export default function BottomNavigation() {
  return (
    <ClientTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: color.violet,
        tabBarInactiveTintColor: color.blue,
      }}
    >
      <ClientTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={24} color={color} />
          ),
        }}
      />

      <ClientTab.Screen
        name="WishList"
        component={WishList}
        options={{
          tabBarLabel: "WishList",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={24} color={color} />

          ),
        }}
      />

      <ClientTab.Screen
        name="MyOrder"
        component={MyOrder}
        options={{
          tabBarLabel: "MyOrder",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={24} color={color} />

          ),
        }}
      />

      <ClientTab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: "Account ",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={24} color={color} />

          ),
        }}
      />

      <ClientTab.Screen
        name="Recent"
        component={Recent}
        options={{
          tabBarLabel: "Recent",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={24} color={color} />

          ),
        }}
      />
    </ClientTab.Navigator>
  );
}
