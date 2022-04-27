import React from "react";

import BottomTabLandingPageTopBar from "@/mybank/components/TopBar";
import { MyBankNavigationProps } from "@/mybank/navigation/types";
import { lifestyleBg } from "@/shared/assets/image";

import FlightMenuPicker from "../components/flightMenuPicker";

const FlightIndex = ({
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
      destination: "FlightIndex",
      heading: "Find and make hotel reservations",
      iconName: "bed",
      id: "2",
      subHeading: "Book flights easily",
    },
    {
      destination: "FlightIndex",
      heading: "Centili fusion",
      iconName: "centili",
      id: "3",
      subHeading: "Digital lifestyle experience",
    },
  ];
  return (
    <>
      <BottomTabLandingPageTopBar
        heading="FLIGHTS"
        imageName={lifestyleBg}
        landingPage={false}
      />
      <FlightMenuPicker
      // destination={() =>
      //   navigation.navigate("Lifestyle", { screen: item.destination })
      // }
      // heading={item.heading}
      // key={item.id}
      // name={item.iconName as ImageIconPackType}
      // subHeading={item.subHeading}
      />
    </>
  );
};

export default FlightIndex;
