import React from "react";
import { Box, ScrollBox } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";
import { Dimensions, Pressable, StyleSheet } from "react-native";
import { BagIcon, FlagIcon, UserIcon } from "@/mybank/assets/svg";
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
  amount: string;
}

const FareSummary = () => {
  return (
    <ScrollBox bounces={false} marginBottom="lg" marginTop="md">
      <Text marginBottom="md" variant="medium12">
        FARE SUMMARY
      </Text>
      <Box flexDirection="row">
        <UserIcon style={{ marginRight: 23, alignSelf: "center" }} />
        <Box alignSelf="center">
          <Text marginBottom="sm" variant="medium12">
            N97,591
          </Text>
          <Text variant="regular12" style={{ color: "#616E88" }}>
            Adult (x1) - xN97,591
          </Text>
        </Box>
      </Box>

      <Box>
        <Box marginTop="lg">
          <Text variant="medium14">DEPARTURE FLIGHT:LAGOS - ABUJA</Text>
        </Box>

        <Box flexDirection="row" marginTop="md">
          <FlagIcon />
          <Box marginLeft="md" width={width / 1.3}>
            <Text variant="medium14">10:50 - 12:20 (Friday, Apr 22, 2022)</Text>
            <Text
              marginTop="md"
              variant="regular14"
              style={{ color: "#616E88" }}
            >
              Lagos (Murtala Muhammed International Airport) (LOS) - Abuja
              (Nnamdi Azikwe International Airport) (ABV)
            </Text>
            <Text marginTop="md" color="primaryColor" variant="regular10">
              Aero 123. Class M. Economy Ticket
            </Text>
          </Box>
        </Box>
      </Box>
      <Box>
        <Box marginTop="lg">
          <Text variant="medium14">RETURN FLIGHT:ABUJA - LAGOS</Text>
        </Box>

        <Box flexDirection="row" marginTop="md">
          <FlagIcon />
          <Box marginLeft="md" width={width / 1.3}>
            <Text variant="medium14">10:50 - 12:20 (June 4, 2022)</Text>
            <Text
              marginTop="md"
              variant="regular14"
              style={{ color: "#616E88" }}
            >
              Abuja (Nnamdi Azikwe International Airport) (ABV) - Lagos (Murtala
              Muhammed International Airport) (LOS) -
            </Text>
            <Text marginTop="md" color="primaryColor" variant="regular10">
              Aero 123. Class M. Economy Ticket
            </Text>
          </Box>
        </Box>
      </Box>

      <Box marginTop="lg">
        <Text variant="medium14">BAGS</Text>
        <Box flexDirection="row" marginTop="md">
          <BagIcon />
          <Text marginLeft="lg" variant="medium14">
            2PCS x 23Kg
          </Text>
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
          label="BOOK FLIGHT"
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

export default FareSummary;

const styles = StyleSheet.create({});
