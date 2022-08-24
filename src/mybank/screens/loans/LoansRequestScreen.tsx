import { BottomSheetModal } from "@gorhom/bottom-sheet";
import React, { useRef, useState, VFC } from "react";
import { useTranslation } from "react-i18next";
import { RFValue } from "react-native-responsive-fontsize";

import { loginBackground } from "@/mybank/assets/image";
import {
  LoanRepaymentModal,
  LoanTenureModal,
} from "@/mybank/components/Modals";
import { BaseButton } from "@/shared/components/Buttons";
import { Box, ImageBackground, SafeAreaView } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";
import { FormatMoney } from "@/shared/utils/functions/formatMoney";

import PinComponent from "../Transfer/components/PinComponent";

const LoansRequestScreen: VFC = () => {
  const { t } = useTranslation();
  const [state, setState] = useState<string>("0");
  const onChangeText = (value: string) => setState(value);

  const loanTenureBottomSheetModalRef = useRef<BottomSheetModal>(null);
  const loanRepaymentBottomSheetModalRef = useRef<BottomSheetModal>(null);

  const onOpenLoanTenureModal = () =>
    loanTenureBottomSheetModalRef.current?.present();

  const onOpenLoanRepaymentModal = () =>
    loanRepaymentBottomSheetModalRef.current?.present();

  return (
    <ImageBackground flex={1} source={loginBackground}>
      <SafeAreaView flex={1}>
        <Box flex={1}>
          <Box alignItems="center" flex={2} mt="xl">
            <Box>
              <Text
                color="whiteColor"
                fontSize={RFValue(18)}
                fontWeight="700"
                textAlign="center"
              >
                {t("loans.loanReqeust")}
              </Text>
              <Text
                color="whiteColor"
                fontSize={RFValue(14)}
                fontWeight="400"
                textAlign="center"
              >
                {t("loans.howMuchDoYouNeed")}
              </Text>
            </Box>
          </Box>

          <Box flex={3}>
            <Box flexDirection="row" justifyContent="center">
              <Box justifyContent="flex-end" pb="none">
                <Text
                  color="loanTransparentColor"
                  fontSize={RFValue(24)}
                  fontWeight="700"
                  mr="sm"
                  textAlign="center"
                >
                  N
                </Text>
              </Box>
              <Text
                color="loanTransparentColor"
                fontSize={RFValue(40)}
                fontWeight="700"
                textAlign="center"
              >
                {FormatMoney(Number.parseInt(state, 10))}
              </Text>
            </Box>
            <Text
              color="loanTransparentColor"
              fontSize={RFValue(14)}
              fontWeight="400"
              textAlign="center"
            >
              {t("loans.currentLoanPayable")}: N200,000
            </Text>
          </Box>
          <Box flex={10}>
            <PinComponent
              manageInput
              numberColor="whiteColor"
              numberFontSize={24}
              onChangeText={onChangeText}
              padBackgroundColor="loanTransparentBackgroundColor"
              size={60}
              value={state}
            />
          </Box>
          <Box flex={1.5} paddingHorizontal="md">
            <BaseButton
              backgroundColor="whiteColor"
              justifyContent="center"
              onPress={onOpenLoanTenureModal}
            >
              <Box padding="sm">
                <Text
                  color="imageBackgroundTint"
                  fontSize={RFValue(12)}
                  fontWeight="400"
                >
                  {t("buttons.continue").toUpperCase()}
                </Text>
              </Box>
            </BaseButton>
          </Box>
        </Box>
      </SafeAreaView>

      <LoanTenureModal
        bottomSheetModalRef={loanTenureBottomSheetModalRef}
        repaymentFn={onOpenLoanRepaymentModal}
      />
      <LoanRepaymentModal
        bottomSheetModalRef={loanRepaymentBottomSheetModalRef}
      />
    </ImageBackground>
  );
};

export default LoansRequestScreen;
