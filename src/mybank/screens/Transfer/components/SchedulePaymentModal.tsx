import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import React, { RefObject, useMemo, VFC } from "react";

import ListComponent from "@/mybank/screens/Transfer/components/ListComponent";
import { PrimaryButton } from "@/shared/components/Buttons";
import { Box } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";

type SchedulePaymentModalProps = {
  bottomSheetModalRef: RefObject<BottomSheetModal>;
  onProceed: () => void;
  handleClose: () => void;
};
const renderBackdrop = (props: BottomSheetBackdropProps) => (
  <BottomSheetBackdrop {...props} opacity={0.9} pressBehavior="close" />
);

const SchedulePaymentModal: VFC<SchedulePaymentModalProps> = (props) => {
  const snapPoints = useMemo(() => ["50%", "50%"], []);

  return (
    <Box>
      <BottomSheetModal
        backdropComponent={renderBackdrop}
        enableDismissOnClose
        ref={props.bottomSheetModalRef}
        snapPoints={snapPoints}
      >
        <BottomSheetScrollView>
          <Box marginTop="md" p="md">
            <Text fontVariant="h6" fontWeight="bold" mb="md">
              Schedule payment
            </Text>
            <Box mb="md">
              <ListComponent
                label="Schedule type"
                onPress={() => {}}
                placeholder="Select option"
              />
              <Box marginTop="md" />
              <ListComponent
                iconName="calender"
                label="Payment date"
                onPress={() => {}}
                placeholder="DD/MM/YYYY"
              />
            </Box>
          </Box>
        </BottomSheetScrollView>
        <Box p="md">
          <PrimaryButton
            backgroundColor="primaryColor"
            containerProps={{ flex: 1 }}
            label="SCHEDULE PAYMENT"
            labelProps={{ color: "whiteColor", fontVariant: "caption" }}
            mb="sm"
            onPress={props.handleClose}
            paddingVertical="md"
          />
        </Box>
      </BottomSheetModal>
    </Box>
  );
};

export default SchedulePaymentModal;
