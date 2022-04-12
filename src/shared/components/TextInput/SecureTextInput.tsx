import { useCallback, useState, VFC } from "react";

import { TogglePasswordIconButton } from "@/shared/components/Buttons";

import { TextInput, TextInputProps } from "./TextInput";

type SecureTextInputProps = TextInputProps & {
  showToggleIcon?: boolean;
};

const SecureTextInput: VFC<SecureTextInputProps> = (props) => {
  const { showToggleIcon, ...rest } = props;

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = useCallback(
    () => setShowPassword((previous) => !previous),
    [],
  );

  return (
    <TextInput
      rightComponent={
        showToggleIcon ? (
          <TogglePasswordIconButton
            isVisible={showPassword}
            onPress={toggleShowPassword}
          />
        ) : undefined
      }
      secureTextEntry={!showPassword}
      {...rest}
    />
  );
};

export { SecureTextInput };
