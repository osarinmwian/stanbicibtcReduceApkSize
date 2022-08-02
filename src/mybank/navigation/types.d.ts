import { NavigatorScreenParams } from "@react-navigation/native";

import type { RootStackParameterList } from "@/shared/navigation/types";
import { StackScreenProps } from "@react-navigation/stack";

// 3SBanking
export type ThreeSBankingList = {
  Activate: undefined;
};

export type MyBankRootStackParameterList = RootStackParameterList & {
  BottomTabs: undefined;
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
  PfmNavigation: undefined;
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
};


export type LoansNavigationProps<T extends keyof LoansStackParameterList> =
  StackScreenProps<LoansStackParameterList, T>;

export type PfmStackParameterList = MyBankRootStackParameterList & {
  PfmMainScreen: undefined;
  financialManagementScreen: undefined;
  TransactionHistoryScreen: undefined;
  EditCategoryNameScreen: undefined;
};

export type PfmNavigationProps<T extends keyof PfmStackParameterList> = StackScreenProps<PfmStackParameterList, T>;