import { Dimensions, StyleSheet } from "react-native";
import React from "react";
import { Box } from "@/shared/components/Layout";
import { FlagIcon } from "@/mybank/assets/svg";
import { Text } from "@/shared/components/Typography";
import { RFValue } from "react-native-responsive-fontsize";
import { PrimaryButton } from "@/shared/components/Buttons";

const { width, height } = Dimensions.get("screen");

interface FlightProps {
  flagIcon: any;
  title: string;
  status: string;
  departure: string;
  arrival: string;
  date: string;
  destination: any;
}

const FlightList = ({
  flagIcon,
  title,
  status,
  departure,
  arrival,
  date,
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
        // padding: 5,
      }}
    >
      <Box padding="md" flexDirection="row">
        {flagIcon}
        <Box marginLeft="md" style={{ width: 64 }}>
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

      <Box padding="md" flexDirection="row" style={{ width: width / 2 }}>
        <Box marginRight="lg">
          <Text marginBottom="sm" variant="regular12">
            Departed
          </Text>
          <Text variant="medium16">{departure}</Text>
        </Box>
        <Box>
          <Text marginBottom="sm" variant="regular12">
            Arrived
          </Text>
          <Text variant="medium16">{arrival}</Text>
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

export default FlightList;

const styles = StyleSheet.create({});
