import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import React, { RefObject, useMemo, VFC } from "react";

import { BaseButton } from "@/shared/components/Buttons";
import { Box } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";

type BillersModalProps = {
  bottomSheetModalRef: RefObject<BottomSheetModal>;
  handleClose: () => void;
};
const renderBackdrop = (props: BottomSheetBackdropProps) => (
  <BottomSheetBackdrop
    {...props}
    appearsOnIndex={0}
    disappearsOnIndex={-1}
    opacity={0.9}
    pressBehavior="close"
  />
);

const BillersModal: VFC<BillersModalProps> = (props) => {
  const navigation = useNavigation();
  const snapPoints = useMemo(() => ["40%"], []);

  const handleNext = () => {
    navigation.navigate("BillersForm");
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
          <Text marginHorizontal="md" marginVertical="lg" variant="medium18">
            Select biller
          </Text>
          <Box>
            <BaseButton
              backgroundColor="cardSecondary"
              onPress={handleNext}
              paddingHorizontal="md"
              paddingVertical="md"
            >
              <Text variant="medium12">CHINESE EMBASSY VISA COLLECTION</Text>
            </BaseButton>
            <BaseButton
              backgroundColor="transparent"
              paddingHorizontal="md"
              paddingVertical="md"
            >
              <Text variant="medium12">REVPAY COLLECTIONS</Text>
            </BaseButton>
          </Box>
        </BottomSheetScrollView>
      </BottomSheetModal>
    </Box>
  );
};

export default BillersModal;
