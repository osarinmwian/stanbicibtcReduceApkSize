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

import { EnairaNavigationProps } from "@/mybank/navigation/types";
import { PrimaryButton } from "@/shared/components/Buttons";
import { Box, LayoutComponent } from "@/shared/components/Layout";
import { FilledTextInput } from "@/shared/components/TextInput";
import { Text } from "@/shared/components/Typography";

import ListComponent from "../components/ListComponent";

interface MyFormValues {
  bankingId: string;
  password: string;
}
const InitialValues: MyFormValues = {
  bankingId: "",
  password: "",
};
export default function SellENaira({
  navigation,
}: EnairaNavigationProps<"SellENaira">) {
  const { t } = useTranslation();

  // eslint-disable-next-line unicorn/consistent-function-scoping
  const onSubmit = (values: MyFormValues) => {
    // console.log("values", values);
  };
  const handleFinish = () => {
    navigation.navigate("TransactionConfirmation");
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
    <LayoutComponent label="SELL ENAIRA">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Box
          backgroundColor="whiteColor"
          borderTopLeftRadius="md"
          borderTopRightRadius="md"
          flex={1}
          paddingHorizontal="md"
        >
          <KeyboardAvoidingView style={{ flex: 1 }}>
            <Formik
              initialValues={InitialValues}
              onSubmit={(values) => onSubmit(values)}
              validationSchema={validationSchema}
            >
              {({ handleChange, handleBlur, handleSubmit, values }) => (
                <Box marginTop="lg">
                  <Box marginBottom="md">
                    <Text color="black" marginBottom="xs" variant="bold14">
                      {t("mybank.transfer.enaira.sellenairatitle")}
                    </Text>
                    <Text color="lightGrey">
                      {t("mybank.transfer.enaira.sellenairaparagraph")}
                    </Text>
                  </Box>
                  <Box borderRadius="sm" marginBottom="sm" paddingVertical="sm">
                    <FilledTextInput
                      baseColor="#EFEFEF"
                      inputContainerStyle={{
                        backgroundColor: "#F6F6F6",
                        borderRadius: 10,
                      }}
                      label={t("mybank.transfer.enaira.amounttosell")}
                      labelTextStyle={{ color: "#767676", marginTop: 5 }}
                      onBlur={handleBlur("password")}
                      onChangeText={handleChange("password")}
                      placeholder="N0.00"
                      placeholderTextColor="#767676"
                      style={{ borderRadius: 10, color: "#EFEFEF" }}
                      tintColor="#000"
                      value={values.password}
                    />
                  </Box>

                  <Box flexDirection="row" marginBottom="xs" marginTop="lg">
                    <Text color="lightGrey" marginTop="sm">
                      {t("mybank.transfer.enaira.rate")}
                    </Text>
                    <Text color="lightGrey" marginTop="sm">
                      N0.00
                    </Text>
                  </Box>
                  <Box
                    backgroundColor="paleGrey25"
                    borderRadius="sm"
                    marginTop="md"
                  >
                    <ListComponent
                      biggerPlaceHolder
                      label={t("mybank.transfer.enaira.accounttocredit")}
                      onPress={() => {}}
                      placeholder={t("mybank.transfer.enaira.selectAccount")}
                    />
                  </Box>
                  <Box marginTop="md" />
                  <PrimaryButton
                    alignItems="center"
                    backgroundColor="primaryColor"
                    height={RFValue(50)}
                    justifyContent="center"
                    label={t("mybank.transfer.enaira.sellbuttonlabel")}
                    labelProps={{ color: "whiteColor" }}
                    labelVariant="medium10"
                    marginBottom="xs"
                    marginTop="md"
                    onPress={() => {
                      handleSubmit();
                      handleFinish();
                    }}
                    paddingVertical="md"
                  />
                </Box>
              )}
            </Formik>
          </KeyboardAvoidingView>
        </Box>
      </TouchableWithoutFeedback>
    </LayoutComponent>
  );
}
