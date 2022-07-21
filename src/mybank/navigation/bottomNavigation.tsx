/* eslint-disable react/no-unstable-nested-components */
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import React from "react";
import { Image } from "react-native";

import { ExampleScreen } from "@/mybank/screens/";
import { TransferLandingPage } from "@/mybank/screens/Transfer";
import { Box } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";
import { RFValue } from "@/shared/utils/functions";

import { homeIcon, lifestyle, more, payments, transfer } from "../assets/image";
import { LifestyleLandingPage } from "../screens/lifestyle";
import Styles from "./styles";
import { MyTabRoutes } from "./types";

const Tab = createMaterialBottomTabNavigator<MyTabRoutes>();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      activeColor="#0033AA"
      barStyle={Styles.tabBarStyle}
      inactiveColor="#001648"
      initialRouteName="HomeLandingPage"
      labeled={false}
      sceneAnimationEnabled={false}
      shifting={false}
    >
      <Tab.Screen
        component={ExampleScreen}
        name="HomeLandingPage"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Box
              alignItems="center"
              flex={1}
              justifyContent="center"
              width={RFValue(50)}
            >
              <Image source={homeIcon} style={{ tintColor: color }} />
              <Text
                color={focused ? "primaryColor" : "wealthColor"}
                fontSize={RFValue(10)}
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
        component={TransferLandingPage}
        name="TransferLandingPage"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Box
              alignItems="center"
              flex={1}
              justifyContent="center"
              width={RFValue(50)}
            >
              <Image source={transfer} style={{ tintColor: color }} />
              <Text
                color={focused ? "primaryColor" : "wealthColor"}
                fontSize={RFValue(10)}
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
            <Box
              alignItems="center"
              flex={1}
              justifyContent="center"
              width={RFValue(50)}
            >
              <Image source={payments} style={{ tintColor: color }} />
              <Text
                color={focused ? "primaryColor" : "wealthColor"}
                fontSize={RFValue(10)}
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
        component={LifestyleLandingPage}
        name="LifestyleLandingPage"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Box
              alignItems="center"
              flex={1}
              justifyContent="center"
              width={RFValue(50)}
            >
              <Image source={lifestyle} style={{ tintColor: color }} />
              <Text
                color={focused ? "primaryColor" : "wealthColor"}
                fontSize={RFValue(10)}
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
            <Box
              alignItems="center"
              flex={1}
              justifyContent="center"
              width={RFValue(50)}
            >
              <Image source={more} style={{ tintColor: color }} />
              <Text
                color={focused ? "primaryColor" : "wealthColor"}
                fontSize={RFValue(10)}
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
