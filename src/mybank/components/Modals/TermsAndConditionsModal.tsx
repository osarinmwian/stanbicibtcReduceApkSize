import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import React, { RefObject, useMemo, VFC } from "react";
import { RFValue } from "react-native-responsive-fontsize";

import { CloseIconButton, PrimaryButton } from "@/shared/components/Buttons";
import { Box } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";

type TermsAndConditionsModalProps = {
  bottomSheetModalRef: RefObject<BottomSheetModal>;
};

const renderBackdrop = (props: BottomSheetBackdropProps) => (
  <BottomSheetBackdrop opacity={0.9} pressBehavior="close" {...props} />
);

const TermsAndConditionsModal: VFC<TermsAndConditionsModalProps> = (props) => {
  const snapPoints = useMemo(() => ["90%", "90%"], []);

  const onCloseModal = () => props.bottomSheetModalRef.current?.dismiss();

  return (
    <Box>
      <BottomSheetModal
        backdropComponent={renderBackdrop}
        backgroundStyle={{
          justifyContent: "center",
        }}
        enableDismissOnClose
        handleIndicatorStyle={{
          display: "none",
        }}
        ref={props.bottomSheetModalRef}
        snapPoints={snapPoints}
        style={{
          marginLeft: "5%",
          width: "90%",
        }}
      >
        <BottomSheetScrollView>
          <Box p="md">
            <Box alignItems="flex-start" mb="md">
              <CloseIconButton onPress={onCloseModal} />
            </Box>
            <Text fontVariant="h6" fontWeight="bold" mb="md">
              Terms and conditions
            </Text>
            <Box mb="md">
              <Text lineHeight={RFValue(20)}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                autem, excepturi quae, amet ipsa ea inventore dolorum, fugit
                officiis magni suscipit neque enim consequatur nobis facilis
                minima officia quisquam architecto!
              </Text>
              <Text lineHeight={RFValue(20)}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                autem, excepturi quae, amet ipsa ea inventore dolorum, fugit
                officiis magni suscipit neque enim consequatur nobis facilis
                minima officia quisquam architecto!
              </Text>
            </Box>
          </Box>
        </BottomSheetScrollView>
        <Box p="md">
          <Box mt="md">
            <PrimaryButton
              containerProps={{ flex: 1 }}
              label="CONTINUE"
              labelProps={{ color: "whiteColor", fontVariant: "caption" }}
              paddingVertical="md"
            />
          </Box>
          <Box mt="md">
            <PrimaryButton
              backgroundColor="paleGrey50"
              containerProps={{ flex: 1 }}
              label="CANCEL"
              labelProps={{ fontVariant: "caption" }}
              paddingVertical="md"
            />
          </Box>
        </Box>
      </BottomSheetModal>
    </Box>
  );
};

export { TermsAndConditionsModal };
