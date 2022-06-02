import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import { CommonActions, useNavigation } from "@react-navigation/native";
import React, { RefObject, useMemo, VFC } from "react";

import { PrimaryButton } from "@/shared/components/Buttons";
import { Box } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";
import { RFValue } from "@/shared/utils/functions";

import Image from "../../../../shared/components/Image";

type SuccessModalProps = {
  bottomSheetModalRef: RefObject<BottomSheetModal>;
  onProceed: () => void;
  handleClose: () => void;
};
const renderBackdrop = (props: BottomSheetBackdropProps) => (
  <BottomSheetBackdrop {...props} opacity={0.9} pressBehavior="close" />
);

const SuccessModal: VFC<SuccessModalProps> = (props) => {
  const snapPoints = useMemo(() => ["50%", "50%"], []);
  const navigation = useNavigation();

  const handleClose = () => {
    props.handleClose();
    navigation.dispatch({
      ...CommonActions.reset({
        index: 0,
        routes: [{ name: "BottomTabs" }],
      }),
    });
    navigation.dispatch({
      ...CommonActions.reset({
        index: 0,
        routes: [
          {
            name: "BottomTabs",
            state: {
              routes: [
                {
                  name: "TransferLandingPage",
                },
              ],
            },
          },
        ],
      }),
    });
  };

  return (
    <Box>
      <BottomSheetModal
        backdropComponent={renderBackdrop}
        enableDismissOnClose
        ref={props.bottomSheetModalRef}
        snapPoints={snapPoints}
      >
        <BottomSheetScrollView
          contentContainerStyle={{
            alignItems: "center",
            flex: 1,
            justifyContent: "center",
          }}
        >
          <Box alignItems="center" flex={1} justifyContent="center" p="md">
            <Image
              height={RFValue(60)}
              source={require("../../../assets/image/success.png")}
              width={RFValue(60)}
            />

            <Text fontVariant="h6" fontWeight="bold" mb="md" mt="md">
              Select debit account
            </Text>
            <Box mb="md">
              <Text lineHeight={20} variant="regular12">
                You have successfully transferred the sum of N1,000,000 to
                Darhare-Igben Avwerosuoghene.{" "}
              </Text>
            </Box>
          </Box>
        </BottomSheetScrollView>
        <Box p="md">
          <PrimaryButton
            backgroundColor="primaryColor"
            containerProps={{ flex: 1 }}
            label="Download Receipt"
            labelProps={{ color: "whiteColor", fontVariant: "caption" }}
            mb="sm"
            onPress={handleClose}
            paddingVertical="md"
          />
          <PrimaryButton
            backgroundColor="whiteColor"
            borderColor="primaryColor"
            borderWidth={1}
            containerProps={{ flex: 1 }}
            label="Done"
            labelProps={{ color: "primaryColor", fontVariant: "caption" }}
            mb="sm"
            onPress={handleClose}
            paddingVertical="md"
          />
        </Box>
      </BottomSheetModal>
    </Box>
  );
};

export default SuccessModal;
