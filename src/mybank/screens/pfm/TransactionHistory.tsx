import { loginBackground } from "@/mybank/assets/image";
import { TransactionCategoryModal } from "@/mybank/components/Modals/TransactionCategoryModal";
import { PfmNavigationProps } from "@/mybank/navigation/types";
import { BaseButton } from "@/shared/components/Buttons";
import { Box, ImageBackground, SafeAreaView } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useRef, VFC } from "react";
import { useTranslation } from "react-i18next";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

export const TransactionHistoryScreen: VFC<
  PfmNavigationProps<"TransactionHistoryScreen">
> = () => {
  const { t } = useTranslation();
  const TransactionCategoryModalRef = useRef<BottomSheetModal>(null);
  const onOpenTransactionCategoryModal = () =>
    TransactionCategoryModalRef.current?.present();

  return (
    <SafeAreaView flex={1}>
      <ImageBackground flex={1} source={loginBackground}>
        <Box height={RFValue(50)} />
        <Box
          flex={1}
          backgroundColor="whiteColor"
          borderTopStartRadius="md"
          borderTopEndRadius="md"
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            <Box padding="md" paddingVertical="lg">
              <Box
                padding="md"
                paddingBottom="none"
                borderRadius="sm"
                backgroundColor="cardSecondary"
              >
                <Text variant="regular12" color="darkGrey">
                  {t("pfm.transactionAmount").toUpperCase()}
                </Text>
                <Box justifyContent="center">
                  <Text
                    fontSize={RFValue(14)}
                    color="primaryColor"
                    variant="medium14"
                    fontWeight="400"
                  >
                    N200,000
                  </Text>
                </Box>
              </Box>
              <Box padding="md" mb="sm" borderRadius="sm">
                <Text variant="regular12" color="darkGrey">
                  {t("pfm.to").toUpperCase()}
                </Text>
                <Box justifyContent="center">
                  <Text
                    fontSize={RFValue(14)}
                    color="primaryColor"
                    variant="medium14"
                    fontWeight="400"
                  >
                    SALARY_DANGOTE_JANUARY_BATCH_1
                  </Text>
                </Box>
              </Box>
              <Box
                padding="md"
                mb="sm"
                borderRadius="sm"
                backgroundColor="cardSecondary"
              >
                <Text variant="regular12" color="darkGrey">
                  {t("pfm.status").toUpperCase()}
                </Text>
                <Box justifyContent="center">
                  <Text
                    fontSize={RFValue(14)}
                    color="primaryColor"
                    variant="medium14"
                    fontWeight="400"
                  >
                    SUCCESSFULL
                  </Text>
                </Box>
              </Box>
              <Box padding="md" mb="sm" borderRadius="sm">
                <Text variant="regular12" color="darkGrey">
                  {t("pfm.narration").toUpperCase()}
                </Text>
                <Box justifyContent="center">
                  <Text
                    fontSize={RFValue(14)}
                    color="primaryColor"
                    variant="medium14"
                    fontWeight="400"
                  >
                    My guy, use this one flex for weekend. Hope you’re not
                    annoyed anymore.
                  </Text>
                </Box>
              </Box>
              <Box
                padding="md"
                mb="sm"
                borderRadius="sm"
                backgroundColor="cardSecondary"
              >
                <Text variant="regular12" color="darkGrey">
                  {t("pfm.transactionDate").toUpperCase()}
                </Text>
                <Box justifyContent="center">
                  <Text
                    fontSize={RFValue(14)}
                    color="primaryColor"
                    variant="medium14"
                    fontWeight="400"
                  >
                    JANUARY 12, 2021 15:32
                  </Text>
                </Box>
              </Box>
              <Box padding="md" mb="sm" borderRadius="sm">
                <Text variant="regular12" color="darkGrey">
                  {t("pfm.transactionType").toUpperCase()}
                </Text>
                <Box justifyContent="center">
                  <Text
                    fontSize={RFValue(14)}
                    color="primaryColor"
                    variant="medium14"
                    fontWeight="400"
                  >
                    CREDIT
                  </Text>
                </Box>
              </Box>
              <Box
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                padding="md"
                mb="sm"
                borderRadius="sm"
                backgroundColor="cardSecondary"
              >
                <Box>
                  <Text variant="regular12" color="darkGrey">
                    {t("pfm.transactionCategory").toUpperCase()}
                  </Text>
                  <Box justifyContent="center">
                    <Text
                      fontSize={RFValue(14)}
                      color="primaryColor"
                      variant="medium14"
                      fontWeight="400"
                    >
                      Education
                    </Text>
                  </Box>
                </Box>
                <Box>
                  <TouchableOpacity onPress={onOpenTransactionCategoryModal}>
                    <Text variant="medium12" color="primaryColor">
                      {t("pfm.change").toUpperCase()}
                    </Text>
                  </TouchableOpacity>
                </Box>
              </Box>
            </Box>
          </ScrollView>
        </Box>
        <Box backgroundColor="whiteColor" padding="md">
          <BaseButton justifyContent="center">
            <Box padding="sm">
              <Text color="whiteColor" variant="medium12" fontWeight="400">
                {t("pfm.downloadReciept").toUpperCase()}
              </Text>
            </Box>
          </BaseButton>
        </Box>
        <TransactionCategoryModal
          bottomSheetModalRef={TransactionCategoryModalRef}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};
