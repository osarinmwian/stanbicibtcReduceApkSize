import {
  createRestyleComponent,
  createVariant,
  VariantProps,
} from "@shopify/restyle";
import { ComponentProps, FC, ReactChild, VFC } from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import {
  ImageIcon,
  ImageIconPackType,
  ImageIconProps,
} from "@/shared/assets/icons";
import { Theme } from "@/shared/theme";

import { Box } from "../Layout";

type BoxComponentProps = ComponentProps<typeof Box>;

type RestyleProps = BoxComponentProps & VariantProps<Theme, "buttonVariants">;

export type BaseButtonProps = RestyleProps & {
  disabled?: boolean;
  onPress: () => void;
  touchableOpacityProps?: TouchableOpacityProps;
  leftComponent?: ReactChild;
  rightComponent?: ReactChild;
  icon?: ImageIconPackType;
  iconProps?: Omit<ImageIconProps, "name">;
};

const cardVariant = createVariant<Theme, "buttonVariants">({
  themeKey: "buttonVariants",
});

const Card = createRestyleComponent<
  VariantProps<Theme, "buttonVariants"> & BoxComponentProps,
  Theme
>([cardVariant], Box);

const Icon: VFC<ImageIconProps> = (props) => (
  <Box marginRight="sm">
    <ImageIcon color="whiteColor" size="md" {...props} />
  </Box>
);

const BaseButton: FC<BaseButtonProps> = (props) => {
  const {
    onPress,
    disabled,
    touchableOpacityProps,
    children,
    leftComponent,
    rightComponent,
    icon,
    iconProps,
    ...rest
  } = props;

  const disabledOpacity = disabled ? 0.5 : 1;

  return (
    <TouchableOpacity
      activeOpacity={0.75}
      disabled={disabled}
      onPress={onPress}
      {...touchableOpacityProps}
    >
      <Card
        {...rest}
        alignItems="center"
        flexDirection="row"
        opacity={disabledOpacity}
      >
        {leftComponent ?? null}
        {icon ? <Icon name={icon} {...iconProps} /> : null}
        {children}
        {rightComponent ?? null}
      </Card>
    </TouchableOpacity>
  );
};

export { BaseButton };
