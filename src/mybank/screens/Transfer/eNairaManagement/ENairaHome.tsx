import React from "react";
import { useTranslation } from "react-i18next";
import { ScrollView, TouchableOpacity } from "react-native";

import { loginBackground } from "@/mybank/assets/image";
import { ENairaNavigationProps } from "@/mybank/navigation/types";
import TransactionHistoryListComponent from "@/mybank/screens/Transfer/components/TransactionHistoryListComponent";
import { Box, ImageBackground, SafeAreaView } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";

import BuyOrSellEnairaButton from "../components/BuyOrSellEnairaButton";
import CopyButton from "../components/CopyButton";

export default function ENairaHome({
  navigation,
}: ENairaNavigationProps<"BuyENaira">) {
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
    <SafeAreaView flex={1}>
      <ImageBackground
        flex={1}
        paddingTop="sm"
        resizeMode="cover"
        source={loginBackground}
      >
        <Box
          backgroundColor="whiteColor"
          borderTopLeftRadius="lg"
          borderTopRightRadius="lg"
          flex={1}
          marginTop="lg"
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
              <Text color="textTint" mb="md" mt="xs" variant="regular12">
                {t("mybank.transfer.enaira.home.homeparagraph")}
              </Text>
            </Box>
            <Box
              alignItems="center"
              backgroundColor="confirmCard"
              borderRadius="md"
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
            <Box marginVertical="md">
              <Box
                alignItems="center"
                flexDirection="row"
                justifyContent="space-between"
              >
                <Box>
                  <Text>userName</Text>
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
                marginTop="sm"
              >
                <Box>
                  <Text>wallet id</Text>
                  <Text color="textTint">
                    {t("mybank.transfer.enaira.home.walletid")}
                  </Text>
                </Box>
                <CopyButton onPress={() => {}} />
              </Box>
            </Box>
            <Box>
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
                  onPress={handleBuyEnaira}
                />
                <BuyOrSellEnairaButton
                  gradient="tatiary"
                  iconBackground="secondary1"
                  iconName={false}
                  onPress={handleSellEnaira}
                />
              </Box>
            </Box>
            <Box
              flexDirection="row"
              justifyContent="space-between"
              marginVertical="sm"
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
              <Box>
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
      </ImageBackground>
    </SafeAreaView>
  );
}

// export default ENairaHome;
