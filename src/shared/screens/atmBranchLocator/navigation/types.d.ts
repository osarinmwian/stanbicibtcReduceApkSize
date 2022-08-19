import { StackScreenProps } from "@react-navigation/stack";

import type { RootStackParameterList } from "@/shared/navigation/types";

export type BranchLocatorRootStackParameterList = RootStackParameterList & {
  BranchLocatorScreen: undefined;
  BranchDetails: { branchName: string; address: string };
};

export type BranchLocatorNavigationProps<
  T extends keyof BranchLocatorRootStackParameterList,
> = StackScreenProps<BranchLocatorRootStackParameterList, T>;
