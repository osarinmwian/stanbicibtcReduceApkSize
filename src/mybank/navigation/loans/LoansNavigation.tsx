import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { VFC } from "react";

import { LoansStackParameterList } from "@/mybank/navigation/types";
import EzCashLoansScreen from "@/mybank/screens/loans/EzCashLoansScreen";
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

const LoansNavigation: VFC = () => {
  const navigation = useNavigation();

  const onGoBack = () => navigation.goBack();

  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => renderBackButton({ onPress: onGoBack }),
        headerRight: renderLogo,
        headerTitleAlign: "center",
        headerTransparent: true,
      }}
    >
      <Stack.Screen
        component={LoansScreen}
        name="LoansScreen"
        options={{
          headerBackVisible: false,
          headerTitle: () => renderTitle("Loans"),
        }}
      />
      <Stack.Screen
        component={EzCashLoansScreen}
        name="EzCashLoansScreen"
        options={{
          headerBackVisible: false,
          headerTitle: () => renderTitle("EZ Cash Loans"),
        }}
      />
    </Stack.Navigator>
  );
};

export default LoansNavigation;
