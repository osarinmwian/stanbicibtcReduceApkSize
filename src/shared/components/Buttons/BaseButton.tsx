import {
  backgroundColor,
  BackgroundColorProps,
  border,
  BorderProps,
  composeRestyleFunctions,
  createVariant,
  spacing,
  SpacingProps,
  useRestyle,
  VariantProps,
} from "@shopify/restyle";
import { FC } from "react";
import { TouchableOpacity } from "react-native";

import { Theme } from "@/shared/theme";

import { Box } from "../Layout";

type RestyleProps = SpacingProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme> &
  VariantProps<Theme, "buttonVariants">;

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  spacing,
  border,
  backgroundColor,
  createVariant({ themeKey: "buttonVariants" }),
]);

export type BaseButtonProps = RestyleProps & {
  activeOpacity?: number;
  disabled?: boolean;
  onPress: () => void;
};

const BaseButton: FC<BaseButtonProps> = (props) => {
  const { onPress, activeOpacity = 0.75, disabled, children, ...rest } = props;

  const containerProps = useRestyle(restyleFunctions, rest);

  const disabledOpacity = disabled ? 0.5 : 1;

  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      disabled={disabled}
      onPress={onPress}
    >
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Box {...containerProps} opacity={disabledOpacity}>
        {children}
      </Box>
    </TouchableOpacity>
  );
};

export { BaseButton };
