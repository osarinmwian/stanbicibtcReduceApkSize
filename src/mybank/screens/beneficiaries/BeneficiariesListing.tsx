import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useCallback, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Image, TouchableOpacity } from "react-native";

import addition from "@/mybank/assets/image/addition.png";
import filterBeneficiaries from "@/mybank/screens/beneficiaries/files/filterBeneficiaries";
import { styles } from "@/mybank/screens/beneficiaries/styles/BeneficiaryListingStyles";
import { BaseButton } from "@/shared/components/Buttons";
import { Box } from "@/shared/components/Layout";
import { Modal } from "@/shared/components/Modal";
import { Text } from "@/shared/components/Typography";
import { RFValue } from "@/shared/utils/functions";

function BeneficiariesListing() {
  const moreModalRef = useRef<BottomSheetModal>(null);

  const navigation = useNavigation();
  const handleMorePresent = useCallback(() => {
    moreModalRef.current?.present();
  }, []);
  const { t } = useTranslation();
  return (
    <Box>
      <Text
        color="textTint"
        marginTop="sm"
        style={{ paddingTop: RFValue(24) }}
        textTransform="uppercase"
        variant="bold14"
      >
        {t("mybank.beneficiary.title")}
      </Text>
      <Box flex={1} flexDirection="column">
        {filterBeneficiaries.map((item) => (
          <Box flexDirection="row" key={item.name} paddingVertical="lg">
            <LinearGradient
              colors={item.containerBackgroundColor}
              style={styles.containerBackground}
            >
              <Box
                flex={1}
                flexDirection="row"
                justifyContent="center"
                paddingHorizontal="md"
              >
                <LinearGradient
                  colors={item.background}
                  style={styles.container}
                >
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
                <TouchableOpacity style={styles.note}>
                  <Text
                    color="textTint"
                    paddingHorizontal="sm"
                    variant="bold14"
                  >
                    {item.name}
                  </Text>
                  <Box>
                    <Text
                      color="textTint"
                      marginTop="sm"
                      paddingHorizontal="sm"
                      variant="regular12"
                    >
                      {item.details}
                    </Text>
                  </Box>
                </TouchableOpacity>
                <Box marginLeft="xs">
                  <BaseButton onPress={handleMorePresent} variant="transparent">
                    <Image source={item.img} style={styles.delete} />
                  </BaseButton>
                </Box>
              </Box>
            </LinearGradient>
          </Box>
        ))}
      </Box>
      <Box style={styles.primaryButton}>
        <BaseButton
          alignItems="center"
          borderRadius="lg"
          justifyContent="center"
          onPress={() => navigation.navigate("AddNewBeneficiary")}
          paddingVertical="md"
          width="100%"
        >
          <Image source={addition} style={styles.addition} />
          <Text color="whiteColor" marginHorizontal="sm" variant="medium14">
            {t("mybank.AddNewBeneficiary.addNewButton")}
          </Text>
        </BaseButton>
      </Box>
      <Modal ref={moreModalRef}>
        <Box marginHorizontal="md" marginVertical="md">
          <Text variant="bold14">
            {t("mybank.removeBeneficiaries.pleaseNote")}
          </Text>
          <Text marginBottom="md">
            {t("mybank.removeBeneficiaries.confirmRequest")}
          </Text>
          <Box style={styles.warning}>
            <Box>
              <Image
                source={require("@/mybank/assets/image/warning.png")}
                style={styles.image}
              />
            </Box>
            <Box style={styles.modalNote}>
              <Text marginBottom="xs" variant="medium14">
                {t("mybank.removeBeneficiaries.pleaseNote")}
              </Text>
              <Text marginBottom="md" style={styles.note} variant="regular14">
                {t("mybank.removeBeneficiaries.actionNote")}
              </Text>
            </Box>
          </Box>
          <Box>
            <BaseButton
              backgroundColor="superlightGrey"
              height={52}
              style={styles.cancelButton}
            >
              <Text
                color="lightGrey"
                style={styles.cancel}
                textTransform="uppercase"
                variant="medium12"
              >
                {t("mybank.removeBeneficiaries.cancelButton")}
              </Text>
            </BaseButton>
            <BaseButton
              backgroundColor="mediumRed"
              height={52}
              style={styles.continueButton}
            >
              <Text
                color="whiteColor"
                style={styles.continue}
                textTransform="uppercase"
                variant="medium12"
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
