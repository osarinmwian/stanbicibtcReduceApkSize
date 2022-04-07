import { StackScreenProps } from "@react-navigation/stack";

export type RootStackParameterList = {
  MyBank: undefined;
  StoryBook: undefined;
};

export type RootNavigationProps<T extends keyof RootStackParameterList> =
  StackScreenProps<RootStackParameterList, T>;
