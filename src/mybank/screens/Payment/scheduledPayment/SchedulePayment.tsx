import { Formik } from "formik";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  Switch,
  TouchableWithoutFeedback,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import * as Yup from "yup";

import { SchdulePaymentNavigationProps } from "@/mybank/navigation/types";
import { Icon } from "@/shared/assets/icons";
import { PrimaryButton } from "@/shared/components/Buttons";
import { Box, LayoutComponent } from "@/shared/components/Layout";
import { FilledTextInput } from "@/shared/components/TextInput";
import { Text } from "@/shared/components/Typography";

import ListComponent from "../../Transfer/components/ListComponent";
import styles from "./styles/styles";

interface MyFormValues {
  accounttodebit: string;
  amount: string;
  recepient: Record<string, string>;
  narration: string;
  cartegory: string;
  scheduletype: string;
  scheduleDate: string;
  beneficiary: boolean;
}
export default function SchedulePayment({
  navigation,
}: SchdulePaymentNavigationProps<"SchedulePayment">) {
  const { t } = useTranslation();
  const [benefciary, setBeneficiary] = useState<boolean>(false);

  const onSubmit = (values: MyFormValues) => {
    // console.log("values", values);
  };
  const handleFinish = () => {
    navigation.navigate("ConfirmSchedulePayment");
  };

  const InitialValues: MyFormValues = {
    accounttodebit: "",
    amount: "",
    beneficiary: false,
    cartegory: "",
    narration: "",
    recepient: { details: "" },
    scheduleDate: "",
    scheduletype: "",
  };
  const validationSchema = Yup.object().shape({
    accounttodebit: Yup.string()
      .required("Internet Banking is required")
      .label("Internet Banking Id"),
    amount: Yup.string()
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
    <LayoutComponent
      label={t("mybank.payment.scheculedpayment.landing.title")}
      labelMarginLeftsmallLarge
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView style={{ flex: 1 }}>
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
                  <Box marginTop="sml">
                    <Box marginBottom="md">
                      <Text color="black" marginBottom="xs" variant="medium14">
                        {t("mybank.payment.scheculedpayment.main.title")}
                      </Text>
                    </Box>
                    <Box borderRadius="sm">
                      <ListComponent
                        biggerPlaceHolder
                        label={t(
                          "mybank.payment.scheculedpayment.main.selectaccount",
                        )}
                        onPress={() => {}}
                        placeholder={t(
                          "mybank.payment.scheculedpayment.main.selectaccountplaceholder",
                        )}
                      />
                    </Box>
                    <Box marginTop="sm" />
                    <Box borderRadius="sm" paddingVertical="sm">
                      <FilledTextInput
                        baseColor="#EFEFEF"
                        inputContainerStyle={styles.inputContainerStyle}
                        label={t("mybank.payment.scheculedpayment.main.amount")}
                        labelTextStyle={styles.labelTextStyle}
                        onBlur={handleBlur("password")}
                        onChangeText={handleChange("password")}
                        placeholder={t(
                          "mybank.payment.scheculedpayment.main.amountplaceholder",
                        )}
                        placeholderTextColor="#222222"
                        style={styles.inputStyle}
                        tintColor="#000"
                        value={values.amount}
                      />
                    </Box>

                    <Box borderRadius="sm" paddingVertical="sm">
                      <FilledTextInput
                        baseColor="#EFEFEF"
                        inputContainerStyle={styles.inputContainerStyle}
                        label={t(
                          "mybank.payment.scheculedpayment.main.recepient",
                        )}
                        labelTextStyle={styles.labelTextStyle}
                        onBlur={handleBlur("password")}
                        onChangeText={handleChange("password")}
                        placeholder={t(
                          "mybank.payment.scheculedpayment.main.recepientplaceholder",
                        )}
                        placeholderTextColor="#222222"
                        style={styles.inputStyle}
                        tintColor="#000"
                        value={values.recepient.details}
                      />
                    </Box>
                    <Box marginTop="sm" />
                    <Box
                      alignItems="center"
                      backgroundColor="textInputbackground"
                      borderRadius="sm"
                      flexDirection="row"
                      paddingVertical="sm"
                      width="100%"
                    >
                      <Box
                        alignItems="center"
                        backgroundColor="lightGrey"
                        borderRadius="sm"
                        height={RFValue(45)}
                        justifyContent="center"
                        marginBottom="sm"
                        marginLeft="sm"
                        marginRight="sm"
                        width={RFValue(45)}
                      >
                        <Icon name="profile" />
                      </Box>
                      <Box justifyContent="center">
                        <Text color="textTint" variant="regular14">
                          {t(
                            "mybank.payment.scheculedpayment.main.recepientdetails",
                          )}
                        </Text>
                        <Text
                          color="textTint"
                          marginBottom="xxs"
                          variant="regular14"
                        >
                          NAME
                        </Text>
                        <Text color="textTint" variant="regular14">
                          BANK NAME
                        </Text>
                      </Box>
                    </Box>
                    <Box marginTop="sm" />
                    <Box borderRadius="sm" paddingVertical="sm">
                      <ListComponent
                        biggerPlaceHolder
                        label={t(
                          "mybank.payment.scheculedpayment.main.transactioncatergory",
                        )}
                        onPress={() => {}}
                        placeholder={t(
                          "mybank.payment.scheculedpayment.main.transactioncatergoryplaceholder",
                        )}
                      />
                    </Box>

                    <Box borderRadius="sm" paddingVertical="sm">
                      <FilledTextInput
                        baseColor="#EFEFEF"
                        inputContainerStyle={styles.inputContainerStyle}
                        label={t(
                          "mybank.payment.scheculedpayment.main.narration",
                        )}
                        labelTextStyle={styles.labelTextStyle}
                        onBlur={handleBlur("password")}
                        onChangeText={handleChange("password")}
                        placeholder={t(
                          "mybank.payment.scheculedpayment.main.narrationplaceholder",
                        )}
                        placeholderTextColor="#222222"
                        style={styles.inputStyle}
                        tintColor="#000"
                        value={values.narration}
                      />
                    </Box>

                    <Box borderRadius="sm" paddingVertical="sm">
                      <FilledTextInput
                        baseColor="#EFEFEF"
                        inputContainerStyle={styles.inputContainerStyle}
                        label={t(
                          "mybank.payment.scheculedpayment.main.scheduletype",
                        )}
                        labelTextStyle={styles.labelTextStyle}
                        onBlur={handleBlur("password")}
                        onChangeText={handleChange("password")}
                        placeholder={t(
                          "mybank.payment.scheculedpayment.main.scheduletypeplaceholder",
                        )}
                        placeholderTextColor="#222222"
                        style={styles.inputStyle}
                        tintColor="#000"
                        value={values.scheduletype}
                      />
                    </Box>
                    <Box marginTop="sm" />
                    <Box borderRadius="sm">
                      <ListComponent
                        biggerPlaceHolder
                        iconName="calender"
                        label={t(
                          "mybank.payment.scheculedpayment.main.scheculepaymentdate",
                        )}
                        onPress={() => {}}
                        placeholder={t(
                          "mybank.payment.scheculedpayment.main.scheculepaymentdateplaceholder",
                        )}
                      />
                    </Box>

                    <Box
                      flexDirection="row"
                      justifyContent="flex-start"
                      marginTop="md"
                    >
                      <Switch
                        onValueChange={() => setBeneficiary(!benefciary)}
                        style={{ height: 10, marginRight: 30, width: 10 }}
                        thumbColor=""
                        trackColor={{ false: "", true: "" }}
                        value={benefciary}
                      />
                      <Text
                        color="textTint3"
                        marginLeft="sml"
                        marginTop="sm"
                        textAlign="auto"
                        variant="medium14"
                      >
                        Save as beneficiary for later
                      </Text>
                    </Box>
                    <Box marginTop="xl" />
                    <PrimaryButton
                      alignItems="center"
                      backgroundColor="primaryColor"
                      height={RFValue(50)}
                      justifyContent="center"
                      label={t(
                        "mybank.payment.scheculedpayment.main.buttontitle",
                      )}
                      labelProps={{ color: "whiteColor" }}
                      labelVariant="medium10"
                      marginBottom="lg"
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
        </ScrollView>
      </TouchableWithoutFeedback>
    </LayoutComponent>
  );
}
