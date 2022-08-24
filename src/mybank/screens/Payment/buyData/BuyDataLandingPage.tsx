import { Formik } from "formik";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import * as Yup from "yup";

import { BuydataNavigationProps } from "@/mybank/navigation/types";
import etisalat from "@/shared/assets/image/9mobile.png";
import airtel from "@/shared/assets/image/airtel.png";
import glo from "@/shared/assets/image/glo.png";
import mtn from "@/shared/assets/image/mtn.png";
import { PrimaryButton } from "@/shared/components/Buttons";
import { Box, LayoutComponent } from "@/shared/components/Layout";
import { FilledTextInput } from "@/shared/components/TextInput";
import { Text } from "@/shared/components/Typography";

import { AirtimeBiller } from "../components/AirtimeBilleromponent";
import styles from "./styles/styles";

interface MyFormValues {
  billerIdentity: string;
  amount: string;
  phone: string;
}
const InitialValues: MyFormValues = {
  amount: "",
  billerIdentity: "",
  phone: "",
};
export default function BuyDataLandingPage({
  navigation,
}: BuydataNavigationProps<"BuyDataLandingPage">) {
  const [network, setNetwork] = useState("");
  const billers = [
    { name: "Glo", value: glo },
    { name: "MTN", value: mtn },
    { name: "9mobile", value: etisalat },
    { name: "Airtel", value: airtel },
  ];
  const changeBackgroundColor = (response: any) => {
    if (response === 0) {
      setNetwork("GLO");
    }
    if (response === 1) {
      setNetwork("MTN");
    }
    if (response === 2) {
      setNetwork("9MOBILE");
    }
    if (response === 3) {
      setNetwork("AIRTEL");
    }
  };
  const { t } = useTranslation();

  // eslint-disable-next-line unicorn/consistent-function-scoping
  const onSubmit = (values: MyFormValues) => {
    // console.log("values", values);
  };
  const handleFinish = () => {
    navigation.navigate("ConfirmBuyData");
  };

  const validationSchema = Yup.object().shape({
    amount: Yup.string()
      .required("Internet Banking is required")
      .label("Internet Banking Id"),
    phone: Yup.string()
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
    <LayoutComponent label={t("mybank.payment.buydata.title")}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView style={{ flex: 1 }}>
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
              <>
                <Box
                  backgroundColor="whiteColor"
                  borderTopLeftRadius="md"
                  borderTopRightRadius="md"
                  flex={1}
                  paddingHorizontal="md"
                >
                  <Box marginTop="lg">
                    <Box marginBottom="xs">
                      <Text color="black" variant="medium14">
                        {t("mybank.payment.buydata.home.selectnetwork")}
                      </Text>
                    </Box>
                    <Box>
                      <AirtimeBiller
                        buttons={billers}
                        doSomethingAfterClick={changeBackgroundColor}
                      />
                    </Box>
                    <Box
                      borderRadius="sm"
                      justifyContent="center"
                      marginVertical="sml"
                    >
                      <FilledTextInput
                        baseColor="#EFEFEF"
                        inputContainerStyle={styles.inputContainerStyle}
                        label={t("mybank.payment.buydata.home.amount")}
                        labelTextStyle={styles.labelTextStyle}
                        onBlur={handleBlur("password")}
                        onChangeText={handleChange("password")}
                        placeholder="N0.00"
                        placeholderTextColor="#222222"
                        style={styles.inputStyle}
                        tintColor="#000"
                        value={values.amount}
                      />
                    </Box>
                    <Box marginTop="lg" />
                    <Box
                      borderRadius="sm"
                      justifyContent="center"
                      marginVertical="sm"
                    >
                      <FilledTextInput
                        baseColor="#EFEFEF"
                        inputContainerStyle={styles.inputContainerStyle}
                        label={t("mybank.payment.buydata.home.phone")}
                        labelTextStyle={styles.labelTextStyle}
                        onBlur={handleBlur("password")}
                        onChangeText={handleChange("password")}
                        placeholder="N0.00"
                        placeholderTextColor="#222222"
                        style={styles.inputStyle}
                        tintColor="#000"
                        value={values.phone}
                      />
                    </Box>
                  </Box>
                </Box>
                <Box
                  alignSelf="baseline"
                  bottom={RFValue(5)}
                  marginTop="lg"
                  paddingHorizontal="md"
                  position="absolute"
                  width="100%"
                >
                  <PrimaryButton
                    alignItems="center"
                    backgroundColor="primaryColor"
                    height={RFValue(50)}
                    justifyContent="center"
                    label={t("mybank.payment.buydata.home.buttonlabel")}
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
              </>
            )}
          </Formik>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </LayoutComponent>
  );
}

// export default BuyDataLandingPage;
