import { VFC } from "react";

import { IconProps, IconScalar } from "@/shared/assets/icons/IconScalar";
import { Box, BoxProps } from "@/shared/components/Layout";

import { BaseButton, BaseButtonProps } from "./BaseButton";

type TogglePasswordIconButtonProps = {
  isVisible: boolean;
  containerProps?: BoxProps;
  onPress: BaseButtonProps["onPress"];
  buttonProps?: BaseButtonProps;
  iconProps?: IconProps;
};

const TogglePasswordIconButton: VFC<TogglePasswordIconButtonProps> = (
  props,
) => (
  <Box marginLeft="sm" {...props.containerProps}>
    <BaseButton
      onPress={props.onPress}
      paddingHorizontal="sm"
      paddingVertical="sm"
      size="none"
      variant="transparent"
      {...props.buttonProps}
    >
      <IconScalar
        color="primaryBlack"
        name={props.isVisible ? "eyeOpen" : "eyeClosed"}
        {...props.iconProps}
      />
    </BaseButton>
  </Box>
);

export { TogglePasswordIconButton };
