import { BottomSheetModal, useBottomSheetModal } from "@gorhom/bottom-sheet";
import React, { useRef, useState } from "react";
import { KeyboardAvoidingView, Switch } from "react-native";

import ApproveBankTransferModal from "@/mybank/screens/Transfer/components/ApproveBankTransferModal";
import DebitAccountModal from "@/mybank/screens/Transfer/components/DebitAccountModal";
import ListComponent from "@/mybank/screens/Transfer/components/ListComponent";
import OtherBanksModal from "@/mybank/screens/Transfer/components/OtherBanksModal";
import RecipientBankModal from "@/mybank/screens/Transfer/components/RecipientBankModal";
import RecipientInput from "@/mybank/screens/Transfer/components/RecipientInput";
import SchedulePaymentModal from "@/mybank/screens/Transfer/components/SchedulePaymentModal";
import { Icon } from "@/shared/assets/icons";
import { BaseButton, PrimaryButton } from "@/shared/components/Buttons";
import { Box, LayoutComponent, ScrollBox } from "@/shared/components/Layout";
import { OutlinedTextInput } from "@/shared/components/TextInput";
import { Text } from "@/shared/components/Typography";
import { useTheme } from "@/shared/theme";
import { RFValue } from "@/shared/utils/functions";

export default function BankTransfer() {
  const [isEnabled, setIsEnabled] = useState(false);
  const { dismissAll } = useBottomSheetModal();
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const debitAccountBottomSheetModalRef = useRef<BottomSheetModal>(null);
  const recipientBankBottomSheetModalRef = useRef<BottomSheetModal>(null);
  const otherBanksBottomSheetModalRef = useRef<BottomSheetModal>(null);
  const approveBankTransferBottomSheetModalRef = useRef<BottomSheetModal>(null);
  const schedulePaymentBottomSheetModalRef = useRef<BottomSheetModal>(null);
  const theme = useTheme();

  const onOpenDebitAccountModal = () =>
    debitAccountBottomSheetModalRef.current?.present();
  const onCloseDebitAccountModal = () =>
    debitAccountBottomSheetModalRef.current?.close();

  const onOpenRecipientBankModal = () =>
    recipientBankBottomSheetModalRef.current?.present();
  const onCloseRecipientBankModal = () =>
    recipientBankBottomSheetModalRef.current?.close();

  const onOpenOtherBanksModal = () =>
    otherBanksBottomSheetModalRef.current?.present();
  const onCloseOtherBanksModal = () =>
    otherBanksBottomSheetModalRef.current?.close();

  const onOpenApproveBankTransferModal = () =>
    approveBankTransferBottomSheetModalRef.current?.present();
  // const onCloseApproveBankTransferModal = () => approveBankTransferBottomSheetModalRef.current?.close();

  const onOpenSchedulePaymentModal = () =>
    schedulePaymentBottomSheetModalRef.current?.present();
  const onCloseSchedulePaymentModal = () =>
    schedulePaymentBottomSheetModalRef.current?.close();

  const onCloseAllModals = () => dismissAll();

  return (
    <LayoutComponent isBackArrow label="BANK TRANSFER">
      <ScrollBox
        bounces={false}
        flex={1}
        paddingHorizontal="md"
        paddingVertical="md"
      >
        <Text marginBottom="sm" variant="medium12">
          Bank transfers
        </Text>
        <ListComponent
          label="SELECT ACCOUNT"
          placeholder="SAVINGS ACCOUNT - 0034512321"
        />
        <Box marginTop="sm">
          <OutlinedTextInput
            baseColor={theme.colors.whiteColor}
            fontSize={RFValue(10)}
            inputContainerStyle={{
              backgroundColor: theme.colors.cardSecondary,
              borderRadius: 10,
              height: RFValue(52),
            }}
            label="AMOUNT"
            labelTextStyle={{ color: theme.colors.primaryBlack }}
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
              height: RFValue(52),
            }}
            label="RECIPIENT ACCOUNT NUMBER"
            labelTextStyle={{ color: theme.colors.primaryBlack }}
            tintColor={theme.colors.cardSecondary}
          />
        </Box>
        <RecipientInput
          bankName="FIRST BANK"
          recipientName="IHAYERE EHIZOJIE SOLOMON"
        />

        <ListComponent
          label="TRANSACTION CATEGORY"
          onPress={() => {}}
          placeholder="Education"
        />
        <Box marginTop="sm">
          <OutlinedTextInput
            baseColor={theme.colors.whiteColor}
            fontSize={RFValue(10)}
            inputContainerStyle={{
              backgroundColor: theme.colors.cardSecondary,
              borderRadius: 10,
              height: RFValue(52),
            }}
            label="NARRATION"
            labelTextStyle={{ color: theme.colors.primaryBlack }}
            tintColor={theme.colors.cardSecondary}
          />
        </Box>
        <Box
          alignItems="center"
          flex={1}
          flexDirection="row"
          paddingVertical="sm"
        >
          <Switch
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            thumbColor="#f4f3f4"
            trackColor={{ false: "#616E88", true: "#2DA74C" }}
            value={isEnabled}
          />
          <Text marginLeft="sm" variant="regular14">
            Save as beneficiary for later
          </Text>
        </Box>
        <PrimaryButton
          alignItems="center"
          backgroundColor="primaryColor"
          height={RFValue(52)}
          justifyContent="center"
          label="CONFIRM TRANSACTION"
          labelProps={{ color: "whiteColor" }}
          labelVariant="medium12"
          marginBottom="xs"
          marginTop="md"
          onPress={() => onOpenDebitAccountModal()}
          paddingVertical="md"
        />

        <BaseButton
          alignItems="center"
          backgroundColor="confirmCard"
          height={RFValue(52)}
          justifyContent="center"
          marginVertical="sm"
          onPress={onOpenSchedulePaymentModal}
          paddingVertical="sm"
        >
          <Icon color="primaryColor" name="calender" size="sm" />
          <Text
            color="primaryColor"
            paddingHorizontal="sm"
            textAlign="center"
            variant="medium14"
          >
            Schedule payment
          </Text>
        </BaseButton>

        <KeyboardAvoidingView style={{ marginBottom: 50 }} />

        <DebitAccountModal
          bottomSheetModalRef={debitAccountBottomSheetModalRef}
          handleClose={onCloseDebitAccountModal}
          onProceed={onOpenRecipientBankModal}
        />
        <RecipientBankModal
          bottomSheetModalRef={recipientBankBottomSheetModalRef}
          handleClose={onCloseRecipientBankModal}
          onOpenOtherBanksModal={onOpenOtherBanksModal}
          onProceed={onOpenApproveBankTransferModal}
        />
        <OtherBanksModal
          bottomSheetModalRef={otherBanksBottomSheetModalRef}
          handleClose={onCloseOtherBanksModal}
          onProceed={onOpenApproveBankTransferModal}
        />
        <ApproveBankTransferModal
          bottomSheetModalRef={approveBankTransferBottomSheetModalRef}
          handleClose={onCloseAllModals}
        />
        <SchedulePaymentModal
          bottomSheetModalRef={schedulePaymentBottomSheetModalRef}
          handleClose={onCloseSchedulePaymentModal}
          onProceed={onCloseSchedulePaymentModal}
        />
      </ScrollBox>
    </LayoutComponent>
  );
}
