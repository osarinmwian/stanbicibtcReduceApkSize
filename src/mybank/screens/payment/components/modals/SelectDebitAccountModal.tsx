import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import React, { RefObject, useMemo, useState, VFC } from "react";

import {
  blackcardsbackground,
  bluecardsbackground,
  greencardsbackground,
  redcardsbackground,
} from "@/mybank/assets/image";
import { Box } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";

import DebitCards from "../DebitCards";

type DebitAccountProps = {
  bottomSheetModalRef: RefObject<BottomSheetModal>;
  onProceed: () => void;
  handleClose: () => void;
};

const renderBackdrop = (props: BottomSheetBackdropProps) => (
  <BottomSheetBackdrop {...props} opacity={0.9} pressBehavior="close" />
);

const SelectDebitAccountModal: VFC<DebitAccountProps> = (props) => {
  const snapPoints = useMemo(() => ["80%", "80%"], []);

  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <BottomSheetModal
      backdropComponent={renderBackdrop}
      enableDismissOnClose
      ref={props.bottomSheetModalRef}
      snapPoints={snapPoints}
    >
      <BottomSheetScrollView>
        <Box marginHorizontal="md" mb="md">
          <Text color="textColor" variant="medium16">
            Select Account
          </Text>

          <Text color="textColor" mt="xs" variant="regular14">
            Select account to make payment with
          </Text>

          <DebitCards
            accountbalance="N1,200.35"
            accountHolder="EHIZOJIE SOLOMON IHAYERE"
            accountNumber="0000826353"
            accountType="CURRENT"
            backgroundColor="primaryColor"
            image={bluecardsbackground}
            isVisible={isVisible}
            ledgerBalance="N1,200.45"
            onProceed={() => props.onProceed()}
            toggleVisibility={() => toggleVisibility()}
          />

          <DebitCards
            accountbalance="N10,200.35"
            accountHolder="EHIZOJIE SOLOMON IHAYERE"
            accountNumber="0000826353"
            accountType="CURRENT"
            backgroundColor="primaryBlack"
            image={blackcardsbackground}
            isVisible={isVisible}
            ledgerBalance="N200,200.45"
            onProceed={() => props.onProceed()}
            toggleVisibility={() => toggleVisibility()}
          />

          <DebitCards
            accountbalance="N10,200.35"
            accountHolder="EHIZOJIE SOLOMON IHAYERE"
            accountNumber="0000826353"
            accountType="CURRENT"
            backgroundColor="loyaltyColor"
            image={redcardsbackground}
            isVisible={isVisible}
            ledgerBalance="N2,000,200.45"
            onProceed={() => props.onProceed()}
            toggleVisibility={() => toggleVisibility()}
          />

          <DebitCards
            accountbalance="N1,000,200.35"
            accountHolder="EHIZOJIE SOLOMON IHAYERE"
            accountNumber="0000826353"
            accountType="CURRENT"
            backgroundColor="lightgreen"
            image={greencardsbackground}
            isVisible={isVisible}
            ledgerBalance="N20,200.45"
            onProceed={() => props.onProceed()}
            toggleVisibility={() => toggleVisibility()}
          />
        </Box>
      </BottomSheetScrollView>
    </BottomSheetModal>
  );
};

export default SelectDebitAccountModal;
