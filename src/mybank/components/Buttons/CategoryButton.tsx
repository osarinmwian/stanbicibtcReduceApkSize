import React, { VFC } from "react";

import { BaseButton } from "@/shared/components/Buttons";
import { BaseButtonProps } from "@/shared/components/Buttons/BaseButton";
import { Box, BoxProps } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";
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
  subtitleFontWeight?:
    | "normal"
    | "bold"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700";
};

export const CategoryButton: VFC<CategoryButtonProps> = (props) => {
  const {
    title,
    leftIconProps,
    subtitleFontWeight = "normal",
    hideSubtitle = false,
    iconBackgroundColor,
    subtitle,
    backgroundColor = "paleGrey",
    containerProps,
    rightColor = "lightred",
    amount = "30,000,000",
    ...rest
  } = props;

  return (
    <BaseButton
      backgroundColor={backgroundColor}
      borderRadius="lg"
      leftIconProps={{
        size: "md",
        containerProps: {
          margin: "none",
          marginRight: "md",
          backgroundColor: iconBackgroundColor ?? rightColor,
          padding: "sm",
          borderRadius: "lg",
        },
        ...leftIconProps,
      }}
      padding="lg"
      rightComponent={
        <Box px="sm">
          <Text
            color={rightColor}
            fontSize={16}
            fontWeight="700"
            variant="regular14"
          >
            ₦{amount}
          </Text>
        </Box>
      }
      size="none"
      {...rest}
    >
      <Box flex={1} {...containerProps} justifyContent="center" padding="ss">
        <Box>
          <Text color="black" fontWeight="500" variant="font14">
            {title}
          </Text>
          {!hideSubtitle && (
            <Text
              fontVariant="caption"
              fontWeight={subtitleFontWeight}
              variant="regular12"
            >
              {subtitle}
            </Text>
          )}
        </Box>
      </Box>
    </BaseButton>
  );
};
