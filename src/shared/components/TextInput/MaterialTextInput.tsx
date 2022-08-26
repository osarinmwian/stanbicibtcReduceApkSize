import {
  FilledTextField,
  OutlinedTextField,
  TextFieldProps,
} from "@hirbod/react-native-material-textfield";
import React, { useCallback, useState, VFC } from "react";
import { RFValue } from "react-native-responsive-fontsize";

import { Box } from "@/shared/components/Layout";
import { useTheme } from "@/shared/theme";

import { TogglePasswordIconButton } from "../Buttons";

type MaterialTextInputProps = TextFieldProps;

const OutlinedTextInput: VFC<MaterialTextInputProps> = (props) => {
  const { secureTextEntry, ...rest } = props;

  const [showPassword, setShowPassword] = useState(!secureTextEntry);

  const theme = useTheme();

  const toggleShowPassword = useCallback(
    () => setShowPassword((previous) => !previous),
    [],
  );

  return (
    <Box>
      <Box>
        <OutlinedTextField
          allowFontScaling={false}
          baseColor={theme.colors.lightGrey}
          fontSize={theme.fontSizes.p}
          inputContainerStyle={{
            borderRadius: theme.borderRadii.sm,
            height: RFValue(61),
            paddingRight: secureTextEntry ? RFValue(40) : 0,
          }}
          secureTextEntry={secureTextEntry && !showPassword}
          tintColor={theme.colors.primaryColor}
          {...rest}
        />
      </Box>
      {secureTextEntry ? (
        <Box position="absolute" right={RFValue(4)} top={RFValue(10)}>
          <TogglePasswordIconButton
            isVisible={showPassword}
            onPress={toggleShowPassword}
          />
        </Box>
      ) : null}
    </Box>
  );
};

const FilledTextInput: VFC<MaterialTextInputProps> = (props) => {
  const { secureTextEntry, ...rest } = props;

  const [showPassword, setShowPassword] = useState(!secureTextEntry);

  const theme = useTheme();

  const toggleShowPassword = useCallback(
    () => setShowPassword((previous) => !previous),
    [],
  );

  return (
    <Box
      backgroundColor="textInputbackground"
      justifyContent="center"
      position="relative"
      width="100%"
    >
      <Box
        backgroundColor="textInputbackground"
        flex={1}
        justifyContent="center"
      >
        <FilledTextField
          allowFontScaling={false}
          baseColor={theme.colors.lightGrey}
          fontSize={theme.fontSizes.p}
          inputContainerStyle={{
            backgroundColor: theme.colors.textInputbackground,
            borderRadius: 10,
            height: RFValue(61),
            justifyContent: "center",
            paddingRight: secureTextEntry ? RFValue(40) : 0,
          }}
          secureTextEntry={secureTextEntry && !showPassword}
          tintColor={theme.colors.primaryColor}
          {...rest}
        />
      </Box>
      {secureTextEntry ? (
        <Box
          backgroundColor="textInputbackground"
          justifyContent="center"
          position="absolute"
          right={RFValue(4)}
          top={RFValue(4)}
        >
          <TogglePasswordIconButton
            isVisible={showPassword}
            onPress={toggleShowPassword}
          />
        </Box>
      ) : null}
    </Box>
  );
};

export { FilledTextInput, OutlinedTextInput };
