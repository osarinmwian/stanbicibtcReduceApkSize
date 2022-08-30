import {
  Dimensions,
  ImageBackground,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useRef } from "react";
import { loginBackground } from "@/mybank/assets/image";
import { Box, ScrollBox } from "@/shared/components/Layout";
import { ImageIcon } from "@/shared/assets/icons";
import { MyBankNavigationProps } from "@/mybank/navigation/types";
import { Text as Texts } from "@/shared/components/Typography";
import { BaseButton } from "@/shared/components/Buttons";
import { RFValue } from "react-native-responsive-fontsize";
import { Flight, Hotel, LineIcon } from "@/mybank/assets/svg";
import FareSummary from "./components/FareSummary";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { PassengerDetailsModal } from "../components/passengerDetailsModal";
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import BookingSummary from "./components/BookingSummary";

const { width, height } = Dimensions.get("screen");

const FlightDetails = ({
  navigation,
  route,
}: MyBankNavigationProps<"BookFlight">) => {
  const passengerDetailsBottomSheetModalRef = useRef<BottomSheetModal>(null);

  const onOpenLoanRepaymentModal = () =>
    passengerDetailsBottomSheetModalRef.current?.present();
  const { item } = route.params;

  return (
    <>
      <StatusBar />
      <ImageBackground
        resizeMode="cover"
        source={loginBackground}
        style={{ flex: 1 }}
      >
        <Box
          alignContent="center"
          flexDirection="row"
          height={40}
          justifyContent="space-between"
          marginHorizontal="md"
          marginTop="xl"
        >
          <Pressable onPress={() => navigation.goBack()}>
            <ImageIcon name="arrowLeft" />
          </Pressable>
          <Text style={{ fontWeight: "bold", color: "#fff" }}>BOOKINGS</Text>
          <Text />
        </Box>
        <ScrollBox
          marginTop="md"
          backgroundColor="whiteColor"
          width={width}
          height={height}
          borderTopLeftRadius="md"
          borderTopRightRadius="md"
          padding="md"
        >
          <Box flexDirection="row" paddingVertical="sm">
            <Box>
              <Texts marginBottom="sm" variant="medium12" color="primaryColor">
                {item.arrival ? "FLIGHT DETAILS" : "BOOKING DETAILS"}
              </Texts>
              <LineIcon />
            </Box>
            <Box
              position="absolute"
              right={20}
              height={RFValue(32)}
              width={RFValue(78)}
              padding="sm"
              alignSelf="center"
              borderRadius="lg"
              backgroundColor="secondary9"
            >
              <Texts
                textAlign="center"
                variant="regular10"
                style={{ color: "#966000" }}
              >
                {item.status}
              </Texts>
            </Box>
          </Box>
          {item.arrival ? (
            <FareSummary destination={onOpenLoanRepaymentModal} />
          ) : (
            <BookingSummary />
          )}
        </ScrollBox>
      </ImageBackground>
      <PassengerDetailsModal
        bottomSheetModalRef={passengerDetailsBottomSheetModalRef}
      />
    </>
  );
};

export default FlightDetails;

const styles = StyleSheet.create({});
