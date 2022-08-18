import { VFC } from "react";
import { useTranslation } from "react-i18next";
import { ScrollView } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

import { loginBackground } from "@/mybank/assets/image";
import { CategoryButton } from "@/mybank/components/Buttons/CategoryButton";
import { PfmNavigationProps } from "@/mybank/navigation/types";
import { Box, ImageBackground, SafeAreaView } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";

export const EditCategoryNameScreen: VFC<
  PfmNavigationProps<"financialManagementScreen">
> = () => {
  const { t } = useTranslation();
  return (
    <SafeAreaView flex={1}>
      <ImageBackground flex={1} source={loginBackground}>
        <Box height={RFValue(50)} />
        <Box
          backgroundColor="whiteColor"
          borderTopEndRadius="sm"
          borderTopStartRadius="sm"
          flex={1}
        >
          <ScrollView>
            <Box flex={1}>
              <Box padding="md" pb="none">
                <CategoryButton
                  {...{
                    title: "Education",
                    leftIcon: "graduationCap",
                    subtitle: "140 transactions",
                    amount: "30,000,000",
                    rightColor: "pfmeducationblue",
                    backgroundColor: "pfmeducationbackgroundcolor",
                  }}
                />
                <Box alignItems="center" flexDirection="row" my="lg">
                  <Text fontSize={16} fontWeight="500">
                    {t("pfm.modifyTransferLimit")}
                  </Text>
                </Box>

                <Box
                  backgroundColor="cardSecondary"
                  borderRadius="sm"
                  mb="sm"
                  mt="none"
                  padding="md"
                >
                  <Text color="darkGrey" fontWeight="400">
                    {t("pfm.newCategoryName")}
                  </Text>
                  <TextInput placeholder="Enter name" />
                </Box>
                <Box justifyContent="center">
                  <Text fontSize={RFValue(12)} fontWeight="400">
                    {t("pfm.onlyCategoryNameInfo")}
                  </Text>
                </Box>
              </Box>
            </Box>
          </ScrollView>
        </Box>
      </ImageBackground>
    </SafeAreaView>
  );
};
