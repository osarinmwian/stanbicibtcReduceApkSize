import React, { FC, useState } from "react";
import { ImageBackground, Pressable, StatusBar } from "react-native";

import { loginBackground } from "@/mybank/assets/image";
import { MyBankNavigationProps } from "@/mybank/navigation/types";
import { ImageIcon } from "@/shared/assets/icons";
import { Box } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";

const HotelConfirmation: FC = ({
  navigation,
}: MyBankNavigationProps<"HotelConfirmation">) => {
  const titleData = [
    { id: 1, name: "Mr" },
    { id: 1, name: "Mrs" },
  ];
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
      <Text color="whiteColor" variant="medium14">
        HOTEL CONFIRMATION
      </Text>
      <Text />
    </Box>
  );

  const renderTranscationPin = () => <Box />;

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
          <Box>
            <Text variant="medium14">Hotel confrimation</Text>
            <Text color="textTint" marginVertical="sm" variant="regular12">
              Enter Your transaction pin to continue
            </Text>
          </Box>
          <Box backgroundColor="textTint2" borderRadius="sm" padding="md">
            <Box flexDirection="row" justifyContent="space-between">
              <Text>Amount</Text>
              <Text>&#x20A6;2,101,000</Text>
            </Box>
            <Box
              flexDirection="row"
              justifyContent="space-between"
              marginVertical="md"
            >
              <Text>Number of guests</Text>
              <Text>4</Text>
            </Box>
            <Box flexDirection="row" justifyContent="space-between">
              <Text>Going to</Text>
              <Text variant="bold12">Victoria island, Land</Text>
            </Box>
          </Box>
        </Box>
        {renderTranscationPin()}
      </ImageBackground>
    </>
  );
};

export default HotelConfirmation;
