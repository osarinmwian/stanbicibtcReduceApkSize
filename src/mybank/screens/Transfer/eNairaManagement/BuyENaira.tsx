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
import { styles } from "./styles/ENairaStyles";

interface MyFormValues {
  amount: string;
  accounttodebit: string;
}
export default function BuyENaira({
  navigation,
}: EnairaNavigationProps<"BuyENaira">) {
  const { t } = useTranslation();

  const onSubmit = (values: MyFormValues) => {
    // console.log("values", values);
  };
  const handleFinish = () => {
    navigation.navigate("TransactionConfirmation");
  };

  const InitialValues: MyFormValues = {
    accounttodebit: "",
    amount: "",
  };
  const validationSchema = Yup.object().shape({
    accounttodebit: Yup.string()
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
    amount: Yup.string()
      .required("Internet Banking is required")
      .label("Internet Banking Id"),
  });

  return (
    <LayoutComponent label="BUY ENAIRA">
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
                      {t("mybank.transfer.enaira.buyenairatitle")}
                    </Text>
                    <Text color="lightGrey">
                      {t("mybank.transfer.enaira.enairaparagraph")}
                    </Text>
                  </Box>
                  <Box borderRadius="sm" marginBottom="sm" paddingVertical="sm">
                    <FilledTextInput
                      baseColor="#EFEFEF"
                      inputContainerStyle={styles.inputContainerStyle}
                      label={t("mybank.transfer.enaira.amounttobuy")}
                      labelTextStyle={styles.labelTextStyle}
                      onBlur={handleBlur("password")}
                      onChangeText={handleChange("password")}
                      placeholder="N0.00"
                      placeholderTextColor="#767676"
                      style={styles.inputStyle}
                      tintColor="#000"
                      value={values.amount}
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
                  <Box borderRadius="sm" marginTop="md">
                    <ListComponent
                      biggerPlaceHolder
                      label={t("mybank.transfer.enaira.accounttodebit")}
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
                    label={t("mybank.transfer.enaira.buttonlabel")}
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
