import { Formik } from "formik";
import React from "react";
import { useTranslation } from "react-i18next";
import { Image, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Yup from "yup";

import { backgroundIcons, maskGroup } from "@/shared/assets/image";
import { PrimaryButton } from "@/shared/components/Buttons";
import { Box } from "@/shared/components/Layout";
import { OutlinedTextInput } from "@/shared/components/TextInput";
import { Text } from "@/shared/components/Typography";

import { OnePassNavigationProps } from "./navigation/type";
import { MASKLOGOSTYLE, ROOT } from "./styles/OnePassStyles";

interface MyFormValues {
  password: string;
  reEnterPassword: string;
}

export default function CreateOnePassPasswordScreen({
  navigation,
  route,
}: OnePassNavigationProps<"OnePassPassword">) {
  const { t } = useTranslation();

  const { onepassUsername } = route.params;

  const onSubmit = () => {
    navigation.navigate("OnePassSecretQuestion");
  };

  const InitialValues: MyFormValues = {
    password: "",
    reEnterPassword: "",
  };

  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .matches(/\w*[a-z]\w*/, "Password must have a small letter")
      .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
      .matches(/\d/, "Password must have a number")
      .matches(
        /[ !"#$%&'()*+,./:;<=>?@[\\\]^_`{|}~-]/,
        "Must contain a special character",
      )
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required("Password is required")
      .label("Password"),
    reEnterPassword: Yup.string()
      .matches(/\w*[a-z]\w*/, "Password must have a small letter")
      .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
      .matches(/\d/, "Password must have a number")
      .matches(
        /[ !"#$%&'()*+,./:;<=>?@[\\\]^_`{|}~-]/,
        "Must contain a special character",
      )
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required("Password is required")
      .label("Re-enter Password"),
  });

  return (
    <Box backgroundColor="onepassContainer" flex={1}>
      <ImageBackground resizeMode="cover" source={backgroundIcons} style={ROOT}>
        <SafeAreaView>
          <Box marginHorizontal="md" marginTop="xl">
            <Image source={maskGroup} style={MASKLOGOSTYLE} />
            <Text color="whiteColor" marginTop="lg" variant="bold18">
              {onepassUsername}
            </Text>

            <Text color="whiteColor" marginTop="xs" variant="body">
              {t("onepass.createOnePassPassword.createPassword")}
            </Text>
          </Box>

          <Formik
            initialValues={InitialValues}
            onSubmit={() => onSubmit()}
            validationSchema={validationSchema}
          >
            {({ handleChange, handleBlur, values }) => (
              <Box marginHorizontal="md">
                <Box marginTop="lg">
                  <OutlinedTextInput
                    baseColor="#fff"
                    label="ENTER PASSWORD"
                    labelTextStyle={{ color: "#fff" }}
                    onBlur={handleBlur("password")}
                    onChangeText={handleChange("password")}
                    secureTextEntry
                    style={{ color: "#fff" }}
                    tintColor="#fff"
                    value={values.password}
                  />
                </Box>

                <Box marginTop="md">
                  <OutlinedTextInput
                    baseColor="#fff"
                    label="RE-ENTER PASSWORD"
                    labelTextStyle={{ color: "#fff" }}
                    onBlur={handleBlur("reEnterPassword")}
                    onChangeText={handleChange("reEnterPassword")}
                    secureTextEntry
                    style={{ color: "#fff" }}
                    tintColor="#fff"
                    value={values.reEnterPassword}
                  />
                </Box>

                <PrimaryButton
                  alignItems="center"
                  backgroundColor="whiteColor"
                  justifyContent="center"
                  label={t("onepass.createOnePassPassword.submit")}
                  labelProps={{ color: "primaryColor" }}
                  labelVariant="regular14"
                  marginTop="sm"
                  onPress={() => onSubmit()}
                  paddingVertical="md"
                />
              </Box>
            )}
          </Formik>
        </SafeAreaView>
      </ImageBackground>
    </Box>
  );
}
