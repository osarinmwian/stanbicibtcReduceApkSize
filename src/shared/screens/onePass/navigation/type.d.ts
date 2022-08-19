import { StackScreenProps } from "@react-navigation/stack";

import type { RootStackParameterList } from "@/shared/navigation/types";

export type OnePassRootStackParameterList = RootStackParameterList & {
  OnePassHome: undefined;
  OnePassLogin: undefined;
  OnePassVerification: undefined;
  OnePassID: undefined;
  OnePassPassword: { onepassUsername: string };
  OnePassSecretQuestion: undefined;
  OnePassOTP: undefined;
};

export type OnePassNavigationProps<
  T extends keyof OnePassRootStackParameterList,
> = StackScreenProps<OnePassRootStackParameterList, T>;
