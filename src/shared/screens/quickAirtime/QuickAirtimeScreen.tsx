import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Image } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

import { airtel, glo, mtn, ninemobile } from "@/shared/assets/image";
import { PrimaryButton } from "@/shared/components/Buttons";
import { Box, LayoutComponent } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";

import { QuickAirtimeNavigationProps } from "./navigation/types";
import { AIRTIMEICONSTYLE } from "./styles/QuickAirtimeStyles";

export default function QuickAirtimeScreen({
  navigation,
}: QuickAirtimeNavigationProps<"QuickAirtime">) {
  const { t } = useTranslation();
  const [amount, setAamount] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const onSubmit = () => {
    navigation.navigate("QuickAirtimeConfirmation", {
      amount,
      phoneNumber,
    });
  };

  return (
    <LayoutComponent isBackArrow label="QUICK AIRTIME">
      <Text color="textColor" marginTop="xs" variant="medium14">
        {t("quickAirtime.quickAirtimeScreen.selectNetwork")}
      </Text>
      <Box flexDirection="row" justifyContent="space-between" marginTop="xs">
        <Box alignItems="center">
          <Image source={glo} style={AIRTIMEICONSTYLE} />
          <Text color="textColor" marginTop="xs">
            {t("quickAirtime.quickAirtimeScreen.glo")}
          </Text>
        </Box>

        <Box alignItems="center">
          <Image source={mtn} style={AIRTIMEICONSTYLE} />
          <Text color="textColor" marginTop="xs">
            {t("quickAirtime.quickAirtimeScreen.mtn")}
          </Text>
        </Box>

        <Box alignItems="center">
          <Image source={ninemobile} style={AIRTIMEICONSTYLE} />
          <Text color="textColor" marginTop="xs">
            {t("quickAirtime.quickAirtimeScreen.ninemobile")}
          </Text>
        </Box>

        <Box alignItems="center">
          <Image source={airtel} style={AIRTIMEICONSTYLE} />
          <Text color="textColor" marginTop="xs">
            {t("quickAirtime.quickAirtimeScreen.airtel")}
          </Text>
        </Box>
      </Box>

      <Box
        backgroundColor="cardSecondary"
        borderRadius="sm"
        mb="sm"
        mt="none"
        padding="sm"
      >
        <Text color="darkGrey" fontWeight="400">
          AMOUNT
        </Text>
        <TextInput
          onChangeText={(text) => setAamount(text)}
          placeholder="N20,000"
          value={amount}
        />
      </Box>

      <Box
        backgroundColor="cardSecondary"
        borderRadius="sm"
        mb="sm"
        mt="none"
        padding="sm"
      >
        <Text color="darkGrey" fontWeight="400">
          PHONE NUMBER
        </Text>
        <TextInput
          onChangeText={(text) => setPhoneNumber(text)}
          placeholder="08000000000"
          value={phoneNumber}
        />
      </Box>

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
          onPress={() => onSubmit()}
          paddingVertical="md"
        />
      </Box>
    </LayoutComponent>
  );
}
