import {
  createRestyleComponent,
  createVariant,
  VariantProps,
} from "@shopify/restyle";
import { FC, ReactChild } from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import { Icon, ImageIconPackType, ImageIconProps } from "@/shared/assets/icons";
import { Box, BoxProps } from "@/shared/components/Layout";
import { Theme, useTheme } from "@/shared/theme";

type RestyleProps = BoxProps & VariantProps<Theme, "buttonVariants">;

export type BaseButtonProps = RestyleProps & {
  disabled?: boolean;
  onPress: () => void;
  touchableOpacityProps?: TouchableOpacityProps;
  size?: keyof Theme["buttonSizes"];
  leftComponent?: ReactChild;
  rightComponent?: ReactChild;
  leftIcon?: ImageIconPackType;
  rightIcon?: ImageIconPackType;
  leftIconProps?: Omit<ImageIconProps, "name">;
  rightIconProps?: Omit<ImageIconProps, "name">;
};

const cardVariant = createVariant<Theme, "buttonVariants">({
  themeKey: "buttonVariants",
});

const Card = createRestyleComponent<RestyleProps, Theme>([cardVariant], Box);

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
    size = "md",
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
          <Icon
            containerProps={{ marginRight: "sm" }}
            name={leftIcon}
            {...leftIconProps}
          />
        ) : null}
        {children}
        {rightIcon ? (
          <Icon
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
