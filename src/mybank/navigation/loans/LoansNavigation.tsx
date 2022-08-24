import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { VFC } from "react";

import { LoansStackParameterList } from "@/mybank/navigation/types";
import EzCashLoansScreen from "@/mybank/screens/loans/EzCashLoansScreen";
import LoanDetails from "@/mybank/screens/loans/LoanDetails";
import LoansRequestScreen from "@/mybank/screens/loans/LoansRequestScreen";
import LoansScreen from "@/mybank/screens/loans/LoansScreen";
import { IconVector } from "@/shared/assets/icons/IconVector";
import { BaseButton } from "@/shared/components/Buttons";
import { Logo } from "@/shared/components/Logo";
import { Text } from "@/shared/components/Typography";

const Stack = createNativeStackNavigator<LoansStackParameterList>();

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
const renderLogo = () => <Logo />;
const renderTitle = (title: string) => (
  <Text color="whiteColor" fontVariant="h6" textTransform="uppercase">
    {title}
  </Text>
);

const LoansNavigation: VFC = () => (
  <Stack.Navigator
    screenOptions={{
      headerTitleAlign: "center",
      headerTransparent: true,
    }}
  >
    <Stack.Screen
      component={LoansScreen}
      name="LoansScreen"
      options={({ navigation }) => ({
        headerBackVisible: false,
        headerLeft: () => renderBackButton({ onPress: navigation.goBack }),
        headerRight: renderLogo,
        headerTitle: () => renderTitle("Loans"),
      })}
    />
    <Stack.Screen
      component={EzCashLoansScreen}
      name="EzCashLoansScreen"
      options={({ navigation }) => ({
        headerBackVisible: false,
        headerLeft: () => renderBackButton({ onPress: navigation.goBack }),
        headerTitle: () => renderTitle("EZ Cash Loans"),
      })}
    />
    <Stack.Screen
      component={LoanDetails}
      name="LoanDetails"
      options={({ navigation }) => ({
        headerBackVisible: false,
        headerLeft: () => renderBackButton({ onPress: navigation.goBack }),
        headerTitle: () => null,
      })}
    />

    <Stack.Screen
      component={LoansRequestScreen}
      name="LoanRequestScreen"
      options={({ navigation }) => ({
        headerBackVisible: false,
        headerLeft: () => renderBackButton({ onPress: navigation.goBack }),
        headerTitle: () => renderTitle("EZ Cash Loan"),
      })}
    />
  </Stack.Navigator>
);

export default LoansNavigation;
