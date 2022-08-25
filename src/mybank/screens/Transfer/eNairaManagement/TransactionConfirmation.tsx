import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Keyboard, ScrollView, TouchableWithoutFeedback } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import { ENairaNavigationProps } from "@/mybank/navigation/types";
import PinComponent from "@/mybank/screens/Transfer/components/PinComponent";
import { PrimaryButton } from "@/shared/components/Buttons";
import { Box, LayoutComponent } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";

export default function TransactionConfirmation({
  navigation,
}: ENairaNavigationProps<"TransactionConfirmation">) {
  const { t } = useTranslation();
  const [pin, setPin] = useState("");
  // eslint-disable-next-line unused-imports/no-unused-vars
  const onPress = () => {
    navigation.navigate("ENairaHome");
  };
  return (
    <LayoutComponent label="TRANSACTION CONFIRMATION" labelMarginLeftsmallLarge>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Box
          backgroundColor="whiteColor"
          borderTopLeftRadius="md"
          borderTopRightRadius="md"
          flex={1}
          paddingHorizontal="md"
        >
          <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
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
            <Box
              backgroundColor="confirmCard"
              borderRadius="md"
              marginTop="xs"
              padding="sml"
            >
              <Box flexDirection="row" justifyContent="space-between">
                <Text>
                  {t("mybank.transfer.enaira.transactionconfirmation.account")}
                </Text>
                <Text variant="regular14">Account Name</Text>
              </Box>
              <Box
                flexDirection="row"
                justifyContent="space-between"
                marginVertical="sm"
              >
                <Text variant="regular14">
                  {t("mybank.transfer.enaira.transactionconfirmation.balance")}
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

            <Box flex={1} marginBottom="lg" paddingHorizontal="md">
              <PinComponent
                onChangeText={(value) => {
                  setPin(value);
                }}
                value={pin}
              />
              <Box minHeight={RFValue(70)} />
            </Box>
          </ScrollView>
          <PrimaryButton
            alignItems="center"
            backgroundColor="primaryColor"
            bottom={RFValue(5)}
            height={RFValue(50)}
            justifyContent="center"
            label={t(
              "mybank.transfer.enaira.transactionconfirmation.buttonlable",
            )}
            labelProps={{ color: "whiteColor" }}
            labelVariant="medium10"
            onPress={() => {}}
            position="absolute"
            width="100%"
          />
        </Box>
      </TouchableWithoutFeedback>
    </LayoutComponent>
  );
}
