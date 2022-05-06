import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Activate } from "@/mybank/screens/ThreeS";

import type { ThreeSBankingList } from "./types";

const Stack = createNativeStackNavigator<ThreeSBankingList>();

function ThreeSBanking() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen component={Activate} name="Activate" />
    </Stack.Navigator>
  );
}

export { ThreeSBanking };
