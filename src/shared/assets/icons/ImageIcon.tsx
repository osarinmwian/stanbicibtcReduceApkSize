import { VFC } from "react";
import { Image, ImageProps } from "react-native";

import { Theme, useTheme } from "@/shared/theme";

import { imageIconPack, ImageIconPackType } from "./imageIconPack";

export type ImageIconProps = {
  name: ImageIconPackType;
  size?: keyof Theme["iconSizes"];
  source?: ImageProps["source"];
  color?: keyof Theme["colors"];
  style?: ImageProps["style"];
  imageProps?: Omit<ImageProps, "source" | "style">;
};

const ImageIcon: VFC<ImageIconProps> = (props) => {
  const {
    name,
    source,
    style,
    imageProps,
    size = "sm",
    color = "whiteColor",
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
      {...imageProps}
    />
  );
};

export { ImageIcon };
