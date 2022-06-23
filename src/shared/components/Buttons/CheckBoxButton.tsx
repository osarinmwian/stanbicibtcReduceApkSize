import Checkbox from "expo-checkbox";
import React from "react";
import { StyleSheet } from "react-native";

import { Box } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";
import { palette } from "@/shared/theme/palette";

const styles = StyleSheet.create({
  checkbox: {
    borderColor: palette.primaryColor,
    marginVertical: 8,
  },
  checkboxContainer: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: 10,
  },
});

export type CheckBoxButtonProps = {
  isChecked: boolean;
  setChecked: (argument: boolean) => void;
  label?: string;
  placeholder?: string;
};

function CheckBoxButton({
  isChecked = false,
  setChecked,
  label,
  placeholder,
}: CheckBoxButtonProps) {
  return (
    <Box style={[styles.checkboxContainer]}>
      <Checkbox
        color={isChecked ? palette.primaryColor : undefined}
        onValueChange={setChecked}
        style={styles.checkbox}
        value={isChecked}
      />
      <Box>
        <Text
          color="black"
          marginTop="xs"
          style={{ flex: 1, paddingLeft: 10 }}
          variant="medium10"
        >
          {label}
        </Text>
        <Text
          color="black"
          style={{ flex: 1, paddingLeft: 10 }}
          variant="regular10"
        >
          {placeholder}
        </Text>
      </Box>
    </Box>
  );
}

export { CheckBoxButton };
