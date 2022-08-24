import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Keyboard, ScrollView, TouchableWithoutFeedback } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import { BuydataNavigationProps } from "@/mybank/navigation/types";
import PinComponent from "@/mybank/screens/Transfer/components/PinComponent";
import { PrimaryButton } from "@/shared/components/Buttons";
import { Box, LayoutComponent } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";

export default function BuyDataConfirmation({
  navigation,
}: BuydataNavigationProps<"ConfirmBuyData">) {
  const { t } = useTranslation();
  const [pin, setPin] = useState("");
  return (
    <LayoutComponent
      label={t("mybank.payment.buydata.title")}
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
                {t("mybank.payment.buydata.confirmation.title")}
              </Text>
              <Text color="textTint" mb="md" mt="xs" variant="regular12">
                {t("mybank.payment.buydata.confirmation.titleparagraph")}
              </Text>
            </Box>
            <Box
              backgroundColor="confirmCard"
              borderRadius="md"
              marginTop="xs"
              padding="sml"
            >
              <Box flexDirection="row" justifyContent="space-between">
                <Text>{t("mybank.payment.buydata.confirmation.amount")}</Text>
                <Text variant="regular14">N00.000</Text>
              </Box>
              <Box
                flexDirection="row"
                justifyContent="space-between"
                marginVertical="sm"
              >
                <Text variant="regular14">
                  {t("mybank.payment.buydata.confirmation.phone")}
                </Text>
                <Text variant="regular14">08033765647</Text>
              </Box>
              <Box flexDirection="row" justifyContent="space-between">
                <Text variant="regular14">
                  {t("mybank.payment.buydata.confirmation.network")}
                </Text>
                <Text color="black" variant="regular14">
                  Glo
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
            label={t("mybank.payment.buydata.home.buttonlabel")}
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
