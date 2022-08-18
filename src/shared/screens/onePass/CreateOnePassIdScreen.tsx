import { Formik } from "formik";
import React from "react";
import { useTranslation } from "react-i18next";
import { Image, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Yup from "yup";

import { backgroundIcons, close, maskGroup } from "@/shared/assets/image";
import { PrimaryButton } from "@/shared/components/Buttons";
import { Box } from "@/shared/components/Layout";
import Pressable from "@/shared/components/Pressable";
import { OutlinedTextInput } from "@/shared/components/TextInput";
import { Text } from "@/shared/components/Typography";

import { OnePassNavigationProps } from "./navigation/type";
import { MASKLOGOSTYLE, ROOT } from "./styles/OnePassStyles";

interface MyFormValues {
  onepassId: string;
}

export default function CreateOnePassIDScreen({
  navigation,
}: OnePassNavigationProps<"OnePass">) {
  const { t } = useTranslation();

  const onSubmit = (values: MyFormValues) => {
    navigation.navigate("OnePassPassword", {
      onepassUsername: values.onepassId,
    });
  };

  const InitialValues: MyFormValues = {
    onepassId: "",
  };

  const validationSchema = Yup.object().shape({
    onepassId: Yup.string()
      .min(8, ({ min }) => `OnePass ID must be at least ${min} characters`)
      .required("OnePass ID is required")
      .label("OnePass ID"),
  });

  return (
    <Box backgroundColor="onepassContainer" flex={1}>
      <ImageBackground resizeMode="cover" source={backgroundIcons} style={ROOT}>
        <SafeAreaView>
          <Pressable
            alignItems="flex-end"
            justifyContent="center"
            marginHorizontal="sm"
            onPress={() => navigation.goBack()}
          >
            <Image source={close} />
          </Pressable>
          <Box marginHorizontal="md" marginTop="lg">
            <Image source={maskGroup} style={MASKLOGOSTYLE} />
            <Text color="whiteColor" marginTop="lg" variant="bold18">
              {t("onepass.createOnePassID.createOnePass")}
            </Text>

            <Text color="whiteColor" marginTop="xs" variant="body">
              {t("onepass.createOnePassID.uniqueID")}
            </Text>
          </Box>

          <Formik
            initialValues={InitialValues}
            onSubmit={(values) => onSubmit(values)}
            validationSchema={validationSchema}
          >
            {({ handleChange, handleBlur, values }) => (
              <Box marginHorizontal="md">
                <Box marginTop="lg">
                  <OutlinedTextInput
                    baseColor="#fff"
                    label="ONEPASS ID"
                    labelTextStyle={{ color: "#fff" }}
                    onBlur={handleBlur("onepassId")}
                    onChangeText={handleChange("onepassId")}
                    placeholder={t("onepass.createOnePassID.minimumCharacters")}
                    placeholderTextColor="white"
                    style={{ color: "#fff" }}
                    tintColor="#fff"
                    value={values.onepassId}
                  />
                </Box>

                <PrimaryButton
                  alignItems="center"
                  backgroundColor="whiteColor"
                  justifyContent="center"
                  label={t("onepass.createOnePassID.next")}
                  labelProps={{ color: "primaryColor" }}
                  labelVariant="regular14"
                  marginBottom="xs"
                  marginTop="sm"
                  onPress={() => onSubmit(values)}
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
