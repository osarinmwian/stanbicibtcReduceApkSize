import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParameterList = {
  IntroScreen: undefined;
  LandingPage: undefined;
  MyBank: undefined;
  StoryBook: undefined;
  LandingPage: undefined;
  OnePass: undefined;
  QuickAirtime: undefined;
  BranchLocator: undefined;
};

export type RootNavigationProps<Screen extends keyof RootStackParameterList> =
  NativeStackScreenProps<RootStackParameterList, Screen>;
