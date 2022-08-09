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

    flexDirection: "row",

    // borderRadius: RFValue(50),
    height: RFValue(40),

    justifyContent: "space-between",

    // paddingVertical: RFValue(8),
    padding: RFValue(10),
  },
  iconContainer: {
    alignItems: "center",
    borderRadius: RFValue(24),
    height: RFValue(48),
    justifyContent: "center",
    width: RFValue(48),
  },
  rotate: {
    transform: [{ rotate: "90deg" }],
  },
});

const HeaderComponent = () => (
  <Box flex={1} flexDirection="row" padding="md">
    <Box flex={1} mt="md">
      <Text color="secondaryBlack" mb="xs" variant="medium10">
        Sort by:
      </Text>
      <TouchableOpacity activeOpacity={0.75} style={styles.container}>
        <Text color="secondaryBlack" variant="regular10">
          All
        </Text>
        <Icon
          color="secondaryBlack"
          name="forward"
          size="xs"
          style={styles.rotate}
        />
      </TouchableOpacity>
    </Box>
    <Box flex={1} mt="md" paddingHorizontal="sm">
      <Text color="secondaryBlack" mb="xs" variant="medium10">
        Date From
      </Text>
      <TouchableOpacity activeOpacity={0.75} style={styles.container}>
        <Text color="secondaryBlack" variant="regular10">
          May 1,2021
        </Text>
        <Icon
          color="secondaryBlack"
          name="forward"
          size="xs"
          style={styles.rotate}
        />
      </TouchableOpacity>
    </Box>
    <Box flex={1} mt="md">
      <Text color="secondaryBlack" mb="xs" variant="medium10">
        Date To
      </Text>
      <TouchableOpacity activeOpacity={0.75} style={styles.container}>
        <Text color="secondaryBlack" variant="regular10">
          May 30,2021
        </Text>
        <Icon
          color="secondaryBlack"
          name="forward"
          size="xs"
          style={styles.rotate}
        />
      </TouchableOpacity>
    </Box>
  </Box>
);

const ENairaHistory = () => (
  <LayoutComponent label="FX PAYMENT">
    <FlatList
      data={[1, 2, 3, 4, 5, 6, 7, 1, 1, 1, 1, 1, 1, 1, 1]}
      keyExtractor={(item, index) => index.toString()}
      ListHeaderComponent={<HeaderComponent />}
      renderItem={({ item, index }) => (
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
      )}
      showsVerticalScrollIndicator={false}
    />
  </LayoutComponent>
);

export default ENairaHistory;
