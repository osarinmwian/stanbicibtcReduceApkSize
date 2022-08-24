import React from "react";

import { loginBackground } from "@/mybank/assets/image";
import BottomTabLandingPageTopBar from "@/mybank/components/TopBar";
import { MyBankNavigationProps } from "@/mybank/navigation/types";
import { ImageIconPackType } from "@/shared/assets/icons";
import { Box } from "@/shared/components/Layout";

import LifestylePicker from "./components/lifestylePicker";

const LifestyleLandingPage = ({
  navigation,
}: MyBankNavigationProps<"LifestyleLandinPage">) => {
  const lifestyleData = [
    {
      destination: "FlightIndex",
      heading: "Flights",
      iconName: "plane",
      id: "1",
      subHeading: "Book flights easily",
    },
    {
      destination: "Hotels",
      heading: "Hotels",
      iconName: "bed",
      id: "2",
      subHeading: "Find and reserve your hotel bookings",
    },
    {
      destination: "FlightIndex",
      heading: "Booking history",
      iconName: "history",
      id: "3",
      subHeading: "Booking history",
    },
    {
      destination: "FlightIndex",
      heading: "Centili fusion",
      iconName: "centili",
      id: "4",
      subHeading: "Digital lifestyle experience",
    },
  ];
  return (
    <>
      <BottomTabLandingPageTopBar
        heading="LIFESTYLE"
        imageName={loginBackground}
        landingPage
      />
      <Box
        backgroundColor="whiteColor"
        borderTopEndRadius="md"
        borderTopStartRadius="md"
        flex={1}
        marginTop="md"
        padding="md"
      >
        {lifestyleData.map((item) => (
          <LifestylePicker
            destination={() =>
              navigation.navigate("Lifestyle", { screen: item.destination })
            }
            heading={item.heading}
            key={item.id}
            name={item.iconName as ImageIconPackType}
            subHeading={item.subHeading}
          />
        ))}
      </Box>
    </>
  );
};

export default LifestyleLandingPage;
