import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { Box } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";
import { palette } from "@/shared/theme/palette";
import { RFValue } from "@/shared/utils/functions";

const styles = StyleSheet.create({
  boxContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "33%",
  },
  container: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: RFValue(20),
  },
  customPad: {
    alignItems: "center",
    backgroundColor: palette.cardSecondary,
    borderRadius: RFValue(25),
    height: RFValue(50),
    justifyContent: "center",
    width: RFValue(50),
  },
  customonepassPad: {
    alignItems: "center",
    // backgroundColor: palette.cardSecondary,
    borderRadius: RFValue(25),
    height: RFValue(50),
    justifyContent: "center",
    width: RFValue(50),
  },
});

export type CustomKeyboardProps = {
  value: string;
  onChangeText: (argument: string) => void;
  onepassPin?: boolean;
};

export default function PinComponent({
  value,
  onChangeText,
  onepassPin,
}: CustomKeyboardProps) {
  const handleClick = (item: string) => {
    if (value.length === 4) {
      return;
    }
    const returnedValue = [...value, item].join("");
    onChangeText(returnedValue);
  };

  const handleDelete = () => {
    if (value.length > 0) {
      const newValue = [...value];
      newValue.pop();
      onChangeText(newValue.join(""));
    }
  };

  return (
    <Box style={{ flex: 1, padding: RFValue(10) }}>
      <Box
        style={{
          alignItems: "center",
          height: RFValue(40),
          justifyContent: "center",
        }}
      >
        <Text
          color="textTint"
          marginTop="xs"
          style={{ fontSize: 30 }}
          variant="bold24"
        >
          {value}
        </Text>
      </Box>
      <Box style={styles.container}>
        <Box style={styles.boxContainer}>
          <TouchableOpacity
            onPress={() => handleClick("1")}
            style={onepassPin ? styles.customonepassPad : styles.customPad}
          >
            <Text color="textTint" style={{ fontSize: 20 }} variant="bold14">
              1
            </Text>
          </TouchableOpacity>
        </Box>
        <Box style={styles.boxContainer}>
          <TouchableOpacity
            onPress={() => handleClick("2")}
            style={onepassPin ? styles.customonepassPad : styles.customPad}
          >
            <Text color="textTint" style={{ fontSize: 20 }} variant="bold14">
              2
            </Text>
          </TouchableOpacity>
        </Box>
        <Box style={styles.boxContainer}>
          <TouchableOpacity
            onPress={() => handleClick("3")}
            style={onepassPin ? styles.customonepassPad : styles.customPad}
          >
            <Text color="textTint" style={{ fontSize: 20 }} variant="bold14">
              3
            </Text>
          </TouchableOpacity>
        </Box>
      </Box>

      <Box style={styles.container}>
        <Box style={styles.boxContainer}>
          <TouchableOpacity
            onPress={() => handleClick("4")}
            style={onepassPin ? styles.customonepassPad : styles.customPad}
          >
            <Text color="textTint" style={{ fontSize: 20 }} variant="bold14">
              4
            </Text>
          </TouchableOpacity>
        </Box>
        <Box style={styles.boxContainer}>
          <TouchableOpacity
            onPress={() => handleClick("5")}
            style={onepassPin ? styles.customonepassPad : styles.customPad}
          >
            <Text color="textTint" style={{ fontSize: 20 }} variant="bold14">
              5
            </Text>
          </TouchableOpacity>
        </Box>
        <Box style={styles.boxContainer}>
          <TouchableOpacity
            onPress={() => handleClick("6")}
            style={onepassPin ? styles.customonepassPad : styles.customPad}
          >
            <Text color="textTint" style={{ fontSize: 20 }} variant="bold14">
              6
            </Text>
          </TouchableOpacity>
        </Box>
      </Box>

      <Box style={styles.container}>
        <Box style={styles.boxContainer}>
          <TouchableOpacity
            onPress={() => handleClick("7")}
            style={onepassPin ? styles.customonepassPad : styles.customPad}
          >
            <Text color="textTint" style={{ fontSize: 20 }} variant="bold14">
              7
            </Text>
          </TouchableOpacity>
        </Box>
        <Box style={styles.boxContainer}>
          <TouchableOpacity
            onPress={() => handleClick("8")}
            style={onepassPin ? styles.customonepassPad : styles.customPad}
          >
            <Text color="textTint" style={{ fontSize: 20 }} variant="bold14">
              8
            </Text>
          </TouchableOpacity>
        </Box>
        <Box style={styles.boxContainer}>
          <TouchableOpacity
            onPress={() => handleClick("9")}
            style={onepassPin ? styles.customonepassPad : styles.customPad}
          >
            <Text color="textTint" style={{ fontSize: 20 }} variant="bold14">
              9
            </Text>
          </TouchableOpacity>
        </Box>
      </Box>

      <Box style={styles.container}>
        <Box style={styles.boxContainer} />

        <Box style={styles.boxContainer}>
          <TouchableOpacity
            onPress={() => handleClick("0")}
            style={onepassPin ? styles.customonepassPad : styles.customPad}
          >
            <Text color="textTint" style={{ fontSize: 20 }} variant="bold14">
              0
            </Text>
          </TouchableOpacity>
        </Box>
        <Box style={styles.boxContainer}>
          <TouchableOpacity onPress={() => handleDelete()}>
            <Text color="textTint" style={{ fontSize: 20 }} variant="title">
              DELETE
            </Text>
          </TouchableOpacity>
        </Box>
      </Box>
    </Box>
  );
}
