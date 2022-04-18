import { VFC } from "react";
import { Image, ImageProps } from "react-native";

import { Theme, useTheme } from "@/shared/theme";
import type { Optional } from "@/shared/utils/functions/type";

import { imageIconPack, ImageIconPackType } from "./imageIconPack";

export type ImageIconProps = Optional<ImageProps, "source"> & {
  name: ImageIconPackType;
  size?: keyof Theme["iconSizes"];
  source?: ImageProps["source"];
  color?: keyof Theme["colors"];
};

const ImageIcon: VFC<ImageIconProps> = (props) => {
  const {
    name,
    source,
    style,
    size = "md",
    color = "whiteColor",
    ...rest
  } = props;

  const theme = useTheme();

  const icon = imageIconPack[name];
  const iconSize = theme.iconSizes[size];
  const iconColor = theme.colors[color];

  return (
    <Image
      fadeDuration={0}
      resizeMode="contain"
      source={source || icon}
      style={[
        {
          ...iconSize,
          tintColor: iconColor,
        },
        style,
      ]}
      {...rest}
    />
  );
};

export { ImageIcon };
