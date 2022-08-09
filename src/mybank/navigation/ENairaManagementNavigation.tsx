import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { IconVector } from "@/shared/assets/icons/IconVector";
import { BaseButton } from "@/shared/components/Buttons";
import { ImageBackground } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";

import { loginBackground } from "../assets/image";
import BuyENaira from "../screens/Transfer/eNairaManagement/BuyENaira";
import ENairaAccountVerification from "../screens/Transfer/eNairaManagement/ENairaAccountVerification";
import ENairaHistory from "../screens/Transfer/eNairaManagement/ENairaHistory";
import ENairaHome from "../screens/Transfer/eNairaManagement/ENairaHome";
import SellENaira from "../screens/Transfer/eNairaManagement/SellENaira";
import TransactionConfirmation from "../screens/Transfer/eNairaManagement/TransactionConfirmation";
import { ENairaManagement } from "./types";

const Stack = createNativeStackNavigator<ENairaManagement>();

type RenderBackButtonProps = {
  onPress?: () => void;
};

const renderBackButton = ({ onPress }: RenderBackButtonProps) => (
  <BaseButton
    onPress={onPress}
    paddingHorizontal="none"
    paddingRight="md"
    variant="transparent"
  >
    <IconVector name="chevron-back" size="sm" />
  </BaseButton>
);
const renderTitle = (title: string) => (
  <Text color="whiteColor" fontVariant="h1" textTransform="uppercase">
    {title}
  </Text>
);
const headerBackground = () => (
  <ImageBackground flex={1} source={loginBackground} />
);
const ENairaManagementNavigation: () => JSX.Element = () => (
  <Stack.Navigator
    initialRouteName="ENairaHome"
    screenOptions={{
      headerTitleAlign: "center",
      headerTransparent: true,
    }}
  >
    <Stack.Screen
      component={ENairaAccountVerification}
      name="ENairaAccountVerification"
      options={({ navigation }) => ({
        headerBackVisible: false,
        headerBackground: () => headerBackground(),
        headerLeft: () => renderBackButton({ onPress: navigation.goBack }),
        headerTitle: () => renderTitle("ENAIRA"),
      })}
    />
    <Stack.Screen
      component={ENairaHome}
      name="ENairaHome"
      options={({ navigation }) => ({
        headerBackVisible: false,
        headerBackground: () => headerBackground(),
        headerLeft: () => renderBackButton({ onPress: navigation.goBack }),
        headerTitle: () => renderTitle("ENAIRA"),
      })}
    />
    <Stack.Screen
      component={SellENaira}
      name="SellENaira"
      options={({ navigation }) => ({
        headerBackVisible: false,
        headerBackground: () => headerBackground(),
        headerLeft: () => renderBackButton({ onPress: navigation.goBack }),
        headerTitle: () => renderTitle("SELL ENAIRA"),
      })}
    />
    <Stack.Screen
      component={BuyENaira}
      name="BuyENaira"
      options={({ navigation }) => ({
        headerBackVisible: false,
        headerBackground: () => headerBackground(),
        headerLeft: () => renderBackButton({ onPress: navigation.goBack }),
        headerTitle: () => renderTitle("BUY ENAIRA"),
      })}
    />
    <Stack.Screen
      component={TransactionConfirmation}
      name="TransactionConfirmation"
      options={({ navigation }) => ({
        headerBackVisible: false,
        headerBackground: () => headerBackground(),
        headerLeft: () => renderBackButton({ onPress: navigation.goBack }),
        headerTitle: () => renderTitle("TRANSACTION CONFIRMATION"),
      })}
    />
    <Stack.Screen
      component={ENairaHistory}
      name="ENairaHistory"
      options={({ navigation }) => ({
        headerBackVisible: false,
        headerBackground: () => headerBackground(),
        headerLeft: () => renderBackButton({ onPress: navigation.goBack }),
        headerTitle: () => renderTitle("ENAIRA HISTORY"),
      })}
    />
  </Stack.Navigator>
);

export { ENairaManagementNavigation };
