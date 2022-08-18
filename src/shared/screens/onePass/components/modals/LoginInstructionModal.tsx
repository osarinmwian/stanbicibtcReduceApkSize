/*

*/
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import React, { RefObject } from "react";
import { useTranslation } from "react-i18next";
import { GestureResponderEvent, Image } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import { verifiedIcon } from "@/shared/assets/image";
import { PrimaryButton } from "@/shared/components/Buttons";
import { Box } from "@/shared/components/Layout";
import { Modal } from "@/shared/components/Modal";
import { Text } from "@/shared/components/Typography";
import { VERIFIEDLOGOSTYLE } from "@/shared/screens/onePass/styles/OnePassStyles";

interface ModuleProps {
  bottomSheetModalRef: RefObject<BottomSheetModal>;
  handleCloseModal: (event: GestureResponderEvent) => void;
}

export default function LoginInstructionModal(props: ModuleProps) {
  const { bottomSheetModalRef, handleCloseModal } = props;

  const { t } = useTranslation();

  return (
    <Modal full ref={bottomSheetModalRef} stackBehavior="replace">
      <Box alignItems="center" justifyContent="center" marginTop="md">
        <Image source={verifiedIcon} style={VERIFIEDLOGOSTYLE} />
      </Box>
      <Box
        alignItems="center"
        justifyContent="center"
        marginTop="md"
        paddingHorizontal="lg"
      >
        <Text textAlign="center" variant="regular14">
          {t("onepass.onePassHome.onePassDescription")}
        </Text>
      </Box>
      <Box
        alignItems="center"
        bottom={RFValue(40)}
        justifyContent="flex-end"
        position="absolute"
        width="100%"
      >
        <PrimaryButton
          alignItems="center"
          backgroundColor="wealthColor"
          height={RFValue(51)}
          justifyContent="center"
          label={t("onepass.onePassHome.understand")}
          labelProps={{
            color: "whiteColor",
          }}
          labelVariant="regular14"
          onPress={handleCloseModal}
          width={RFValue(300)}
        />
      </Box>
    </Modal>
  );
}
