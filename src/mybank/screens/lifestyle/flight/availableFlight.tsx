import {
  Dimensions,
  FlatList,
  ImageBackground,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { loginBackground } from "@/mybank/assets/image";
import { Box, ScrollBox } from "@/shared/components/Layout";
import { ImageIcon } from "@/shared/assets/icons";
import { MyBankNavigationProps } from "@/mybank/navigation/types";
import { Text as Texts } from "@/shared/components/Typography";
import {
  ArrowDown,
  FlagIcon,
  Flight,
  Hotel,
  NoBooking,
} from "@/mybank/assets/svg";
import { BaseButton, PrimaryButton } from "@/shared/components/Buttons";
import { RFValue } from "react-native-responsive-fontsize";
import FlightList from "./components/flightList";
// import { Icon } from "@/shared/components";

const { width, height } = Dimensions.get("screen");

const flightData = [
  {
    id: 1,
    name: "Ethopian Airline",
    flagIcon: <FlagIcon />,
    arrival: "Toronto (YYZ)",
    departure: "Lagos (LOS)",
    departureTime: "07:32",
    arrivalTime: "16:04",
    amount: "N213,334",
    duration: "22h 50m",
  },
  {
    id: 2,
    name: "Ethopian Airline",
    flagIcon: <FlagIcon />,
    arrival: "Toronto (YYZ)",
    departure: "Lagos (LOS)",
    departureTime: "07:32",
    arrivalTime: "16:04",
    amount: "N213,334",
    duration: "22h 50m",
  },
];

const AvailableFlight = ({
  navigation,
}: MyBankNavigationProps<"BookingHistory">) => {
  const [viewData, setViewData] = useState<boolean>(false);
  const [seeHotel, setSeeHotel] = useState<boolean>(false);
  const [flight, setFlight] = useState<boolean>(true);
  const [hotel, setHotel] = useState("");

  const [isEnabled, setIsEnabled] = useState<boolean>(true);
  const toggleSwitch = () => {
    setFlight((previousState) => !previousState);
    setSeeHotel((previousState) => !previousState);
  };

  const renderHeader = () => (
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
  );

  const renderListHeader = () => (
    <Box marginHorizontal="md" marginVertical="md">
      <Box marginBottom="md">
        <Texts marginBottom="md" variant="medium14">
          Available flights
        </Texts>
        <Texts marginBottom="ss" variant="regular12">
          View flights and continue
        </Texts>
      </Box>

      <Box flexDirection="row">
        <BaseButton
          alignItems="center"
          backgroundColor="whiteColor"
          height={RFValue(35)}
          width={RFValue(98)}
          justifyContent="center"
          marginVertical="sm"
          onPress={toggleSwitch}
          paddingVertical="sm"
          borderRadius="xs"
          borderWidth={1}
          borderColor="lightGrey"
          marginRight="sm"
        >
          <Texts
            color="lightGrey"
            paddingHorizontal="sm"
            textAlign="center"
            variant="medium14"
          >
            Filter
          </Texts>
          <ArrowDown />
        </BaseButton>
        <BaseButton
          alignItems="center"
          backgroundColor="whiteColor"
          height={RFValue(35)}
          justifyContent="center"
          marginVertical="sm"
          onPress={toggleSwitch}
          paddingVertical="sm"
          borderRadius="xs"
          borderWidth={1}
          borderColor="primaryColor"
        >
          <Texts
            color="primaryColor"
            paddingHorizontal="sm"
            textAlign="center"
            variant="medium12"
          >
            EDIT FLIGHT DETAILS
          </Texts>
        </BaseButton>
      </Box>
    </Box>
  );

  const renderItem = ({ item }: any) => (
    <Box alignItems="center" marginBottom="md">
      <FlightList
        arrival={item.arrival}
        departure={item.departure}
        flagIcon={item.flagIcon}
        title={item.name}
        amount={item.amount}
        arrivalTime={item.arrivalTime}
        departureTime={item.departureTime}
        duration={item.duration}
        key={item.id}
        destination={() => navigation.navigate("BookFlightDetails")}
      />
    </Box>
  );

  const renderList = () => (
    <FlatList
      contentContainerStyle={{
        backgroundColor: "#fff",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      }}
      data={flightData}
      keyExtractor={(item) => `item-${item.id}`}
      ListFooterComponent={<Box marginBottom="xl" />}
      ListHeaderComponent={renderListHeader()}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
    />
  );

  return (
    <>
      <StatusBar />
      <ImageBackground
        resizeMode="cover"
        source={loginBackground}
        style={{ flex: 1 }}
      >
        {renderHeader()}
        <Box flex={1}>{renderList()}</Box>
      </ImageBackground>
    </>
  );
};

export default AvailableFlight;

const styles = StyleSheet.create({});
