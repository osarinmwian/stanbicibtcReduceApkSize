import React, { VFC } from "react";

import { BaseButton } from "@/shared/components/Buttons";
import { BaseButtonProps } from "@/shared/components/Buttons/BaseButton";
import { Box, BoxProps } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";

type RepaymentButtonProps = BaseButtonProps & {
  title: string;
  containerProps?: BoxProps;
  principal: string;
  interest: string;
  outstanding: string;
  selected?: boolean;
};

const RepaymentButton: VFC<RepaymentButtonProps> = (props) => {
  const {
    title,
    principal,
    interest,
    outstanding,
    selected,
    containerProps,
    ...rest
  } = props;

  return (
    <BaseButton
      backgroundColor="paleGrey50"
      borderColor={selected ? "primaryColor" : "transparent"}
      borderWidth={2}
      size="sm"
      {...rest}
    >
      <Box flex={1} {...containerProps}>
        <Text fontWeight="bold" mb="sm">
          {title}
        </Text>
        <Box flexDirection="row" justifyContent="space-between" mb="xs">
          <Text fontVariant="caption">Principal payment</Text>
          <Text fontVariant="caption">{principal}</Text>
        </Box>
        <Box flexDirection="row" justifyContent="space-between" mb="xs">
          <Text fontVariant="caption">Interest payment</Text>
          <Text fontVariant="caption">{interest}</Text>
        </Box>
        <Box flexDirection="row" justifyContent="space-between" mb="xs">
          <Text fontVariant="caption">Outstanding payment</Text>
          <Text fontVariant="caption">{outstanding}</Text>
        </Box>
      </Box>
    </BaseButton>
  );
};

export { RepaymentButton };
