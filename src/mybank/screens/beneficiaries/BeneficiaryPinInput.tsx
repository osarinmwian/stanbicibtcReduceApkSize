import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { backgroundIcons } from "@/shared/assets/image";
import { ImageBackground } from "@/shared/components/";
import { PrimaryButton } from "@/shared/components/Buttons";
import { Box } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";
import { RFValue } from "@/shared/utils/functions";
import { BaseButton } from "@/shared/components/Buttons";
import { Modal } from "@/shared/components/Modal";
import PinComponent from "../Transfer/components/PinComponent";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";

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
              flexDirection="row"
              flex={1}
              marginTop="sm"
            >
              <BaseButton
                width={140}
                leftIcon="arrow-back"
                onPress={() => navigation.goBack()}
                leftIconProps={{
                  size: "md",
                }}
                size="sm"
              />
              <Text
                color="textColorInverted"
                variant="medium14"
                textTransform="uppercase"
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
            <Box flex={1}>
              <PinComponent
                onChangeText={(value) => {
                  setPin(value);
                  console.log(value);
                }}
                value={pin}
              />
            </Box>
            <PrimaryButton
              justifyContent="center"
              label="USE HARDWARE TOKEN"
              labelProps={{ color: "textColorInverted" }}
              labelVariant="medium12"
              height={52}
              paddingVertical="md"
              width="100%"
            />
            <Modal ref={moreModalRef}>

            </Modal>
          </Box>
        </SafeAreaView>
      </ImageBackground>
    </Box>
  );
}

export default BeneficiaryPinInput;
