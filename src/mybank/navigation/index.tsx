import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "@/mybank/screens/login/login";

import { Home, Lifestyle, More, Payments, Transfer } from "./stackNavagiation";
import { MyBankRootStackParameterList } from "./types";

const Stack = createNativeStackNavigator<MyBankRootStackParameterList>();

function MyBankNavigation() {
  // const isLoggedIn = undefined;
  // const isLoggedIn = 65;
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}
    >
      <Stack.Screen component={LoginScreen} name="LoginScreen" />
      <Stack.Screen component={Home} name="Home" />
      <Stack.Screen component={Lifestyle} name="Lifestyle" />
      <Stack.Screen component={More} name="More" />
      <Stack.Screen component={Payments} name="Payments" />
      <Stack.Screen component={Transfer} name="Transfer" />
      {/* {isLoggedIn ? (
        <Stack.Group>
          <Stack.Screen component={Home} name="Home" />
          <Stack.Screen component={Lifestyle} name="Lifestyle" />
          <Stack.Screen component={More} name="More" />
          <Stack.Screen component={Payments} name="Payments" />
          <Stack.Screen component={Transfer} name="Transfer" />
        </Stack.Group>
      ) : (
        <Stack.Group screenOptions={{ headerShown: false }}>
          <Stack.Screen component={LoginScreen} name="LoginScreen" />
        </Stack.Group>
      )} */}
    </Stack.Navigator>
  );
}

export default MyBankNavigation;
