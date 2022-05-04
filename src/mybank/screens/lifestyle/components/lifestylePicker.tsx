import React from "react";

import { ImageIcon, ImageIconPackType, SvgIcon } from "@/shared/assets/icons";
import { Box } from "@/shared/components/Layout";
import Pressable, { PressableProps } from "@/shared/components/Pressable";
import { Text } from "@/shared/components/Typography";

interface LifestylePickerTypes {
  destination: PressableProps["onPress"];
  name: ImageIconPackType;
  heading: string;
  subHeading: string;
}

const LifestylePicker = ({
  destination,
  name,
  heading,
  subHeading,
}: LifestylePickerTypes) => (
  <Pressable
    alignItems="center"
    backgroundColor="paleGrey50"
    borderRadius="sm"
    flexDirection="row"
    justifyContent="space-between"
    marginVertical="sm"
    onPress={destination}
    padding="md"
  >
    <Box alignItems="center" flexDirection="row" justifyContent="space-between">
      <ImageIcon
        color="black"
        name={name}
        size="sm"
        style={{ marginRight: 16 }}
      />
      <Box>
        <Text fontWeight="500">{heading}</Text>
        <Text fontWeight="200" marginTop="xs">
          {subHeading}
        </Text>
      </Box>
    </Box>
    <SvgIcon name="chevron-forward" size="sm" />
  </Pressable>
);

export default LifestylePicker;
