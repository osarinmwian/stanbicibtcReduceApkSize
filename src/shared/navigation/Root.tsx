import { createStackNavigator } from "@react-navigation/stack";

import MyBankNavigation from "@/mybank/navigation";
import { StoryBookNavigation } from "@/shared/modules/storybook/navigation";

import type { RootStackParameterList } from "./types";

const Stack = createStackNavigator<RootStackParameterList>();

function RootNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="StoryBook"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen component={MyBankNavigation} name="MyBank" />
      <Stack.Screen component={StoryBookNavigation} name="StoryBook" />
    </Stack.Navigator>
  );
}

export default RootNavigation;
