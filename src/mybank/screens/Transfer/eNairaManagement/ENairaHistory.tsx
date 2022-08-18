import React from "react";
import { FlatList, TouchableOpacity } from "react-native";

import TransactionHistoryListComponent from "@/mybank/screens/Transfer/components/TransactionHistoryListComponent";
import { Icon } from "@/shared/assets/icons";
import { Box, SafeAreaView } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";

import { styles } from "./styles/ENairaStyles";

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
  <SafeAreaView flex={1}>
    <Box marginTop="lg">
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
    </Box>
  </SafeAreaView>
);

export default ENairaHistory;
