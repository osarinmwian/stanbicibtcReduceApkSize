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

import {
  AvailableFlightsPage,
  FlightIndex,
  NoFlightFound,
} from "../screens/lifestyle";
import BottomTabs from "./bottomNavigation";
import { ENairaManagementNavigation } from "./ENairaManagementNavigation";
import { MyBankRootStackParameterList } from "./types";
import Notifications from "../screens/notifications/Notifications";
import { AddNewBeneficiary, Beneficiary } from "../screens/beneficiaries";
import PrepaidCards from "../screens/PrepaidCards/PrepaidCards";
import PrepaidPinInput from "../screens/PrepaidCards/PrepaidPinInput";
import BeneficiaryPinInput from "../screens/beneficiaries/BeneficiaryPinInput";
import LoansAndOffers from "../screens/Extras/LoansAndOffers";


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
      <Stack.Screen component={Beneficiary} name="Beneficiary" />
      <Stack.Screen component={AddNewBeneficiary} name="AddNewBeneficiary" />
      <Stack.Screen component={BeneficiaryPinInput} name="BeneficiaryPinInput"/>
      <Stack.Screen component={Notifications} name="Notifications"/>
      <Stack.Screen component={PrepaidCards} name={"PrepaidCards"} />
      <Stack.Screen component={PrepaidPinInput} name="PrepaidPinInput"/>
      <Stack.Screen component={LoansAndOffers} name="LoansAndOffers"/>
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
      <Stack.Screen component={FlightIndex} name="FlightIndex" />
      <Stack.Screen component={NoFlightFound} name="NoFlightFound" />
      <Stack.Screen
        component={AvailableFlightsPage}
        name="AvailableFlightsPage"
      />
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
