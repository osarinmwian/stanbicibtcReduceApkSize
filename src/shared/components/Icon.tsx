/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { SvgProps } from "react-native-svg";

import bankLogo from "@/shared/assets/svg/bankLogo.svg";

type IconFunction = React.FC<SvgProps>;

export const ICONS = {
  "bank-logo": bankLogo,
};

export type IconName = keyof typeof ICONS;
export type IconProps = SvgProps & {
  name: IconName;
  size?: number;
  style?: StyleProp<ViewStyle>;
  stroke?: string;
  outerStroke?: string;
};

/**
 * Custom Icon component based on design systems used in the figma
 */
function Icon({ name, size = 24, style, ...props }: IconProps) {
  const IconImpl: IconFunction = ICONS[name as IconName];
  return IconImpl ? (
    <IconImpl height={size} width={size} {...{ style }} {...props} />
  ) : null;
}

export default Icon;
