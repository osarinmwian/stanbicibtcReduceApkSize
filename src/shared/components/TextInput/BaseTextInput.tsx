import {
  backgroundColor,
  BackgroundColorProps,
  border,
  BorderProps,
  createRestyleComponent,
  createVariant,
  layout,
  LayoutProps,
  opacity,
  OpacityProps,
  spacing,
  SpacingProps,
  typography,
  TypographyProps,
  VariantProps,
} from "@shopify/restyle";
import { VFC } from "react";
import {
  TextInput as ReactTextInput,
  TextInputProps as ReactTextInputProps,
} from "react-native";

import { Theme, useTheme } from "@/shared/theme";

type RestyleProps = LayoutProps<Theme> &
  BorderProps<Theme> &
  SpacingProps<Theme> &
  OpacityProps<Theme> &
  TypographyProps<Theme> &
  BackgroundColorProps<Theme> &
  VariantProps<Theme, "textInputVariants"> &
  ReactTextInputProps;

const textInputVariant = createVariant<Theme, "textInputVariants">({
  themeKey: "textInputVariants",
});

const TextInputComponent = createRestyleComponent<RestyleProps, Theme>(
  [
    spacing,
    opacity,
    layout,
    border,
    typography,
    backgroundColor,
    textInputVariant,
  ],
  ReactTextInput,
);

export type BaseTextInputProps = RestyleProps & {
  disabled?: boolean;
  size?: keyof Theme["textInputSizes"];
};

const BaseTextInput: VFC<BaseTextInputProps> = (props) => {
  const { disabled, variant = "filled", size = "md", ...rest } = props;

  const theme = useTheme();

  const TextInputSizeValues = theme.textInputSizes[size];

  const disabledOpacity = disabled ? 0.5 : 1;

  return (
    <TextInputComponent
      opacity={disabledOpacity}
      variant={variant}
      {...TextInputSizeValues}
      {...rest}
    />
  );
};

export { BaseTextInput };
