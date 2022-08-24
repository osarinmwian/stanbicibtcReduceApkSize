import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Keyboard, ScrollView, TouchableWithoutFeedback } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import { SchdulePaymentNavigationProps } from "@/mybank/navigation/types";
import PinComponent from "@/mybank/screens/Transfer/components/PinComponent";
import { PrimaryButton } from "@/shared/components/Buttons";
import { Box, LayoutComponent } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";

export default function ConfirmSchedulePayment({
  navigation,
}: SchdulePaymentNavigationProps<"ConfirmSchedulePayment">) {
  const { t } = useTranslation();
  const [pin, setPin] = useState("");
  return (
    <LayoutComponent
      label={t("mybank.payment.scheculedpayment.landing.title")}
      labelMarginLeftsmallLarge
    >
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
              <Text marginBottom="xs" variant="medium14">
                {t("mybank.payment.scheculedpayment.confirmation.title")}
              </Text>
              <Text color="textTint" mb="md" mt="xs" variant="regular12">
                {t(
                  "mybank.payment.scheculedpayment.confirmation.titleparagraph",
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
                  {t("mybank.payment.scheculedpayment.confirmation.amount")}
                </Text>
                <Text variant="regular14">Amount</Text>
              </Box>
              <Box
                flexDirection="row"
                justifyContent="space-between"
                marginVertical="sm"
              >
                <Text variant="regular14">
                  {t("mybank.payment.scheculedpayment.confirmation.date")}
                </Text>
                <Text variant="regular14">DD/MM/YYYY</Text>
              </Box>
              <Box flexDirection="row" justifyContent="space-between">
                <Text variant="regular14">
                  {t("mybank.payment.scheculedpayment.confirmation.type")}
                </Text>
                <Text color="black" variant="regular14">
                  Single
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
            bottom={RFValue(0)}
            height={RFValue(50)}
            justifyContent="center"
            label={t(
              "mybank.transfer.enaira.transactionconfirmation.buttonlable",
            )}
            labelProps={{ color: "whiteColor" }}
            labelVariant="medium10"
            marginTop="sm"
            onPress={() => {}}
            position="absolute"
            width="100%"
          />
        </Box>
      </TouchableWithoutFeedback>
    </LayoutComponent>
  );
}
