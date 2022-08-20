import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useCallback, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { arrow_down, user } from "@/mybank/assets/image";
import { backgroundIcons } from "@/shared/assets/image";
import { ImageBackground } from "@/shared/components/";
import { Image } from "@/shared/components/Image";
import { Box } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";
import { BaseButton } from "@/shared/components/Buttons";
import { Modal } from "@/shared/components/Modal";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "@/shared/components/TextInput";
import { style } from "@/mybank/screens/beneficiaries/styles/AddBeneficiaryStyles";
import { ScrollView } from "react-native";

export default function AddNewBeneficiary() {
  const moreModalRef = useRef<BottomSheetModal>(null);
  const { t } = useTranslation();

  const handleMorePresent = useCallback(() => {
    moreModalRef.current?.present();
  }, []);

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
            <ScrollView>
            <Box>
              <Box justifyContent="center" alignItems="center">
                <BaseButton
                  backgroundColor="superlightGrey"
                  style={style.container}
                >
                  <Image source={user} style={style.image} />
                </BaseButton>
                <Text variant="regular14" color="darkGrey">{t("mybank.beneficiary.addPassport")}</Text>
              </Box>
              <Box paddingVertical="lg">
                <Text
                  style={style.text}
                  marginBottom="sm"
                  variant="medium12"
                  color="textTint"
                >
                  {t("mybank.AddNewBeneficiary.beneficiaryName")}
                </Text>
                <TextInput
                  placeholder="Ehizojie Ihayere"
                  height={52}
                  paddingVertical="xxs"
                  paddingTop="md"
                />
                <BaseButton flexDirection="row" justifyContent="space-between" height={70} backgroundColor="superlightGrey" marginTop="mmd" borderRadius="sm" onPress={handleMorePresent}>
                <Box style={style.bankSelect} flexDirection="column" paddingVertical="none" height={100}>
                <Text
                  style={style.text}
                  marginBottom="sm"
                  variant="medium12"
                  color="textTint"
                >
                  {t("mybank.AddNewBeneficiary.selectBankName")}
                </Text>
                <TextInput
                  placeholder="FIRST BANK"
                  backgroundColor="transparent"
                  height={50}
                  paddingVertical="xxs"
                  paddingTop="mmd"
                  keyboardType="number-pad"
                />
                  </Box>
                  <BaseButton backgroundColor="transparent" onPress={handleMorePresent}>
                    <Image source={arrow_down} height={14} width={14} resizeMode="contain" marginHorizontal="sm" style={style.arrowImage}/>
                  </BaseButton>
                </BaseButton>
                 <Text
                  style={style.text}
                  marginBottom="sm"
                  variant="medium12"
                  color="textTint"
                >
                  {t("mybank.AddNewBeneficiary.acccountNumber")}
                </Text>
                <TextInput
                  placeholder="0123442412"
                  height={50}
                  paddingVertical="xxs"
                  paddingTop="md"
                  keyboardType="number-pad"
                />
                </Box>
                <Box backgroundColor="superlightGrey" height={70} flexDirection="row" style={style.bottomContainer} marginBottom="lg" paddingHorizontal="sm" paddingVertical="md" borderRadius="sm" alignItems="center">
                  <BaseButton backgroundColor="userGrey" height={50} width={50} justifyContent="center" onPress={handleMorePresent}>
                  <Image source={user} height={20} width={20} justifyContent="center" alignItems="center"/>
                  </BaseButton>
                  <BaseButton flexDirection="column" width={300} alignItems="flex-start" backgroundColor="transparent">
                    <Text color="textTint" variant="medium12" paddingBottom="xs">{t("mybank.AddNewBeneficiary.recipient")}</Text>
                    <TextInput placeholder="IHAYERE EHIZOJIE SOLOMON" placeholderTextColor="grey" style={style.bottomInput} />
                  </BaseButton>
                </Box>
              </Box>
            <BaseButton
              height={52}
              onPress={() => navigation.navigate("BeneficiaryPinInput")}
              justifyContent="center"
              paddingVertical="md" 
            >
              <Text textTransform="uppercase" color="whiteColor" lineHeight={20}>
                {t("mybank.AddNewBeneficiary.addBeneficiaryButton")}
              </Text>
            </BaseButton>
            </ScrollView>
            </Box>
            <Modal ref={moreModalRef}>

            </Modal>
          </SafeAreaView>
          </ImageBackground>
          </Box>
  );
}
