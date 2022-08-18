import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import React, { RefObject } from "react";
import { useTranslation } from "react-i18next";
import { Image } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import { key } from "@/shared/assets/image";
import { PrimaryButton } from "@/shared/components/Buttons";
import { Box } from "@/shared/components/Layout";
import { Modal } from "@/shared/components/Modal";
import { Text } from "@/shared/components/Typography";

import { VERIFIEDLOGOSTYLE } from "../../styles/OnePassStyles";

interface ModuleProps {
  bottomSheetModalRef: RefObject<BottomSheetModal>;
}

export default function LoginNoticeModal(props: ModuleProps) {
  const { bottomSheetModalRef } = props;

  const { t } = useTranslation();

  const navigation = useNavigation();

  const goToOtpScreen = () => {
    navigation.navigate("OnePassOTP");
    bottomSheetModalRef.current?.close();
  };

  return (
    <Modal full ref={bottomSheetModalRef}>
      <Box alignItems="center" justifyContent="center" marginTop="md">
        <Image source={key} style={VERIFIEDLOGOSTYLE} />
      </Box>

      <Box
        alignItems="center"
        justifyContent="center"
        marginTop="md"
        paddingHorizontal="xl"
      >
        <Text color="textColor" textAlign="center" variant="regular14">
          {t("onepass.onepasslogin.loginInfo")}
        </Text>
      </Box>

      <Box
        bottom={RFValue(30)}
        paddingHorizontal="md"
        position="absolute"
        width="100%"
      >
        <PrimaryButton
          alignItems="center"
          backgroundColor="primaryColor30"
          justifyContent="center"
          label={t("onepass.onepasslogin.okay")}
          labelProps={{ color: "whiteColor" }}
          labelVariant="regular14"
          marginBottom="xs"
          marginTop="lg"
          onPress={() => goToOtpScreen()}
          paddingVertical="md"
        />
      </Box>
    </Modal>
  );
}
