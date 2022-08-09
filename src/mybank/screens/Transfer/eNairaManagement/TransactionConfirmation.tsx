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
              <Text variant="bold14">
                {t("mybank.transfer.enaira.transactionconfirmation.title")}
              </Text>
              <Text color="textTint" mb="md" mt="xs" variant="regular12">
                {t(
                  "mybank.transfer.enaira.transactionconfirmation.titleparagraph",
                )}
              </Text>
            </Box>
            <ScrollBox bounces={false} contentContainerStyle={{ flex: 1 }}>
              <Box backgroundColor="confirmCard" borderRadius="md" padding="md">
                <Box flexDirection="row" justifyContent="space-between">
                  <Text>
                    {t(
                      "mybank.transfer.enaira.transactionconfirmation.account",
                    )}
                  </Text>
                  <Text variant="regular14">Account Name</Text>
                </Box>
                <Box
                  flexDirection="row"
                  justifyContent="space-between"
                  marginVertical="sm"
                >
                  <Text variant="regular14">
                    {t(
                      "mybank.transfer.enaira.transactionconfirmation.balance",
                    )}
                  </Text>
                  <Text variant="regular14">Account balance</Text>
                </Box>
                <Box flexDirection="row" justifyContent="space-between">
                  <Text variant="regular14">
                    {t("mybank.transfer.enaira.transactionconfirmation.amount")}
                  </Text>
                  <Text color="black" variant="bold14">
                    N2000
                  </Text>
                </Box>
              </Box>

              <Box flex={1} paddingHorizontal="md">
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
                label={t(
                  "mybank.transfer.enaira.transactionconfirmation.buttonlable",
                )}
                labelProps={{ color: "whiteColor" }}
                labelVariant="medium10"
                marginBottom="lg"
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
