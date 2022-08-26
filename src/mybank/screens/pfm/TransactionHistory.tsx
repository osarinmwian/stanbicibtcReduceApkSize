import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useRef, VFC } from "react";
import { useTranslation } from "react-i18next";
import { StatusBar, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

import { loginBackground } from "@/mybank/assets/image";
import { TransactionCategoryModal } from "@/mybank/components/Modals/TransactionCategoryModal";
import { PfmNavigationProps } from "@/mybank/navigation/types";
import { BaseButton } from "@/shared/components/Buttons";
import { Box, ImageBackground } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";

export const TransactionHistoryScreen: VFC<
  PfmNavigationProps<"TransactionHistoryScreen">
> = () => {
  const { t } = useTranslation();
  const TransactionCategoryModalRef = useRef<BottomSheetModal>(null);
  const onOpenTransactionCategoryModal = () =>
    TransactionCategoryModalRef.current?.present();

  return (
    <ImageBackground flex={1} source={loginBackground}>
      <StatusBar
        animated
        backgroundColor="transparent"
        barStyle="light-content"
        translucent
      />
      <Box height={RFValue(70)} />

      <Box
        backgroundColor="whiteColor"
        borderTopEndRadius="md"
        borderTopStartRadius="md"
        flex={1}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <Box padding="md" paddingVertical="lg">
            <Box
              backgroundColor="cardSecondary"
              borderRadius="sm"
              padding="md"
              paddingBottom="none"
            >
              <Text color="darkGrey" variant="regular12">
                {t("pfm.transactionAmount").toUpperCase()}
              </Text>
              <Box justifyContent="center">
                <Text
                  color="primaryColor"
                  fontSize={RFValue(14)}
                  fontWeight="400"
                  variant="medium14"
                >
                  N200,000
                </Text>
              </Box>
            </Box>
            <Box borderRadius="sm" mb="sm" padding="md">
              <Text color="darkGrey" variant="regular12">
                {t("pfm.to").toUpperCase()}
              </Text>
              <Box justifyContent="center">
                <Text
                  color="primaryColor"
                  fontSize={RFValue(14)}
                  fontWeight="400"
                  variant="medium14"
                >
                  SALARY_DANGOTE_JANUARY_BATCH_1
                </Text>
              </Box>
            </Box>
            <Box
              backgroundColor="cardSecondary"
              borderRadius="sm"
              mb="sm"
              padding="md"
            >
              <Text color="darkGrey" variant="regular12">
                {t("pfm.status").toUpperCase()}
              </Text>
              <Box justifyContent="center">
                <Text
                  color="primaryColor"
                  fontSize={RFValue(14)}
                  fontWeight="400"
                  variant="medium14"
                >
                  SUCCESSFULL
                </Text>
              </Box>
            </Box>
            <Box borderRadius="sm" mb="sm" padding="md">
              <Text color="darkGrey" variant="regular12">
                {t("pfm.narration").toUpperCase()}
              </Text>
              <Box justifyContent="center">
                <Text
                  color="primaryColor"
                  fontSize={RFValue(14)}
                  fontWeight="400"
                  variant="medium14"
                >
                  My guy, use this one flex for weekend. Hope you’re not annoyed
                  anymore.
                </Text>
              </Box>
            </Box>
            <Box
              backgroundColor="cardSecondary"
              borderRadius="sm"
              mb="sm"
              padding="md"
            >
              <Text color="darkGrey" variant="regular12">
                {t("pfm.transactionDate").toUpperCase()}
              </Text>
              <Box justifyContent="center">
                <Text
                  color="primaryColor"
                  fontSize={RFValue(14)}
                  fontWeight="400"
                  variant="medium14"
                >
                  JANUARY 12, 2021 15:32
                </Text>
              </Box>
            </Box>
            <Box borderRadius="sm" mb="sm" padding="md">
              <Text color="darkGrey" variant="regular12">
                {t("pfm.transactionType").toUpperCase()}
              </Text>
              <Box justifyContent="center">
                <Text
                  color="primaryColor"
                  fontSize={RFValue(14)}
                  fontWeight="400"
                  variant="medium14"
                >
                  CREDIT
                </Text>
              </Box>
            </Box>
            <Box
              alignItems="center"
              backgroundColor="cardSecondary"
              borderRadius="sm"
              flexDirection="row"
              justifyContent="space-between"
              mb="sm"
              padding="md"
            >
              <Box>
                <Text color="darkGrey" variant="regular12">
                  {t("pfm.transactionCategory").toUpperCase()}
                </Text>
                <Box justifyContent="center">
                  <Text
                    color="primaryColor"
                    fontSize={RFValue(14)}
                    fontWeight="400"
                    variant="medium14"
                  >
                    Education
                  </Text>
                </Box>
              </Box>
              <Box>
                <TouchableOpacity onPress={onOpenTransactionCategoryModal}>
                  <Text color="primaryColor" variant="medium12">
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
            <Text color="whiteColor" fontWeight="400" variant="medium12">
              {t("pfm.downloadReciept").toUpperCase()}
            </Text>
          </Box>
        </BaseButton>
      </Box>
      <TransactionCategoryModal
        bottomSheetModalRef={TransactionCategoryModalRef}
      />
    </ImageBackground>
  );
};
