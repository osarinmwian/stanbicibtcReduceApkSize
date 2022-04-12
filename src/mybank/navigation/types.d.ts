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
  ExampleScreen: {
    name: string;
  };
  SecondScreen: undefined;
  ThirdScreen: undefined;
  FourthScreen: undefined;
  FifthScreen: undefined;
};

export type MyBankNavigationProps<
  Screen extends keyof MyBankRootStackParameterList,
> = CompositeScreenProps<
  NativeStackScreenProps<MyBankRootStackParameterList, Screen>,
  BottomTabScreenProps<MyTabRoutes>
>;

// export type MyBankNavigationProps<
//   T extends keyof MyBankRootStackParameterList,
// > = StackScreenProps<MyBankRootStackParameterList, T>;
