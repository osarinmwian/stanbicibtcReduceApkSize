import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { EightScreen, SixthScreen } from "@/mybank/screens/";

import { FlightIndex } from "../screens/lifestyle";
import BottomTabs from "./bottomNavigation";
import { MyBankRootStackParameterList } from "./types";

const Stack = createNativeStackNavigator<MyBankRootStackParameterList>();

function Home() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}
    >
      <Stack.Screen component={BottomTabs} name="BottomTabs" />
      <Stack.Screen component={SixthScreen} name="SixthScreen" />
    </Stack.Navigator>
  );
}

function Transfer() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}
    >
      <Stack.Screen component={EightScreen} name="EightScreen" />
    </Stack.Navigator>
  );
}

function Payments() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}
    >
      <Stack.Screen component={EightScreen} name="EightScreen" />
    </Stack.Navigator>
  );
}

function Lifestyle() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}
    >
      <Stack.Screen component={FlightIndex} name="FlightIndex" />
    </Stack.Navigator>
  );
}

function More() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}
    >
      {/* <Stack.Screen component={SecondScreen} name="SecondScreen" /> */}
    </Stack.Navigator>
  );
}

export { Home, Lifestyle, More, Payments, Transfer };
