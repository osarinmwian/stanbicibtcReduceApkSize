import { BottomSheetModal } from "@gorhom/bottom-sheet";
import React, { useRef, useState } from "react";

import PinComponent from "@/mybank/screens/Transfer/components/PinComponent";
import SuccessModal from "@/mybank/screens/Transfer/components/SuccessModal";
import TotalAmountCard from "@/mybank/screens/Transfer/components/TotalAmountCard";
import { LayoutComponent, ScrollBox } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";

export default function BankTransferEnterPin() {
  const [pin, setPin] = useState("");
  const successModalBottomSheetModalRef = useRef<BottomSheetModal>(null);
  const onOpenSuccessModal = () =>
    successModalBottomSheetModalRef.current?.present();
  const onCloseSuccessModal = () =>
    successModalBottomSheetModalRef.current?.close();
  return (
    <LayoutComponent label="BANK TRANSFER">
      <ScrollBox
        bounces={false}
        flex={1}
        paddingHorizontal="md"
        paddingVertical="md"
      >
        <Text variant="medium12">Transaction confirmation</Text>
        <Text color="textTint" mb="md" mt="xs" variant="regular10">
          Enter your 4 digit pin to continue
        </Text>
        <TotalAmountCard />
        <PinComponent
          onChangeText={(value) => {
            setPin(value);
            if (value.length === 4) {
              onOpenSuccessModal();
            }
          }}
          value={pin}
        />
        <Text
          color="primaryColor"
          mt="sm"
          textAlign="center"
          variant="medium12"
        >
          USE HARDWARETOKEN INSTEAD
        </Text>
      </ScrollBox>
      <SuccessModal
        bottomSheetModalRef={successModalBottomSheetModalRef}
        handleClose={onCloseSuccessModal}
        onProceed={onCloseSuccessModal}
      />
    </LayoutComponent>
  );
}
