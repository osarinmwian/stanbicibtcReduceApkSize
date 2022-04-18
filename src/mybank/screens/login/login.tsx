import { Formik } from "formik";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FlatList, Image, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Yup from "yup";

import { loginBackground } from "@/mybank/assets/image/";
import { MyBankNavigationProps } from "@/mybank/navigation/types";
import back from "@/shared/assets/image/back.png";
import logo from "@/shared/assets/image/logo.png";
import { PrimaryButton } from "@/shared/components/Buttons";
import { Box } from "@/shared/components/Layout";
import Pressable, { PressableProps } from "@/shared/components/Pressable";
import { OutlinedTextInput } from "@/shared/components/TextInput";
import { Text } from "@/shared/components/Typography";

import ModuleComponent from "./components/ModuleComponent";
import modules from "./files/modules";
import { BACK, LOGO, ROOT } from "./loginStyles";

interface MyFormValues {
  bankingId: string;
  password: string;
}

export default function LoginScreen({
  navigation,
}: MyBankNavigationProps<"LoginScreen">) {
  const { t } = useTranslation();

  const [state, setState] = useState({
    bankingId: "",
    password: "",
  });

  // const formik = useFormik({
  //   handleBankingId: (value: string) => {
  //     setState({ ...state, bankingId: value });
  //   },
  //   handlePassword: (value: string) => {
  //     setState({ ...state, password: value });
  //   },
  //   initialValues: {
  //     bankingId: "",
  //     password: "",
  //   },
  //   onSubmit: (values: MyFormValues) => {
  //     // eslint-disable-next-line no-alert
  //     alert(JSON.stringify(values, null, 2));
  //   },
  // });

  // const handleBankingId = (value: string) => {
  //   setState({ ...state, bankingId: value });
  // };

  // const handlePassword = (value: string) => {
  //   setState({ ...state, password: value });
  // };

  const validationSchema = Yup.object().shape({
    bankingId: Yup.string()
      .email("Please enter valid email")
      .required("Email is required")
      .label("Internet Banking Id"),
    name: Yup.string().required("Name is required").label("Name"),
    password: Yup.string()
      .matches(/\w*[a-z]\w*/, "Password must have a small letter")
      .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
      .matches(/\d/, "Password must have a number")
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required("Password is required")
      .label("Password"),
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground resizeMode="cover" source={loginBackground} style={ROOT}>
        <Box paddingHorizontal="md">
          <Box
            alignItems="center"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Pressable onPress={() => navigation.goBack()}>
              <Image source={back} style={BACK} />
            </Pressable>
            <Image source={logo} style={LOGO} />
          </Box>

          <Pressable>
            <Text color="whiteColor" marginTop="lg">
              {t("mybank.login.newHere")}
            </Text>
          </Pressable>

          <Formik
            initialValues={{ bankingId: "", password: "" }}
            onSubmit={(values) => console.log(values, "values")}
            validationSchema={validationSchema}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <Box>
                <Box marginTop="lg">
                  <OutlinedTextInput
                    baseColor="#fff"
                    label="Internet Banking ID"
                    labelTextStyle={{ color: "#fff" }}
                    onBlur={handleBlur("bankingId")}
                    onChangeText={handleChange("bankingId")}
                    style={{ color: "#fff" }}
                    tintColor="#fff"
                    value={values.bankingId}
                  />
                  <Box marginTop="lg">
                    <Text color="negativeColor" marginTop="lg">
                      {errors.bankingId}
                    </Text>
                  </Box>
                </Box>

                <Box marginTop="md">
                  <OutlinedTextInput
                    baseColor="#fff"
                    label="Password"
                    labelTextStyle={{ color: "#fff" }}
                    onBlur={handleBlur("password")}
                    onChangeText={handleChange("password")}
                    secureTextEntry
                    style={{ color: "#fff" }}
                    tintColor="#fff"
                    value={values.password}
                  />
                  <Box marginTop="lg">
                    <Text color="negativeColor" marginTop="lg">
                      {errors.password}
                    </Text>
                  </Box>
                </Box>

                <Pressable marginVertical="md">
                  <Text color="whiteColor" marginVertical="sm">
                    {t("mybank.login.forgotPassword")}
                  </Text>
                </Pressable>

                <PrimaryButton
                  alignItems="center"
                  backgroundColor="whiteColor"
                  justifyContent="center"
                  label={t("mybank.login.login")}
                  labelProps={{ color: "primaryColor" }}
                  labelVariant="medium10"
                  marginVertical="xs"
                  onPress={() => handleSubmit()}
                  paddingVertical="md"
                />
              </Box>
            )}
          </Formik>

          <Box>
            <PrimaryButton
              alignItems="center"
              borderColor="whiteColor"
              borderWidth={2}
              justifyContent="center"
              label={t("mybank.login.loginWithOnePass")}
              labelProps={{ color: "whiteColor" }}
              labelVariant="medium10"
              marginVertical="xs"
              onPress={() => console.log("Baby")}
              paddingVertical="md"
            />

            <PrimaryButton
              justifyContent="center"
              label={t("mybank.login.loginWithFingerPrint")}
              labelProps={{ color: "whiteColor" }}
              labelVariant="medium10"
              leftIcon="fingerprint"
              marginTop="md"
              onPress={() => console.log("Baby")}
              paddingVertical="md"
            />
          </Box>

          <Box
            alignItems="center"
            justifyContent="space-between"
            marginBottom="sm"
            marginTop="lg"
            width="100%"
          >
            <FlatList
              contentContainerStyle={{ justifyContent: "space-between" }}
              data={modules}
              horizontal
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <ModuleComponent
                  backgroundColor={
                    item.backgroundColor as PressableProps["backgroundColor"]
                  }
                  destination={item.destination}
                  image={item.image}
                  title={item.title as unknown}
                />
              )}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
            />
          </Box>
        </Box>
      </ImageBackground>
    </SafeAreaView>
  );
}
