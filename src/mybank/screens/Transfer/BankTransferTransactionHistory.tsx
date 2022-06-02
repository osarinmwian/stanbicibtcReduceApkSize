import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { FlatList, StyleSheet, TouchableOpacity } from "react-native";

import TransactionHistoryListComponent from "@/mybank/screens/Transfer/components/TransactionHistoryListComponent";
import { Icon } from "@/shared/assets/icons";
import { Box, LayoutComponent } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";
import { RFValue } from "@/shared/utils/functions";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",

    backgroundColor: "rgba(0, 137, 255, 0.1)",

    borderRadius: RFValue(50),

    flexDirection: "row",

    height: RFValue(48),
    // paddingVertical: RFValue(8),
    paddingRight: RFValue(15),
  },
  iconContainer: {
    alignItems: "center",
    borderRadius: RFValue(24),
    height: RFValue(48),
    justifyContent: "center",
    width: RFValue(48),
  },
});

const HeaderComponent = () => (
  <Box padding="md">
    <Text color="primaryColor" variant="medium12">
      LAST 7 days
    </Text>
    <Box flex={1} flexDirection="row" mt="md">
      <Box
        alignItems="center"
        backgroundColor="transactColor"
        borderRadius="sm"
        flex={1}
        justifyContent="center"
        mr="sm"
        p="md"
      >
        <Text color="darkGrey" variant="regular10">
          N10,125,540.00
        </Text>
        <Text color="lightred" variant="regular10">
          Debit
        </Text>
      </Box>
      <Box
        alignItems="center"
        backgroundColor="transactColor"
        borderRadius="sm"
        flex={1}
        justifyContent="center"
        ml="sm"
        p="md"
      >
        <Text color="darkGrey" variant="regular10">
          N100,56,700.86
        </Text>
        <Text color="lightgreen" variant="regular10">
          Credit
        </Text>
      </Box>
    </Box>
    <Box mt="md">
      <TouchableOpacity activeOpacity={0.75} style={styles.container}>
        <LinearGradient
          colors={["rgba(11, 134, 248, 1)", "rgba(10, 177, 255, 1)"]}
          style={styles.iconContainer}
        >
          <Icon color="whiteColor" name="coins" size="sm" />
        </LinearGradient>
        <Box flex={1} justifyContent="center" paddingHorizontal="md">
          <Text color="secondaryBlack" variant="medium12">
            Know how you spend
          </Text>
          <Text color="primaryColor" mt="xs" variant="medium12">
            Learn more in PFM
          </Text>
        </Box>
        <Icon color="secondaryColor" name="forward" size="xs" />
      </TouchableOpacity>
    </Box>
    <Text
      color="primaryColor"
      mt="lg"
      textTransform="uppercase"
      variant="medium12"
    >
      transactions
    </Text>
  </Box>
);

export default function BankTransferTransactionHistory() {
  return (
    <LayoutComponent label="TRANSACTION HISTORY">
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 1, 1, 1, 1, 1, 1, 1, 1]}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={<HeaderComponent />}
        renderItem={({ item, index }) => (
          <Box>
            <TransactionHistoryListComponent
              accountName="MOYINOLUWA JENNIFER"
              amount="+ ₦100"
              date="07/01/2021. 1:55:46 AM"
              index={index}
              item={item}
              transactionType="CREDIT"
            />
          </Box>
        )}
        showsVerticalScrollIndicator={false}
      />
    </LayoutComponent>
  );
}
