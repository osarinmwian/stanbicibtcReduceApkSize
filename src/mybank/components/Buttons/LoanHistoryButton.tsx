import React, { VFC } from "react";

import { BaseButton } from "@/shared/components/Buttons";
import { BaseButtonProps } from "@/shared/components/Buttons/BaseButton";
import { Box, BoxProps } from "@/shared/components/Layout";
import { Text, TextProps } from "@/shared/components/Typography";

type LoanHistoryButtonProps = BaseButtonProps & {
  description: string;
  containerProps?: BoxProps;
  amount: string;
  date: string;
  descriptionColor?: TextProps["color"];
};

const LoanHistoryButton: VFC<LoanHistoryButtonProps> = (props) => {
  const {
    description,
    containerProps,
    date,
    amount,
    descriptionColor,
    ...rest
  } = props;

  return (
    <BaseButton
      backgroundColor="paleGrey25"
      rightIcon="arrow-forward"
      rightIconProps={{
        size: "sm",
      }}
      size="sm"
      {...rest}
    >
      <Box flex={1} {...containerProps}>
        <Text fontWeight="bold">{amount}</Text>
        <Text color="lightGrey" fontVariant="caption">
          {date}
        </Text>
        <Text color={descriptionColor ?? "lightGrey"} fontVariant="caption">
          {description}
        </Text>
      </Box>
    </BaseButton>
  );
};

export { LoanHistoryButton };
