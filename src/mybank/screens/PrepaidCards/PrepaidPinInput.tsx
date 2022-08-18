import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useCallback, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { backgroundIcons, standardBankLogo } from "@/shared/assets/image";
import { ImageBackground, Image } from "@/shared/components/";
import {success} from "@/mybank/assets/image"
import { PrimaryButton } from "@/shared/components/Buttons";
import { Box } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";
import { RFValue } from "@/shared/utils/functions";
import { BaseButton } from "@/shared/components/Buttons";
import { Modal } from "@/shared/components/Modal";
import PinComponent from "../Transfer/components/PinComponent";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";
import { styles } from "@/mybank/screens/PrepaidCards/styles/PrepaidPinInputStyles";

function PrepaidPinInput() {
  const moreModalRef = useRef<BottomSheetModal>(null);

  const [pin, setPin] = useState("");

  const handleMorePresent = useCallback(() => {
    moreModalRef.current?.present();
  }, []);

  const { t } = useTranslation();

  const navigation = useNavigation();

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
                width={130}
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
                {t("mybank.prepaid.prepaidTitle")}
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
              <Text variant="bold14">
                {t("mybank.prepaid.pinConfirmation")}
              </Text>
              <Text color="lightGrey">
                {t("mybank.prepaid.enterFourDigits")}
              </Text>
            </Box>
            <Box flex={1}>
              <PinComponent
                onChangeText={(value) => {
                  setPin(value);
                }}
                value={pin}
              />
            </Box>
            <PrimaryButton
              justifyContent="center"
              label="USE HARDWARE TOKEN"
              height={52}
              onPress={handleMorePresent}
              labelProps={{ color: "textColorInverted" }}
              labelVariant="medium12"
              paddingVertical="md"
              width="100%"
            />
            <Modal ref={moreModalRef}>
              <Box marginHorizontal="md" marginVertical="lg">
                <Box style={styles.imageContainer}>
                  <Image
                    source={success}
                    resizeMode="contain"
                    style={styles.image}
                  />
                </Box>
                <Text variant="regular14" textAlign="center" fontWeight="bold">
                  {t("mybank.prepaid.modal.accountCreateText")}
                </Text>
                <Box style={styles.accountContent}>
                  <Box style={styles.note} paddingHorizontal="lg">
                    <Text variant="regular14" textAlign="center">
                      {t("mybank.prepaid.modal.modalText")}
                    </Text>
                    <Text
                      variant="regular14"
                      lineHeight={20}
                      marginVertical="md"
                      style={styles.note}
                    >
                      {t("mybank.prepaid.modal.modalSecondText")}
                    </Text>
                  </Box>
                </Box>
                <Box>
                  <BaseButton
                    style={styles.downloadButton}
                    backgroundColor="primaryColor"
                    height={52}
                  >
                    <Text
                      style={styles.download}
                      variant="bold14"
                      color="whiteColor"
                      textTransform="uppercase"
                    >
                      {t("mybank.prepaid.modal.downloadButton")}
                    </Text>
                  </BaseButton>
                  <BaseButton
                    style={styles.doneButton}
                    borderWidth={1}
                    height={52}
                    backgroundColor="whiteColor"
                    borderColor="primaryColor"
                  >
                    <Text
                      style={styles.done}
                      variant="bold14"
                      color="primaryColor"
                      textTransform="uppercase"
                    >
                      {t("mybank.prepaid.modal.doneButton")}
                    </Text>
                  </BaseButton>
                </Box>
              </Box>
            </Modal>
          </Box>
        </SafeAreaView>
      </ImageBackground>
    </Box>
  );
}

export default PrepaidPinInput;
