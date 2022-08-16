import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import React, { RefObject, useMemo, VFC } from "react";

import { RepaymentButton } from "@/mybank/components/Buttons";
import { PrimaryButton } from "@/shared/components/Buttons";
import { Box } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";
import Pressable from "@/shared/components/Pressable";

type LoanRepaymentModalProps = {
  bottomSheetModalRef: RefObject<BottomSheetModal>;
};
const renderBackdrop = (props: BottomSheetBackdropProps) => (
  <BottomSheetBackdrop {...props} opacity={0.9} pressBehavior="close" />
);

const LoanRepaymentModal: VFC<LoanRepaymentModalProps> = (props) => {
  const snapPoints = useMemo(() => ["85%", "85%"], []);

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
            <Box mb="md">
              <Text fontVariant="h6" fontWeight="bold">
                Loan Repayment Schedule
              </Text>
              <Text color="lightGrey" fontVariant="caption" fontWeight="bold">
                Select loan schedule
              </Text>
            </Box>

            <Box mb="md">
              <RepaymentButton
                interest="N20"
                outstanding="N15"
                principal="N200"
                title="January"
              />
            </Box>
            <Box mb="md">
              <RepaymentButton
                interest="N20"
                outstanding="N15"
                principal="N200"
                title="February"
              />
            </Box>
            <Box mb="md">
              <RepaymentButton
                interest="N20"
                outstanding="N15"
                principal="N200"
                selected
                title="March"
              />
            </Box>
          </Box>
        </BottomSheetScrollView>
        <Box p="md">
          <PrimaryButton
            containerProps={{ flex: 1 }}
            label="CONTINUE"
            labelProps={{ color: "whiteColor", fontVariant: "caption" }}
            paddingVertical="md"
          />
        </Box>
      </BottomSheetModal>
    </Box>
  );
};

export { LoanRepaymentModal };
