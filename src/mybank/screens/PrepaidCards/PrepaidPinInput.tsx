import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import { useCallback, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { SafeAreaView } from "react-native-safe-area-context";

import { success } from "@/mybank/assets/image";
import { styles } from "@/mybank/screens/PrepaidCards/styles/PrepaidPinInputStyles";
import { backgroundIcons } from "@/shared/assets/image";
import { Image, ImageBackground } from "@/shared/components/";
import { BaseButton, PrimaryButton } from "@/shared/components/Buttons";
import { Box } from "@/shared/components/Layout";
import { Modal } from "@/shared/components/Modal";
import { Text } from "@/shared/components/Typography";
import { RFValue } from "@/shared/utils/functions";

import PinComponent from "@/mybank/screens/Transfer/components/PinComponent";

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
                width={130}
              />
              <Text
                color="textColorInverted"
                textTransform="uppercase"
                variant="medium14"
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
              height={52}
              justifyContent="center"
              label="USE HARDWARE TOKEN"
              labelProps={{ color: "textColorInverted" }}
              labelVariant="medium12"
              onPress={handleMorePresent}
              paddingVertical="md"
              width="100%"
            />
            <Modal ref={moreModalRef}>
              <Box marginHorizontal="md" marginVertical="lg">
                <Box style={styles.imageContainer}>
                  <Image
                    resizeMode="contain"
                    source={success}
                    style={styles.image}
                  />
                </Box>
                <Text fontWeight="bold" textAlign="center" variant="regular14">
                  {t("mybank.prepaid.modal.accountCreateText")}
                </Text>
                <Box style={styles.accountContent}>
                  <Box paddingHorizontal="lg" style={styles.note}>
                    <Text textAlign="center" variant="regular14">
                      {t("mybank.prepaid.modal.modalText")}
                    </Text>
                    <Text
                      lineHeight={20}
                      marginVertical="md"
                      style={styles.note}
                      variant="regular14"
                    >
                      {t("mybank.prepaid.modal.modalSecondText")}
                    </Text>
                  </Box>
                </Box>
                <Box>
                  <BaseButton
                    backgroundColor="primaryColor"
                    height={52}
                    style={styles.downloadButton}
                  >
                    <Text
                      color="whiteColor"
                      style={styles.download}
                      textTransform="uppercase"
                      variant="bold14"
                    >
                      {t("mybank.prepaid.modal.downloadButton")}
                    </Text>
                  </BaseButton>
                  <BaseButton
                    backgroundColor="whiteColor"
                    borderColor="primaryColor"
                    borderWidth={1}
                    height={52}
                    style={styles.doneButton}
                  >
                    <Text
                      color="primaryColor"
                      style={styles.done}
                      textTransform="uppercase"
                      variant="bold14"
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
