import React, { VFC } from "react";
import { RFValue } from "react-native-responsive-fontsize";

import { logo } from "@/shared/assets/image";
import { Image, ImageProps } from "@/shared/components/Image";
import { Box, BoxProps } from "@/shared/components/Layout";
import { Optional } from "@/shared/utils/functions/type";

type LogoProps = Optional<ImageProps, "source"> & {
  containerProps?: BoxProps;
};

const Logo: VFC<LogoProps> = ({ containerProps, ...rest }) => (
  <Box py="xs" {...containerProps}>
    <Image
      aspectRatio={3 / 4}
      fadeDuration={0}
      height={RFValue(40)}
      resizeMode="contain"
      source={logo}
      {...rest}
    />
  </Box>
);

export { Logo };
