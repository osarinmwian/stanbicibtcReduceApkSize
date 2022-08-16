import React, { useMemo, useRef, useState, VFC } from "react";
import { loginBackground } from "@/mybank/assets/image";
import { Box, ImageBackground, SafeAreaView } from "@/shared/components/Layout";
import PinComponent from "../Transfer/components/PinComponent";
import { Text } from "@/shared/components/Typography";
import { RFValue } from "react-native-responsive-fontsize";
import { BaseButton } from "@/shared/components/Buttons";
import { useTranslation } from "react-i18next";
import { Dimensions, useWindowDimensions } from "react-native";
import { FormatMoney } from "@/shared/utils/functions/formatMoney";
import {
  LoanRepaymentModal,
  LoanTenureModal,
} from "@/mybank/components/Modals";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

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
          <Box mt="xl" alignItems="center" flex={2}>
            <Box>
              <Text
                color="whiteColor"
                fontWeight="700"
                fontSize={RFValue(18)}
                textAlign="center"
              >
                {t("loans.loanReqeust")}
              </Text>
              <Text
                color="whiteColor"
                fontWeight="400"
                fontSize={RFValue(14)}
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
                  fontWeight="700"
                  fontSize={RFValue(24)}
                  textAlign="center"
                  mr="sm"
                >
                  N
                </Text>
              </Box>
              <Text
                color="loanTransparentColor"
                fontWeight="700"
                fontSize={RFValue(40)}
                textAlign="center"
              >
                {FormatMoney(parseInt(state))}
              </Text>
            </Box>
            <Text
              color="loanTransparentColor"
              fontWeight="400"
              fontSize={RFValue(14)}
              textAlign="center"
            >
              {t("loans.currentLoanPayable")}: N200,000
            </Text>
          </Box>
          <Box flex={10}>
            <PinComponent
              size={60}
              value={state}
              padBackgroundColor="loanTransparentBackgroundColor"
              numberColor="whiteColor"
              numberFontSize={24}
              onChangeText={onChangeText}
              manageInput
            />
          </Box>
          <Box paddingHorizontal="md" flex={1.5}>
            <BaseButton
              justifyContent="center"
              backgroundColor="whiteColor"
              onPress={onOpenLoanTenureModal}
            >
              <Box padding="sm">
                <Text
                  color="imageBackgroundTint"
                  fontWeight="400"
                  fontSize={RFValue(12)}
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
