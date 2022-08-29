import { Dimensions, StyleSheet } from "react-native";
import React from "react";
import { Box } from "@/shared/components/Layout";
import { FlagIcon } from "@/mybank/assets/svg";
import { Text } from "@/shared/components/Typography";
import { RFValue } from "react-native-responsive-fontsize";
import { PrimaryButton } from "@/shared/components/Buttons";

const { width, height } = Dimensions.get("screen");

interface FlightProps {
  title: string;
  status: string;
  departure: string;
  date: string;
  destination: any;
}

const HotelList = ({
  title,
  status,
  departure,
  date,
  destination,
}: FlightProps) => {
  return (
    <Box
      style={{
        width: width / 1.1,
        height: height / 2.5,
        borderWidth: 1,
        borderColor: "rgba(97, 110, 136, 0.16)",
        borderRadius: 8,
      }}
    >
      <Box padding="md" flexDirection="row">
        <Box
          borderRadius="xs"
          //   height={"100%"}
          width={"15%"}
          backgroundColor="cardSecondary"
        ></Box>
        <Box marginLeft="md" style={{ width: width / 2.3 }}>
          <Text variant="medium14">{title}</Text>
        </Box>
        <Box
          position="absolute"
          right={20}
          height={RFValue(32)}
          width={RFValue(78)}
          padding="sm"
          alignSelf="center"
          borderRadius="lg"
          backgroundColor={status == "Pending" ? "secondary9" : "positiveColor"}
        >
          <Text
            color={status === "Pending" ? "loyaltyColor" : "black"}
            textAlign="center"
            variant="regular10"
          >
            {status}
          </Text>
        </Box>
      </Box>

      <Box padding="md" style={{ width: width / 2 }}>
        <Box marginRight="lg">
          <Text marginBottom="sm" variant="regular12">
            Booked at
          </Text>
          <Text variant="medium16">{departure}</Text>
        </Box>
      </Box>

      <Box padding="md">
        <Text marginBottom="sm" variant="regular12">
          Departure date
        </Text>
        <Text variant="medium16">{date}</Text>
      </Box>

      <Box paddingHorizontal="md" alignContent="center" alignItems="center">
        <PrimaryButton
          alignItems="center"
          backgroundColor="primaryColor"
          height={RFValue(45)}
          width={RFValue(306)}
          justifyContent="center"
          borderRadius="md"
          label="VIEW BOOKING"
          labelProps={{ color: "whiteColor" }}
          labelVariant="medium12"
          marginBottom="xs"
          marginTop="ssm"
          onPress={destination}
          paddingVertical="md"
        />
      </Box>
    </Box>
  );
};

export default HotelList;

const styles = StyleSheet.create({});
