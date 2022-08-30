import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import { useCallback, useRef } from "react";
import { useTranslation } from "react-i18next";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { arrow_down, user } from "@/mybank/assets/image";
import { style } from "@/mybank/screens/beneficiaries/styles/AddBeneficiaryStyles";
import { backgroundIcons } from "@/shared/assets/image";
import { ImageBackground } from "@/shared/components/";
import { BaseButton } from "@/shared/components/Buttons";
import { Image } from "@/shared/components/Image";
import { Box } from "@/shared/components/Layout";
import { Modal } from "@/shared/components/Modal";
import { TextInput } from "@/shared/components/TextInput";
import { Text } from "@/shared/components/Typography";

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
            <ScrollView>
              <Box>
                <Box alignItems="center" justifyContent="center">
                  <BaseButton
                    backgroundColor="superlightGrey"
                    style={style.container}
                  >
                    <Image source={user} style={style.image} />
                  </BaseButton>
                  <Text color="darkGrey" variant="regular14">
                    {t("mybank.beneficiary.addPassport")}
                  </Text>
                </Box>
                <Box paddingVertical="lg">
                  <Text
                    color="textTint"
                    marginBottom="sm"
                    style={style.text}
                    variant="medium12"
                  >
                    {t("mybank.AddNewBeneficiary.beneficiaryName")}
                  </Text>
                  <TextInput
                    height={52}
                    paddingTop="md"
                    paddingVertical="xxs"
                    placeholder="Ehizojie Ihayere"
                  />
                  <BaseButton
                    backgroundColor="superlightGrey"
                    borderRadius="sm"
                    flexDirection="row"
                    height={70}
                    justifyContent="space-between"
                    marginTop="mmd"
                    onPress={handleMorePresent}
                  >
                    <Box
                      flexDirection="column"
                      height={100}
                      paddingVertical="none"
                      style={style.bankSelect}
                    >
                      <Text
                        color="textTint"
                        marginBottom="sm"
                        style={style.text}
                        variant="medium12"
                      >
                        {t("mybank.AddNewBeneficiary.selectBankName")}
                      </Text>
                      <TextInput
                        backgroundColor="transparent"
                        height={50}
                        keyboardType="number-pad"
                        paddingTop="mmd"
                        paddingVertical="xxs"
                        placeholder="FIRST BANK"
                      />
                    </Box>
                    <BaseButton
                      backgroundColor="transparent"
                      onPress={handleMorePresent}
                    >
                      <Image
                        height={14}
                        marginHorizontal="sm"
                        resizeMode="contain"
                        source={arrow_down}
                        style={style.arrowImage}
                        width={14}
                      />
                    </BaseButton>
                  </BaseButton>
                  <Text
                    color="textTint"
                    marginBottom="sm"
                    style={style.text}
                    variant="medium12"
                  >
                    {t("mybank.AddNewBeneficiary.acccountNumber")}
                  </Text>
                  <TextInput
                    height={50}
                    keyboardType="number-pad"
                    paddingTop="md"
                    paddingVertical="xxs"
                    placeholder="0123442412"
                  />
                </Box>
                <Box
                  alignItems="center"
                  backgroundColor="superlightGrey"
                  borderRadius="sm"
                  flexDirection="row"
                  height={70}
                  marginBottom="lg"
                  paddingHorizontal="sm"
                  paddingVertical="md"
                  style={style.bottomContainer}
                >
                  <BaseButton
                    backgroundColor="userGrey"
                    height={50}
                    justifyContent="center"
                    onPress={handleMorePresent}
                    width={50}
                  >
                    <Image
                      alignItems="center"
                      height={20}
                      justifyContent="center"
                      source={user}
                      width={20}
                    />
                  </BaseButton>
                  <BaseButton
                    alignItems="flex-start"
                    backgroundColor="transparent"
                    flexDirection="column"
                    width={300}
                  >
                    <Text
                      color="textTint"
                      paddingBottom="xs"
                      variant="medium12"
                    >
                      {t("mybank.AddNewBeneficiary.recipient")}
                    </Text>
                    <TextInput
                      placeholder="IHAYERE EHIZOJIE SOLOMON"
                      placeholderTextColor="grey"
                      style={style.bottomInput}
                    />
                  </BaseButton>
                </Box>
              </Box>
              <BaseButton
                height={52}
                justifyContent="center"
                onPress={() => navigation.navigate("BeneficiaryPinInput")}
                paddingVertical="md"
              >
                <Text
                  color="whiteColor"
                  lineHeight={20}
                  textTransform="uppercase"
                >
                  {t("mybank.AddNewBeneficiary.addBeneficiaryButton")}
                </Text>
              </BaseButton>
            </ScrollView>
          </Box>
          <Modal ref={moreModalRef} />
        </SafeAreaView>
      </ImageBackground>
    </Box>
  );
}
