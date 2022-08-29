import { Dimensions, StyleSheet } from "react-native";
import React from "react";
import { Box } from "@/shared/components/Layout";
import { ArrowIcon, BookmarkIcon, FlagIcon } from "@/mybank/assets/svg";
import { Text } from "@/shared/components/Typography";
import { RFValue } from "react-native-responsive-fontsize";
import { PrimaryButton } from "@/shared/components/Buttons";

const { width, height } = Dimensions.get("screen");

interface FlightProps {
  flagIcon: any;
  title: string;
  departure: string;
  departureTime: string;
  arrivalTime: string;
  arrival: string;
  amount: string;
  duration: string;
  destination: any;
}

const FlightList = ({
  flagIcon,
  title,
  departure,
  arrival,
  departureTime,
  arrivalTime,
  amount,
  duration,
  destination,
}: FlightProps) => {
  return (
    <Box
      style={{
        width: width / 1.1,
        height: height / 2.7,
        borderWidth: 1,
        borderColor: "rgba(97, 110, 136, 0.16)",
        borderRadius: 8,
      }}
    >
      <Box padding="md" flexDirection="row">
        {flagIcon}
        <Box marginLeft="md" style={{ width: 64 }}>
          <Text variant="medium14">{title}</Text>
        </Box>
      </Box>

      <Box padding="md" flexDirection="row" style={{ width: width / 2 }}>
        <Box marginRight="lg">
          <Text marginBottom="sm" variant="regular12">
            {departure}
          </Text>
          <Text variant="medium16">{departureTime}</Text>
        </Box>
        <Box marginRight="lg">
          <Text variant="regular12">{duration}</Text>
          <ArrowIcon style={{ alignSelf: "center" }} />
          <Text textAlign="center" variant="regular10">
            1 Stop
          </Text>
        </Box>
        <Box>
          <Text marginBottom="sm" variant="regular12">
            {arrival}
          </Text>
          <Text variant="medium16">{arrivalTime}</Text>
        </Box>
      </Box>

      <Box padding="md">
        <Text marginBottom="sm" variant="regular12">
          Economy from
        </Text>
        <Text variant="bold14">{amount}</Text>
      </Box>

      <Box
        paddingHorizontal="md"
        alignContent="center"
        alignItems="center"
        flexDirection="row"
        justifyContent="space-between"
      >
        <PrimaryButton
          alignItems="center"
          backgroundColor="primaryColor"
          height={RFValue(45)}
          width={width / 1.5}
          justifyContent="center"
          borderRadius="md"
          label="VIEW FLIGHT"
          labelProps={{ color: "whiteColor" }}
          labelVariant="medium12"
          marginBottom="xs"
          marginTop="ssm"
          onPress={destination}
          paddingVertical="md"
        />
        <Box>
          <BookmarkIcon style={{ alignSelf: "center" }} />
          <Text>Save</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default FlightList;

const styles = StyleSheet.create({});
