import React, { VFC } from "react";
import { RFValue } from "react-native-responsive-fontsize";

import { BaseButton } from "@/shared/components/Buttons";
import { BaseButtonProps } from "@/shared/components/Buttons/BaseButton";
import { Box, BoxProps } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";

type QuickActionButtonProps = BaseButtonProps & {
  title: string;
  eligibilityAmount: string;
  caption?: string;
  containerProps?: BoxProps;
};

const QuickActionButton: VFC<QuickActionButtonProps> = (props) => {
  const { title, caption, containerProps, ...rest } = props;

  return (
    <BaseButton
      backgroundColor="paleGrey50"
      flexDirection="column"
      justifyContent="center"
      leftIconProps={{
        containerProps: {
          marginBottom: "xs",
          marginRight: "none",
        },
        size: "sm",
      }}
      paddingVertical="sm"
      size="xs"
      {...rest}
    >
      <Box alignItems="center" minHeight={RFValue(48)} {...containerProps}>
        <Text fontVariant="caption" fontWeight="bold" textAlign="center">
          {title}
        </Text>
        {caption && (
          <Text color="lightGrey" fontVariant="caption">
            {caption}
          </Text>
        )}
      </Box>
    </BaseButton>
  );
};

export { QuickActionButton };
