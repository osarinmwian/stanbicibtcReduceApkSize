import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import BuyDataConfirmation from "../screens/Payment/buyData/BuyDataConfirmation";
import BuyDataLandingPage from "../screens/Payment/buyData/BuyDataLandingPage";
import { BuyDataStack } from "./types";

const Stack = createNativeStackNavigator<BuyDataStack>();
const BuyDataNavigation: () => JSX.Element = () => (
  <Stack.Navigator
    initialRouteName="BuyDataLandingPage"
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen component={BuyDataLandingPage} name="BuyDataLandingPage" />
    <Stack.Screen component={BuyDataConfirmation} name="ConfirmBuyData" />
  </Stack.Navigator>
);

export default BuyDataNavigation;
