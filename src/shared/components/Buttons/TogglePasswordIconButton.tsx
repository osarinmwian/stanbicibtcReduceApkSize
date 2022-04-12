import { VFC } from "react";

import { Icon } from "@/shared/assets/icons";
import { Box } from "@/shared/components/Layout";

import { BaseButton } from "./BaseButton";

type TogglePasswordIconButtonProps = {
  isVisible: boolean;
  onPress: () => void;
};

const TogglePasswordIconButton: VFC<TogglePasswordIconButtonProps> = (
  props,
) => (
  <Box marginLeft="sm">
    <BaseButton
      onPress={props.onPress}
      paddingHorizontal="sm"
      paddingVertical="sm"
      size="none"
      variant="ghost"
    >
      <Icon
        color="primaryBlack"
        name={props.isVisible ? "eyeOpen" : "eyeClosed"}
      />
    </BaseButton>
  </Box>
);

export { TogglePasswordIconButton };
