import React, { FC } from "react";

import { BaseButton, BaseButtonProps } from "./BaseButton";

type CloseIconButtonProps = BaseButtonProps;

const CloseIconButton: FC<CloseIconButtonProps> = (props) => (
  <BaseButton
    borderRadius="xl"
    justifyContent="center"
    leftIcon="close"
    leftIconProps={{
      containerProps: {
        marginRight: "none",
      },
      size: "xs",
    }}
    paddingHorizontal="sm"
    paddingVertical="sm"
    size="none"
    variant="ghost"
    {...props}
  />
);

export { CloseIconButton };
