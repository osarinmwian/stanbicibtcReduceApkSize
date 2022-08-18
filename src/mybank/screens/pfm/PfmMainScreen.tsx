import React, { VFC } from "react";
import { ScrollView } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import { loginBackground } from "@/mybank/assets/image/";
import { EligibilityButton } from "@/mybank/components/Buttons";
import { PfmNavigationProps } from "@/mybank/navigation/types";
import { Box, ImageBackground, SafeAreaView } from "@/shared/components/Layout";
import { HangingCard } from "@/mybank/components/Cards/HangingCard";
import { Text } from "@/shared/components/Typography";
import { CategoryButton } from "@/mybank/components/Buttons/CategoryButton";
import { BarChartUI } from "@/mybank/components/Charts";
import { PaletteType } from "@/shared/theme/palette";
import { SvgIconPackType } from "@/shared/assets/icons";
import { useTranslation } from "react-i18next";

type CategoryProps = {
  title: string;
  subtitle: string;
  backgroundColor: PaletteType;
  rightColor: PaletteType;
  amount: string;
  leftIcon: SvgIconPackType;
  id?: number;
};

export const data: CategoryProps[] = [
  {
    title: "Education",
    leftIcon: "graduationCap",
    subtitle: "140 transactions",
    amount: "30,000,000",
    rightColor: "pfmeducationblue",
    backgroundColor: "pfmeducationbackgroundcolor",
    id: 1,
  },
  {
    title: "Beauty & Clothing",
    leftIcon: "tshirt",
    subtitle: "19 transactions",
    amount: "26,000",
    rightColor: "pfmclothorange",
    backgroundColor: "pfmclothbackgroundcolor",
    id: 2,
  },
  {
    title: "Auto & Transport",
    leftIcon: "car-white",
    subtitle: "19 transactions",
    amount: "206,650",
    rightColor: "pfmtransportpink",
    backgroundColor: "pfmtransportbackgroundColor",
    id: 3,
  },
  {
    title: "Gifts & Entertainment",
    leftIcon: "gift",
    subtitle: "140 transactions",
    amount: "30,000,000",
    rightColor: "pfmgiftorange",
    backgroundColor: "pfmgiftbackgroundColor",
    id: 4,
  },
  {
    title: "Cash (ATM & Bank)",
    leftIcon: "money-bill",
    subtitle: "19 transactions",
    amount: "26,000",
    rightColor: "lightgreen",
    backgroundColor: "pfmcashbackgroundcolor",
    id: 5,
  },
  {
    title: "Food & Dining",
    leftIcon: "utensils",
    subtitle: "19 transactions",
    amount: "200,650",
    rightColor: "pfmfoodred",
    backgroundColor: "pfmfoodbackgroundcolor",
    id: 6,
  },
  {
    title: "Bills & Utilities",
    leftIcon: "copy",
    subtitle: "19 transactions",
    amount: "26,000",
    rightColor: "pfmbillsbluegreen",
    backgroundColor: "pfmbillsbackgroundcolor",
    id: 7,
  },
  {
    title: "Health & Wellness",
    leftIcon: "briefcase",
    subtitle: "19 transactions",
    amount: "26,000",
    rightColor: "pfmhealthpurple",
    backgroundColor: "pfmhealthbackgroundcolor",
    id: 8,
  },
  {
    title: "Others - CI",
    leftIcon: "building",
    subtitle: "19 transactions",
    amount: "200, 650",
    rightColor: "pfmothersred",
    backgroundColor: "pfmothersbackgroundcolor",
    id: 9,
  },
  {
    title: "Loans",
    leftIcon: "university",
    subtitle: "19 transactions",
    amount: "30,000,000",
    rightColor: "pfmloansgreen",
    backgroundColor: "pfmloansbackgroundcolor",
    id: 10,
  },
  {
    title: "Savings & Investment",
    leftIcon: "piggy-bank",
    subtitle: "19 transactions",
    amount: "26,000",
    rightColor: "pfmsavingsblue",
    backgroundColor: "pfmsavingsbackgroundcolor",
    id: 11,
  },
  {
    title: "Transfer",
    leftIcon: "exchange-alt",
    subtitle: "19 transactions",
    amount: "26,000",
    rightColor: "pfmtransferblue",
    backgroundColor: "pfmtransferbackgroundcolor",
    id: 12,
  },
  {
    title: "Travel",
    leftIcon: "plane-horizontal",
    subtitle: "19 transactions",
    amount: "26,000",
    rightColor: "pfmtravelyellow",
    backgroundColor: "pfmtravelbackgroundcolor",
    id: 13,
  },
  {
    title: "Housing",
    leftIcon: "home",
    subtitle: "19 transactions",
    amount: "26,000",
    rightColor: "pfmhousingpink",
    backgroundColor: "pfmhousingbackgroundcolor",
    id: 14,
  },
  {
    title: "Insurance",
    leftIcon: "car-crash",
    subtitle: "19 transactions",
    amount: "26,000",
    rightColor: "pfminsuranceorange",
    backgroundColor: "pfminsurancebackgroundcolor",
    id: 15,
  },
];

const PfmMainScreen: VFC<PfmNavigationProps<"PfmMainScreen">> = ({
  navigation,
}) => {
  const { t } = useTranslation();
  return (
    <ImageBackground flex={1} source={loginBackground}>
      <SafeAreaView flex={1}>
        <Box flex={1}>
          <Box height={RFValue(150)} />
          <Box backgroundColor="whiteColor" flex={1} px="md">
            <Box style={{ marginTop: RFValue(-75) }} width="100%">
              <HangingCard />
            </Box>
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ backgroundColor: "white" }}
            >
              <Box my="sm">
                <Box my="md">
                  <Text variant="medium12" fontWeight="400">
                    {t("pfm.transactionSummary").toUpperCase()}
                  </Text>
                  <Text fontVariant="p" variant="regular12" color="textColor3">
                    {t("pfm.showingSummary")}
                  </Text>
                </Box>

                <Box flexDirection="row" justifyContent="space-evenly">
                  <Box
                    flex={0.9}
                    padding="md"
                    borderRadius="sm"
                    backgroundColor="cardSecondary"
                  >
                    <Box alignItems="center">
                      <Text variant="font14" color="textColor3">
                        N10,125,540.00
                      </Text>
                    </Box>
                    <Box
                      flexDirection="row"
                      alignItems="center"
                      mt="xs"
                      justifyContent="center"
                    >
                      <Box
                        height={RFValue(5)}
                        width={RFValue(12)}
                        marginRight="sm"
                        backgroundColor="pfmorange"
                        borderRadius="md"
                      />
                      <Text color="pfmorange">{t("pfm.withdrawal")}</Text>
                    </Box>
                  </Box>
                  <Box flex={0.1}></Box>
                  <Box
                    flex={0.9}
                    padding="md"
                    borderRadius="sm"
                    backgroundColor="cardSecondary"
                  >
                    <Box alignItems="center">
                      <Text variant="font14" color="textColor3">
                        N10,125,540.00
                      </Text>
                    </Box>
                    <Box
                      flexDirection="row"
                      alignItems="center"
                      mt="xs"
                      justifyContent="center"
                    >
                      <Box
                        height={RFValue(5)}
                        width={RFValue(12)}
                        marginRight="sm"
                        backgroundColor="pfmgreen"
                        borderRadius="md"
                      />
                      <Text color="pfmgreen">{t("pfm.deposit")}</Text>
                    </Box>
                  </Box>
                </Box>
                <Box mt="md">
                  <BarChartUI />
                </Box>

                <Box my="lg">
                  <Text variant="medium12" fontWeight="400">
                    {t("pfm.category").toUpperCase()}
                  </Text>
                  <Text fontVariant="p" variant="regular12" color="textColor3">
                    {t("pfm.clickCategory")}
                  </Text>
                </Box>
                {data.map((dataItem, index) => (
                  <Box mb="md" key={`transacton-category-main-${index}`}>
                    <CategoryButton
                      {...dataItem}
                      onPress={() =>
                        navigation.navigate("financialManagementScreen")
                      }
                    />
                  </Box>
                ))}
              </Box>
            </ScrollView>
          </Box>
        </Box>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default PfmMainScreen;
