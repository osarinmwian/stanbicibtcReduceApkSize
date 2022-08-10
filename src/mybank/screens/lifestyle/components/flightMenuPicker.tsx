import React from "react";

import { SvgIconPackType } from "@/shared/assets/icons";
import { IconVector } from "@/shared/assets/icons/IconVector";
import { Box } from "@/shared/components/Layout";
import Pressable, { PressableProps } from "@/shared/components/Pressable";
import { Text } from "@/shared/components/Typography";

interface LifestylePickerTypes {
  onPress: PressableProps["onPress"];
  heading: string;
  iconName?: SvgIconPackType;
  subHeading?: string;
}

const FlightMenuPicker = ({
  onPress,
  heading,
  iconName,
  subHeading,
}: LifestylePickerTypes) => (
  <Pressable
    alignItems="center"
    backgroundColor="paleGrey"
    borderRadius="sm"
    flexDirection="row"
    justifyContent="space-between"
    marginVertical="ss"
    onPress={onPress}
    padding="sm"
  >
    <Box
      alignItems="center"
      flexDirection="row"
      justifyContent="space-between"
      paddingVertical={subHeading ? "xxs" : "ssm"}
    >
      <Box>
        <Text variant="regular12">{heading}</Text>
        {subHeading && (
          <Text marginTop="ssm" variant="medium12">
            {subHeading}
          </Text>
        )}
      </Box>
    </Box>
    {iconName && <IconVector color="primaryColor" name={iconName} size="m" />}
  </Pressable>
);

export default FlightMenuPicker;
