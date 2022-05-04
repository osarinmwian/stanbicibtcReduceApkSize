import React from "react";
import { useTranslation } from "react-i18next";
import { ScrollView } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

import BottomTabLandingPageTopBar from "@/mybank/components/TopBar";
import { MyBankNavigationProps } from "@/mybank/navigation/types";
import { lifestyleBg } from "@/shared/assets/image";
import { PrimaryButton } from "@/shared/components/Buttons";
import { Box } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";

import FlightMenuPicker from "../components/flightMenuPicker";
import DepartureModal from "./departureModal";

const FlightIndex = ({
  navigation,
}: MyBankNavigationProps<"LifestyleLandinPage">) => {
  const { t } = useTranslation();
  return (
    <>
      <BottomTabLandingPageTopBar
        heading="FLIGHTS"
        imageName={lifestyleBg}
        landingPage={false}
      />
      <ScrollView
        style={{ backgroundColor: "#fff", flex: 1, padding: RFValue(16) }}
      >
        <Box>
          <Text marginVertical="sm">Search and book flights</Text>
        </Box>
        <DepartureModal />
        <FlightMenuPicker
          heading="To where"
          iconName="chevron-down"
          key="2"
          onPress={undefined}
          subHeading="Enugu Airport (ENU)" // destination={() =>
        />
        <FlightMenuPicker
          heading="Ticket type"
          iconName="chevron-down"
          key="3"
          onPress={undefined}
          subHeading="One way" // destination={() =>
        />
        <FlightMenuPicker
          heading="Arrival and departure date"
          iconName="chevron-down"
          key="4"
          onPress={undefined}
          subHeading="Date" // destination={() =>
        />
        <FlightMenuPicker
          heading="Number of passengers"
          iconName="calendar"
          key="5"
          onPress={undefined}
          subHeading="1 passenger (1 Adult)" // destination={() =>
        />
        <FlightMenuPicker
          heading="Flight type"
          iconName="chevron-down"
          key="6"
          onPress={undefined}
          subHeading="Economy" // destination={() =>
        />
        <PrimaryButton
          alignItems="center"
          backgroundColor="primaryColor"
          justifyContent="center"
          label="SEARCH FLIGHTS"
          labelProps={{ color: "whiteColor" }}
          labelVariant="medium10"
          marginBottom="xs"
          marginTop="md"
          paddingVertical="mmd"
        />
      </ScrollView>
    </>
  );
};

export default FlightIndex;
