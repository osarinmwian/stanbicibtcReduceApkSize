import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import React, { RefObject, useMemo, VFC } from "react";

import { EligibilityButton } from "@/mybank/components/Buttons";
import { PrimaryButton } from "@/shared/components/Buttons";
import { Box } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";

type LoanTenureModalProps = {
  bottomSheetModalRef: RefObject<BottomSheetModal>;
  repaymentFn: () => void;
};
const renderBackdrop = (props: BottomSheetBackdropProps) => (
  <BottomSheetBackdrop {...props} opacity={0.9} pressBehavior="close" />
);

const LoanTenureModal: VFC<LoanTenureModalProps> = (props) => {
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
          <Box p="md">
            <Text fontVariant="h6" fontWeight="bold" mb="md">
              Loan Tenure
            </Text>
            <Box mb="md">
              <EligibilityButton subtitle="Select Option" title="Loan Tenure" />
            </Box>
            <Box mb="md">
              <EligibilityButton
                onPress={() => props.repaymentFn()}
                subtitle="Select Option"
                title="Repayment Schedule"
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

export { LoanTenureModal };
