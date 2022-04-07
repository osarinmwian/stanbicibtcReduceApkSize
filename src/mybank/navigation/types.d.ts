import { StackScreenProps } from "@react-navigation/stack";

import type { RootStackParameterList } from "@/shared/navigation/types";

export type MyBankRootStackParameterList = RootStackParameterList & {
  Home: undefined;
};

export type MyBankNavigationProps<
  T extends keyof MyBankRootStackParameterList,
> = StackScreenProps<MyBankRootStackParameterList, T>;
