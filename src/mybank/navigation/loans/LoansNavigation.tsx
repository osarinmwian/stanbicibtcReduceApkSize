import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { LoansStackParameterList } from "@/mybank/navigation/types";
import { LoansScreen } from "@/mybank/screens/loans";

const Stack = createNativeStackNavigator<LoansStackParameterList>();

function LoansNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen component={LoansScreen} name="Loans" />
    </Stack.Navigator>
  );
}

export { LoansNavigation };
