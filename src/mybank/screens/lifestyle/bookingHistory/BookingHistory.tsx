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
import { FlagIcon, Flight, Hotel, NoBooking } from "@/mybank/assets/svg";
import { BaseButton, PrimaryButton } from "@/shared/components/Buttons";
import { RFValue } from "react-native-responsive-fontsize";
import FlightList from "./components/FlightList";
import HotelList from "./components/HotelList";
// import { Icon } from "@/shared/components";

const { width, height } = Dimensions.get("screen");

const flightData = [
  {
    id: 1,
    name: "Ethopian Airline",
    flagIcon: <FlagIcon />,
    arrival: "Toronto (YYZ)",
    departure: "Lagos (LOS)",
    status: "Pending",
    date: "Jan 15, 2022",
  },
  {
    id: 2,
    name: "Ethopian Airline",
    flagIcon: <FlagIcon />,
    arrival: "Toronto (YYZ)",
    departure: "Lagos (LOS)",
    status: "Completed",
    date: "Jan 15, 2022",
  },
];

const hotelData = [
  {
    id: 1,
    name: "Sheraton Sun Apartments Building complex",
    departure: "Ibadan Oyo Shreefat Doe",
    status: "Pending",
    date: "Jan 15, 2022",
  },
  {
    id: 2,
    name: "Sheraton Sun Apartments Building complex",
    departure: "Ibadan Oyo Shreefat Doe",
    status: "Completed",
    date: "Jan 15, 2022",
  },
];

const BookingHistory = ({
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
      <Text style={{ fontWeight: "bold", color: "#fff" }}>BOOKING HISTORY</Text>
      <Text />
    </Box>
  );

  const renderNoBooking = () => (
    <Box
      marginTop="md"
      backgroundColor="whiteColor"
      width={width}
      height={height}
      borderTopLeftRadius="md"
      borderTopRightRadius="md"
    >
      {renderListHeader()}
      <Box alignSelf="center" alignItems="center" marginTop="xl">
        <NoBooking />
        <Texts marginVertical="md" variant="bold14">
          No booking history
        </Texts>
        <Box style={{ width: 268, alignSelf: "center" }}>
          <Texts
            style={{ textAlign: "center" }}
            marginVertical="md"
            variant="regular14"
          >
            History will be updated when you reserve or complete a booking
          </Texts>
        </Box>
        <PrimaryButton
          alignItems="center"
          backgroundColor="primaryColor"
          height={RFValue(52)}
          width={RFValue(216)}
          justifyContent="center"
          borderRadius="md"
          label={flight ? "BOOK FLIGHTS" : "BOOK HOTELS"}
          labelProps={{ color: "whiteColor" }}
          labelVariant="medium12"
          marginBottom="xs"
          marginTop="md"
          onPress={() => setViewData(true)}
          paddingVertical="md"
        />
      </Box>
    </Box>
  );

  const renderListHeader = () => (
    <Box marginHorizontal="md" marginVertical="md">
      <Box marginBottom="md">
        <Texts marginBottom="md" variant="medium14">
          Select option to see history
        </Texts>
        <Texts marginBottom="ss" variant="regular12">
          Showing from Jan 12, 2022 to Jan 22,
        </Texts>
        <Pressable>
          <Texts variant="bold12" color="primaryColor">
            FILTER DATE
          </Texts>
        </Pressable>
      </Box>

      <Box flexDirection="row">
        <BaseButton
          alignItems="center"
          backgroundColor={flight ? "confirmCard" : "cardSecondary"}
          height={RFValue(35)}
          width={RFValue(98)}
          justifyContent="center"
          marginVertical="sm"
          onPress={toggleSwitch}
          paddingVertical="sm"
          borderRadius="lg"
          marginRight="sm"
        >
          <Flight />
          <Texts
            color={flight ? "primaryColor" : "black"}
            paddingHorizontal="sm"
            textAlign="center"
            variant="medium14"
          >
            Flight
          </Texts>
        </BaseButton>
        <BaseButton
          alignItems="center"
          backgroundColor={!flight ? "confirmCard" : "cardSecondary"}
          height={RFValue(35)}
          width={RFValue(98)}
          justifyContent="center"
          marginVertical="sm"
          onPress={toggleSwitch}
          paddingVertical="sm"
          borderRadius="lg"
          marginLeft="sm"
        >
          <Hotel />
          <Texts
            color={!flight ? "primaryColor" : "black"}
            paddingHorizontal="sm"
            textAlign="center"
            variant="medium14"
          >
            Hotel
          </Texts>
        </BaseButton>
      </Box>
    </Box>
  );

  const renderItem = ({ item }: any) => (
    <Box alignItems="center" marginBottom="md">
      {seeHotel ? (
        <HotelList
          departure={item.departure}
          date={item.date}
          status={item.status}
          title={item.name}
          key={item.id}
          destination={() => navigation.navigate("FlightDetails", { item })}
        />
      ) : (
        <FlightList
          arrival={item.arrival}
          departure={item.departure}
          date={item.date}
          flagIcon={item.flagIcon}
          status={item.status}
          title={item.name}
          key={item.id}
          destination={() => navigation.navigate("FlightDetails", { item })}
        />
      )}
    </Box>
  );

  const renderList = () => (
    <FlatList
      contentContainerStyle={{
        backgroundColor: "#fff",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      }}
      data={seeHotel ? hotelData : flightData}
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
        {!viewData && renderNoBooking()}
        {viewData && <Box flex={1}>{renderList()}</Box>}
      </ImageBackground>
    </>
  );
};

export default BookingHistory;

const styles = StyleSheet.create({});
