import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { VFC } from "react";

import { LoansStackParameterList } from "@/mybank/navigation/types";
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
  <BaseButton onPress={onPress} paddingHorizontal="none" paddingRight="md">
    <IconVector name="chevron-back" size="sm" />
  </BaseButton>
);
const renderLogo = () => <Logo />;
const renderTitle = () => (
  <Text color="whiteColor" fontVariant="h4" textTransform="uppercase">
    Loans
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
          headerTitle: renderTitle,
        }}
      />
    </Stack.Navigator>
  );
};

export default LoansNavigation;
