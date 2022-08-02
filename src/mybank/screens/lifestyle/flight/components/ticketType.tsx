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

interface TicketModalProps {
  ticketType: string;
  selectTicketType: (argument: string) => void;
}
const TicketTypeModal = ({
  ticketType,
  selectTicketType,
}: TicketModalProps) => {
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ["40%", "40%"], []);

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
    {
      heading: "One way",
      id: 1,
      subHeading: "Does not cover for returning back home",
    },
    {
      heading: "Return Ticket",
      id: 2,
      subHeading: "Covers for returning back home",
    },
  ];

  const onSelect = (heading: string) => {
    selectTicketType(heading);
    handleDismissModalPress();
  };

  return (
    <Box>
      <FlightMenuPicker
        heading="Ticket type"
        iconName="chevron-down"
        key="1"
        onPress={handlePresentModalPress}
        subHeading={ticketType} // destination={() =>
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
              Ticket type
            </Text>
          </Box>
          <Box paddingHorizontal="md">
            {items.map(({ heading, subHeading, id }) => (
              <FlightMenuPicker
                heading={heading}
                key={id}
                onPress={() => onSelect(heading)}
                subHeading={subHeading} // destination={() =>
              />
            ))}
          </Box>
        </Box>
      </BottomSheetModal>
    </Box>
  );
};

export default TicketTypeModal;
