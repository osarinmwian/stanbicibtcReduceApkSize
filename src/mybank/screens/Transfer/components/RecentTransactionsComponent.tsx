import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import recentTransactionList from "@/mybank/screens/Transfer/files/recentTransactionList";
import { Box } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";
import { RFValue } from "@/shared/utils/functions";

const styles = StyleSheet.create({
  container: {
    borderRadius: RFValue(20),
    height: RFValue(40),
    width: RFValue(40),
  },
});

export default function RecentTransactionsComponent() {
  return (
    <Box flex={1} flexDirection="row">
      {recentTransactionList.map((item) => (
        <Box
          alignItems="center"
          flex={1}
          justifyContent="center"
          key={item.name}
          paddingHorizontal="md"
          paddingVertical="md"
        >
          <LinearGradient colors={item.background} style={styles.container}>
            <TouchableOpacity
              style={[
                styles.container,
                { alignItems: "center", justifyContent: "center" },
              ]}
            >
              <Text color="whiteColor" variant="regular14">
                {item.name.slice(0, 2).toUpperCase()}
              </Text>
            </TouchableOpacity>
          </LinearGradient>
          <Text color="black" paddingVertical="sm" variant="regular10">
            {item.name}
          </Text>
        </Box>
      ))}
    </Box>
  );
}
