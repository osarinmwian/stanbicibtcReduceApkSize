import {
  createRestyleComponent,
  createVariant,
  VariantProps,
} from "@shopify/restyle";
import { ComponentProps, FC } from "react";
import { TouchableOpacity } from "react-native";

import { Theme } from "@/shared/theme";

import { Box } from "../Layout";

type BoxComponentProps = ComponentProps<typeof Box>;

type RestyleProps = BoxComponentProps & VariantProps<Theme, "buttonVariants">;

export type BaseButtonProps = RestyleProps & {
  disabled?: boolean;
  onPress: () => void;
  touchableOpacityProps?: ComponentProps<typeof TouchableOpacity>;
};

const cardVariant = createVariant<Theme, "buttonVariants">({
  themeKey: "buttonVariants",
});

const Card = createRestyleComponent<
  VariantProps<Theme, "buttonVariants"> & BoxComponentProps,
  Theme
>([cardVariant], Box);

const BaseButton: FC<BaseButtonProps> = (props) => {
  const { onPress, disabled, touchableOpacityProps, children, ...rest } = props;

  const disabledOpacity = disabled ? 0.5 : 1;

  return (
    <TouchableOpacity
      activeOpacity={0.75}
      disabled={disabled}
      onPress={onPress}
      /* eslint-disable-next-line react/jsx-props-no-spreading */
      {...touchableOpacityProps}
    >
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Card {...rest} opacity={disabledOpacity}>
        {children}
      </Card>
    </TouchableOpacity>
  );
};

export { BaseButton };
