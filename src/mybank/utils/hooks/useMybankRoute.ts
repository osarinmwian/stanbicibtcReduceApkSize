import { useRoute } from "@react-navigation/native";

import type { MyBankProps } from "@/mybank/navigation/";
import type { MyBankRoutes } from "@/mybank/navigation/types";

const useMyBankRoute = <Screen extends keyof MyBankRoutes>() =>
  useRoute<MyBankProps<Screen>["route"]>();

export default useMyBankRoute;
