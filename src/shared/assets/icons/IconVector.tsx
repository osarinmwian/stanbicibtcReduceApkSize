import { VFC } from "react";

import { Box, BoxProps } from "@/shared/components/Layout";

import { SvgIcon, SvgIconProps } from "./SvgIcon";

export type IconProps = SvgIconProps & {
  containerProps?: BoxProps;
};

const IconVector: VFC<IconProps> = ({ containerProps, ...rest }) => (
  <Box {...containerProps}>
    <SvgIcon color="whiteColor" size="sm" {...rest} />
  </Box>
);

export { IconVector };
