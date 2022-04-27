import React from "react";

import { ImageIcon, ImageIconPackType } from "@/shared/assets/icons";
import { Box } from "@/shared/components/Layout";
import Pressable, { PressableProps } from "@/shared/components/Pressable";
import { Text } from "@/shared/components/Typography";

interface LifestylePickerTypes {
  destination: PressableProps["onPress"];
  key: string;
  name: ImageIconPackType;
  heading: string;
  subHeading: string;
}

const FlightMenuPicker = ({
  key,
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
        size="md"
        style={{ marginRight: 16 }}
      />
      <Box>
        <Text>{heading}</Text>
        <Text>{subHeading}</Text>
      </Box>
    </Box>
    <ImageIcon color="black" name="arrowRight" size="sm" />
  </Pressable>
);

export default FlightMenuPicker;
