import React from "react";
import { Box, ScrollBox } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";
import { Dimensions, Pressable, StyleSheet } from "react-native";
import {
  BagIcon,
  BedIcon,
  CalendarIcon,
  CreditCardIcon,
  FlagIcon,
  LocationIcon,
  UserIcon,
} from "@/mybank/assets/svg";
import { PrimaryButton } from "@/shared/components/Buttons";
import { RFValue } from "react-native-responsive-fontsize";

const { width, height } = Dimensions.get("screen");

interface FareProps {
  fareIcon: any;
  flagIcon: any;
  title: string;
  status: string;
  departure: string;
  arrival: string;
  date: string;
  destination: any;
  amount: string;
}

const BookingSummary = ({
  fareIcon,
  flagIcon,
  title,
  status,
  departure,
  arrival,
  date,
  destination,
  amount,
}: FareProps) => {
  return (
    <ScrollBox bounces={false} marginBottom="lg" marginTop="md">
      <Text marginBottom="md" variant="medium12">
        BOOKED TO
      </Text>
      <Box flexDirection="row">
        <LocationIcon />
        <Box marginLeft="lg" alignSelf="center">
          <Text ellipsizeMode="tail" marginBottom="sm" variant="medium12">
            Sheraton Sun Apartments Building Co...
          </Text>
          <Text variant="regular12" style={{ color: "#616E88" }}>
            Ibadan, Oyo
          </Text>
        </Box>
      </Box>

      <Box marginTop="lg">
        <Text marginBottom="md" variant="medium12">
          ROOMS
        </Text>
        <Box flexDirection="row">
          <BedIcon />
          <Box marginLeft="lg" alignSelf="center">
            <Text ellipsizeMode="tail" marginBottom="sm" variant="medium12">
              1 room
            </Text>
          </Box>
        </Box>
      </Box>

      <Box marginTop="lg">
        <Text variant="medium12">GUESTS</Text>
        <Box flexDirection="row" marginTop="md">
          <UserIcon />
          <Text marginLeft="lg" variant="medium14">
            4 guests
          </Text>
          <Pressable
            style={{ position: "absolute", right: 0 }}
            onPress={destination}
          >
            <Text variant="medium12" color="primaryColor">
              VIEW DETAILS
            </Text>
          </Pressable>
        </Box>
      </Box>

      <Box marginTop="lg">
        <Text marginBottom="md" variant="medium12">
          ARRIVAL AND DEPARTURE
        </Text>
        <Box flexDirection="row">
          <CalendarIcon />
          <Box marginLeft="lg" alignSelf="center">
            <Text ellipsizeMode="tail" marginBottom="sm" variant="medium12">
              Jan 12, 2022 to Jan 15, 2022
            </Text>
          </Box>
        </Box>
      </Box>

      <Box marginTop="lg">
        <Text marginBottom="md" variant="medium12">
          BOOKING FEE
        </Text>
        <Box flexDirection="row">
          <CreditCardIcon />
          <Box marginLeft="lg" alignSelf="center">
            <Text ellipsizeMode="tail" marginBottom="sm" variant="medium12">
              97,591
            </Text>
            <Text variant="regular12" style={{ color: "#616E88" }}>
              Adult (x1) - xN97,591
            </Text>
          </Box>
        </Box>
      </Box>

      <Box
        paddingHorizontal="md"
        alignContent="center"
        alignItems="center"
        marginTop="md"
      >
        <PrimaryButton
          alignItems="center"
          backgroundColor="primaryColor"
          height={RFValue(45)}
          width={width - 30}
          justifyContent="center"
          borderRadius="md"
          label="DOWNLOAD RECEIPT"
          labelProps={{ color: "whiteColor" }}
          labelVariant="medium12"
          marginBottom="xs"
          marginTop="ssm"
          //   onPress={destination}
          paddingVertical="md"
        />
      </Box>
    </ScrollBox>
  );
};

export default BookingSummary;

const styles = StyleSheet.create({});
