import { VFC } from "react";

import { Icon } from "@/shared/assets/icons";
import { IconProps } from "@/shared/assets/icons/Icon";
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
      <Icon
        color="whiteColor"
        name={props.isVisible ? "eyeOpen" : "eyeClosed"}
        {...props.iconProps}
      />
    </BaseButton>
  </Box>
);

export { TogglePasswordIconButton };
