import React, { useCallback, useMemo, useRef } from "react";

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

interface FlightModalProps {
  flightType: string;
  selectFlightType: (argument: string) => void;
}

const FlightTypeModal = ({
  flightType,
  selectFlightType,
}: FlightModalProps) => {
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

  const items = [
    // name key is must.It is to show the text in front
    { id: 1, type: "Economy" },
    { id: 2, type: "Premium Economy" },
    { id: 3, type: "Business" },
    { id: 4, type: "First Class" },
  ];

  const onSelect = (heading: string) => {
    selectFlightType(heading);
    handleDismissModalPress();
  };

  return (
    <Box>
      <FlightMenuPicker
        heading="Flight Type"
        iconName="chevron-down"
        key="1"
        onPress={handlePresentModalPress}
        subHeading={flightType} // destination={() =>
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
              Flight type
            </Text>
          </Box>
          <Box paddingHorizontal="md">
            {items.map(({ id, type }) => (
              <FlightMenuPicker
                heading={type}
                key={id}
                onPress={() => onSelect(type)}
              />
            ))}
          </Box>
        </Box>
      </BottomSheetModal>
    </Box>
  );
};

export default FlightTypeModal;
