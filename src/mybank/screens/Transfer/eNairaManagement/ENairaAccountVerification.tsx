import { Formik } from "formik";
import React from "react";
import { useTranslation } from "react-i18next";
import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import * as Yup from "yup";

import { loginBackground } from "@/mybank/assets/image/";
import { PrimaryButton } from "@/shared/components/Buttons";
import { Box, ImageBackground, SafeAreaView } from "@/shared/components/Layout";
import { FilledTextInput } from "@/shared/components/TextInput";
import { Text } from "@/shared/components/Typography";

import ListComponent from "../components/ListComponent";
import { styles } from "./styles/ENairaStyles";

interface MyFormValues {
  bankingId: string;
  password: string;
}

const ENairaAccountVerification: ({
  navigation,
}: {
  navigation: any;
}) => JSX.Element = ({ navigation }) => {
  const { t } = useTranslation();

  const onSubmit = (values: MyFormValues) => {
    // console.log("values", values);
  };
  const handleLogin = () => {
    navigation.navigate("ENairaHome");
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
    <SafeAreaView flex={1}>
      <ImageBackground
        flex={1}
        paddingTop="sm"
        resizeMode="cover"
        source={loginBackground}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Box
            backgroundColor="whiteColor"
            borderTopLeftRadius="lg"
            borderTopRightRadius="lg"
            flex={1}
            marginTop="lg"
            paddingHorizontal="md"
          >
            <KeyboardAvoidingView style={styles.keyboardAvoidingView}>
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
                  <Box marginTop="lg">
                    <Box marginBottom="md">
                      <Text color="black" marginBottom="xs" variant="bold14">
                        {t("mybank.transfer.enaira.auth.title")}
                      </Text>
                      <Text color="lightGrey">
                        {t("mybank.transfer.enaira.auth.titleparagraph")}
                      </Text>
                    </Box>
                    <Box
                      backgroundColor="paleGrey25"
                      borderRadius="sm"
                      marginBottom="sm"
                      paddingVertical="sm"
                    >
                      <FilledTextInput
                        baseColor="#EFEFEF"
                        inputContainerStyle={styles.filledTextInputContainer}
                        label={t("mybank.transfer.enaira.auth.emaillabel")}
                        labelTextStyle={styles.filledTextInputLabel}
                        onBlur={handleBlur("password")}
                        onChangeText={handleChange("password")}
                        placeholder={t(
                          "mybank.transfer.enaira.auth.emailplaceholder",
                        )}
                        placeholderTextColor="#767676"
                        style={styles.filledTextInput}
                        tintColor="#000"
                        value={values.password}
                      />
                    </Box>
                    <Box marginTop="lg" />
                    <Box
                      backgroundColor="paleGrey25"
                      borderRadius="sm"
                      marginBottom="sm"
                      marginTop="md"
                      paddingVertical="sm"
                    >
                      <FilledTextInput
                        baseColor="#EFEFEF"
                        inputContainerStyle={styles.filledTextInputContainer}
                        label={t("mybank.transfer.enaira.auth.passwordlabel")}
                        labelTextStyle={styles.filledTextInputLabel}
                        onBlur={handleBlur("password")}
                        onChangeText={handleChange("password")}
                        placeholder={t(
                          "mybank.transfer.enaira.auth.passwordplaceholder",
                        )}
                        placeholderTextColor="#767676"
                        style={styles.filledTextInput}
                        tintColor="#000"
                        value={values.password}
                      />
                    </Box>
                    <Box marginTop="lg" />
                    <Box
                      backgroundColor="paleGrey25"
                      borderRadius="sm"
                      marginTop="md"
                    >
                      <ListComponent
                        label={t("mybank.transfer.enaira.auth.walletlabel")}
                        onPress={() => {}}
                        placeholder={t(
                          "mybank.transfer.enaira.auth.walletplaceholder",
                        )}
                      />
                    </Box>
                    <Box marginTop="md" />
                    <PrimaryButton
                      alignItems="center"
                      backgroundColor="primaryColor"
                      height={RFValue(50)}
                      justifyContent="center"
                      label={t("mybank.transfer.enaira.auth.buttonlabel")}
                      labelProps={{ color: "whiteColor" }}
                      labelVariant="medium10"
                      marginBottom="xs"
                      marginTop="md"
                      onPress={() => {
                        handleSubmit();
                        handleLogin();
                      }}
                      paddingVertical="md"
                    />
                  </Box>
                )}
              </Formik>
            </KeyboardAvoidingView>
          </Box>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ENairaAccountVerification;
