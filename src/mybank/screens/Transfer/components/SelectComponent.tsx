import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { Icon, ImageIconPackType } from "@/shared/assets/icons";
import { Box } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";
import { palette } from "@/shared/theme/palette";
import { RFValue } from "@/shared/utils/functions";

interface SelectComponentProps {
  iconName: ImageIconPackType;
  label: string;
  placeholder: string;
  onPress?: () => void;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: palette.cardSecondary,
    borderRadius: RFValue(10),
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: RFValue(15),
    paddingVertical: RFValue(8),
  },
});

export default function SelectComponent({
  iconName,
  label,
  placeholder,
  onPress,
}: SelectComponentProps) {
  return (
    <Box flex={1} marginVertical="sm">
      <TouchableOpacity
        activeOpacity={0.75}
        onPress={onPress}
        style={[styles.container, { minHeight: RFValue(52) }]}
      >
        <Icon color="secondaryBlack" name={iconName} size="sm" />
        <Box flex={1} justifyContent="center" paddingHorizontal="md">
          <Text color="secondaryBlack" variant="medium12">
            {label}
          </Text>
          <Text color="secondaryBlack" marginTop="xs" variant="regular10">
            {placeholder}
          </Text>
        </Box>
        <Icon color="secondaryBlack" name="forward" size="xs" />
      </TouchableOpacity>
    </Box>
  );
}
