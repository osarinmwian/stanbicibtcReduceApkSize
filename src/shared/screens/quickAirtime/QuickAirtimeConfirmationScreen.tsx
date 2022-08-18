import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { RFValue } from "react-native-responsive-fontsize";

import PinComponent from "@/mybank/screens/Transfer/components/PinComponent";
import { PrimaryButton } from "@/shared/components/Buttons";
import { Box, LayoutComponent, ScrollBox } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";

import { QuickAirtimeNavigationProps } from "./navigation/types";

export default function QuickAirtimeConfirmationScreen({
  route,
}: QuickAirtimeNavigationProps<"QuickAirtimeConfirmation">) {
  const [pin, setPin] = useState("");

  const { t } = useTranslation();

  const { amount, phoneNumber } = route.params;

  return (
    <LayoutComponent isBackArrow label="QUICK AIRTIME">
      <ScrollBox
        bounces={false}
        flex={1}
        paddingHorizontal="md"
        paddingVertical="md"
      >
        <Box>
          <Text color="textColor" variant="medium16">
            {t("quickAirtime.quickairtimeConfirmation.transactionConfirmation")}
          </Text>

          <Text color="textColor2" marginTop="xs">
            {t("quickAirtime.quickairtimeConfirmation.enterPin")}
          </Text>

          <Box
            backgroundColor="confirmCard"
            borderRadius="xs"
            mt="mmd"
            padding="md"
          >
            <Box flexDirection="row" justifyContent="space-between">
              <Text color="textColor">Amount</Text>
              <Text color="textColor">{amount}</Text>
            </Box>

            <Box flexDirection="row" justifyContent="space-between" mt="sm">
              <Text color="textColor">Phone number</Text>
              <Text color="textColor">{phoneNumber}</Text>
            </Box>

            <Box flexDirection="row" justifyContent="space-between" mt="sm">
              <Text color="textColor">Network</Text>
              <Text color="textColor">Glo</Text>
            </Box>
          </Box>
        </Box>

        <Box marginTop="md">
          <PinComponent
            onChangeText={(value) => {
              setPin(value);
              if (value.length === 4) {
                // goToLoginVerified();
              }
            }}
            value={pin}
          />
        </Box>
      </ScrollBox>

      <Box
        bottom={RFValue(0)}
        marginHorizontal="md"
        position="absolute"
        width="90%"
        // flex={1}
      >
        <PrimaryButton
          alignItems="center"
          backgroundColor="primaryColor"
          justifyContent="center"
          label={t("quickAirtime.quickAirtimeScreen.confirmPurchase")}
          labelProps={{ color: "whiteColor" }}
          labelVariant="regular14"
          marginBottom="xs"
          // onPress={() => onSubmit(values)}
          paddingVertical="md"
        />
      </Box>
    </LayoutComponent>
  );
}
