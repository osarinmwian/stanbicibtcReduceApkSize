import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { SafeAreaView } from "react-native-safe-area-context";

import { mastercard, verve, visa } from "@/mybank/assets/image";
import { PrepaidCardsProps } from "@/mybank/screens/PrepaidCards/PrepaidCardsProps";
import { styles } from "@/mybank/screens/PrepaidCards/styles/PrepaidCardStyles";
import { backgroundIcons } from "@/shared/assets/image";
import { ImageBackground } from "@/shared/components/";
import { BaseButton } from "@/shared/components/Buttons";
import { Box } from "@/shared/components/Layout";
import { Modal } from "@/shared/components/Modal";
import { TextInput } from "@/shared/components/TextInput";
import { Text } from "@/shared/components/Typography";
import { RFValue } from "@/shared/utils/functions";

function PrepaidCards() {
  const [cards, setCards] = useState("");
  const [customersId, setCustomersId] = useState("");
  const [fourDigit, setFourDigit] = useState("");
  const [description, setDescription] = useState("");

  const changeBackgroundColor = (response: number) => {
    if (response === 0 && cards === "") {
      // response = "Visa Selected";
      setCards("Visa Selected");
    }
    if (response === 1) {
      // response = "Verve Selected";
      setCards("Verve Selected");
    }
    if (response === 2) {
      // response = "Mastercard Selected";
      setCards("Mastercard Selected");
    }
  };

  const { t } = useTranslation();

  const navigation = useNavigation();

  const moreModalRef = useRef<BottomSheetModal>(null);

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
            <Box>
              <Text marginTop="lg" textTransform="uppercase" variant="medium12">
                {t("mybank.prepaid.selectCard")}
              </Text>
              <Box flexDirection="row">
                <PrepaidCardsProps
                  buttons={[visa, verve, mastercard]}
                  doSomethingAfterClick={changeBackgroundColor}
                />
              </Box>
            </Box>
            <Box flex={1} style={{ paddingTop: RFValue(32) }}>
              <Text
                color="darkGrey"
                marginBottom="sm"
                style={styles.text}
                variant="regular12"
              >
                {t("mybank.prepaid.customerId")}
              </Text>
              <TextInput
                height={60}
                keyboardType="number-pad"
                onChangeText={(text) => setCustomersId(text)}
                paddingTop="md"
                paddingVertical="xxs"
                placeholder="0000 0000 0000 0000"
                value={customersId}
              />
              <Text
                color="lightGrey"
                marginBottom="sm"
                style={styles.text}
                variant="regular12"
              >
                {t("mybank.prepaid.fourDigits")}
              </Text>
              <TextInput
                height={60}
                keyboardType="number-pad"
                onChangeText={(text) => setFourDigit(text)}
                paddingTop="md"
                paddingVertical="xxs"
                placeholder="0000"
                value={fourDigit}
              />
              <Text
                color="lightGrey"
                marginBottom="sm"
                style={styles.text}
                variant="regular12"
              >
                {t("mybank.prepaid.description")}
              </Text>
              <TextInput
                height={60}
                onChangeText={(text) => setDescription(text)}
                paddingTop="md"
                paddingVertical="xxs"
                placeholder="Enter description"
                value={description}
              />
            </Box>
            <Box>
              <BaseButton
                height={52}
                justifyContent="center"
                onPress={() => navigation.navigate("PrepaidPinInput")}
                paddingVertical="md"
                style={styles.primaryButton}
                width="100%"
              >
                <Text color="whiteColor" lineHeight={20}>
                  {t("mybank.prepaid.nextButton")}
                </Text>
              </BaseButton>
            </Box>
            <Modal ref={moreModalRef} />
          </Box>
        </SafeAreaView>
      </ImageBackground>
    </Box>
  );
}

export default PrepaidCards;
