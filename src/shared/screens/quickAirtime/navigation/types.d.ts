import { StackScreenProps } from "@react-navigation/stack";

import type { RootStackParameterList } from "@/shared/navigation/types";

export type QuickAirtimeRootStackParameterList = RootStackParameterList & {
  QuickAirtimeLanding: undefined;
  QuickAirtimeConfirmation: { amount: string; phoneNumber: string };
};

export type QuickAirtimeNavigationProps<
  T extends keyof QuickAirtimeRootStackParameterList,
> = StackScreenProps<QuickAirtimeRootStackParameterList, T>;
