/* eslint-disable unicorn/prevent-abbreviations */
/* eslint-disable @typescript-eslint/no-empty-interface */
import type { EaseRoutes } from "@/ease/navigation/types";
import type { InsuranceRoutes } from "@/insurance/navigation/types";
import type { MutualFundsRoutes } from "@/mutualfunds/navigation/types";
import type { MybankRoutes } from "@/mybank/navigation/types";
import type { PensionRoutes } from "@/pension/navigation/types";
import type { StocksRoutes } from "@/stocks/navigation/types";

export type StackParamsList = EaseRoutes &
  InsuranceRoutes &
  MutualFundsRoutes &
  MybankRoutes &
  PensionRoutes &
  StocksRoutes;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends StackParamsList {}
  }
}
