import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BranchLocator from "@/shared/screens/atmBranchLocator/BranchLocator";

import BranchDetailsScreen from "../BranchDetailsScreen";
import type { BranchLocatorRootStackParameterList } from "./types";

const Stack = createNativeStackNavigator<BranchLocatorRootStackParameterList>();

function QuickAirtimeNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="BranchLocator"
      screenOptions={{
        headerTitleAlign: "center",
        headerTransparent: true,
      }}
    >
      <Stack.Screen
        component={BranchLocator}
        name="BranchLocatorScreen"
        options={{ headerShown: false }}
      />

      <Stack.Screen
        component={BranchDetailsScreen}
        name="BranchDetails"
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default QuickAirtimeNavigation;
