import {
  backgroundColor,
  border,
  createRestyleComponent,
  createVariant,
  layout,
  opacity,
  position,
  shadow,
  spacing,
  VariantProps,
  visible,
} from "@shopify/restyle";
import { FC, ReactChild } from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import { SvgIconPackType } from "@/shared/assets/icons";
import { IconProps, IconVector } from "@/shared/assets/icons/IconVector";
import { Box, BoxProps } from "@/shared/components/Layout";
import { Theme, useTheme } from "@/shared/theme";

type RestyleProps = BoxProps & VariantProps<Theme, "buttonVariants">;

export type BaseButtonProps = RestyleProps & {
  disabled?: boolean;
  onPress?: TouchableOpacityProps["onPress"];
  touchableOpacityProps?: TouchableOpacityProps;
  size?: keyof Theme["buttonSizes"];
  leftComponent?: ReactChild;
  rightComponent?: ReactChild;
  leftIcon?: SvgIconPackType;
  rightIcon?: SvgIconPackType;
  leftIconProps?: Omit<IconProps, "name">;
  rightIconProps?: Omit<IconProps, "name">;
};

const cardVariant = createVariant<Theme, "buttonVariants">({
  themeKey: "buttonVariants",
});

const Card = createRestyleComponent<RestyleProps, Theme>(
  [
    backgroundColor,
    opacity,
    visible,
    shadow,
    position,
    layout,
    spacing,
    border,
    cardVariant,
  ],
  Box,
);

const BaseButton: FC<BaseButtonProps> = (props) => {
  const {
    onPress,
    disabled,
    touchableOpacityProps,
    children,
    leftComponent,
    rightComponent,
    leftIcon,
    rightIcon,
    leftIconProps,
    rightIconProps,
    variant = "filled",
    size = "xs",
    ...rest
  } = props;

  const theme = useTheme();

  const buttonSizeValues = theme.buttonSizes[size];

  const disabledOpacity = disabled ? 0.5 : 1;

  return (
    <TouchableOpacity
      activeOpacity={0.75}
      disabled={disabled}
      onPress={onPress}
      {...touchableOpacityProps}
    >
      <Card
        alignItems="center"
        flexDirection="row"
        opacity={disabledOpacity}
        variant={variant}
        {...buttonSizeValues}
        {...rest}
      >
        {leftComponent ?? null}
        {leftIcon ? (
          <IconVector
            containerProps={{ marginRight: "sm" }}
            name={leftIcon}
            {...leftIconProps}
          />
        ) : null}
        {children}
        {rightIcon ? (
          <IconVector
            containerProps={{ marginLeft: "sm" }}
            name={rightIcon}
            {...rightIconProps}
          />
        ) : null}
        {rightComponent ?? null}
      </Card>
    </TouchableOpacity>
  );
};

export { BaseButton };
