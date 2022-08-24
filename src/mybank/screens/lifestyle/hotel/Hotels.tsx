import React, { FC, useState } from "react";
import { ScrollView } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import { hotelbanner } from "@/mybank/assets/image";
import BottomTabLandingPageTopBar from "@/mybank/components/TopBar";
import { MyBankNavigationProps } from "@/mybank/navigation/types";
import { PrimaryButton } from "@/shared/components/Buttons";
import { Box } from "@/shared/components/Layout";
import { BaseTextInput } from "@/shared/components/TextInput";
import { Text } from "@/shared/components/Typography";

import PassengerModal from "../flight/components/passengers";
import ArrivalAndDepartureModal from "./components/ArrivalAndDepartureModal";
import DestinationModal from "./components/DestinationModal";

const Hotels: FC = ({ navigation }: MyBankNavigationProps<"Hotels">) => {
  const [arrivalDate, setSelectedArrivalDate] = useState<string>("2020-07-13");
  const [departDate, setSelectedDepartureDate] = useState<string>("2020-07-13");
  const [searchSuccesss] = useState<boolean | null>(true);

  const [state, setState] = useState({
    adults: 0,
    children: 0,
    infants: 0,
  });

  const increaseNumberInCategory = (id: string) => {
    if (id === "adults") {
      setState({ ...state, adults: state.adults + 1 });
    } else if (id === "children") {
      setState({ ...state, children: state.children + 1 });
    } else {
      setState({ ...state, infants: state.infants + 1 });
    }
  };

  const decreaseNumberInCategory = (id: string) => {
    if (id === "adults") {
      if (state.adults === 0 || state.adults < 1) return;
      setState({ ...state, adults: state.adults - 1 });
    } else if (id === "children") {
      if (state.children === 0 || state.children < 1) return;
      setState({ ...state, children: state.children - 1 });
    } else {
      if (state.infants === 0 || state.infants < 1) return;
      setState({ ...state, infants: state.infants - 1 });
    }
  };

  const passengerCategories = [
    {
      details: `${state.adults} adults`,
      heading: state.adults > 1 ? "Adults" : "Adult",
      id: "adults",
      number: state.adults,
      subHeading: "12+ years old",
    },
    {
      details: `${state.adults} adults`,
      heading: state.children > 1 ? "Children" : "Child",
      id: "children",
      number: state.children,
      subHeading: "2 - 12 years old",
    },
    {
      details: `${state.adults} adults`,
      heading: state.infants > 1 ? "Infants" : "Infant",
      id: "infants",
      number: state.infants,
      subHeading: "Less than 2 years old",
    },
  ];

  const items = [
    // name key is must.It is to show the text in front
    { id: 1, name: "Victoria Island, Lagos, Nigeria" },
    { id: 2, name: "Yaba, Lagos, Nigeria" },
    { id: 3, name: "Akoko, Lagos, Nigeria" },
  ];

  const handleSearchHotel = () => {
    if (searchSuccesss) {
      navigation.navigate("HotelsList");
    } else {
      navigation.navigate("SearchHotelError");
    }
  };
  return (
    <>
      <BottomTabLandingPageTopBar
        heading="Hotels"
        hotelstyle={{ flex: 0.4 }}
        imageName={hotelbanner}
        landingPage={false}
      />
      <ScrollView
        style={{
          backgroundColor: "#fff",
          flex: 1,
          paddingHorizontal: RFValue(16),
        }}
      >
        <Box
          alignItems="center"
          flexDirection="row"
          justifyContent="space-between"
          marginTop="md"
        >
          <Text marginVertical="sm" variant="medium12">
            Search and book hotels
          </Text>
        </Box>
        <Box marginBottom="md">
          <DestinationModal items={items} title="Going To:" />
          <ArrivalAndDepartureModal
            date={arrivalDate}
            header="Arrival Date:"
            setSelectedDate={setSelectedArrivalDate}
          />
          <ArrivalAndDepartureModal
            date={departDate}
            header="Departure Date:"
            setSelectedDate={setSelectedDepartureDate}
          />
          <BaseTextInput keyboardType="number-pad" placeholder="0" />
          <PassengerModal
            decreaseNumberInCategory={decreaseNumberInCategory}
            increaseNumberInCategory={increaseNumberInCategory}
            passengerCategories={passengerCategories}
            state={state}
          />
          <PrimaryButton
            alignItems="center"
            backgroundColor="primaryColor"
            justifyContent="center"
            label="SEARCH HOTEL"
            labelProps={{ color: "whiteColor" }}
            labelVariant="medium12"
            marginBottom="xs"
            marginTop="md"
            onPress={handleSearchHotel}
            paddingVertical="md"
          />
        </Box>
      </ScrollView>
    </>
  );
};

export default Hotels;
