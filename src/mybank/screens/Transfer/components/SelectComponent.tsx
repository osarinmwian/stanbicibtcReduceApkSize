import React from "react";
import { StyleSheet } from "react-native";

import { Icon, ImageIconPackType } from "@/shared/assets/icons";
import {
  BaseButton,
  BaseButtonProps,
} from "@/shared/components/Buttons/BaseButton";
import { Box } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";
import { palette } from "@/shared/theme/palette";
import { RFValue } from "@/shared/utils/functions";

interface SelectComponentProps extends BaseButtonProps {
  iconName?: ImageIconPackType;
  label: string;
  placeholder?: string;
  onPress?: () => void;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: palette.cardSecondary,
    borderRadius: RFValue(10),
    flex: 1,
    flexDirection: "row",
    paddingLeft: RFValue(20),
    paddingRight: RFValue(24),
    paddingVertical: RFValue(16),
  },
});

export default function SelectComponent({
  iconName,
  label,
  placeholder,
  onPress,
  ...rest
}: SelectComponentProps) {
  return (
    <BaseButton
      marginVertical="sm"
      onPress={onPress}
      style={[styles.container, { minHeight: RFValue(52) }]}
      {...rest}
    >
      {iconName ? (
        <Icon color="secondaryBlack" name={iconName} size="sm" />
      ) : null}
      <Box flex={1} justifyContent="center" paddingHorizontal="md">
        <Text color="secondaryBlack" variant="medium12">
          {label}
        </Text>
        {placeholder ? (
          <Text color="secondaryBlack" marginTop="xs" variant="regular10">
            {placeholder}
          </Text>
        ) : null}
      </Box>
      <Icon color="secondaryBlack" name="forward" size="xs" />
    </BaseButton>
  );
}
