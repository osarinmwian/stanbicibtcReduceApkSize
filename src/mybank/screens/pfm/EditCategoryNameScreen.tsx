import { VFC } from "react";
import { useTranslation } from "react-i18next";
import { ScrollView, StatusBar } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

import { loginBackground } from "@/mybank/assets/image";
import { CategoryButton } from "@/mybank/components/Buttons/CategoryButton";
import { PfmNavigationProps } from "@/mybank/navigation/types";
import { SvgIconPackType } from "@/shared/assets/icons";
import { Box, ImageBackground, SafeAreaView } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";
import { PaletteType } from "@/shared/theme/palette";

type TransactionType = {
  title: string;
  leftIcon: SvgIconPackType;
  subtitle: string;
  iconBackgroundColor: PaletteType;
  amount: string;
};

const transactions: TransactionType[] = [
  {
    title: "SALARY_DANGOTE_JANUARY...",
    leftIcon: "arrow-backward",
    subtitle: "DEBIT . 07/01/2021, 1:25:05 AM",
    iconBackgroundColor: "pfmmoneyoutbackgroundcolor",
    amount: "3,400",
  },
  {
    title: "WINIFRED EKWUNIFE",
    leftIcon: "arrow-forward",
    subtitle: "CREDIT . 07/01/2021, 1:25:05 AM",
    iconBackgroundColor: "pfmmoneyinbackgroundcolor",
    amount: "500",
  },
  {
    title: "EHIZOJIE IHAYERE",
    leftIcon: "arrow-backward",
    subtitle: "DEBIT . 07/01/2021, 1:25:05 AM",
    iconBackgroundColor: "pfmmoneyoutbackgroundcolor",
    amount: "3,900",
  },
  {
    title: "EHIZOJIE IHAYERE SOLOMON/MOBILE ...",
    leftIcon: "arrow-backward",
    subtitle: "DEBIT . 07/01/2021, 1:25:05 AM",
    iconBackgroundColor: "pfmmoneyoutbackgroundcolor",
    amount: "750",
  },
];

export const EditCategoryNameScreen: VFC<
  PfmNavigationProps<"financialManagementScreen">
> = () => {
  const { t } = useTranslation();
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
                <Text fontSize={16} fontStyle="normal" fontWeight="500">
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
  );
};
