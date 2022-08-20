import React from "react";

import { IconVector } from "@/shared/assets/icons/IconVector";
import { GradientButton } from "@/shared/components/Buttons";
import { Box } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";
import { PaletteType } from "@/shared/theme/palette";

const BuyOrSellEnairaButton: ({
  iconTitle,
  onPress,
  gradient,
  iconBackground,
  iconName,
}: {
  onPress: () => void;
  gradient: "primary" | "secondary" | "tatiary" | undefined;
  iconBackground: PaletteType;
  iconName: boolean;
  iconTitle: string;
}) => JSX.Element = ({
  onPress,
  gradient,
  iconBackground,
  iconName,
  iconTitle,
}) => (
  <GradientButton
    gradient={gradient}
    onPress={onPress}
    paddingVertical="md"
    size="xs"
  >
    <Box>
      <Box alignItems="flex-start">
        <Box
          alignItems="center"
          backgroundColor={iconBackground}
          borderRadius="lg"
          justifyContent="center"
          marginVertical="sm"
          padding="sm"
        >
          <IconVector name={iconName ? "buyEnaira" : "sellEnaira"} />
        </Box>
      </Box>
      <Text color="whiteColor" marginVertical="sm" variant="bold14">
        {iconTitle}
      </Text>
      <Text color="whiteColor" variant="regular14">
        xjhvhvj
      </Text>
      <Text color="whiteColor" variant="regular14">
        xjhvhvjxvxvgxvgvxjvx
      </Text>
    </Box>
  </GradientButton>
);

export default BuyOrSellEnairaButton;
