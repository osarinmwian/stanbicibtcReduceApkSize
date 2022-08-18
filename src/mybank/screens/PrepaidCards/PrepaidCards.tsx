import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useCallback, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { backgroundIcons, standardBankLogo } from "@/shared/assets/image";
import { ImageBackground, Image } from "@/shared/components/";
import { Box } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";
import { RFValue } from "@/shared/utils/functions";
import { BaseButton } from "@/shared/components/Buttons";
import { TextInput } from "@/shared/components/TextInput";
import { Modal } from "@/shared/components/Modal";
import { PrepaidCardsProps } from "@/mybank/screens/PrepaidCards/PrepaidCardsProps";
import {mastercard, visa, verve} from "@/mybank/assets/image";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";
import { styles } from "@/mybank/screens/PrepaidCards/styles/PrepaidCardStyles";

function PrepaidCards() {
  const [cards, setCards] = useState("");
  const [customersId, setCustomersId] = useState("");
  const [fourDigit, setFourDigit] = useState("");
  const [description, setDescription] = useState("");

  const changeBackgroundColor = (response: any) => {
    if (response === 0) {
      response = "Visa Selected";
      setCards(response);
    }
    if (response === 1) {
      response = "Verve Selected";
      setCards(response);
    }
    if (response === 2) {
      response = "Mastercard Selected";
      setCards(response);
    }
  };

  const { t } = useTranslation();

  const inputFields = () => {
    let data = {
      cards,
      customersId,
      fourDigit,
      description,
    };
    console.log(data);
  };

  const navigation = useNavigation();

  const moreModalRef = useRef<BottomSheetModal>(null);

  const handleMorePresent = useCallback(() => {
    moreModalRef.current?.present();
  }, []);
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
            <Box>
              <Text
                textTransform="uppercase"
                marginTop="lg"
                variant="medium12"
              >
                {t("mybank.prepaid.selectCard")}
              </Text>
              <Box flexDirection="row">
                <PrepaidCardsProps
                  buttons={[visa, verve, mastercard]}
                  doSomethingAfterClick={changeBackgroundColor}
                />
              </Box>
            </Box>
            <Box style={{ paddingTop: RFValue(32) }} flex={1}>
              <Text
                style={styles.text}
                marginBottom="sm"
                variant="regular12"
                color="darkGrey"
              >
                {t("mybank.prepaid.customerId")}
              </Text>
              <TextInput
                placeholder="0000 0000 0000 0000"
                height={60}
                paddingVertical="xxs"
                paddingTop="md"
                keyboardType="number-pad"
                onChangeText={(text) => setCustomersId(text)}
              />
              <Text
                style={styles.text}
                marginBottom="sm"
                variant="regular12"
                color="lightGrey"
              >
                {t("mybank.prepaid.fourDigits")}
              </Text>
              <TextInput
                placeholder="0000"
                height={60}
                paddingVertical="xxs"
                paddingTop="md"
                keyboardType="number-pad"
                onChangeText={(text) => setFourDigit(text)}
              />
              <Text
                style={styles.text}
                marginBottom="sm"
                variant="regular12"
                color="lightGrey"
              >
                {t("mybank.prepaid.description")}
              </Text>
              <TextInput
                placeholder="Enter description"
                height={60}
                paddingVertical="xxs"
                paddingTop="md"
                onChangeText={(text) => setDescription(text)}
              />
            </Box>
            <Box>

            <BaseButton
              style={styles.primaryButton}
              justifyContent="center"
              height={52}
              onPress={() => navigation.navigate("PrepaidPinInput")}
              paddingVertical="md"
              width="100%"
            >
              <Text color="whiteColor" lineHeight={20}>{t("mybank.prepaid.nextButton")}</Text>
            </BaseButton>
            </Box>
            <Modal ref={moreModalRef}>

            </Modal>
          </Box>
        </SafeAreaView>
      </ImageBackground>
    </Box>
  );
}

export default PrepaidCards;
