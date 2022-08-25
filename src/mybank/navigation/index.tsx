import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "@/mybank/screens/login/login";

import LoansNavigation from "./loans/LoansNavigation";
import PfmNavigation from "./pfm/PfmNavigation";
import { Home, Lifestyle, More, Payments, Transfer } from "./stackNavigation";
import { ThreeSBanking } from "./ThreeSBanking";
import { MyBankRootStackParameterList } from "./types";

const Stack = createNativeStackNavigator<MyBankRootStackParameterList>();

function MyBankNavigation() {
  const isLoggedIn = true;
  // const isLoggedIn = 65;
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}
    >
      {isLoggedIn ? (
        <Stack.Group>
          <Stack.Screen component={LoginScreen} name="LoginScreen" />
          <Stack.Screen component={Home} name="Home" />
          <Stack.Screen component={ThreeSBanking} name="ThreeSBanking" />
          <Stack.Screen component={Lifestyle} name="Lifestyle" />
          <Stack.Screen component={More} name="More" />
          <Stack.Screen component={Payments} name="Payments" />
          <Stack.Screen component={Transfer} name="Transfer" />
          <Stack.Screen component={LoansNavigation} name="LoansNavigation" />
          <Stack.Screen component={PfmNavigation} name="PfmNavigation" />
        </Stack.Group>
      ) : (
        <Stack.Group screenOptions={{ headerShown: false }}>
          <Stack.Screen component={LoginScreen} name="LoginScreen" />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
}

export default MyBankNavigation;
