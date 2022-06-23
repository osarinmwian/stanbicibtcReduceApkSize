import React, { useState } from "react";

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
        <Text variant="medium12">Confirm PIN</Text>
        <Text color="textTint" mb="md" mt="xs" variant="regular10">
          Enter your 4 digit pin to continue
        </Text>
        <Box flex={1}>
          <PinComponent
            onChangeText={(value) => {
              setPin(value);
            }}
            value={pin}
          />
        </Box>
        <Text
          color="primaryColor"
          mt="sm"
          textAlign="center"
          variant="medium12"
        >
          USE HARDWARETOKEN INSTEAD
        </Text>
      </ScrollBox>
    </LayoutComponent>
  );
}
