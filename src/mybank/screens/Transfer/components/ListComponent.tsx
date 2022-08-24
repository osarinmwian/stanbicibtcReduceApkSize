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
  biggerPlaceHolder?: boolean;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: palette.paleGrey25,
    borderRadius: RFValue(8),
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: RFValue(15),
    paddingVertical: RFValue(10),
  },
  rotate: {
    transform: [{ rotate: "90deg" }],
  },
});

export default function ListComponent({
  iconName,
  label,
  placeholder,
  biggerPlaceHolder,
  onPress,
}: ListComponentProps) {
  return (
    <Box justifyContent="center">
      <TouchableOpacity
        activeOpacity={0.75}
        onPress={onPress}
        style={{
          ...styles.container,
          minHeight: RFValue(52),
        }}
      >
        <Box flex={1} marginTop="sm">
          <Text color="textDarkTint" variant="medium10">
            {label}
          </Text>
          <Text
            color="textDarkTint"
            paddingVertical="xs"
            variant={biggerPlaceHolder ? "regular14" : "regular10"}
          >
            {placeholder}
          </Text>
        </Box>
        <Icon
          color="secondaryBlack"
          name={iconName || "forward"}
          size={iconName ? "sm" : "xs"}
          style={!iconName && styles.rotate}
        />
      </TouchableOpacity>
    </Box>
  );
}
