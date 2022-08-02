import React, { VFC } from "react";
import { ScrollView } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import { loginBackground } from "@/mybank/assets/image/";
import { LoansNavigationProps } from "@/mybank/navigation/types";
import { PrimaryButton } from "@/shared/components/Buttons";
import {
  Box,
  BoxProps,
  ImageBackground,
  SafeAreaView,
} from "@/shared/components/Layout";
import { Text, TextProps } from "@/shared/components/Typography";

type ChargeItemProps = {
  title: string;
  amount: string;
  titleProps?: TextProps;
  amountProps?: TextProps;
  containerProps?: BoxProps;
};

type DetailItemProps = {
  title: string;
  amount: string;
  titleProps?: TextProps;
  amountProps?: TextProps;
  containerProps?: BoxProps;
};

const ChargeItem: VFC<ChargeItemProps> = (props) => (
  <Box
    flexDirection="row"
    justifyContent="space-between"
    mb="xs"
    {...props.containerProps}
  >
    <Box flex={1}>
      <Text {...props.titleProps}>{props.title}</Text>
    </Box>
    <Box flex={0.5}>
      <Text fontWeight="bold" {...props.amountProps}>
        {props.amount}
      </Text>
    </Box>
  </Box>
);

const DetailItem: VFC<DetailItemProps> = (props) => (
  <Box mb="md" {...props.containerProps}>
    <Text fontVariant="caption" {...props.titleProps}>
      {props.title}
    </Text>
    <Text fontWeight="bold" {...props.amountProps}>
      {props.amount}
    </Text>
  </Box>
);

const LoanDetails: VFC<LoansNavigationProps<"LoanDetails">> = ({
  navigation,
}) => (
  <SafeAreaView flex={1}>
    <ImageBackground flex={1} source={loginBackground}>
      <Box flex={1}>
        <Box height={RFValue(150)} />
        <Box backgroundColor="whiteColor" flex={1}>
          <Box
            backgroundColor="whiteColor"
            borderTopLeftRadius="md"
            borderTopRightRadius="md"
            flex={1}
            minHeight={RFValue(150)}
            p="md"
            style={{ marginTop: RFValue(-75) }}
            width="100%"
          >
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ backgroundColor: "white" }}
            >
              <Box mt="md">
                <Text fontWeight="bold" mb="md">
                  Loan Details
                </Text>
                <DetailItem amount="N2,000,000" title="Top-up amount" />
                <DetailItem amount="N2,000,000" title="New loan amount" />
                <DetailItem
                  amount="N2,000,000"
                  title="Total loan repayment amount"
                />
                <DetailItem amount="N2,000,000" title="Monthly repayment" />
                <DetailItem
                  amount="10-05-2022"
                  containerProps={{ mb: "none" }}
                  title="Repayment day"
                />

                <Text fontVariant="caption" fontWeight="bold">
                  Tenure: 48months
                </Text>

                <Text color="lightGrey" fontVariant="caption" mb="sm" mt="lg">
                  CHARGES
                </Text>
                <ChargeItem amount="2.3%/m" title="Interest Rate - Current" />
                <ChargeItem amount="2.0%/m" title="Interest Rate - Old" />
                <ChargeItem
                  amount="N10,000,000"
                  title="Outstanding loan balance"
                />
                <ChargeItem amount="N10,000" title="Outstanding loan tenure" />
                <ChargeItem amount="N10,000" title="Management fee" />
                <ChargeItem amount="N1,000" title="VAT fee" />

                <Box mt="md">
                  <PrimaryButton
                    containerProps={{ flex: 1 }}
                    label="RESEND TO RECEIVER"
                    labelProps={{ color: "whiteColor", fontVariant: "caption" }}
                    paddingVertical="md"
                  />
                </Box>
              </Box>
            </ScrollView>
          </Box>
        </Box>
      </Box>
    </ImageBackground>
  </SafeAreaView>
);

export default LoanDetails;
