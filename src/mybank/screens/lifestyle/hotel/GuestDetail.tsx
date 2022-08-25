import React, { FC, useState } from "react";
import {
  ImageBackground,
  Pressable,
  ScrollView,
  StatusBar,
} from "react-native";

import { loginBackground } from "@/mybank/assets/image";
import { MyBankNavigationProps } from "@/mybank/navigation/types";
import { ImageIcon } from "@/shared/assets/icons";
import { PrimaryButton } from "@/shared/components/Buttons";
import { Box } from "@/shared/components/Layout";
import { TextInput } from "@/shared/components/TextInput";
import { Text } from "@/shared/components/Typography";

import ArrivalAndDepartureModal from "./components/ArrivalAndDepartureModal";
import DestinationModal from "./components/DestinationModal";

const GuestDetail: FC = ({
  navigation,
}: MyBankNavigationProps<"GuestDetail">) => {
  const titleData = [
    { id: "1", name: "Mr" },
    { id: "1", name: "Mrs" },
  ];

  interface TitleProps {
    id: string;
    name: string;
  }
  const [dob, setDob] = useState<string>("2020-07-13");

  const renderHeader = () => (
    <Box
      alignContent="center"
      flexDirection="row"
      height={40}
      justifyContent="space-between"
      marginHorizontal="md"
      marginTop="xl"
    >
      <Pressable onPress={() => navigation.goBack()}>
        <ImageIcon name="arrowLeft" />
      </Pressable>
      <Text style={{ fontWeight: "bold", color: "#fff" }}>GUEST DETAILS</Text>
      <Text />
    </Box>
  );

  return (
    <>
      <StatusBar />
      <ImageBackground
        resizeMode="cover"
        source={loginBackground}
        style={{ flex: 1 }}
      >
        {renderHeader()}
        <Box
          backgroundColor="whiteColor"
          borderRadius="md"
          flex={1}
          padding="md"
        >
          <Box marginVertical="sm">
            <Text variant="medium14">Enter at guests information</Text>
            <PrimaryButton
              alignItems="center"
              backgroundColor="whiteColor"
              borderColor="primaryColor"
              borderWidth={1}
              height={40}
              justifyContent="center"
              label="SEE BOOKING SUMMARY"
              labelProps={{ color: "primaryColor" }}
              labelVariant="medium12"
              marginBottom="xs"
              marginTop="md"
              width="60%"
            />
          </Box>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Box marginBottom="xl" marginTop="md">
              <Text variant="medium14">Guest 1</Text>
              <DestinationModal items={titleData} title="Title" />
              <Box marginVertical="sm">
                <Box left={20} position="absolute" top={6} zIndex="overlay">
                  <Text variant="regular10">Frist Name</Text>
                </Box>
                <TextInput marginTop="sm" placeholder="Enter name" />
              </Box>
              <Box marginVertical="sm">
                <Box left={20} position="absolute" top={6} zIndex="overlay">
                  <Text variant="regular10">Last Name</Text>
                </Box>
                <TextInput marginTop="sm" placeholder="Enter name" />
              </Box>
              <Box marginVertical="sm">
                <Box left={20} position="absolute" top={6} zIndex="overlay">
                  <Text variant="regular10">Frist Name</Text>
                </Box>
                <TextInput marginTop="sm" placeholder="Enter name" />
              </Box>
              <DestinationModal items={titleData} title="Nationality" />
              <DestinationModal items={titleData} title="Gender" />
              <ArrivalAndDepartureModal
                date={dob}
                header="Date od Birth:"
                setSelectedDate={setDob}
              />
              <PrimaryButton
                alignItems="center"
                backgroundColor="primaryColor"
                justifyContent="center"
                label="DONE"
                labelProps={{ color: "whiteColor" }}
                labelVariant="medium12"
                marginBottom="xs"
                marginTop="md"
                onPress={() => navigation.navigate("HotelConfirmation")}
                paddingVertical="md"
                width="100%"
              />
            </Box>
          </ScrollView>
        </Box>
      </ImageBackground>
    </>
  );
};

export default GuestDetail;
