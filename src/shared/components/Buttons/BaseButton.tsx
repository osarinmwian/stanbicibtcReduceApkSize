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
import { Theme, useTheme } from "@/shared/theme";

import { Box } from "../Layout";

type BoxComponentProps = ComponentProps<typeof Box>;

type RestyleProps = BoxComponentProps & VariantProps<Theme, "buttonVariants">;

export type BaseButtonProps = RestyleProps & {
  disabled?: boolean;
  onPress: () => void;
  touchableOpacityProps?: TouchableOpacityProps;
  size?: keyof Theme["buttonSizes"];
  leftComponent?: ReactChild;
  rightComponent?: ReactChild;
  icon?: ImageIconPackType;
  iconProps?: Omit<ImageIconProps, "name">;
};

const cardVariant = createVariant<Theme, "buttonVariants">({
  themeKey: "buttonVariants",
});

const Card = createRestyleComponent<RestyleProps, Theme>([cardVariant], Box);

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
    variant,
    size = "md",
    ...rest
  } = props;

  const theme = useTheme();

  const buttonSizeValues: unknown = theme.buttonSizes[size];

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
        {icon ? <Icon name={icon} {...iconProps} /> : null}
        {children}
        {rightComponent ?? null}
      </Card>
    </TouchableOpacity>
  );
};

export { BaseButton };
