import type { RootStackParameterList } from "@/shared/navigation/types";

export type MyBankRootStackParameterList = RootStackParameterList & {
  BottomTabs: undefined;
  Home: undefined;
  Lifestyle: undefined;
  More: undefined;
  Payments: undefined;
  Transfer: undefined;
  LoginScreen: undefined;
  SixthScreen: undefined;
  SeventhScreen: undefined;
  EightScreen: undefined;
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
  Loans: undefined;
};

export type LoansNavigationProps<T extends keyof LoansStackParameterList> =
  StackScreenProps<LoansStackParameterList, T>;
