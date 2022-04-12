import {
  createRestyleComponent,
  createVariant,
  VariantProps,
} from "@shopify/restyle";
import { VFC } from "react";

import { Theme, useTheme } from "@/shared/theme";

import { Box, BoxProps } from "../Layout";
import { BaseTextInput, BaseTextInputProps } from "./BaseTextInput";

const cardVariant = createVariant<Theme, "textInputVariants">({
  themeKey: "textInputVariants",
});

const Card = createRestyleComponent<
  VariantProps<Theme, "textInputVariants"> & BoxProps,
  Theme
>([cardVariant], Box);

export type TextInputProps = BaseTextInputProps & {
  ContainerProps?: BoxProps;
};

const TextInput: VFC<TextInputProps> = (props) => {
  const {
    disabled,
    ContainerProps,
    variant = "filled",
    size = "md",
    ...rest
  } = props;

  const theme = useTheme();

  const TextInputSizeValues = theme.textInputSizes[size];

  const disabledOpacity = disabled ? 0.5 : 1;

  return (
    <Card
      opacity={disabledOpacity}
      variant={variant}
      width="100%"
      {...TextInputSizeValues}
      {...ContainerProps}
    >
      <BaseTextInput
        paddingHorizontal="none"
        paddingVertical="none"
        variant="ghost"
        {...rest}
      />
    </Card>
  );
};

export { TextInput };
