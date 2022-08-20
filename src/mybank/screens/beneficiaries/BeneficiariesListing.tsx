import { Box } from "@/shared/components/Layout";
import { TouchableOpacity, StyleSheet, Image } from "react-native";
import { Text } from "@/shared/components/Typography";
import { RFValue } from "@/shared/utils/functions";
import filterBeneficiaries from "@/mybank/screens/beneficiaries/files/filterBeneficiaries";
import { Modal } from "@/shared/components/Modal";
import { LinearGradient } from "expo-linear-gradient";
import { useRef, useCallback } from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { BaseButton } from "@/shared/components/Buttons";
import { useNavigation } from "@react-navigation/native";
import { PrimaryButton } from "@/shared/components/Buttons";
import addition from "@/mybank/assets/image/addition.png";
import { styles } from "@/mybank/screens/beneficiaries/styles/BeneficiaryListingStyles";
import { useTranslation } from "react-i18next";

function BeneficiariesListing() {
  const moreModalRef = useRef<BottomSheetModal>(null);

  const navigation = useNavigation();
  const handleMorePresent = useCallback(() => {
    moreModalRef.current?.present();
  }, []);
  const {t} = useTranslation();
  return (
    <Box>
      <Text
        style={{ paddingTop: RFValue(24) }}
        textTransform="uppercase"
        variant="bold14"
        marginTop="sm"
        color="textTint"
      >
        {t("mybank.beneficiary.title")}
      </Text>
      <Box flex={1} flexDirection="column">
        {filterBeneficiaries.map((item) => (
          <Box
            flexDirection="row"
            key={item.name}
            paddingHorizontal="sm"
            paddingVertical="lg"
          >
            <LinearGradient colors={item.background} style={styles.container}>
              <TouchableOpacity
                style={[
                  styles.container,
                  { alignItems: "center", justifyContent: "center" },
                ]}
              >
                <Text color="whiteColor" variant="medium14">
                  {item.name.slice(0, 1).toUpperCase()}
                </Text>
              </TouchableOpacity>
            </LinearGradient>
            <Box height={100} flex={1} flexDirection="row">
              <TouchableOpacity style={styles.note}>
                <Text color="textTint" paddingHorizontal="sm" variant="bold14">
                  {item.name}
                </Text>
                <Box>
                  <Text
                    color="textTint"
                    paddingHorizontal="sm"
                    variant="regular14"
                  >
                    {item.details}
                  </Text>
                </Box>
              </TouchableOpacity>
              <Box>
                <BaseButton variant="transparent" onPress={handleMorePresent}>
                  <Image source={item.img} style={styles.delete} />
                </BaseButton>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
      <Box style={styles.primaryButton}>
        <BaseButton
          justifyContent="center"
          alignItems='center'
          onPress={() => navigation.navigate("AddNewBeneficiary")}
          paddingVertical="md"
          borderRadius="lg"
          width="100%"
        >
          <Image source={addition} style={styles.addition}/>
          <Text color="whiteColor" marginHorizontal="sm" variant="medium14">{t("mybank.AddNewBeneficiary.addNewButton")}</Text>
        </BaseButton>
      </Box>
      <Modal ref={moreModalRef}>
        <Box marginHorizontal="md" marginVertical="md">
          <Text variant="bold14">{t("mybank.removeBeneficiaries.pleaseNote")}</Text>
          <Text marginBottom="md">{t("mybank.removeBeneficiaries.confirmRequest")}</Text>
          <Box style={styles.warning}>
            <Box>
              <Image
                source={require("@/mybank/assets/image/warning.png")}
                style={styles.image}
              />
            </Box>
            <Box style={styles.note}>
              <Text variant="medium14">
              {t("mybank.removeBeneficiaries.pleaseNote")}
              </Text>
              <Text variant="regular14" marginBottom="md" style={styles.note}>
              {t("mybank.removeBeneficiaries.actionNote")}
              </Text>
            </Box>
          </Box>
          <Box>
            <BaseButton
              style={styles.cancelButton}
              backgroundColor="superlightGrey"
              height={52}
            >
              <Text
                style={styles.cancel}
                variant="medium12"
                color="lightGrey"
                textTransform="uppercase"
              >
                {t("mybank.removeBeneficiaries.cancelButton")}
              </Text>
            </BaseButton>
            <BaseButton
              style={styles.continueButton}
              backgroundColor="mediumRed"
              height={52}
            >
              <Text
                style={styles.continue}
                variant="medium12"
                color="whiteColor"
                textTransform="uppercase"
              >
                {t("mybank.removeBeneficiaries.continueButton")}
              </Text>
            </BaseButton>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}

export default BeneficiariesListing;
