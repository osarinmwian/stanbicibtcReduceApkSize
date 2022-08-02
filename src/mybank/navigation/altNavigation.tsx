import { createNavigationContainerRef } from "@react-navigation/native";

import type { MyBankRootStackParameterList } from "./types";

export const navigationRef = createNavigationContainerRef();

type RouteName = keyof MyBankRootStackParameterList;

export function navigate(
  name: RouteName,
  params: MyBankRootStackParameterList,
) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}
