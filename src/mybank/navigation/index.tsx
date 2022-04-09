import { createStackNavigator } from "@react-navigation/stack";

import { ExampleScreen } from "@/mybank/screens";

import type { MyBankRootStackParameterList } from "./types";

const Stack = createStackNavigator<MyBankRootStackParameterList>();

function MyBankNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen component={ExampleScreen} name="Home" />
    </Stack.Navigator>
  );
}

export default MyBankNavigation;
