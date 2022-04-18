import { VFC } from "react";

import { Box, BoxProps } from "@/shared/components/Layout";

import { SvgIcon, SvgIconProps } from "./SvgIcon";

export type IconProps = SvgIconProps & {
  containerProps?: BoxProps;
};

const Icon: VFC<IconProps> = ({ containerProps, ...rest }) => (
  <Box {...containerProps}>
    <SvgIcon color="whiteColor" size="md" {...rest} />
  </Box>
);

export { Icon };
