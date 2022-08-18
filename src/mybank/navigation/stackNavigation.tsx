import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { EightScreen, SixthScreen } from "@/mybank/screens/";
import {
  BillersForm,
  CorporateBillers,
  PayWithQr,
} from "@/mybank/screens/Payment";
// import PayWithQr from "@/mybank/screens/payment/PayWithQr";
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
import { IconVector } from "@/shared/assets/icons/IconVector";
import { BaseButton } from "@/shared/components/Buttons";
import { Text } from "@/shared/components/Typography";

import { AddNewBeneficiary, Beneficiary } from "../screens/beneficiaries";
import BeneficiaryPinInput from "../screens/beneficiaries/BeneficiaryPinInput";
import LoansAndOffers from "../screens/Extras/LoansAndOffers";
import {
  AvailableFlightsPage,
  FlightIndex,
  NoFlightFound,
} from "../screens/lifestyle";
import Notifications from "../screens/notifications/Notifications";
import PrepaidCards from "../screens/PrepaidCards/PrepaidCards";
import PrepaidPinInput from "../screens/PrepaidCards/PrepaidPinInput";
import BottomTabs from "./bottomNavigation";
import { ENairaManagementNavigation } from "./ENairaManagementNavigation";
import { MyBankRootStackParameterList } from "./types";

const Stack = createNativeStackNavigator<MyBankRootStackParameterList>();

type RenderBackButtonProps = {
  onPress?: () => void;
};

const renderBackButton = ({ onPress }: RenderBackButtonProps) => (
  <BaseButton
    onPress={onPress}
    paddingHorizontal="none"
    paddingRight="md"
    variant="transparent"
  >
    <IconVector name="chevron-back" size="sm" />
  </BaseButton>
);

const renderTitle = (title: string) => (
  <Text color="whiteColor" fontVariant="h6">
    {title}
  </Text>
);

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
      <Stack.Screen
        component={BeneficiaryPinInput}
        name="BeneficiaryPinInput"
      />
      <Stack.Screen component={Notifications} name="Notifications" />
      <Stack.Screen component={PrepaidCards} name="PrepaidCards" />
      <Stack.Screen component={PrepaidPinInput} name="PrepaidPinInput" />
      <Stack.Screen component={LoansAndOffers} name="LoansAndOffers" />
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
        // header: () => null,
        headerTitleAlign: "center",
        headerTransparent: true,
      }}
    >
      <Stack.Screen
        component={PayWithQr}
        name="PayWithQr"
        options={({ navigation }) => ({
          headerBackVisible: false,
          headerLeft: () => renderBackButton({ onPress: navigation.goBack }),
          headerTitle: () => renderTitle("PAY WITH QR"),
        })}
      />
      <Stack.Screen
        component={EightScreen}
        name="EightScreen"
        options={{ headerShown: false }}
      />
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
