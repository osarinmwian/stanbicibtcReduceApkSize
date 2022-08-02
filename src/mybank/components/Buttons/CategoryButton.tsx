import React, { VFC } from "react";

import { BaseButton } from "@/shared/components/Buttons";
import { BaseButtonProps } from "@/shared/components/Buttons/BaseButton";
import { Box, BoxProps } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";
import { RFValue } from "react-native-responsive-fontsize";
import { PaletteType } from "@/shared/theme/palette";

type CategoryButtonProps = BaseButtonProps & {
  title: string;
  subtitle: string;
  rightColor?: PaletteType;
  containerProps?: BoxProps;
  amount?: string;
  backgroundColor?: PaletteType;
  iconBackgroundColor?: PaletteType;
  hideSubtitle?: boolean;
  subtitleFontWeight?: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700";
};

export const CategoryButton: VFC<CategoryButtonProps> = (props) => {
  const { title, leftIconProps, subtitleFontWeight = 'normal', hideSubtitle = false, iconBackgroundColor, subtitle, backgroundColor = "paleGrey", containerProps, rightColor = "lightred", amount = "30,000,000", ...rest } = props;

  return (
    <BaseButton
      backgroundColor={backgroundColor}
      borderRadius="lg"
      padding="lg"
      size="none"
      leftIconProps={{
        size: "md",
        containerProps: {
          margin: "none",
          marginRight: "md",
          backgroundColor: iconBackgroundColor ?? rightColor,
          padding: 'sm',
          borderRadius: 'lg'
        },
        ...leftIconProps
      }}
      rightComponent={<Box px="sm">
        <Text color={rightColor} fontWeight="700">₦{amount}</Text>
      </Box>}
      {...rest}
    >
      <Box flex={1} {...containerProps} >
        <Text fontWeight="bold">{title}</Text>
        {!hideSubtitle && <Text fontVariant="caption" fontSize={RFValue(12)} fontWeight={subtitleFontWeight}>{subtitle}</Text>}
      </Box>
    </BaseButton>
  );
};