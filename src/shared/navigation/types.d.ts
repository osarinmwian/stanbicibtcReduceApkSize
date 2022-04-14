import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParameterList = {
  MyBank: undefined;
  StoryBook: undefined;
  LandingPage: undefined;
};

export type RootNavigationProps<Screen extends keyof RootStackParameterList> =
  NativeStackScreenProps<RootStackParameterList, Screen>;
