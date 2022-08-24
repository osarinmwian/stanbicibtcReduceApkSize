import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import ConfirmSchedulePayment from "../screens/Payment/scheduledPayment/ConfirmSchedulePayment";
import SchedulePayment from "../screens/Payment/scheduledPayment/SchedulePayment";
import SchedulePaymentLandingPage from "../screens/Payment/scheduledPayment/SchedulePaymentLandingPage";
import { SchedulePaymentStack } from "./types";

const Stack = createNativeStackNavigator<SchedulePaymentStack>();

const SchedulePaymentNavigation: () => JSX.Element = () => (
  <Stack.Navigator
    initialRouteName="SchedulePaymentLandingPage"
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen
      component={SchedulePaymentLandingPage}
      name="SchedulePaymentLandingPage"
    />
    <Stack.Screen component={SchedulePayment} name="SchedulePayment" />
    <Stack.Screen
      component={ConfirmSchedulePayment}
      name="ConfirmSchedulePayment"
    />
  </Stack.Navigator>
);

export { SchedulePaymentNavigation };
