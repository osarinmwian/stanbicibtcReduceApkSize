import React, { useCallback, useMemo, useRef } from "react";

import { PrimaryButton } from "@/shared/components/Buttons";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Box } from "@/shared/components/Layout";
import { Backdrop } from "@/shared/components/Modal/Backdrop";
import { Text } from "@/shared/components/Typography";
import {
  BottomSheetBackdropProps,
  BottomSheetModal,
} from "@/shared/utils/functions/BottomsheetModal";

import FlightMenuPicker from "../../components/flightMenuPicker";
import PassengerPicker from "../../components/passengerPicker";

interface PassengerModalProps {
  state: { adults: number; children: number; infants: number };
  increaseNumberInCategory: (id: string) => void;
  decreaseNumberInCategory: (id: string) => void;
  passengerCategories: {
    heading: string;
    id: string;
    number: number;
    subHeading: string;
  }[];
}
const PassengerModal = ({
  state,
  increaseNumberInCategory,
  decreaseNumberInCategory,
  passengerCategories,
}: PassengerModalProps) => {
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ["50%", "50%"], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleDismissModalPress = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);

  // renders
  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <Backdrop
        onPress={() => {
          handleDismissModalPress();
        }}
        {...props}
      />
    ),
    [handleDismissModalPress],
  );

  const { adults, children, infants } = state;
  const details = `${adults} adults, ${children} children, ${infants} infants`;

  return (
    <Box>
      <FlightMenuPicker
        heading="Number of passengers"
        iconName="chevron-down"
        key="1"
        onPress={handlePresentModalPress}
        subHeading={details}
      />
      <BottomSheetModal
        backdropComponent={renderBackdrop}
        enableDismissOnClose
        ref={bottomSheetModalRef}
        snapPoints={snapPoints}
      >
        <Box flex={1}>
          <Box alignItems="flex-start" justifyContent="center" paddingLeft="sm">
            <Text
              color="black"
              marginBottom="md"
              marginTop="md"
              variant="medium14"
            >
              Passengers
            </Text>
          </Box>
          <Box paddingHorizontal="md">
            {passengerCategories.map(({ id, heading, subHeading, number }) => (
              <PassengerPicker
                decrease={() => decreaseNumberInCategory(id)}
                heading={heading}
                increase={() => increaseNumberInCategory(id)}
                key={id}
                numberInCategory={number}
                subHeading={subHeading}
              />
            ))}
          </Box>
          <Box marginTop="md" paddingHorizontal="md">
            <PrimaryButton
              alignItems="center"
              backgroundColor="primaryColor"
              justifyContent="center"
              label="DONE"
              labelProps={{ color: "whiteColor" }}
              labelVariant="medium12"
              // marginTop="md"
              onPress={handleDismissModalPress}
              paddingVertical="mmd"
            />
          </Box>
        </Box>
      </BottomSheetModal>
    </Box>
  );
};

export default PassengerModal;
