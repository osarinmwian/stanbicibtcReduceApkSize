import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { Icon, ImageIconPackType } from "@/shared/assets/icons";
import { Box } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";
import { palette } from "@/shared/theme/palette";
import { RFValue } from "@/shared/utils/functions";

interface ListComponentProps {
  iconName?: ImageIconPackType;
  label: string;
  placeholder: string;
  onPress?: () => void;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: palette.paleGrey25,
    borderRadius: RFValue(8),
    flexDirection: "row",
    paddingHorizontal: RFValue(15),
    paddingVertical: RFValue(8),
  },
  rotate: {
    transform: [{ rotate: "90deg" }],
  },
});

export default function ListComponent({
  iconName,
  label,
  placeholder,
  onPress,
}: ListComponentProps) {
  return (
    <Box marginVertical="sm">
      <TouchableOpacity
        activeOpacity={0.75}
        onPress={onPress}
        style={{
          ...styles.container,
          minHeight: RFValue(52),
        }}
      >
        <Box flex={1}>
          <Text color="lightGrey" variant="medium10">
            {label}
          </Text>
          <Text color="lightGrey" paddingVertical="xxs" variant="regular10">
            {placeholder}
          </Text>
        </Box>
        <Icon
          color="secondaryBlack"
          name={iconName || "forward"}
          size="xs"
          style={!iconName && styles.rotate}
        />
      </TouchableOpacity>
    </Box>
  );
}
