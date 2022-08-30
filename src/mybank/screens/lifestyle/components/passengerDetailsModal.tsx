import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import React, { RefObject, useMemo, useState, VFC } from "react";

import { RepaymentButton } from "@/mybank/components/Buttons";
import { PrimaryButton } from "@/shared/components/Buttons";
import { Box } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";
import { Pressable } from "react-native";

type PassengerDetailsModalProps = {
  bottomSheetModalRef: RefObject<BottomSheetModal>;
};
const renderBackdrop = (props: BottomSheetBackdropProps) => (
  <BottomSheetBackdrop {...props} opacity={0.9} pressBehavior="close" />
);

const PassengerDetailsModal: VFC<PassengerDetailsModalProps> = (props) => {
  const [isDropDown, setIsDropDown] = useState(false);
  const toggleSwitch = () => setIsDropDown((previousState) => !previousState);

  const snapPoints = useMemo(() => ["65%", "65%"], []);
  const snapPoints2 = useMemo(() => ["85%", "85%"], []);

  const infoDetails = () => {
    return (
      <Box marginTop="lg">
        <Box flexDirection="row" justifyContent="space-between">
          <Text variant="regular14">Date of birth</Text>
          <Text
            style={{
              alignSelf: "center",
              position: "absolute",
              right: 10,
            }}
            variant="regular14"
          >
            Nov 7, 2022
          </Text>
        </Box>

        <Box marginTop="sm" flexDirection="row" justifyContent="space-between">
          <Text variant="regular14">Phone number</Text>
          <Text
            style={{
              alignSelf: "center",
              position: "absolute",
              right: 10,
            }}
            variant="regular14"
          >
            08000000000
          </Text>
        </Box>

        <Box marginTop="sm" flexDirection="row" justifyContent="space-between">
          <Text variant="regular14">Email</Text>
          <Text
            style={{
              alignSelf: "center",
              position: "absolute",
              right: 10,
            }}
            variant="regular14"
          >
            ehizojie.ihayere@sta...
          </Text>
        </Box>

        <Box marginTop="sm" flexDirection="row" justifyContent="space-between">
          <Text variant="regular14">Nationality</Text>
          <Text
            style={{
              alignSelf: "center",
              position: "absolute",
              right: 10,
            }}
            variant="regular14"
          >
            Nigerian
          </Text>
        </Box>

        <Box marginTop="sm" flexDirection="row" justifyContent="space-between">
          <Text variant="regular14">Passenger type</Text>
          <Text
            style={{
              alignSelf: "center",
              position: "absolute",
              right: 10,
            }}
            variant="regular14"
          >
            Adult
          </Text>
        </Box>
      </Box>
    );
  };

  return (
    <Box>
      <BottomSheetModal
        backdropComponent={renderBackdrop}
        enableDismissOnClose
        ref={props.bottomSheetModalRef}
        snapPoints={isDropDown ? snapPoints2 : snapPoints}
      >
        <BottomSheetScrollView>
          <Box p="md">
            <Box mb="md">
              <Text variant="medium18">Added Passengers</Text>
              <Text color="lightGrey" variant="regular12">
                View Passenger details
              </Text>
            </Box>

            <Box
              mb="md"
              backgroundColor="cardSecondary"
              borderRadius="sm"
              padding="md"
            >
              <Box flexDirection="row">
                <Box>
                  <Text marginBottom="sm" variant="medium12">
                    Ehizojie Ihayere
                  </Text>
                  <Text variant="regular12">Male</Text>
                </Box>
                <Pressable
                  style={{
                    alignSelf: "center",
                    position: "absolute",
                    right: 10,
                  }}
                >
                  <Text variant="medium12" color="primaryColor">
                    VIEW DETAILS
                  </Text>
                </Pressable>
              </Box>
            </Box>

            <Box
              mb="md"
              backgroundColor="cardSecondary"
              borderRadius="sm"
              padding="md"
            >
              <Box flexDirection="row">
                <Box>
                  <Text marginBottom="sm" variant="medium12">
                    Jinora Ihayere
                  </Text>
                  <Text variant="regular12">Female</Text>
                </Box>
                <Pressable
                  style={{
                    alignSelf: "center",
                    position: "absolute",
                    right: 10,
                  }}
                  onPress={toggleSwitch}
                >
                  <Text variant="medium12" color="primaryColor">
                    {isDropDown ? "CLOSE" : "VIEW DETAILS"}
                  </Text>
                </Pressable>
              </Box>
              {isDropDown && infoDetails()}
            </Box>

            <Box
              mb="md"
              backgroundColor="cardSecondary"
              borderRadius="sm"
              padding="md"
            >
              <Box flexDirection="row">
                <Box>
                  <Text marginBottom="sm" variant="medium12">
                    Ebose Ihayere
                  </Text>
                  <Text variant="regular12">Male</Text>
                </Box>
                <Pressable
                  style={{
                    alignSelf: "center",
                    position: "absolute",
                    right: 10,
                  }}
                >
                  <Text variant="medium12" color="primaryColor">
                    VIEW DETAILS
                  </Text>
                </Pressable>
              </Box>
            </Box>

            <Box
              mb="md"
              backgroundColor="cardSecondary"
              borderRadius="sm"
              padding="md"
            >
              <Box flexDirection="row">
                <Box>
                  <Text marginBottom="sm" variant="medium12">
                    Jinora Ihayere
                  </Text>
                  <Text variant="regular12">Male</Text>
                </Box>
                <Pressable
                  style={{
                    alignSelf: "center",
                    position: "absolute",
                    right: 10,
                  }}
                >
                  <Text variant="medium12" color="primaryColor">
                    VIEW DETAILS
                  </Text>
                </Pressable>
              </Box>
            </Box>
          </Box>
        </BottomSheetScrollView>
      </BottomSheetModal>
    </Box>
  );
};

export { PassengerDetailsModal };
