import {
  createRestyleComponent,
  createVariant,
  VariantProps,
} from "@shopify/restyle";
import { ReactChild, VFC } from "react";

import { Icon, SvgIconPackType, SvgIconProps } from "@/shared/assets/icons";
import { Box, BoxProps } from "@/shared/components/Layout";
import { Theme, useTheme } from "@/shared/theme";

import { BaseTextInput, BaseTextInputProps } from "./BaseTextInput";

const cardVariant = createVariant<Theme, "textInputVariants">({
  themeKey: "textInputVariants",
});

const Card = createRestyleComponent<
  VariantProps<Theme, "textInputVariants"> & BoxProps,
  Theme
>([cardVariant], Box);

export type TextInputProps = BaseTextInputProps & {
  containerProps?: BoxProps;
  leftComponent?: ReactChild;
  rightComponent?: ReactChild;
  leftIcon?: SvgIconPackType;
  rightIcon?: SvgIconPackType;
  leftIconProps?: Omit<SvgIconProps, "name">;
  rightIconProps?: Omit<SvgIconProps, "name">;
};

const TextInput: VFC<TextInputProps> = (props) => {
  const {
    disabled,
    containerProps,
    variant = "filled",
    size = "sm",
    leftComponent,
    rightComponent,
    leftIcon,
    rightIcon,
    leftIconProps,
    rightIconProps,
    ...rest
  } = props;

  const theme = useTheme();

  const TextInputSizeValues = theme.textInputSizes[size];

  const disabledOpacity = disabled ? 0.5 : 1;

  return (
    <Card
      alignItems="center"
      flexDirection="row"
      opacity={disabledOpacity}
      variant={variant}
      width="100%"
      {...TextInputSizeValues}
      {...containerProps}
    >
      {leftComponent ?? null}
      {leftIcon ? (
        <Icon
          color="primaryBlack"
          containerProps={{ marginHorizontal: "sm" }}
          name={leftIcon}
          {...leftIconProps}
        />
      ) : null}
      <BaseTextInput flex={1} size="sm" variant="transparent" {...rest} />
      {rightIcon ? (
        <Icon
          color="primaryBlack"
          containerProps={{ marginHorizontal: "sm" }}
          name={rightIcon}
          {...rightIconProps}
        />
      ) : null}
      {rightComponent ?? null}
    </Card>
  );
};

export { TextInput };
