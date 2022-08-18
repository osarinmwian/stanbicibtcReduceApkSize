import { createNativeStackNavigator } from "@react-navigation/native-stack";

import QuickAirtimeScreen from "@/shared/screens/quickAirtime/QuickAirtimeScreen";

import QuickAirtimeConfirmationScreen from "../QuickAirtimeConfirmationScreen";
import type { QuickAirtimeRootStackParameterList } from "./types";

const Stack = createNativeStackNavigator<QuickAirtimeRootStackParameterList>();

function QuickAirtimeNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="QuickAirtimeLanding"
      screenOptions={{
        headerTitleAlign: "center",
        headerTransparent: true,
      }}
    >
      <Stack.Screen
        component={QuickAirtimeScreen}
        name="QuickAirtimeLanding"
        options={{ headerShown: false }}
      />

      <Stack.Screen
        component={QuickAirtimeConfirmationScreen}
        name="QuickAirtimeConfirmation"
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default QuickAirtimeNavigation;
