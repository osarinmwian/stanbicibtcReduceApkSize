import { StackScreenProps } from "@react-navigation/stack";

import type { RootStackParameterList } from "@/shared/navigation/types";

export type StoryBookRootStackParameterList = RootStackParameterList & {
  Home: undefined;
};

export type StoryBookNavigationProps<
  T extends keyof StoryBookRootStackParameterList,
> = StackScreenProps<StoryBookRootStackParameterList, T>;
