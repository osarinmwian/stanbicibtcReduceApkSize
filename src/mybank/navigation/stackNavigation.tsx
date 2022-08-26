import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { EightScreen, SixthScreen } from "@/mybank/screens/";
import {
  GuestDetail,
  HotelConfirmation,
  SearchHotelError,
} from "@/mybank/screens/lifestyle";
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
  Hotels,
  HotelsList,
  HotelView,
  NoFlightFound,
} from "../screens/lifestyle";
import Notifications from "../screens/notifications/Notifications";
import BillPayment from "../screens/Payment/BillPayment";
import CardLessWithDrawal from "../screens/Payment/CardLessWithDrawal";
import PrepaidCards from "../screens/PrepaidCards/PrepaidCards";
import PrepaidPinInput from "../screens/PrepaidCards/PrepaidPinInput";
import BottomTabs from "./bottomNavigation";
import BuyDataNavigation from "./BuyDataNavigation";
import { ENairaManagementNavigation } from "./ENairaManagementNavigation";
import { SchedulePaymentNavigation } from "./SchedulePaymentNavigation";
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
      <Stack.Screen
        component={SchedulePaymentNavigation}
        name="SchedulePaymentStack"
      />
      <Stack.Screen component={BuyDataNavigation} name="BuyDataStack" />
      <Stack.Screen component={PayWithQr} name="PayWithQr" />
      <Stack.Screen component={BillPayment} name="BillPayment" />
      <Stack.Screen component={CardLessWithDrawal} name="CardLessWithDrawal" />
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
        component={BillPayment}
        name="BillPayment"
        options={({ navigation }) => ({
          headerBackVisible: false,
          headerLeft: () => renderBackButton({ onPress: navigation.goBack }),
          headerTitle: () => renderTitle("Bill Payment"),
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
      <Stack.Screen component={Hotels} name="Hotels" />
      <Stack.Screen component={HotelsList} name="HotelsList" />
      <Stack.Screen component={HotelView} name="HotelView" />
      <Stack.Screen component={SearchHotelError} name="SearchHotelError" />
      <Stack.Screen component={HotelConfirmation} name="HotelConfirmation" />
      <Stack.Screen component={GuestDetail} name="GuestDetail" />
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
