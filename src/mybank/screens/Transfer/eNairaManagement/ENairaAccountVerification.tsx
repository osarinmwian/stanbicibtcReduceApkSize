import { Formik } from "formik";
import React from "react";
import { useTranslation } from "react-i18next";
import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Yup from "yup";

import { loginBackground } from "@/mybank/assets/image/";
import { PrimaryButton } from "@/shared/components/Buttons";
import { Box } from "@/shared/components/Layout";
import { OutlinedTextInput } from "@/shared/components/TextInput";

import SelectComponent from "../components/SelectComponent";

interface MyFormValues {
  bankingId: string;
  password: string;
}

const ENairaAccountVerification = ({ navigation }) => {
  const { t } = useTranslation();

  const onSubmit = (values: MyFormValues) => {
    // console.log("values", values);
  };

  const InitialValues: MyFormValues = {
    bankingId: "",
    password: "",
  };
  const validationSchema = Yup.object().shape({
    bankingId: Yup.string()
      .required("Internet Banking is required")
      .label("Internet Banking Id"),
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
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <Box flex={1}>
            <ImageBackground resizeMode="cover" source={loginBackground}>
              <Box paddingHorizontal="md">
                <Formik
                  initialValues={InitialValues}
                  onSubmit={(values) => onSubmit(values)}
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
                      <Box marginVertical="lg">
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
                      </Box>

                      <Box marginVertical="lg">
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
                      </Box>
                      <Box>
                        <SelectComponent
                          iconName="add"
                          label="New Request"
                          onPress={() => {}}
                          placeholder="Create new FX request"
                        />
                      </Box>
                      <PrimaryButton
                        alignItems="center"
                        backgroundColor="whiteColor"
                        justifyContent="center"
                        label={t("mybank.login.login")}
                        labelProps={{ color: "primaryColor" }}
                        labelVariant="medium10"
                        marginBottom="xs"
                        marginTop="md"
                        onPress={() => handleSubmit()}
                        paddingVertical="md"
                      />
                    </Box>
                  )}
                </Formik>
              </Box>
            </ImageBackground>
          </Box>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ENairaAccountVerification;
