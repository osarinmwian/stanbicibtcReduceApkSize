import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { VFC } from "react";

import { PfmStackParameterList } from "@/mybank/navigation/types";
import { IconVector } from "@/shared/assets/icons/IconVector";
import { BaseButton } from "@/shared/components/Buttons";
import { Logo } from "@/shared/components/Logo";
import { Text } from "@/shared/components/Typography";
import PfmMainScreen from "@/mybank/screens/pfm/PfmMainScreen";
import { FinancialManagementScreen } from "@/mybank/screens/pfm/FinancialManagementScreen";
import { TransactionHistoryScreen } from "@/mybank/screens/pfm/TransactionHistory";
import { EditCategoryNameScreen } from "@/mybank/screens/pfm/EditCategoryNameScreen";

const Stack = createNativeStackNavigator<PfmStackParameterList>();

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

const PfmNavigation: VFC = () => (
    <Stack.Navigator

        screenOptions={{
            headerTitleAlign: "center",
            headerTransparent: true,
        }}
    >
        <Stack.Screen
            component={PfmMainScreen}
            name="PfmMainScreen"
            options={{
                headerBackVisible: false,
                // headerLeft: () => renderBackButton({ onPress: navigation.goBack }),
                headerRight: renderLogo,
                title: "",
                headerLeft: () => renderTitle("PFM"),
            }}
        />
        <Stack.Screen
            component={FinancialManagementScreen}
            name="financialManagementScreen"
            options={({ navigation }) => ({
                headerBackVisible: false,
                headerLeft: () => renderBackButton({ onPress: navigation.goBack }),
                headerTitle: () => renderTitle("Financial Management"),
            })}
        />
        <Stack.Screen
            component={EditCategoryNameScreen}
            name="EditCategoryNameScreen"
            options={({ navigation }) => ({
                headerBackVisible: false,
                headerLeft: () => renderBackButton({ onPress: navigation.goBack }),
                headerTitle: () => renderTitle("Financial Management"),
            })}
        />
        <Stack.Screen
            component={TransactionHistoryScreen}
            name="TransactionHistoryScreen"
            options={({ navigation }) => ({
                headerBackVisible: false,
                headerLeft: () => renderBackButton({ onPress: navigation.goBack }),
                headerTitle: () => renderTitle("Transaction History"),
            })}
        />
    </Stack.Navigator>
);

export default PfmNavigation;
