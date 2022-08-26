import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { Icon, ImageIconPackType } from "@/shared/assets/icons";
import { Box } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";
import { palette } from "@/shared/theme/palette";
import { RFValue } from "@/shared/utils/functions";

interface UploadComponentProps {
  iconName?: ImageIconPackType;
  label: string;
  placeholder: string;
  onPress?: () => void;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: palette.cardSecondary,
    borderRadius: RFValue(8),
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: RFValue(15),
    paddingVertical: RFValue(8),
  },
  rotate: {
    transform: [{ rotate: "90deg" }],
  },
});

export default function UploadComponent({
  iconName,
  label,
  placeholder,
  onPress,
}: UploadComponentProps) {
  return (
    <Box flex={1} marginVertical="sm">
      <TouchableOpacity
        activeOpacity={0.75}
        onPress={onPress}
        style={[styles.container, { minHeight: RFValue(52) }]}
      >
        <Box flex={1}>
          <Text color="secondaryBlack" variant="regular10">
            {label}
          </Text>
          <Box alignItems="center" flex={1} flexDirection="row">
            <Icon
              color="secondaryBlack"
              name={iconName || "upload"}
              size="sm"
            />
            <Text
              color="secondaryBlack"
              paddingLeft="sm"
              paddingVertical="xxs"
              variant="medium10"
            >
              {placeholder}
            </Text>
          </Box>
        </Box>
      </TouchableOpacity>
    </Box>
  );
}
