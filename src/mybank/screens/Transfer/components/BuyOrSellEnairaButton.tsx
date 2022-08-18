import React from "react";
import { useTranslation } from "react-i18next";

import { IconVector } from "@/shared/assets/icons/IconVector";
import { GradientButton } from "@/shared/components/Buttons";
import { Box } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";
import { PaletteType } from "@/shared/theme/palette";

const BuyOrSellEnairaButton: ({
  onPress,
  gradient,
  iconBackground,
  iconName,
}: {
  onPress: () => void;
  gradient: "primary" | "secondary" | "tatiary" | undefined;
  iconBackground: PaletteType;
  iconName: boolean;
}) => JSX.Element = ({ onPress, gradient, iconBackground, iconName }) => {
  const { t } = useTranslation();
  return (
    <GradientButton
      gradient={gradient}
      marginRight="md"
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
          {t("mybank.transfer.enaira.home.buy")}
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
};

export default BuyOrSellEnairaButton;
