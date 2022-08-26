import { VFC } from "react";
import { useTranslation } from "react-i18next";
import { ScrollView, StatusBar } from "react-native";
import { BaseButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

import { loginBackground } from "@/mybank/assets/image";
import { CategoryButton } from "@/mybank/components/Buttons/CategoryButton";
import { PfmNavigationProps } from "@/mybank/navigation/types";
import { SvgIconPackType } from "@/shared/assets/icons";
import { IconVector } from "@/shared/assets/icons/IconVector";
import { Box, ImageBackground } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";
import { PaletteType } from "@/shared/theme/palette";

type TransactionType = {
  id: string;
  title: string;
  leftIcon: SvgIconPackType;
  subtitle: string;
  iconBackgroundColor: PaletteType;
  amount: string;
};

export const FinancialManagementScreen: VFC<
  PfmNavigationProps<"financialManagementScreen">
> = ({ navigation }) => {
  const { t } = useTranslation();

  const transactions: TransactionType[] = [
    {
      id: "1",
      title: "SALARY_DANGOTE_JANUARY...",
      leftIcon: "arrow-backward",
      subtitle: `${t("pfm.debit").toUpperCase()}. 07/01/2021, 1:25:05 AM`,
      iconBackgroundColor: "pfmmoneyoutbackgroundcolor",
      amount: "3,400",
    },
    {
      id: "2",
      title: "WINIFRED EKWUNIFE",
      leftIcon: "arrow-forward",
      subtitle: `${t("pfm.credit").toUpperCase()}. 07/01/2021, 1:25:05 AM`,
      iconBackgroundColor: "pfmmoneyinbackgroundcolor",
      amount: "500",
    },
    {
      id: "3",
      title: "EHIZOJIE IHAYERE",
      leftIcon: "arrow-backward",
      subtitle: `${t("pfm.debit").toUpperCase()}. 07/01/2021, 1:25:05 AM`,
      iconBackgroundColor: "pfmmoneyoutbackgroundcolor",
      amount: "3,900",
    },
    {
      id: "4",
      title: "EHIZOJIE IHAYERE SOLOMON/MOBILE ...",
      leftIcon: "arrow-backward",
      subtitle: `${t("pfm.debit").toUpperCase()}. 07/01/2021, 1:25:05 AM`,
      iconBackgroundColor: "pfmmoneyoutbackgroundcolor",
      amount: "750",
    },
  ];
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
              <BaseButton
                onPress={() => navigation.navigate("EditCategoryNameScreen")}
              >
                <Box alignItems="center" flexDirection="row" my="lg">
                  <Text
                    color="primaryColor"
                    fontSize={RFValue(12)}
                    fontWeight="500"
                  >
                    {t("pfm.editCategoryName").toUpperCase()}
                  </Text>
                  <Box ml="sm">
                    <IconVector name="chevron-right-slim" size="m" />
                  </Box>
                </Box>
              </BaseButton>

              <Box flexDirection="row" justifyContent="space-evenly">
                <Box
                  backgroundColor="cardSecondary"
                  borderRadius="sm"
                  flex={0.9}
                  padding="md"
                >
                  <Box alignItems="center">
                    <Text fontSize={RFValue(14)} fontWeight="400">
                      N10,125,540.00
                    </Text>
                  </Box>
                  <Box
                    alignItems="center"
                    flexDirection="row"
                    justifyContent="center"
                    mt="xs"
                  >
                    <Text color="pfmorange">{t("pfm.withdrawal")}</Text>
                  </Box>
                </Box>
                <Box flex={0.2} />
                <Box
                  backgroundColor="cardSecondary"
                  borderRadius="sm"
                  flex={0.9}
                  padding="md"
                >
                  <Box alignItems="center">
                    <Text fontSize={RFValue(14)} fontWeight="400">
                      N100,56,700.86
                    </Text>
                  </Box>
                  <Box
                    alignItems="center"
                    flexDirection="row"
                    justifyContent="center"
                    mt="xs"
                  >
                    <Text color="pfmgreen">{t("pfm.deposit")}</Text>
                  </Box>
                </Box>
              </Box>

              <Box alignItems="center" flexDirection="row" my="lg">
                <Text color="primaryColor" fontSize={14} fontWeight="400">
                  {t("pfm.category").toUpperCase()}
                </Text>
              </Box>
            </Box>
            {transactions.map((item, index) => (
              <CategoryButton
                key={item.id}
                {...item}
                {...{
                  backgroundColor:
                    index % 2 ? "pfmeducationbackgroundcolor" : "transparent",
                  rightColor: "black",
                  size: "sm",
                  borderRadius: "none",
                  mb: "sm",
                  leftIconProps: { size: "sm" },
                }}
                onPress={() => navigation.navigate("TransactionHistoryScreen")}
              />
            ))}
          </Box>
        </ScrollView>
      </Box>
    </ImageBackground>
  );
};
