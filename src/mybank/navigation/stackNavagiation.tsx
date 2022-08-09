import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { EightScreen, SixthScreen } from "@/mybank/screens/";
import { BillersForm, CorporateBillers } from "@/mybank/screens/Payment";
import {
  BankTransfer,
  BankTransferEnterPin,
  BankTransferTransactionHistory,
  FXTransfer,
  FXTransferEnterPin,
  FXTransferNewRequestFirstScreen,
  FXTransferNewRequestSecondScreen,
  FXTransferTransactionHistory,
  TransferLandingPage,
} from "@/mybank/screens/Transfer";

import BottomTabs from "./bottomNavigation";
import { ENairaManagementNavigation } from "./ENairaManagementNavigation";
import { MyBankRootStackParameterList } from "./types";

const Stack = createNativeStackNavigator<MyBankRootStackParameterList>();

function Home() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}
    >
      <Stack.Screen component={BottomTabs} name="BottomTabs" />
      <Stack.Screen component={BankTransfer} name="BankTransfer" />
      <Stack.Screen component={CorporateBillers} name="CorporateBillers" />
      <Stack.Screen component={BillersForm} name="BillersForm" />
      <Stack.Screen
        component={BankTransferEnterPin}
        name="BankTransferEnterPin"
      />
      <Stack.Screen
        component={BankTransferTransactionHistory}
        name="BankTransferTransactionHistory"
      />
      <Stack.Screen component={FXTransfer} name="FXTransfer" />
      <Stack.Screen
        component={FXTransferNewRequestFirstScreen}
        name="FXTransferNewRequestFirstScreen"
      />
      <Stack.Screen
        component={FXTransferNewRequestSecondScreen}
        name="FXTransferNewRequestSecondScreen"
      />
      <Stack.Screen component={FXTransferEnterPin} name="FXTransferEnterPin" />
      <Stack.Screen
        component={FXTransferTransactionHistory}
        name="FXTransferTransactionHistory"
      />
      <Stack.Screen component={SixthScreen} name="SixthScreen" />
      <Stack.Screen component={ENairaManagementNavigation} name="ENaira" />
    </Stack.Navigator>
  );
}

function Transfer() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}
    >
      <Stack.Screen component={TransferLandingPage} name="Transfer" />
    </Stack.Navigator>
  );
}

function Payments() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}
    >
      <Stack.Screen component={EightScreen} name="EightScreen" />
    </Stack.Navigator>
  );
}

function Lifestyle() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}
    >
      {/* <Stack.Screen component={ExampleScreen} name="ExampleScreen" /> */}
    </Stack.Navigator>
  );
}

function More() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}
    >
      {/* <Stack.Screen component={SecondScreen} name="SecondScreen" /> */}
    </Stack.Navigator>
  );
}

export { Home, Lifestyle, More, Payments, Transfer };
