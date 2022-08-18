import React from "react";
import { useTranslation } from "react-i18next";
import { Image } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import { verifiedIcon } from "@/shared/assets/image";
import { PrimaryButton } from "@/shared/components/Buttons";
import { Box } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";
import { OnePassNavigationProps } from "@/shared/screens/onePass/navigation/type";
import { VERIFIEDLOGOSTYLE } from "@/shared/screens/onePass/styles/OnePassStyles";

export default function OnePassVerfiedSuccessful({
  navigation,
}: OnePassNavigationProps<"OnePass">) {
  const { t } = useTranslation();

  return (
    <Box
      // alignItems="center"
      flex={1}
      justifyContent="center"
    >
      <Box alignItems="center" justifyContent="center" marginHorizontal="xl">
        <Image source={verifiedIcon} style={VERIFIEDLOGOSTYLE} />

        <Text
          color="textColor"
          marginTop="sm"
          textAlign="center"
          variant="regular14"
        >
          {t("onepass.onepassVerified.verificationSuccessful")}
        </Text>
      </Box>

      <Box
        bottom={RFValue(56)}
        marginHorizontal="md"
        position="absolute"
        width="90%"
      >
        <PrimaryButton
          alignItems="center"
          backgroundColor="primaryColor30"
          justifyContent="center"
          label={t("onepass.onepassVerified.createId")}
          labelProps={{ color: "whiteColor" }}
          labelVariant="regular14"
          marginBottom="xs"
          marginTop="lg"
          onPress={() => navigation.navigate("OnePassID")}
          paddingVertical="md"
        />
      </Box>
    </Box>
  );
}
