import { Formik } from "formik";
import React from "react";
import { useTranslation } from "react-i18next";
import {
  Dimensions,
  FlatList,
  Image,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";

// import * as Yup from "yup";
import { loginBackground } from "@/mybank/assets/image";
import StatusbarImageContainer from "@/mybank/components/StatusbarImageContainer";
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
import { BACK, LOGO } from "./loginStyles";

interface MyFormValues {
  bankingId: string;
  password: string;
}

export default function LoginScreen({
  navigation,
}: MyBankNavigationProps<"LoginScreen">) {
  const { t } = useTranslation();

  const onSubmit = () => {
    navigation.navigate("Home");
  };

  const InitialValues: MyFormValues = {
    bankingId: "",
    password: "",
  };
  return (
    <StatusbarImageContainer imageName={loginBackground}>
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

        <KeyboardAvoidingView
          style={{ height: Dimensions.get("window").height - 100 }}
        >
          <ScrollView
            contentContainerStyle={{ paddingBottom: 100 }}
            showsVerticalScrollIndicator={false}
          >
            <Box padding="sm" />

            <Pressable>
              <Text color="whiteColor" marginTop="md">
                {t("mybank.login.newHere")}
              </Text>
            </Pressable>

            <Formik
              initialValues={InitialValues}
              onSubmit={() => onSubmit()}
              // validationSchema={validationSchema}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                // errors,
                // touched,
              }) => (
                <Box>
                  <Box marginTop="lg">
                    <OutlinedTextInput
                      baseColor="#fff"
                      label={"Internet Banking ID".toUpperCase()}
                      labelTextStyle={{ color: "#fff" }}
                      onBlur={handleBlur("bankingId")}
                      onChangeText={handleChange("bankingId")}
                      style={{ color: "#fff" }}
                      tintColor="#fff"
                      value={values.bankingId}
                    />
                  </Box>

                  <Box marginVertical="sm">
                    <OutlinedTextInput
                      baseColor="#fff"
                      label={"Password".toUpperCase()}
                      labelTextStyle={{ color: "#fff" }}
                      onBlur={handleBlur("password")}
                      onChangeText={handleChange("password")}
                      secureTextEntry
                      style={{ color: "#fff", marginVertical: 16 }}
                      tintColor="#fff"
                      value={values.password}
                    />
                  </Box>

                  <Pressable marginVertical="sm">
                    <Text color="whiteColor" variant="medium14">
                      {t("mybank.login.forgotPassword")}
                    </Text>
                  </Pressable>

                  <PrimaryButton
                    alignItems="center"
                    backgroundColor="whiteColor"
                    justifyContent="center"
                    label={t("mybank.login.login")}
                    labelProps={{ color: "primaryColor" }}
                    labelVariant="medium14"
                    marginBottom="xs"
                    marginTop="md"
                    onPress={() => handleSubmit()}
                    paddingVertical="mmd"
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
                labelVariant="medium14"
                marginBottom="xs"
                marginVertical="xs"
                paddingVertical="mmd"
              />

              <PrimaryButton
                backgroundColor="transparent"
                justifyContent="center"
                label={t("mybank.login.loginWithFingerPrint")}
                labelProps={{ color: "whiteColor" }}
                labelVariant="medium14"
                leftIcon="fingerprint"
                leftIconProps={{ size: "md" }}
                marginVertical="lg"
              />
            </Box>
            <Box height={30} />

            <Box alignItems="center" width="100%">
              <FlatList
                contentContainerStyle={{
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
                data={modules}
                horizontal
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <ModuleComponent
                    backgroundColor={
                      item.backgroundColor as PressableProps["backgroundColor"]
                    }
                    destination={item.destination}
                    iconName={item.iconName}
                    textColor={item.textColor}
                    title={item.title}
                  />
                )}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
              />
            </Box>
          </ScrollView>
        </KeyboardAvoidingView>
      </Box>
    </StatusbarImageContainer>
  );
}
