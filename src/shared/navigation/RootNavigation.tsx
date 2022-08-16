import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MyBankNavigation from "@/mybank/navigation/index";
import { StoryBookNavigation } from "@/shared/modules/storybook/navigation";

import { LandingPage } from "../screens/landingPage";
import type { RootStackParameterList } from "./types";
import { IntroScreen } from "../screens/introScreens";

const Stack = createNativeStackNavigator<RootStackParameterList>();

function RootNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="IntroScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen component={IntroScreen} name="IntroScreen" />
      <Stack.Screen component={LandingPage} name="LandingPage" />
      <Stack.Screen component={MyBankNavigation} name="MyBank" />
      <Stack.Screen component={StoryBookNavigation} name="StoryBook" />
    </Stack.Navigator>
  );
}

export default RootNavigation;
