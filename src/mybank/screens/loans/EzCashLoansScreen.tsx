import React, { VFC } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

import { loginBackground } from "@/mybank/assets/image/";
import {
  LoanHistoryButton,
  QuickActionButton,
} from "@/mybank/components/Buttons";
import { RepayLoanCard } from "@/mybank/components/Cards";
import { LoansNavigationProps } from "@/mybank/navigation/types";
import { Box, ImageBackground, SafeAreaView } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";

const EZCashLoansScreen: VFC<LoansNavigationProps<"Loans">> = ({
  navigation,
}) => (
  <SafeAreaView flex={1}>
    <ScrollView>
      <ImageBackground flex={1} source={loginBackground}>
        <Box flex={1}>
          <Box height={RFValue(150)} />
          <Box backgroundColor="whiteColor" flex={1} px="md">
            <Box
              minHeight={RFValue(150)}
              style={{ marginTop: RFValue(-75) }}
              width="100%"
            >
              <RepayLoanCard />
            </Box>
            <Box mt="md">
              <Text fontVariant="caption" fontWeight="bold" mb="md">
                QUICK ACTIONS
              </Text>
              <Box flexDirection="row">
                <Box flex={1} px="sm">
                  <QuickActionButton
                    backgroundColor="loanRepayment"
                    caption="Coming soon"
                    eligibilityAmount="N2,000,000"
                    leftIcon="coins-many"
                    title="Loan Repayment"
                  />
                </Box>
                <Box flex={1} px="sm">
                  <QuickActionButton
                    backgroundColor="loanCalculator"
                    eligibilityAmount="N2,000,000"
                    leftIcon="calculator"
                    title="Loan Calculator"
                  />
                </Box>
                <Box flex={1} px="sm">
                  <QuickActionButton
                    backgroundColor="loanRequest"
                    eligibilityAmount="N2,000,000"
                    leftIcon="history"
                    title="Request New Loan"
                  />
                </Box>
              </Box>
            </Box>
            <Box my="md">
              <Text fontVariant="caption" fontWeight="bold" mb="md">
                RECENT LOAN HISTORY
              </Text>
              <Box>
                <LoanHistoryButton
                  amount="N300,000"
                  date="24, May, 2022"
                  description="Loan Repayment"
                  descriptionColor="secondary4"
                />
              </Box>
              <Box>
                <LoanHistoryButton
                  amount="N3,000,000"
                  backgroundColor="whiteColor"
                  date="24, May, 2022"
                  description="Loan Payment"
                  descriptionColor="secondary1"
                />
              </Box>
              <Box>
                <LoanHistoryButton
                  amount="N300,000"
                  date="24, May, 2022"
                  description="Loan Repayment"
                  descriptionColor="secondary4"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </ImageBackground>
    </ScrollView>
  </SafeAreaView>
);

export default EZCashLoansScreen;
