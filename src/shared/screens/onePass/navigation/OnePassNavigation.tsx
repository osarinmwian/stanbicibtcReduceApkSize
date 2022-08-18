import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { IconVector } from "@/shared/assets/icons/IconVector";
import { BaseButton } from "@/shared/components/Buttons";
import { Box } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";
import CreateOnePassIDScreen from "@/shared/screens/onePass/CreateOnePassIdScreen";
import CreateOnePassPasswordScreen from "@/shared/screens/onePass/CreateOnePassPasswordScreen";
import OnePassLanding from "@/shared/screens/onePass/OnePassLanding";
import OnePassLoginScreen from "@/shared/screens/onePass/OnePassLoginScreen";
import OnePassOTPScreen from "@/shared/screens/onePass/OnepassOtpScreen";
import OnePassVerfiedSuccessful from "@/shared/screens/onePass/OnePassVerifiedSuccessful";

import SecretQuestionsScreen from "../SecretQuestionScreen";
import type { OnePassRootStackParameterList } from "./type";

const Stack = createNativeStackNavigator<OnePassRootStackParameterList>();

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

const renderTitle = (title: string) =>
  title === "Why?" ? (
    <Box
      backgroundColor="primaryColor30"
      borderRadius="lg"
      paddingHorizontal="sm"
      paddingVertical="xs"
    >
      <Text color="whiteColor" fontVariant="p">
        {title}
      </Text>
    </Box>
  ) : (
    <Text color="whiteColor" fontVariant="h6">
      {title}
    </Text>
  );

function OnePassNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="OnePassHome"
      screenOptions={{
        headerTitleAlign: "center",
        headerTransparent: true,
      }}
    >
      <Stack.Screen
        component={OnePassLanding}
        name="OnePassHome"
        options={{ headerShown: false }}
      />

      <Stack.Screen
        component={OnePassLoginScreen}
        name="OnePassLogin"
        options={({ navigation }) => ({
          headerBackVisible: false,
          headerLeft: () => renderBackButton({ onPress: navigation.goBack }),
          headerRight: () => renderTitle("Why?"),
          headerTitle: () => renderTitle(""),
        })}
      />

      <Stack.Screen
        component={OnePassVerfiedSuccessful}
        name="OnePassVerification"
        options={{ headerShown: false }}
      />

      <Stack.Screen
        component={CreateOnePassIDScreen}
        name="OnePassID"
        options={{ headerShown: false }}
      />

      <Stack.Screen
        component={CreateOnePassPasswordScreen}
        name="OnePassPassword"
        options={({ navigation }) => ({
          headerBackVisible: false,
          headerLeft: () => renderBackButton({ onPress: navigation.goBack }),
          headerTitle: () => renderTitle(""),
        })}
      />

      <Stack.Screen
        component={SecretQuestionsScreen}
        name="OnePassSecretQuestion"
        options={({ navigation }) => ({
          headerBackVisible: false,
          headerLeft: () => renderBackButton({ onPress: navigation.goBack }),
          // headerRight: () => renderTitle("Why?"),
          headerTitle: () => renderTitle(""),
        })}
      />

      <Stack.Screen
        component={OnePassOTPScreen}
        name="OnePassOTP"
        options={({ navigation }) => ({
          headerBackVisible: false,
          headerLeft: () => renderBackButton({ onPress: navigation.goBack }),
          headerTitle: () => renderTitle("Enter OTP"),
        })}
      />
    </Stack.Navigator>
  );
}

export default OnePassNavigation;
