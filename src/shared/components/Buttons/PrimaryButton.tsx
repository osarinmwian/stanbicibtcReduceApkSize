import { VariantProps } from "@shopify/restyle";
import React, { FC } from "react";
import { ActivityIndicator } from "react-native";

import { Box } from "@/shared/components/Layout";
import { Text, TextProps } from "@/shared/components/Typography";
import { Theme, useTheme } from "@/shared/theme";
import { PaletteType } from "@/shared/theme/palette";

import { BaseButton, BaseButtonProps } from "./BaseButton";

type PrimaryButtonProps = BaseButtonProps &
  VariantProps<Theme, "textVariants", "labelVariant"> & {
    label: string;
    labelProps?: Omit<TextProps, "children">;
    isLoading?: boolean;
    loadingIconColor?: PaletteType;
  };

const PrimaryButton: FC<PrimaryButtonProps> = (props) => {
  const {
    label,
    isLoading,
    labelVariant,
    labelProps,
    loadingIconColor,
    ...rest
  } = props;

  const theme = useTheme();

  const activityIndicatorColor = theme.colors[loadingIconColor ?? "whiteColor"];

  return (
    <BaseButton {...rest}>
      <Box flexDirection="row">
        <Text variant={labelVariant} {...labelProps}>
          {label}
        </Text>
        {isLoading ? (
          <Box marginLeft="sm">
            <ActivityIndicator color={activityIndicatorColor} />
          </Box>
        ) : null}
      </Box>
    </BaseButton>
  );
};

export { PrimaryButton };
