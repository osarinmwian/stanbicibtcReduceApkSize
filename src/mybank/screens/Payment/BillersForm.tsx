import { BottomSheetModal, useBottomSheetModal } from "@gorhom/bottom-sheet";
import React, { useRef } from "react";
import { KeyboardAvoidingView } from "react-native";

import ApproveBankTransferModal from "@/mybank/screens/Transfer/components/ApproveBankTransferModal";
import DebitAccountModal from "@/mybank/screens/Transfer/components/DebitAccountModal";
import ListComponent from "@/mybank/screens/Transfer/components/ListComponent";
import { PrimaryButton } from "@/shared/components/Buttons";
import { Box, LayoutComponent, ScrollBox } from "@/shared/components/Layout";
import { OutlinedTextInput } from "@/shared/components/TextInput";
import { Text } from "@/shared/components/Typography";
import { useTheme } from "@/shared/theme";
import { RFValue } from "@/shared/utils/functions";

export default function BillersForm() {
  const { dismissAll } = useBottomSheetModal();
  const debitAccountBottomSheetModalRef = useRef<BottomSheetModal>(null);
  const approveBankTransferBottomSheetModalRef = useRef<BottomSheetModal>(null);
  const theme = useTheme();

  const onOpenDebitAccountModal = () =>
    debitAccountBottomSheetModalRef.current?.present();
  const onCloseDebitAccountModal = () =>
    debitAccountBottomSheetModalRef.current?.close();

  const onOpenApproveBankTransferModal = () =>
    approveBankTransferBottomSheetModalRef.current?.present();
  // const onCloseApproveBankTransferModal = () => approveBankTransferBottomSheetModalRef.current?.close();

  const onCloseAllModals = () => dismissAll();

  return (
    <LayoutComponent isBackArrow label="BANK TRANSFER">
      <ScrollBox
        bounces={false}
        flex={1}
        paddingHorizontal="md"
        paddingVertical="md"
      >
        <Text marginBottom="sm" variant="bold16">
          Billers
        </Text>
        <ListComponent
          label="SELECT ACCOUNT"
          onPress={onOpenDebitAccountModal}
          placeholder="SAVINGS ACCOUNT - 0034512321"
        />
        <Box marginTop="sm">
          <OutlinedTextInput
            baseColor={theme.colors.whiteColor}
            fontSize={RFValue(10)}
            inputContainerStyle={{
              backgroundColor: theme.colors.cardSecondary,
              borderRadius: 10,
              height: RFValue(60),
            }}
            label="AMOUNT"
            labelTextStyle={{ color: theme.colors.primaryBlack, top: 10 }}
            tintColor={theme.colors.cardSecondary}
          />
        </Box>
        <Box marginTop="sm">
          <OutlinedTextInput
            baseColor={theme.colors.whiteColor}
            fontSize={RFValue(10)}
            inputContainerStyle={{
              backgroundColor: theme.colors.cardSecondary,
              borderRadius: 10,
              height: RFValue(60),
            }}
            label="BENEFICIARY CODE"
            labelTextStyle={{ color: theme.colors.primaryBlack, top: 10 }}
            tintColor={theme.colors.cardSecondary}
          />
        </Box>
        <Box marginTop="sm">
          <OutlinedTextInput
            baseColor={theme.colors.whiteColor}
            defaultValue="3066700525"
            fontSize={RFValue(10)}
            inputContainerStyle={{
              backgroundColor: theme.colors.cardSecondary,
              borderRadius: 10,
              height: RFValue(60),
            }}
            label="PASSPORT NUMBER"
            labelTextStyle={{ color: theme.colors.primaryBlack, top: 10 }}
            tintColor={theme.colors.cardSecondary}
          />
        </Box>
        <Box marginTop="sm">
          <OutlinedTextInput
            baseColor={theme.colors.whiteColor}
            defaultValue="ehizojie.ihayere@stanbicibtc.com"
            fontSize={RFValue(10)}
            inputContainerStyle={{
              backgroundColor: theme.colors.cardSecondary,
              borderRadius: 10,
              height: RFValue(60),
            }}
            label="EMAIL"
            labelTextStyle={{ color: theme.colors.primaryBlack, top: 10 }}
            tintColor={theme.colors.cardSecondary}
          />
        </Box>
        <PrimaryButton
          alignItems="center"
          backgroundColor="primaryColor"
          height={RFValue(52)}
          justifyContent="center"
          label="CONTINUE"
          labelProps={{ color: "whiteColor" }}
          labelVariant="medium12"
          marginBottom="xs"
          marginTop="md"
          onPress={() => onOpenDebitAccountModal()}
          paddingVertical="md"
        />
        <KeyboardAvoidingView style={{ marginBottom: 50 }} />

        <DebitAccountModal
          bottomSheetModalRef={debitAccountBottomSheetModalRef}
          handleClose={onCloseDebitAccountModal}
          onProceed={onOpenApproveBankTransferModal}
        />
        <ApproveBankTransferModal
          bottomSheetModalRef={approveBankTransferBottomSheetModalRef}
          handleClose={onCloseAllModals}
        />
      </ScrollBox>
    </LayoutComponent>
  );
}
