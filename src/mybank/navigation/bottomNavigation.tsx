/* eslint-disable react/no-unstable-nested-components */
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Image } from "react-native";

import {
  homeIcon,
  lifestyle,
  more,
  payments,
  transfer,
} from "@/mybank/assets/image";
import {
  ExampleScreen,
  FifthScreen,
  FourthScreen,
  SecondScreen,
  ThirdScreen,
} from "@/mybank/screens/";
import { Box } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";

import Styles from "./styles";
import { MyTabRoutes } from "./types";

const Tab = createBottomTabNavigator<MyTabRoutes>();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="ExampleScreen"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#0033AA",
        tabBarInactiveTintColor: "#001648",
        tabBarShowLabel: false,
        tabBarStyle: Styles.tabBarStyle,
      }}
    >
      <Tab.Screen
        component={ExampleScreen}
        name="ExampleScreen"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Box alignItems="center" justifyContent="center">
              <Image source={homeIcon} style={{ tintColor: color }} />
              <Text
                color={focused ? "primaryColor" : "wealthColor"}
                marginTop="sm"
                variant={focused ? "bold10" : "regular10"}
              >
                Home
              </Text>
            </Box>
          ),
        }}
      />
      <Tab.Screen
        component={SecondScreen}
        name="SecondScreen"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Box alignItems="center">
              <Image source={transfer} style={{ tintColor: color }} />
              <Text
                color={focused ? "primaryColor" : "wealthColor"}
                marginTop="sm"
                variant={focused ? "bold10" : "regular10"}
              >
                Transfer
              </Text>
            </Box>
          ),
        }}
      />
      <Tab.Screen
        component={ThirdScreen}
        name="ThirdScreen"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Box alignItems="center" justifyContent="center">
              <Image source={payments} style={{ tintColor: color }} />
              <Text
                color={focused ? "primaryColor" : "wealthColor"}
                marginTop="sm"
                variant={focused ? "bold10" : "regular10"}
              >
                Lifestyle
              </Text>
            </Box>
          ),
        }}
      />
      <Tab.Screen
        component={FourthScreen}
        name="FourthScreen"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Box alignItems="center" justifyContent="center">
              <Image source={lifestyle} style={{ tintColor: color }} />
              <Text
                color={focused ? "primaryColor" : "wealthColor"}
                marginTop="sm"
                variant={focused ? "bold10" : "regular10"}
              >
                Lifestyle
              </Text>
            </Box>
          ),
        }}
      />
      <Tab.Screen
        component={FifthScreen}
        name="FifthScreen"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Box alignItems="center" justifyContent="center">
              <Image source={more} style={{ tintColor: color }} />
              <Text
                color={focused ? "primaryColor" : "wealthColor"}
                marginTop="sm"
                variant={focused ? "bold10" : "regular10"}
              >
                More
              </Text>
            </Box>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
