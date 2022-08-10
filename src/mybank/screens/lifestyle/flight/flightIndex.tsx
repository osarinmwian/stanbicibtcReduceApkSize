import { useState } from "react";
import { ScrollView } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import BottomTabLandingPageTopBar from "@/mybank/components/TopBar";
import { MyBankNavigationProps } from "@/mybank/navigation/types";
import { lifestyleBg } from "@/shared/assets/image";
import { PrimaryButton } from "@/shared/components/Buttons";
import { Box } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";

import ArrivalAndDepartureModal from "./components/arrivalAndDepartureModal";
import DepartureModal from "./components/departureModal";
import DestinationModal from "./components/destinationModal";
import FlightTypeModal from "./components/flightType";
import PassengerModal from "./components/passengers";
import TicketTypeModal from "./components/ticketType";

const FlightIndex = ({ navigation }: MyBankNavigationProps<"FlightIndex">) => {
  const [ticketType, selectTicketType] = useState<string>("One way");
  const [flightType, selectFlightType] = useState<string>("Economy");
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

  const [date, setSelectedDate] = useState<string>("2020-07-13");

  return (
    <>
      <BottomTabLandingPageTopBar
        heading="FLIGHTS"
        imageName={lifestyleBg}
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
            Search and book flights
          </Text>
          {/* <Text color="primaryColor" marginVertical="sm" variant="medium12">
            Booking History
          </Text> */}
        </Box>
        <Box marginBottom="md">
          <DepartureModal />
          <DestinationModal />
          <TicketTypeModal
            selectTicketType={selectTicketType}
            ticketType={ticketType}
          />
          <ArrivalAndDepartureModal
            date={date}
            setSelectedDate={setSelectedDate}
          />

          <PassengerModal
            decreaseNumberInCategory={decreaseNumberInCategory}
            increaseNumberInCategory={increaseNumberInCategory}
            passengerCategories={passengerCategories}
            state={state}
          />
          <FlightTypeModal
            flightType={flightType}
            selectFlightType={selectFlightType}
          />
          <PrimaryButton
            alignItems="center"
            backgroundColor="primaryColor"
            justifyContent="center"
            label="SEARCH FLIGHTS"
            labelProps={{ color: "whiteColor" }}
            labelVariant="medium12"
            marginBottom="xs"
            marginTop="md"
            onPress={() => navigation.navigate("NoFlightFound")}
            paddingVertical="mmd"
          />
        </Box>
      </ScrollView>
    </>
  );
};

export default FlightIndex;
