import React, { FC } from "react";
import { ActivityIndicator } from "react-native";

import { Text } from "@/shared/components/Typography";
import { Theme, useTheme } from "@/shared/theme";

import { Box } from "../Layout";
import { BaseButton, BaseButtonProps } from "./BaseButton";

type PrimaryButtonProps = BaseButtonProps & {
  label: string;
  isLoading?: boolean;
  labelVariant?: keyof Theme["textVariants"];
};

const PrimaryButton: FC<PrimaryButtonProps> = (props) => {
  const {
    label,
    isLoading,
    labelVariant = "buttonLabelFilled",
    ...rest
  } = props;

  const theme = useTheme();

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <BaseButton {...rest}>
      <Box flexDirection="row">
        <Text variant={labelVariant}>{label}</Text>
        {isLoading ? (
          <Box marginLeft="sm">
            <ActivityIndicator color={theme.colors.whiteColor} />
          </Box>
        ) : null}
      </Box>
    </BaseButton>
  );
};

export { PrimaryButton };
