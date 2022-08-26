import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { SafeAreaView } from "react-native-safe-area-context";

import { backgroundIcons } from "@/shared/assets/image";
import { ImageBackground } from "@/shared/components/";
import { BaseButton, PrimaryButton } from "@/shared/components/Buttons";
import { Box } from "@/shared/components/Layout";
import { Modal } from "@/shared/components/Modal";
import { Text } from "@/shared/components/Typography";
import { RFValue } from "@/shared/utils/functions";

import PinComponent from "../Transfer/components/PinComponent";

function BeneficiaryPinInput() {
  const moreModalRef = useRef<BottomSheetModal>(null);

  const [pin, setPin] = useState("");

  const navigation = useNavigation();

  const { t } = useTranslation();

  return (
    <Box
      alignItems="center"
      backgroundColor="imageBackgroundTint"
      flex={1}
      justifyContent="center"
    >
      <ImageBackground
        flex={1}
        resizeMode="contain"
        source={backgroundIcons}
        width="100%"
      >
        <SafeAreaView edges={["top"]} style={{ flex: 1 }}>
          <Box flex={0.1}>
            <Box
              alignItems="center"
              flex={1}
              flexDirection="row"
              marginTop="sm"
            >
              <BaseButton
                leftIcon="arrow-back"
                leftIconProps={{
                  size: "md",
                }}
                onPress={() => navigation.goBack()}
                size="sm"
                width={140}
              />
              <Text
                color="textColorInverted"
                textTransform="uppercase"
                variant="medium14"
              >
                {t("mybank.beneficiary.title")}
              </Text>
            </Box>
          </Box>
          <Box
            backgroundColor="mainBackground"
            borderTopLeftRadius="md"
            borderTopRightRadius="md"
            flex={0.9}
            justifyContent="space-between"
            paddingBottom="lg"
            paddingHorizontal="md"
          >
            <Box style={{ paddingTop: RFValue(24) }}>
              <Text variant="bold14">PIN Confirmation</Text>
              <Text color="lightGrey">Enter your 4 digit pin</Text>
            </Box>
            <Box height={RFValue(0)} />
            <Box flex={1}>
              <PinComponent
                noAmountBox
                onChangeText={(value) => {
                  setPin(value);
                }}
                size={60}
                value={pin}
              />
            </Box>
            <PrimaryButton
              height={52}
              justifyContent="center"
              label="USE HARDWARE TOKEN"
              labelProps={{ color: "textColorInverted" }}
              labelVariant="medium12"
              paddingVertical="md"
              width="100%"
            />
            <Modal ref={moreModalRef}>{}</Modal>
          </Box>
        </SafeAreaView>
      </ImageBackground>
    </Box>
  );
}

export default BeneficiaryPinInput;
