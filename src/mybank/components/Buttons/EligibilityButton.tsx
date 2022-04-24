import React, { VFC } from "react";

import { BaseButton } from "@/shared/components/Buttons";
import { BaseButtonProps } from "@/shared/components/Buttons/BaseButton";
import { Box, BoxProps } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";

type EligibilityButtonProps = BaseButtonProps & {
  title: string;
  eligibilityAmount: string;
  containerProps?: BoxProps;
};

const EligibilityButton: VFC<EligibilityButtonProps> = (props) => {
  const { title, eligibilityAmount, containerProps, ...rest } = props;

  return (
    <BaseButton
      backgroundColor="paleGrey50"
      leftIconProps={{
        containerProps: {
          marginRight: "md",
        },
      }}
      rightIcon="chevron-forward"
      rightIconProps={{
        size: "xs",
      }}
      size="sm"
      {...rest}
    >
      <Box flex={1} {...containerProps}>
        <Text fontWeight="bold">{title}</Text>
        <Text fontVariant="caption">
          Eligibility Amount: {eligibilityAmount}
        </Text>
      </Box>
    </BaseButton>
  );
};

export { EligibilityButton };
