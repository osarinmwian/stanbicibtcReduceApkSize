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
import { ActivityIndicator, TouchableOpacity, View } from "react-native";

import { Text } from "@/shared/components/Typography";
import { Theme } from "@/shared/theme";

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
  isLoading?: boolean;
  label: string;
  onPress: () => void;
};

const BaseButton: FC<BaseButtonProps> = (props) => {
  const {
    onPress,
    label,
    isLoading,
    activeOpacity = 0.75,
    disabled,
    children,
    ...rest
  } = props;

  const containerProps = useRestyle(restyleFunctions, rest);

  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      disabled={disabled}
      onPress={onPress}
    >
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <View {...containerProps}>
        <Text variant="buttonLabel">{label}</Text>
        {isLoading ? <ActivityIndicator /> : null}
      </View>
    </TouchableOpacity>
  );
};

export { BaseButton };
