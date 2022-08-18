import React, { useState } from "react";
import { ImageBackground } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import PinComponent from "@/mybank/screens/Transfer/components/PinComponent";
import { backgroundIcons } from "@/shared/assets/image";
import { Box, SafeAreaView } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";

import { OnePassNavigationProps } from "./navigation/type";
import { ROOT } from "./styles/OnePassStyles";

export default function OnePassOTPScreen({
  navigation,
}: OnePassNavigationProps<"OnePass">) {
  const [pin, setPin] = useState("");
  const [timer] = useState("00:59");
  const [phoneNumber] = useState("0803••••969");

  const goToLoginVerified = () => navigation.navigate("OnePassVerification");

  return (
    <Box backgroundColor="onepassContainer" flex={1}>
      <ImageBackground resizeMode="cover" source={backgroundIcons} style={ROOT}>
        <SafeAreaView flex={1}>
          <Box flex={1} paddingHorizontal="md" paddingVertical="md">
            <Box
              alignItems="center"
              justifyContent="center"
              marginHorizontal="xl"
              marginVertical="lg"
            >
              <Text
                color="textColor2"
                lineHeight={RFValue(20)}
                textAlign="center"
                variant="medium12"
              >
                Please enter the code sent to
                <Text color="whiteColor" variant="medium12">
                  {" "}
                  {phoneNumber}
                </Text>
              </Text>
            </Box>

            <PinComponent
              onChangeText={(value) => {
                setPin(value);
                if (value.length === 4) {
                  goToLoginVerified();
                }
              }}
              onepassPin
              value={pin}
            />

            <Box alignItems="center" justifyContent="center">
              <Text color="textColor2" variant="regular10">
                Resend in{" "}
                <Text color="whiteColor" variant="regular10">
                  {timer}
                </Text>
              </Text>
            </Box>
          </Box>
        </SafeAreaView>
      </ImageBackground>
    </Box>
  );
}
