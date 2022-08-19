import React from "react";
import { useTranslation } from "react-i18next";
import { ScrollView, TouchableOpacity } from "react-native";

import { EnairaNavigationProps } from "@/mybank/navigation/types";
import TransactionHistoryListComponent from "@/mybank/screens/Transfer/components/TransactionHistoryListComponent";
import { Box, LayoutComponent } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";

import BuyOrSellEnairaButton from "../components/BuyOrSellEnairaButton";
import CopyButton from "../components/CopyButton";

export default function ENairaHome({
  navigation,
}: EnairaNavigationProps<"ENairaHome">) {
  const { t } = useTranslation();
  const data = [1, 2, 3, 4, 5, 6];

  const handleBuyEnaira = () => {
    navigation.navigate("BuyENaira");
  };
  const handleSellEnaira = () => {
    navigation.navigate("SellENaira");
  };
  const handleSeeHistory = () => {
    navigation.navigate("ENairaHistory");
  };
  return (
    <LayoutComponent label="ENAIRA">
      <Box
        backgroundColor="whiteColor"
        borderTopLeftRadius="md"
        borderTopRightRadius="md"
        flex={1}
        paddingHorizontal="md"
      >
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <Box marginTop="lg">
            <Text variant="bold14">
              {t("mybank.transfer.enaira.home.hometitle")}
            </Text>
            <Text color="textTint" mb="sml" mt="sm" variant="regular12">
              {t("mybank.transfer.enaira.home.homeparagraph")}
            </Text>
          </Box>
          <Box
            alignItems="center"
            backgroundColor="confirmCard"
            borderRadius="sm"
            justifyContent="center"
            padding="lg"
          >
            <Text color="primaryColor" variant="regular14">
              {" "}
              {t("mybank.transfer.enaira.home.walletbalance")}
            </Text>
            <Text color="primaryColor" variant="medium14">
              $20,0000
            </Text>
          </Box>
          <Box marginVertical="sml">
            <Box
              alignItems="center"
              flexDirection="row"
              justifyContent="space-between"
            >
              <Box>
                <Text variant="medium14">userName</Text>
                <Text color="textTint">
                  {t("mybank.transfer.enaira.home.username")}
                </Text>
              </Box>
              <CopyButton onPress={() => {}} />
            </Box>
            <Box
              alignItems="center"
              flexDirection="row"
              justifyContent="space-between"
              marginTop="md"
            >
              <Box>
                <Text variant="medium14">544665676</Text>
                <Text color="textTint">
                  {t("mybank.transfer.enaira.home.walletid")}
                </Text>
              </Box>
              <CopyButton onPress={() => {}} />
            </Box>
          </Box>
          <Box marginTop="sm">
            <Box>
              <Text color="textTint">
                {t("mybank.transfer.enaira.home.buyorsend")}
              </Text>
            </Box>
            <Box
              flexDirection="row"
              justifyContent="space-between"
              marginTop="sm"
            >
              <BuyOrSellEnairaButton
                gradient="secondary"
                iconBackground="primaryColor"
                iconName
                iconTitle={t("mybank.transfer.enaira.home.buy")}
                onPress={handleBuyEnaira}
              />
              <BuyOrSellEnairaButton
                gradient="tatiary"
                iconBackground="secondary1"
                iconName={false}
                iconTitle={t("mybank.transfer.enaira.home.sell")}
                onPress={handleSellEnaira}
              />
            </Box>
          </Box>
          <Box
            flexDirection="row"
            justifyContent="space-between"
            marginVertical="sml"
          >
            <Text color="textTint">
              {t("mybank.transfer.enaira.home.recenthistory")}
            </Text>
            <TouchableOpacity onPress={handleSeeHistory}>
              <Text color="primaryColor">
                {t("mybank.transfer.enaira.home.seeall")}
              </Text>
            </TouchableOpacity>
          </Box>
          {data.map((item, index) => (
            <Box key={item}>
              <TransactionHistoryListComponent
                accountName="SCHOOL FEES"
                amount="$10,000"
                date="07/01/2021. 2:13:05AM"
                index={index}
                item={item}
                onPress={() => {}}
                transactionType="PENDING"
              />
            </Box>
          ))}
        </ScrollView>
      </Box>
    </LayoutComponent>
  );
}
