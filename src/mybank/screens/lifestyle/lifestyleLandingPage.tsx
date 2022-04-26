import React from "react";
import { SafeAreaView } from "react-native";

import BottomTabLandingPageTopBar from "@/mybank/components/bottomTabLandingPageTopBar";
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
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <BottomTabLandingPageTopBar
        backgroundColor="primaryColor"
        barStyle="light-content"
      />
      <Box
        backgroundColor="whiteColor"
        borderTopEndRadius="md"
        borderTopStartRadius="md"
        flex={1}
        marginTop="rmd"
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
    </SafeAreaView>
  );
};

export default LifestyleLandingPage;
