import React from "react";
import { RFValue } from "react-native-responsive-fontsize";

import { IconVector } from "@/shared/assets/icons/IconVector";
import { Box } from "@/shared/components/Layout";
import Pressable, { PressableProps } from "@/shared/components/Pressable";
import { Text } from "@/shared/components/Typography";

interface LifestylePickerTypes {
  increase: PressableProps["onPress"];
  decrease: PressableProps["onPress"];
  heading: string;
  numberInCategory: number;
  subHeading?: string;
}

const PassengerPicker = ({
  increase,
  decrease,
  heading,
  numberInCategory,
  subHeading,
}: LifestylePickerTypes) => (
  <Box
    alignItems="center"
    backgroundColor="paleGrey"
    borderRadius="sm"
    flexDirection="row"
    justifyContent="space-between"
    marginVertical="ss"
    padding="sm"
  >
    <Box alignItems="center" flexDirection="row" justifyContent="space-between">
      <Box>
        <Text variant="medium14">
          {numberInCategory} {heading}
        </Text>
        <Text marginTop="ssm" variant="regular12">
          {subHeading}
        </Text>
      </Box>
    </Box>
    <Box flexDirection="row">
      <Pressable onPress={decrease}>
        <IconVector
          color="primaryColor"
          name="minusSquare"
          size="m"
          style={{ marginRight: RFValue(6) }}
        />
      </Pressable>
      <Pressable onPress={increase}>
        <IconVector
          color="primaryColor"
          name="plusSquare"
          size="m"
          style={{ marginLeft: RFValue(6) }}
        />
      </Pressable>
    </Box>
  </Box>
);

export default PassengerPicker;
