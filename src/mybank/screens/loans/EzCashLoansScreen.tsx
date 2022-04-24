import { BottomSheetModal } from "@gorhom/bottom-sheet";
import React, { useRef, VFC } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

import { loginBackground } from "@/mybank/assets/image/";
import {
  LoanHistoryButton,
  QuickActionButton,
} from "@/mybank/components/Buttons";
import { RepayLoanCard } from "@/mybank/components/Cards";
import {
  ConfirmLoanRequestModal,
  LoanRepaymentModal,
  LoanTenureModal,
  TermsAndConditionsModal,
} from "@/mybank/components/Modals";
import { LoansNavigationProps } from "@/mybank/navigation/types";
import { Box, ImageBackground, SafeAreaView } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";

const EZCashLoansScreen: VFC<LoansNavigationProps<"Loans">> = ({
  navigation,
}) => {
  const loanTenureBottomSheetModalRef = useRef<BottomSheetModal>(null);
  const loanRepaymentBottomSheetModalRef = useRef<BottomSheetModal>(null);
  const confirmLoanBottomSheetModalRef = useRef<BottomSheetModal>(null);
  const termsAndConditionsBottomSheetModalRef = useRef<BottomSheetModal>(null);

  const onOpenLoanTenureModal = () =>
    loanTenureBottomSheetModalRef.current?.present();

  const onOpenLoanRepaymentModal = () =>
    loanRepaymentBottomSheetModalRef.current?.present();

  const onOpenConfirmLoanModal = () =>
    confirmLoanBottomSheetModalRef.current?.present();

  const onOpenTermsAndConditionsModal = () =>
    termsAndConditionsBottomSheetModalRef.current?.present();

  const onOpenLoanDetailsScreen = () => navigation.navigate("LoanDetails");

  return (
    <SafeAreaView flex={1}>
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
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ backgroundColor: "white" }}
            >
              <Box mt="md">
                <Box>
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
                        onPress={onOpenLoanTenureModal}
                        title="Loan Repayment"
                      />
                    </Box>
                    <Box flex={1} px="sm">
                      <QuickActionButton
                        backgroundColor="loanCalculator"
                        eligibilityAmount="N2,000,000"
                        leftIcon="calculator"
                        onPress={onOpenLoanRepaymentModal}
                        title="Loan Calculator"
                      />
                    </Box>
                    <Box flex={1} px="sm">
                      <QuickActionButton
                        backgroundColor="loanRequest"
                        eligibilityAmount="N2,000,000"
                        leftIcon="history"
                        onPress={onOpenConfirmLoanModal}
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
                      onPress={onOpenTermsAndConditionsModal}
                    />
                  </Box>
                  <Box>
                    <LoanHistoryButton
                      amount="N3,000,000"
                      backgroundColor="whiteColor"
                      date="24, May, 2022"
                      description="Loan Payment"
                      descriptionColor="secondary1"
                      onPress={onOpenLoanDetailsScreen}
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
            </ScrollView>
          </Box>
        </Box>
      </ImageBackground>
      <LoanTenureModal bottomSheetModalRef={loanTenureBottomSheetModalRef} />
      <LoanRepaymentModal
        bottomSheetModalRef={loanRepaymentBottomSheetModalRef}
      />
      <ConfirmLoanRequestModal
        bottomSheetModalRef={confirmLoanBottomSheetModalRef}
      />
      <TermsAndConditionsModal
        bottomSheetModalRef={termsAndConditionsBottomSheetModalRef}
      />
    </SafeAreaView>
  );
};

export default EZCashLoansScreen;
