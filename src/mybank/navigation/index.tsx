import {
  createStackNavigator,
  StackScreenProps,
} from "@react-navigation/stack";

import { ExampleScreen, SecondScreen } from "@/mybank/screens/";

import type { MybankRoutes } from "./types";

export type MyBankProps<Screen extends keyof MybankRoutes> = StackScreenProps<
  MybankRoutes,
  Screen
>;

const Stack = createStackNavigator<MybankRoutes>();

function MyBank() {
  return (
    <Stack.Navigator>
      <Stack.Screen component={ExampleScreen} name="ExampleScreen" />
      <Stack.Screen component={SecondScreen} name="SecondScreen" />
    </Stack.Navigator>
  );
}

export default MyBank;
