import {
  Dimensions,
  ImageBackground,
  Modal,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useCallback, useRef, useState } from "react";
import { loginBackground } from "@/mybank/assets/image";
import { Box, ScrollBox } from "@/shared/components/Layout";
import { ImageIcon } from "@/shared/assets/icons";
import { MyBankNavigationProps } from "@/mybank/navigation/types";
import { Text as Texts } from "@/shared/components/Typography";
import { BaseButton } from "@/shared/components/Buttons";
import { RFValue } from "react-native-responsive-fontsize";
import { Flight, Hotel, LineIcon } from "@/mybank/assets/svg";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { PassengerDetailsModal } from "../components/passengerDeatilsModal";
import FareSummary from "./components/FareSummary";
import BookHotel from "../hotel/components/BookHotel";

const { width, height } = Dimensions.get("screen");

const BookFlightDetails = ({
  navigation,
}: MyBankNavigationProps<"BookFlightDetails">) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleMorePresent = useCallback(() => {
    setModalVisible(!modalVisible);
  }, []);

  return (
    <>
      <StatusBar />
      <ImageBackground
        resizeMode="cover"
        source={loginBackground}
        style={{ flex: 1 }}
      >
        <Modal animationType="slide" transparent visible={modalVisible}>
          <BookHotel
            navigation={navigation}
            setModalVisible={setModalVisible}
          />
        </Modal>
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
          <Text style={{ fontWeight: "bold", color: "#fff" }}>FLIGHTS</Text>
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
                ITINERARY
              </Texts>
              <Box borderWidth={2} borderColor="primaryColor" />
            </Box>
            <Box marginLeft="md">
              <Texts marginBottom="sm" variant="medium12" color="black">
                FARE RULES
              </Texts>
            </Box>
          </Box>

          <FareSummary destination={handleMorePresent} />
        </ScrollBox>
      </ImageBackground>
    </>
  );
};

export default BookFlightDetails;

const styles = StyleSheet.create({});
