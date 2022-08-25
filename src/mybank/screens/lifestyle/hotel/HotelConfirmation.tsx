import React, { FC, useState } from "react";
import { ImageBackground, Pressable, StatusBar } from "react-native";

import { loginBackground } from "@/mybank/assets/image";
import { MyBankNavigationProps } from "@/mybank/navigation/types";
import { ImageIcon } from "@/shared/assets/icons";
import { PrimaryButton } from "@/shared/components/Buttons";
import { Box } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";

import PinComponent from "../../Transfer/components/PinComponent";

const HotelConfirmation: FC = ({
  navigation,
}: MyBankNavigationProps<"HotelConfirmation">) => {
  const [pin, setPin] = useState<string>("");

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

  const renderTranscationPin = () => (
    <Box flex={1} marginTop="md">
      <PinComponent
        onChangeText={(value) => {
          setPin(value);
        }}
        value={pin}
      />
      <PrimaryButton
        alignItems="center"
        backgroundColor="primaryColor"
        justifyContent="center"
        label="DONE"
        labelProps={{ color: "whiteColor" }}
        labelVariant="medium12"
        marginBottom="lg"
        marginTop="md"
        // onPress={() => navigation.navigate("HotelConfirmation")}
        paddingVertical="md"
        width="100%"
      />
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
          {renderTranscationPin()}
        </Box>
      </ImageBackground>
    </>
  );
};

export default HotelConfirmation;
