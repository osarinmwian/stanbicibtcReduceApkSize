import { NavigatorScreenParams } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";

import type { RootStackParameterList } from "@/shared/navigation/types";

// 3SBanking
export type ThreeSBankingList = {
  Activate: undefined;
};

export type MyBankRootStackParameterList = RootStackParameterList & {
  BottomTabs: undefined;
  BillersForm: undefined;
  CorporateBillers: undefined;
  Home: undefined;
  Lifestyle: undefined;
  More: undefined;
  Payments: undefined;
  Transfer: undefined;
  FlightIndex: undefined;
  NoFlightFound: undefined;
  AvailableFlightsPage: undefined;
  LoginScreen: undefined;
  SixthScreen: undefined;
  SeventhScreen: undefined;
  EightScreen: undefined;
  ThreeSBanking: NavigatorScreenParams<ThreeSBankingList> | undefined;
  LoansNavigation: undefined;
  TransferLandingPage: undefined;
  BankTransfer: undefined;
  BankTransferEnterPin: undefined;
  BankTransferTransactionHistory: undefined;
  FXTransfer: undefined;
  FXTransferNewRequestFirstScreen: undefined;
  FXTransferNewRequestSecondScreen: undefined;
  FXTransferEnterPin: undefined;
  FXTransferTransactionHistory: undefined;
  ENaira: undefined;
  PayWithQr: undefined;
  PfmNavigation: undefined;
  FlightIndex: undefined;
  Beneficiary: undefined;
  AddNewBeneficiary: undefined;
  Notifications: undefined;
  PrepaidCards: undefined;
  PrepaidPinInput: undefined;
  BeneficiaryPinInput: undefined;
  LoansAndOffers: undefined;
  Hotels: undefined;
  HotelsList: undefined;
  HotelView: undefined;
  SearchHotelError: undefined;
  GuestDetail: undefined;
  HotelConfirmation: undefined;
  BillPayment: undefined;
  CardLessWithDrawal: undefined;
};

export type SchedulePaymentStack = {
  SchedulePaymentLandingPage: undefined;
  SchedulePayment: undefined;
  ConfirmSchedulePayment: undefined;
};
export type BuyDataStack = {
  BuyDataLandingPage: undefined;
  ConfirmBuyData: undefined;
};

// Tab routes
type MyTabRoutes = {
  HomeLandingPage: {
    name: string;
  };
  PaymentsLandingPage: undefined;
  TransferLandingPage: undefined;
  LifestyleLandingPage: undefined;
  MoreLandingPage: undefined;
};

export type MyBankNavigationProps<
  Screen extends keyof MyBankRootStackParameterList,
> = CompositeScreenProps<
  NativeStackScreenProps<MyBankRootStackParameterList, Screen>,
  BottomTabScreenProps<MyTabRoutes>
>;

export type LoansStackParameterList = MyBankRootStackParameterList & {
  LoansScreen: undefined;
  EzCashLoansScreen: undefined;
  LoanDetails: undefined;
  LoanRequestScreen: undefined;
};

export type LoansNavigationProps<T extends keyof LoansStackParameterList> =
  StackScreenProps<LoansStackParameterList, T>;

export type BuydataNavigationProps<T extends keyof BuyDataStack> =
  StackScreenProps<BuyDataStack, T>;

export type SchdulePaymentNavigationProps<
  T extends keyof SchedulePaymentStack,
> = StackScreenProps<SchedulePaymentStack, T>;

export type PfmStackParameterList = MyBankRootStackParameterList & {
  PfmMainScreen: undefined;
  financialManagementScreen: undefined;
  TransactionHistoryScreen: undefined;
  EditCategoryNameScreen: undefined;
};

export type PfmNavigationProps<T extends keyof PfmStackParameterList> =
  StackScreenProps<PfmStackParameterList, T>;

export type ENairaManagement = MyBankRootStackParameterList & {
  BuyENaira: undefined;
  SellENaira: undefined;
  ENairaHistory: undefined;
  TransactionConfirmation: undefined;
  ENairaHome: undefined;
  ENairaAccountVerification: undefined;
};

export type ENairaNavigationProps<T extends keyof ENairaManagement> =
  StackScreenProps<ENairaManagement, T>;
