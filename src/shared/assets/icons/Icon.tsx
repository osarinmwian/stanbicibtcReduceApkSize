import { VFC } from "react";

import { Box, BoxProps } from "@/shared/components/Layout";

import { ImageIcon, ImageIconProps } from "./ImageIcon";

type IconProps = ImageIconProps & {
  containerProps?: BoxProps;
};

const Icon: VFC<IconProps> = ({ containerProps, ...rest }) => (
  <Box {...containerProps}>
    <ImageIcon color="whiteColor" size="md" {...rest} />
  </Box>
);

export { Icon };
