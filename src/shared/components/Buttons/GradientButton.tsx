import {
  backgroundColor,
  border,
  createRestyleComponent,
  createVariant,
  layout,
  opacity,
  shadow,
  spacing,
  VariantProps,
  visible,
} from "@shopify/restyle";
import {
  LinearGradient,
  LinearGradientPoint,
  LinearGradientProps,
} from "expo-linear-gradient";
import { FC } from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import { Theme, useTheme } from "@/shared/theme";

import { BoxProps } from "../Layout";

type RestyleProps = Omit<BoxProps, "end" | "start"> &
  VariantProps<Theme, "buttonVariants"> &
  LinearGradientProps;

const cardVariant = createVariant<Theme, "buttonVariants">({
  themeKey: "buttonVariants",
});

const Card = createRestyleComponent<RestyleProps, Theme>(
  [
    opacity,
    backgroundColor,
    visible,
    shadow,
    layout,
    spacing,
    border,
    cardVariant,
  ],
  LinearGradient,
);

export type GradientButtonProps = Omit<RestyleProps, "colors"> & {
  disabled?: boolean;
  onPress?: TouchableOpacityProps["onPress"];
  size?: keyof Theme["buttonSizes"];
  gradient?: keyof Theme["buttonGradients"];
  touchableOpacityProps?: TouchableOpacityProps;
  start?: LinearGradientPoint | null;
  end?: LinearGradientPoint | null;
  colors?: string[];
};

const GradientButton: FC<GradientButtonProps> = (props) => {
  const {
    onPress,
    disabled,
    touchableOpacityProps,
    gradient = "primary",
    variant = "filled",
    size = "md",
    children,
    ...rest
  } = props;

  const theme = useTheme();

  const buttonSizeValues = theme.buttonSizes[size];

  const gradientColors = theme.buttonGradients[gradient];

  const disabledOpacity = disabled ? 0.5 : 1;

  return (
    <TouchableOpacity
      activeOpacity={0.75}
      disabled={disabled}
      onPress={onPress}
      {...touchableOpacityProps}
    >
      <Card
        colors={gradientColors}
        end={[1, 0.5]}
        opacity={disabledOpacity}
        start={[0, 0.5]}
        variant={variant}
        {...buttonSizeValues}
        {...rest}
      >
        {children}
      </Card>
    </TouchableOpacity>
  );
};

export { GradientButton };
