import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import{ Image }from "@/shared/components/Image";
import { Box } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";
import { palette } from "@/shared/theme/palette";
import { RFValue } from "@/shared/utils/functions";

interface TransactionHistoryListComponentProps {
  amount: string;
  accountName: string;
  date: string;
  onPress?: () => void;
  index: number;
  transactionType: string;
  item?: number | null;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: RFValue(15),
    paddingVertical: RFValue(15),
  },
});

export default function TransactionHistoryListComponent({
  amount,
  accountName,
  date,
  onPress,
  index,
  transactionType,
  item,
}: TransactionHistoryListComponentProps) {
  const isShow = false;
  return (
    <Box flex={1}>
      <TouchableOpacity
        activeOpacity={0.75}
        onPress={onPress}
        style={[
          styles.container,
          {
            backgroundColor:
              index % 2 === 0 ? palette.lightpurple : palette.whiteColor,
            minHeight: RFValue(52),
          },
        ]}
      >
        <Image
          height={RFValue(32)}
          source={require("../../../assets/image/credit.png")}
          width={RFValue(32)}
        />
        <Box flex={1} justifyContent="center" paddingHorizontal="md">
          <Text color="secondaryBlack" variant="medium12">
            {accountName}
          </Text>
          <Box flex={1} flexDirection="row" mt="xs">
            <Text color="secondaryBlack" pr="sm" variant="regular10">
              {transactionType}
            </Text>
            <Text color="secondaryBlack" variant="regular10">
              {date}
            </Text>
          </Box>
        </Box>
        <Text color="secondaryBlack" variant="medium12">
          {amount}
        </Text>
        {isShow && (
          <Text color="secondaryBlack" variant="medium12">
            {item}
          </Text>
        )}
      </TouchableOpacity>
    </Box>
  );
}
