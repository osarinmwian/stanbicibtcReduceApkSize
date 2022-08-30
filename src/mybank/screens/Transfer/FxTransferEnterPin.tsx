import React, { useState } from "react";
import { RFValue } from "react-native-responsive-fontsize";

import PinComponent from "@/mybank/screens/Transfer/components/PinComponent";
import { Box, LayoutComponent, ScrollBox } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";

export default function FxTransferEnterPin() {
  const [pin, setPin] = useState("");

  return (
    <LayoutComponent label="FX PAYMENT">
      <ScrollBox
        bounces={false}
        contentContainerStyle={{ flex: 1 }}
        paddingHorizontal="md"
        paddingVertical="md"
      >
        <Text marginTop="sm" variant="medium12">
          Confirm PIN
        </Text>
        <Text color="textTint" mb="md" mt="xs" variant="regular10">
          Enter your 4 digit pin to continue
        </Text>
        <Box height={RFValue(90)} />
        <Box flex={1}>
          <PinComponent
            noAmountBox
            onChangeText={(value) => {
              setPin(value);
            }}
            size={60}
            value={pin}
          />
        </Box>
        <Text color="primaryColor" textAlign="center" variant="medium12">
          USE HARDWARETOKEN INSTEAD
        </Text>
      </ScrollBox>
    </LayoutComponent>
  );
}
