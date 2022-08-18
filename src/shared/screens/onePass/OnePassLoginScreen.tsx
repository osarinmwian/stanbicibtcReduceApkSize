import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { Formik } from "formik";
import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { Image, ImageBackground } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import * as Yup from "yup";

import { backgroundIcons, mybank } from "@/shared/assets/image";
import { PrimaryButton } from "@/shared/components/Buttons";
import { Box } from "@/shared/components/Layout";
import { OutlinedTextInput } from "@/shared/components/TextInput";
import { Text } from "@/shared/components/Typography";
import {
  LOGINLOGOSTYLE,
  ROOT,
} from "@/shared/screens/onePass/styles/OnePassStyles";

import LoginNoticeModal from "./components/modals/LoginNoticeModal";

interface MyFormValues {
  bankingId: string;
  password: string;
}

export default function OnePassLoginScreen() {
  const { t } = useTranslation();

  const loginInfoBottomSheetModalRef = useRef<BottomSheetModal>(null);

  const onSubmit = () => {
    loginInfoBottomSheetModalRef.current?.present();
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
    <Box backgroundColor="onepassContainer" flex={1}>
      <ImageBackground resizeMode="cover" source={backgroundIcons} style={ROOT}>
        <Box
          alignItems="center"
          backgroundColor="primaryColor"
          borderRadius="md"
          height={RFValue(50)}
          justifyContent="center"
          marginLeft="md"
          marginTop="xxl"
          width={RFValue(50)}
        >
          <Image source={mybank} style={LOGINLOGOSTYLE} />
        </Box>

        <Box marginLeft="md" marginTop="lg">
          <Text color="whiteColor" variant="medium18">
            {t("onepass.onepasslogin.login")}
          </Text>

          <Text color="whiteColor" marginVertical="sm" variant="regular14">
            {t("onepass.onepasslogin.enterDetails")}
          </Text>
        </Box>

        <Formik
          initialValues={InitialValues}
          onSubmit={() => onSubmit()}
          validationSchema={validationSchema}
        >
          {({ handleChange, handleBlur, values }) => (
            <Box marginHorizontal="md">
              <Box marginVertical="sm">
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

              <Box marginBottom="sm">
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

              <PrimaryButton
                alignItems="center"
                backgroundColor="whiteColor"
                justifyContent="center"
                label={t("onepass.onepasslogin.verify")}
                labelProps={{ color: "primaryColor" }}
                labelVariant="regular14"
                marginBottom="xs"
                onPress={() => onSubmit()}
                paddingVertical="md"
              />
            </Box>
          )}
        </Formik>

        <LoginNoticeModal bottomSheetModalRef={loginInfoBottomSheetModalRef} />
      </ImageBackground>
    </Box>
  );
}
