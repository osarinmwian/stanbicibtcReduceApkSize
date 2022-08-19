import moment from "moment";
import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
  useRef,
} from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import DatePicker from "react-native-modern-datepicker";

import { SvgIcon } from "@/shared/assets/icons";
import { PrimaryButton } from "@/shared/components/Buttons";
import { Box } from "@/shared/components/Layout";
import { Backdrop } from "@/shared/components/Modal/Backdrop";
import Pressable from "@/shared/components/Pressable";
import { Text } from "@/shared/components/Typography";
import {
  BottomSheetBackdropProps,
  BottomSheetModal,
} from "@/shared/utils/functions/BottomsheetModal";

import FlightMenuPicker from "../../components/flightMenuPicker";

interface ArrivalAndDepartureProps {
  date: string;
  setSelectedDate: Dispatch<SetStateAction<string>>;
}

const ArrivalAndDepartureModal = ({
  date,
  setSelectedDate,
}: ArrivalAndDepartureProps) => {
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ["75%"], []);

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

  return (
    <Box>
      <FlightMenuPicker
        heading="Arrival & Departure Date"
        iconName="calendar"
        key="1"
        onPress={handlePresentModalPress}
        subHeading={moment(new Date(date)).format("MMM DD, YYYY")}
      />
      <BottomSheetModal
        backdropComponent={renderBackdrop}
        enableDismissOnClose
        ref={bottomSheetModalRef}
        snapPoints={snapPoints}
        // detached={true}
        // bottomInset={40}
      >
        <Box flex={1} padding="md">
          <Box
            alignItems="center"
            flexDirection="row"
            justifyContent="space-between"
            marginBottom="lg"
            marginTop="md"
          >
            <Text color="black" variant="medium16">
              Select departure date
            </Text>

            <Pressable onPress={handleDismissModalPress}>
              <SvgIcon name="close" size="m" />
            </Pressable>
          </Box>
          <Box>
            <DatePicker
              current="2020-07-13"
              minuteInterval={30}
              mode="calendar"
              onSelectedChange={(selectedDate: string) =>
                setSelectedDate(selectedDate)
              }
              options={{
                backgroundColor: "#fff",
                mainColor: "#0033AA",
                selectedTextColor: "#fff",
                textDefaultColor: "#000",
                textHeaderColor: "#000",
                textSecondaryColor: "#000",
              }}
              selected={date}
              style={{
                borderColor: "rgba(122, 146, 165, 0.4)",
                borderRadius: 10,
                borderWidth: 1,
              }}
            />

            <Box
              alignItems="center"
              flexDirection="row"
              justifyContent="center"
              marginTop="md"
              paddingHorizontal="lg"
            >
              <PrimaryButton
                alignItems="center"
                backgroundColor="primaryColor"
                justifyContent="center"
                label="CONFIRM"
                labelProps={{ color: "whiteColor" }}
                labelVariant="medium14"
                onPress={handleDismissModalPress}
                paddingVertical="mmd"
                width="90%"
                // marginVertical="sm"
              />
              <PrimaryButton
                alignItems="center"
                backgroundColor="paleGrey"
                justifyContent="center"
                label="CANCEL"
                labelProps={{ color: "primaryColor" }}
                labelVariant="medium14"
                onPress={handleDismissModalPress}
                paddingVertical="mmd"
                width="90%"
              />
            </Box>
          </Box>
        </Box>
      </BottomSheetModal>
    </Box>
  );
};

export default ArrivalAndDepartureModal;
