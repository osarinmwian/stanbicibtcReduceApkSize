import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import BuyENaira from "../screens/Transfer/eNairaManagement/BuyENaira";
import ENairaAccountVerification from "../screens/Transfer/eNairaManagement/ENairaAccountVerification";
import ENairaHistory from "../screens/Transfer/eNairaManagement/ENairaHistory";
import ENairaHome from "../screens/Transfer/eNairaManagement/ENairaHome";
import SellENaira from "../screens/Transfer/eNairaManagement/SellENaira";
import TransactionConfirmation from "../screens/Transfer/eNairaManagement/TransactionConfirmation";
import { ENairaManagement } from "./types";

const Stack = createNativeStackNavigator<ENairaManagement>();

const ENairaManagementNavigation: () => JSX.Element = () => (
  <Stack.Navigator
    initialRouteName="ENairaAccountVerification"
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen
      component={ENairaAccountVerification}
      name="ENairaAccountVerification"
    />
    <Stack.Screen component={ENairaHome} name="ENairaHome" />
    <Stack.Screen component={SellENaira} name="SellENaira" />
    <Stack.Screen component={BuyENaira} name="BuyENaira" />
    <Stack.Screen
      component={TransactionConfirmation}
      name="TransactionConfirmation"
    />
    <Stack.Screen component={ENairaHistory} name="ENairaHistory" />
  </Stack.Navigator>
);

export { ENairaManagementNavigation };
