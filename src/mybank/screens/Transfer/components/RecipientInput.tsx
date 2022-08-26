import React from "react";
import { StyleSheet } from "react-native";

import { Icon } from "@/shared/assets/icons";
import { Box } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";
import { palette } from "@/shared/theme/palette";
import { RFValue } from "@/shared/utils/functions";

interface SelectComponentProps {
  recipientName: string;
  bankName: string;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.cardSecondary,
    // alignItems: 'center',
    borderRadius: RFValue(8),

    flex: 1,

    flexDirection: "row",

    paddingHorizontal: RFValue(14),

    paddingVertical: RFValue(12),
  },
});

export default function RecipientInput({
  recipientName,
  bankName,
}: SelectComponentProps) {
  return (
    <Box flex={1} marginVertical="sm">
      <Box style={styles.container}>
        <Icon color="secondaryBlack" name="user" size="lg" />
        <Box flex={1} paddingHorizontal="md">
          <Text color="secondaryBlack" variant="regular10">
            RECIPIENT
          </Text>
          <Text color="secondaryBlack" marginTop="xs" variant="regular12">
            {recipientName}
          </Text>
          <Text color="secondaryBlack" marginTop="xs" variant="regular12">
            {bankName}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
