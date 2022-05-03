import { VFC } from "react";
import { SvgProps } from "react-native-svg";

import { Theme, useTheme } from "@/shared/theme";

import { svgIconPack, SvgIconPackType } from "./svgIconPack";

export type SvgIconProps = Omit<SvgProps, "color"> & {
  name: SvgIconPackType;
  size?: keyof Theme["iconSizes"];
  color?: keyof Theme["colors"];
};

const SvgIcon: VFC<SvgIconProps> = (props) => {
  const { name, size = "md", color = "whiteColor", ...rest } = props;

  const theme = useTheme();

  const Icon = svgIconPack[name];
  const iconSize = theme.iconSizes[size];
  const iconColor = theme.colors[color];

  return <Icon color={iconColor} {...iconSize} {...rest} />;
};

export { SvgIcon };
