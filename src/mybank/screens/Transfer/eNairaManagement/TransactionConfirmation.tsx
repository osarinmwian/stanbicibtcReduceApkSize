import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import { loginBackground } from "@/mybank/assets/image";
import PinComponent from "@/mybank/screens/Transfer/components/PinComponent";
import { PrimaryButton } from "@/shared/components/Buttons";
import {
  Box,
  ImageBackground,
  SafeAreaView,
  ScrollBox,
} from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";

const TransactionConfirmation = () => {
  const { t } = useTranslation();
  const [pin, setPin] = useState("");

  return (
    <SafeAreaView flex={1}>
      <ImageBackground
        flex={1}
        paddingTop="sm"
        resizeMode="cover"
        source={loginBackground}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Box
            backgroundColor="whiteColor"
            borderTopLeftRadius="lg"
            borderTopRightRadius="lg"
            flex={1}
            marginTop="lg"
            paddingHorizontal="md"
          >
            <Box marginTop="lg">
              <Text variant="medium12">Confirm PIN</Text>
              <Text color="textTint" mb="md" mt="xs" variant="regular10">
                Enter your 4 digit pin to continue
              </Text>
            </Box>
            <ScrollBox bounces={false} contentContainerStyle={{ flex: 1 }}>
              <Box
                backgroundColor="confirmCard"
                borderRadius="md"
                paddingHorizontal="md"
                paddingVertical="lg"
              >
                <Box flexDirection="row" justifyContent="space-between">
                  <Text>Account</Text>
                  <Text>Account</Text>
                </Box>
                <Box
                  flexDirection="row"
                  justifyContent="space-between"
                  paddingVertical="xs"
                >
                  <Text>Account</Text>
                  <Text>Account</Text>
                </Box>
                <Box flexDirection="row" justifyContent="space-between">
                  <Text>Account</Text>
                  <Text>Account</Text>
                </Box>
              </Box>

              <Box flex={1} marginTop="sm" paddingHorizontal="md">
                <PinComponent
                  onChangeText={(value) => {
                    setPin(value);
                  }}
                  value={pin}
                />
              </Box>
              <PrimaryButton
                alignItems="center"
                backgroundColor="primaryColor"
                height={RFValue(50)}
                justifyContent="center"
                label={t("mybank.transfer.enaira.sellbuttonlabel")}
                labelProps={{ color: "whiteColor" }}
                labelVariant="medium10"
                marginBottom="md"
                onPress={() => {}}
              />
            </ScrollBox>
          </Box>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default TransactionConfirmation;
