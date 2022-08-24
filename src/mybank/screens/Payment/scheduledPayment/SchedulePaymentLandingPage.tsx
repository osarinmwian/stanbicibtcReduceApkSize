import React from "react";
import { useTranslation } from "react-i18next";
import { RFValue } from "react-native-responsive-fontsize";

import { SchdulePaymentNavigationProps } from "@/mybank/navigation/types";
import { Icon } from "@/shared/assets/icons";
import { PrimaryButton } from "@/shared/components/Buttons";
import { Box, LayoutComponent } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";

export default function SchedulePaymentLandingPage({
  navigation,
}: SchdulePaymentNavigationProps<"SchedulePaymentLandingPage">) {
  const { t } = useTranslation();
  const handlePress = () => {
    navigation.navigate("SchedulePayment");
  };

  return (
    <LayoutComponent
      label={t("mybank.payment.scheculedpayment.landing.title")}
      labelMarginLeftsmallLarge
    >
      <Box
        backgroundColor="whiteColor"
        borderTopLeftRadius="md"
        borderTopRightRadius="md"
        flex={1}
        justifyContent="center"
        paddingHorizontal="md"
      >
        <Box
          alignItems="center"
          alignSelf="center"
          backgroundColor="cardSecondary"
          borderRadius="xl"
          height={RFValue(70)}
          justifyContent="center"
          marginBottom="sm"
          width={RFValue(70)}
        >
          <Icon color="lightGrey" name="scheduleicon" />
        </Box>
        <Text
          marginBottom="sm"
          marginTop="md"
          textAlign="center"
          variant="medium14"
        >
          {t("mybank.payment.scheculedpayment.landing.record")}
        </Text>
        <Text color="textTint" textAlign="center" variant="regular14">
          {t("mybank.payment.scheculedpayment.landing.welcomeparagraph")}
        </Text>
        <PrimaryButton
          alignItems="center"
          backgroundColor="primaryColor"
          borderRadius="sm"
          height={RFValue(50)}
          justifyContent="center"
          label={t("mybank.payment.scheculedpayment.landing.buttontitle")}
          labelProps={{ color: "whiteColor" }}
          labelVariant="medium12"
          marginBottom="xs"
          marginHorizontal="xl"
          marginTop="xl"
          onPress={handlePress}
          paddingVertical="md"
        />
      </Box>
    </LayoutComponent>
  );
}
