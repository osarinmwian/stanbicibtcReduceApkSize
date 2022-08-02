import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import React, { RefObject, useMemo, VFC } from "react";

import { PrimaryButton } from "@/shared/components/Buttons";
import { Box } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";

type FXTransferHistoryDetailsProps = {
  bottomSheetModalRef: RefObject<BottomSheetModal>;
  handleClose: () => void;
};
const renderBackdrop = (props: BottomSheetBackdropProps) => (
  <BottomSheetBackdrop {...props} opacity={0.9} pressBehavior="close" />
);

const FxTransferHistoryDetailsModal: VFC<FXTransferHistoryDetailsProps> = (
  props,
) => {
  const snapPoints = useMemo(() => ["70%", "70%"], []);

  const handleNext = () => {
    // navigation.navigate('BankTransferEnterPin');
    props.handleClose();
  };

  return (
    <Box>
      <BottomSheetModal
        backdropComponent={renderBackdrop}
        enableDismissOnClose
        ref={props.bottomSheetModalRef}
        snapPoints={snapPoints}
      >
        <BottomSheetScrollView>
          <Box p="md">
            <Box alignItems="flex-start">
              <Text
                mb="sm"
                p="xs"
                style={{
                  backgroundColor: "rgba(235, 131, 41, 0.16)",
                  borderRadius: 10,
                  color: "rgba(235, 131, 41, 1)",
                }}
                variant="regular12"
              >
                STATUS : PENDING
              </Text>
            </Box>
            <Text fontVariant="h6" fontWeight="bold" mb="xs">
              FX Transfer
            </Text>
            <Text mb="md" variant="regular10">
              TRANS DATE: 07/01/2021. 2:13:05AM
            </Text>
            <Box mb="md">
              <Box backgroundColor="confirmCard" borderRadius="sm" p="md">
                <Text mb="sm" variant="medium10">
                  TRANSACTION DETAILS
                </Text>
                <Box flexDirection="row" justifyContent="space-between">
                  <Text variant="regular10">TRANSACTION DETAILS</Text>
                  <Text variant="regular10">Medical Bills</Text>
                </Box>
                <Box flexDirection="row" justifyContent="space-between" mt="sm">
                  <Text variant="regular10">Purchase Type</Text>
                  <Text variant="regular10">Company</Text>
                </Box>
                <Box flexDirection="row" justifyContent="space-between" mt="sm">
                  <Text variant="regular10">Pickup Branch</Text>
                  <Text variant="regular10">Idejo, Victoria Island</Text>
                </Box>
                <Box flexDirection="row" justifyContent="space-between" mt="sm">
                  <Text variant="regular10">Amount</Text>
                  <Text variant="medium10">N2,000.00</Text>
                </Box>
                <Text mb="sm" mt="md" variant="medium10">
                  UPLOADED DOCUMENTS
                </Text>
                <Text variant="regular10">Medical Bill.pdf</Text>
                <Text variant="regular10">PTA.pdf</Text>
                <Text variant="regular10">School Fees.pdf</Text>
              </Box>
            </Box>
          </Box>
        </BottomSheetScrollView>
        <Box paddingHorizontal="md">
          <PrimaryButton
            backgroundColor="cardSecondary"
            containerProps={{ flex: 1 }}
            label="CANCEL"
            labelProps={{ color: "primaryBlack", fontVariant: "caption" }}
            onPress={handleNext}
            paddingVertical="md"
          />
        </Box>
        <Box mt="sm" paddingHorizontal="md">
          <PrimaryButton
            backgroundColor="primaryColor"
            containerProps={{ flex: 1 }}
            label="CONFIRM TRANSACTION"
            labelProps={{ color: "whiteColor", fontVariant: "caption" }}
            mb="sm"
            onPress={handleNext}
            paddingVertical="md"
          />
        </Box>
      </BottomSheetModal>
    </Box>
  );
};

export default FxTransferHistoryDetailsModal;
