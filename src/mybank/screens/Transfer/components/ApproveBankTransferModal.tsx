import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import React, { RefObject, useMemo, VFC } from "react";

import TotalAmountCard from "@/mybank/screens/Transfer/components/TotalAmountCard";
import { PrimaryButton } from "@/shared/components/Buttons";
import { Box } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";

type ApproveBankTransferProps = {
  bottomSheetModalRef: RefObject<BottomSheetModal>;
  handleClose: () => void;
};
const renderBackdrop = (props: BottomSheetBackdropProps) => (
  <BottomSheetBackdrop {...props} opacity={0.9} pressBehavior="close" />
);

const ApproveBankTransferModal: VFC<ApproveBankTransferProps> = (props) => {
  const navigation = useNavigation();
  const snapPoints = useMemo(() => ["70%", "70%"], []);

  const handleNext = () => {
    navigation.navigate("BankTransferEnterPin");
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
            <Text fontVariant="h6" fontWeight="bold" mb="xs">
              Approve bank transfer
            </Text>
            <Text mb="sml" variant="regular12">
              Payment confirmation is irreversible.
            </Text>
            <TotalAmountCard />
            <Box paddingVertical="sm">
              <Text variant="regular10">Destination Account</Text>
              <Text mt="xs" variant="regular12">
                IHAYERE EHIZOJIE SOLOMON - 01910191092
              </Text>
            </Box>
            <Box paddingVertical="sm">
              <Text variant="regular10">Bank</Text>
              <Text mt="xs" variant="regular12">
                FIRST BANK NG
              </Text>
            </Box>
            <Box paddingVertical="sm">
              <Text variant="regular10">Source Account</Text>
              <Text mt="xs" variant="regular12">
                CURRENT ACCOUNT - 0192820293 - Kamaka...
              </Text>
            </Box>
            <Box paddingVertical="sm">
              <Text variant="regular10">Narration</Text>
              <Text mt="xs" variant="regular12">
                Enjoy for the weekend
              </Text>
            </Box>
          </Box>
        </BottomSheetScrollView>
        <Box p="md">
          <PrimaryButton
            backgroundColor="primaryColor"
            containerProps={{ flex: 1 }}
            label="PIN CONFIRMATION"
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

export default ApproveBankTransferModal;
