import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MyBankNavigation from "@/mybank/navigation/index";
import { StoryBookNavigation } from "@/shared/modules/storybook/navigation";

import { BranchLocatorNaviagtion } from "../screens/atmBranchLocator/navigation";
import { IntroScreen } from "../screens/introScreens";
import { LandingPage } from "../screens/landingPage";
import { OnePassNavigation } from "../screens/onePass/navigation";
import { QuickAirtimeNavigation } from "../screens/quickAirtime/navigation";
import type { RootStackParameterList } from "./types";

const Stack = createNativeStackNavigator<RootStackParameterList>();

function RootNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="IntroScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen component={IntroScreen} name="IntroScreen" />
      <Stack.Screen component={LandingPage} name="LandingPage" />
      <Stack.Screen component={OnePassNavigation} name="OnePass" />
      <Stack.Screen component={QuickAirtimeNavigation} name="QuickAirtime" />
      <Stack.Screen component={BranchLocatorNaviagtion} name="BranchLocator" />
      <Stack.Screen component={MyBankNavigation} name="MyBank" />
      <Stack.Screen component={StoryBookNavigation} name="StoryBook" />
    </Stack.Navigator>
  );
}

export default RootNavigation;
