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
import { ExampleScreen } from "@/mybank/screens/";
import { Box } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";

import { MyTabRoutes } from "./types";

const Tab = createBottomTabNavigator<MyTabRoutes>();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="HomeLandingPage"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#0033AA",
        tabBarInactiveTintColor: "#001648",
        tabBarShowLabel: false,
        // tabBarStyle: Styles.tabBarStyle,
      }}
    >
      <Tab.Screen
        component={ExampleScreen}
        name="HomeLandingPage"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Box alignItems="center" justifyContent="center" marginTop="sm">
              <Image source={homeIcon} style={{ tintColor: color }} />
              <Text
                color={focused ? "primaryColor" : "wealthColor"}
                marginTop="xs"
                variant={focused ? "bold10" : "regular10"}
              >
                Home
              </Text>
            </Box>
          ),
        }}
      />
      <Tab.Screen
        component={ExampleScreen}
        name="TransferLandingPage"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Box alignItems="center" justifyContent="center" marginTop="sm">
              <Image source={transfer} style={{ tintColor: color }} />
              <Text
                color={focused ? "primaryColor" : "wealthColor"}
                marginTop="xs"
                variant={focused ? "bold10" : "regular10"}
              >
                Transfer
              </Text>
            </Box>
          ),
        }}
      />
      <Tab.Screen
        component={ExampleScreen}
        name="PaymentsLandingPage"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Box alignItems="center" justifyContent="center" marginTop="sm">
              <Image source={payments} style={{ tintColor: color }} />
              <Text
                color={focused ? "primaryColor" : "wealthColor"}
                marginTop="xs"
                variant={focused ? "bold10" : "regular10"}
              >
                Payments
              </Text>
            </Box>
          ),
        }}
      />
      <Tab.Screen
        component={ExampleScreen}
        name="LifestyleLandingPage"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Box alignItems="center" justifyContent="center" marginTop="sm">
              <Image source={lifestyle} style={{ tintColor: color }} />
              <Text
                color={focused ? "primaryColor" : "wealthColor"}
                marginTop="xs"
                variant={focused ? "bold10" : "regular10"}
              >
                Lifestyle
              </Text>
            </Box>
          ),
        }}
      />
      <Tab.Screen
        component={ExampleScreen}
        name="MoreLandingPage"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Box alignItems="center" justifyContent="center" marginTop="sm">
              <Image source={more} style={{ tintColor: color }} />
              <Text
                color={focused ? "primaryColor" : "wealthColor"}
                marginTop="xs"
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
