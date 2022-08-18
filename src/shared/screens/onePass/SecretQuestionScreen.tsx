import { Formik } from "formik";
import React from "react";
import { useTranslation } from "react-i18next";
import { Image, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import { LOGOSTYLE, ROOT } from './CreateOnePassIDStyles';
import * as Yup from "yup";

import { backgroundIcons, maskGroup } from "@/shared/assets/image";
import { PrimaryButton } from "@/shared/components/Buttons";
import { Box } from "@/shared/components/Layout";
import Pressable from "@/shared/components/Pressable";
import { OutlinedTextInput } from "@/shared/components/TextInput";
import { Text } from "@/shared/components/Typography";

import { OnePassNavigationProps } from "./navigation/type";
import { MASKLOGOSTYLE, ROOT } from "./styles/OnePassStyles";

interface MyFormValues {
  answer: string;
}

export default function SecretQuestionsScreen({
  navigation,
}: OnePassNavigationProps<"OnePass">) {
  const { t } = useTranslation();

  const onSubmit = () => {
    navigation.navigate("OnePassHome");
  };

  const InitialValues: MyFormValues = {
    answer: "",
  };

  const validationSchema = Yup.object().shape({
    answer: Yup.string().required("Answer is required").label("Answer"),
  });

  return (
    <Box backgroundColor="onepassContainer" flex={1}>
      <ImageBackground resizeMode="cover" source={backgroundIcons} style={ROOT}>
        <SafeAreaView>
          <Box marginHorizontal="md" marginTop="xl">
            <Image source={maskGroup} style={MASKLOGOSTYLE} />
            <Text color="whiteColor" marginTop="lg" variant="bold18">
              {t("onepass.addSecretQuestion.addSecretQuestion")}
            </Text>

            <Text color="whiteColor" marginTop="xs" variant="body">
              {t("onepass.addSecretQuestion.requireQuestion")}
            </Text>
          </Box>

          <Formik
            initialValues={InitialValues}
            onSubmit={() => onSubmit()}
            validationSchema={validationSchema}
          >
            {({ handleChange, handleBlur, values }) => (
              <Box marginHorizontal="md">
                <Pressable marginTop="lg">
                  <OutlinedTextInput
                    baseColor="#fff"
                    editable={false}
                    label="SELECT QUESTION"
                    labelTextStyle={{ color: "#fff" }}
                    onBlur={handleBlur("password")}
                    onChangeText={handleChange("password")}
                    placeholder="In which city were you born?"
                    placeholderTextColor="white"
                    style={{ color: "#fff" }}
                    tintColor="#fff"
                    value={values.answer}
                  />
                </Pressable>

                <Box marginTop="md">
                  <OutlinedTextInput
                    baseColor="#fff"
                    label="ENTER YOUR ANSWER"
                    labelTextStyle={{ color: "#fff" }}
                    onBlur={handleBlur("answer")}
                    onChangeText={handleChange("answer")}
                    placeholder="Lagos"
                    placeholderTextColor="white"
                    style={{ color: "#fff" }}
                    tintColor="#fff"
                    value={values.answer}
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
