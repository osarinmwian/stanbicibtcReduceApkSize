import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import { SvgIconProps } from "@/shared/assets/icons";
import { IconVector } from "@/shared/assets/icons/IconVector";
import { Box } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";
import { palette, PaletteType } from "@/shared/theme/palette";
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
    marginTop: RFValue(20),
  },
  customPad: {
    alignItems: "center",
    borderRadius: RFValue(1000),
    height: RFValue(50),
    justifyContent: "center",
    width: RFValue(50),
  },
});

export type CustomKeyboardProps = {
  value: string;
  onChangeText: (argument: string) => void;
  size?: number;
  numberColor?: PaletteType;
  numberFontSize?: number;
  padBackgroundColor?: PaletteType;
  manageInput?: boolean;
  isPin?: boolean;
  width?: number;
  deleteIcon?: SvgIconProps;
  noAmountBox?: boolean;
};

export default function PinComponent({
  value,
  onChangeText,
  size,
  numberColor,
  numberFontSize,
  padBackgroundColor = "cardSecondary",
  manageInput,
  isPin,
  width = 300,
  deleteIcon,
  noAmountBox,
}: CustomKeyboardProps) {
  const { t } = useTranslation();
  const handleClick = (item: string) => {
    if (isPin && value.length === 4) {
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
    <Box
      style={{
        flex: 1,
      }}
    >
      {!manageInput && (
        <Box
          style={{
            alignItems: "center",
            height: RFValue(40),
            justifyContent: "center",
          }}
        >
          <Text
            color={numberColor ?? "textTint"}
            marginTop="xs"
            style={{ fontSize: 30 }}
            variant="bold24"
          >
            {value}
          </Text>
        </Box>
      )}
      <Box
        alignItems="center"
        justifyContent="center"
        style={[styles.container]}
      >
        {noAmountBox ? <Box height={RFValue(70)} /> : null}
        <Box flexDirection="row" maxWidth={RFValue(500)} width={RFValue(width)}>
          <Box style={styles.boxContainer}>
            <TouchableOpacity onPress={() => handleClick(1)}>
              <View
                style={[
                  styles.customPad,
                  {
                    height: size ?? 50,
                    width: RFValue(size ?? 50),
                    backgroundColor: palette[padBackgroundColor],
                  },
                ]}
              >
                <Text
                  color={numberColor ?? "textTint"}
                  fontSize={RFValue(numberFontSize ?? 14)}
                  variant="bold14"
                >
                  1
                </Text>
              </View>
            </TouchableOpacity>
          </Box>
          <Box style={styles.boxContainer}>
            <TouchableOpacity onPress={() => handleClick(2)}>
              <View
                style={[
                  styles.customPad,
                  {
                    height: RFValue(size ?? 50),
                    width: RFValue(size ?? 50),
                    backgroundColor: palette[padBackgroundColor],
                  },
                ]}
              >
                <Text
                  color={numberColor ?? "textTint"}
                  fontSize={RFValue(numberFontSize ?? 14)}
                  variant="bold14"
                >
                  2
                </Text>
              </View>
            </TouchableOpacity>
          </Box>
          <Box style={styles.boxContainer}>
            <TouchableOpacity onPress={() => handleClick(3)}>
              <View
                style={[
                  styles.customPad,
                  {
                    height: RFValue(size ?? 50),
                    width: RFValue(size ?? 50),
                    backgroundColor: palette[padBackgroundColor],
                  },
                ]}
              >
                <Text
                  color={numberColor ?? "textTint"}
                  fontSize={RFValue(numberFontSize ?? 14)}
                  variant="bold14"
                >
                  3
                </Text>
              </View>
            </TouchableOpacity>
          </Box>
        </Box>
      </Box>

      <Box alignItems="center" justifyContent="center" style={styles.container}>
        <Box flexDirection="row" maxWidth={RFValue(500)} width={RFValue(width)}>
          <Box style={styles.boxContainer}>
            <TouchableOpacity onPress={() => handleClick("4")}>
              <View
                style={[
                  styles.customPad,
                  {
                    height: RFValue(size ?? 50),
                    width: RFValue(size ?? 50),
                    backgroundColor: palette[padBackgroundColor],
                  },
                ]}
              >
                <Text
                  color={numberColor ?? "textTint"}
                  fontSize={RFValue(numberFontSize ?? 14)}
                  variant="bold14"
                >
                  4
                </Text>
              </View>
            </TouchableOpacity>
          </Box>
          <Box style={styles.boxContainer}>
            <TouchableOpacity onPress={() => handleClick("5")}>
              <View
                style={[
                  styles.customPad,
                  {
                    height: RFValue(size ?? 50),
                    width: RFValue(size ?? 50),
                    backgroundColor: palette[padBackgroundColor],
                  },
                ]}
              >
                <Text
                  color={numberColor ?? "textTint"}
                  fontSize={RFValue(numberFontSize ?? 14)}
                  variant="bold14"
                >
                  5
                </Text>
              </View>
            </TouchableOpacity>
          </Box>
          <Box style={styles.boxContainer}>
            <TouchableOpacity onPress={() => handleClick("6")}>
              <View
                style={[
                  styles.customPad,
                  {
                    height: RFValue(size ?? 50),
                    width: RFValue(size ?? 50),
                    backgroundColor: palette[padBackgroundColor],
                  },
                ]}
              >
                <Text
                  color={numberColor ?? "textTint"}
                  fontSize={RFValue(numberFontSize ?? 14)}
                  variant="bold14"
                >
                  6
                </Text>
              </View>
            </TouchableOpacity>
          </Box>
        </Box>
      </Box>

      <Box alignItems="center" justifyContent="center" style={styles.container}>
        <Box flexDirection="row" maxWidth={RFValue(500)} width={RFValue(width)}>
          <Box style={styles.boxContainer}>
            <TouchableOpacity onPress={() => handleClick(7)}>
              <View
                style={[
                  styles.customPad,
                  {
                    height: RFValue(size ?? 50),
                    width: RFValue(size ?? 50),
                    backgroundColor: palette[padBackgroundColor],
                  },
                ]}
              >
                <Text
                  color={numberColor ?? "textTint"}
                  fontSize={RFValue(numberFontSize ?? 14)}
                  variant="bold14"
                >
                  7
                </Text>
              </View>
            </TouchableOpacity>
          </Box>
          <Box style={styles.boxContainer}>
            <TouchableOpacity onPress={() => handleClick(8)}>
              <View
                style={[
                  styles.customPad,
                  {
                    height: RFValue(size ?? 50),
                    width: RFValue(size ?? 50),
                    backgroundColor: palette[padBackgroundColor],
                  },
                ]}
              >
                <Text
                  color={numberColor ?? "textTint"}
                  fontSize={RFValue(numberFontSize ?? 14)}
                  variant="bold14"
                >
                  8
                </Text>
              </View>
            </TouchableOpacity>
          </Box>
          <Box style={styles.boxContainer}>
            <TouchableOpacity onPress={() => handleClick(9)}>
              <View
                style={[
                  styles.customPad,
                  {
                    height: RFValue(size ?? 50),
                    width: RFValue(size ?? 50),
                    backgroundColor: palette[padBackgroundColor],
                  },
                ]}
              >
                <Text
                  color={numberColor ?? "textTint"}
                  fontSize={RFValue(numberFontSize ?? 14)}
                  variant="bold14"
                >
                  9
                </Text>
              </View>
            </TouchableOpacity>
          </Box>
        </Box>
      </Box>

      <Box alignItems="center" justifyContent="center" style={styles.container}>
        <Box flexDirection="row" maxWidth={RFValue(500)} width={RFValue(width)}>
          <Box style={styles.boxContainer} />

          <Box style={styles.boxContainer}>
            <TouchableOpacity onPress={() => handleClick(0)}>
              <View
                style={[
                  styles.customPad,
                  {
                    height: RFValue(size ?? 50),
                    width: RFValue(size ?? 50),
                    backgroundColor: palette[padBackgroundColor],
                  },
                ]}
              >
                <Text
                  color={numberColor ?? "textTint"}
                  fontSize={RFValue(numberFontSize ?? 14)}
                  variant="bold14"
                >
                  0
                </Text>
              </View>
            </TouchableOpacity>
          </Box>
          <Box style={styles.boxContainer}>
            <TouchableOpacity onPress={() => handleDelete()}>
              {deleteIcon ? (
                <IconVector name={deleteIcon} size="sm" />
              ) : (
                <Text
                  color={numberColor ?? "textTint"}
                  fontSize={12}
                  variant="regular12"
                >
                  {t("buttons.delete").toUpperCase()}
                </Text>
              )}
            </TouchableOpacity>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
