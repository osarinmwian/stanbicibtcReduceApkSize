import { BottomSheetModal } from "@gorhom/bottom-sheet";
import React, { useRef } from "react";

import SelectComponent from "@/mybank/screens/Transfer/components/SelectComponent";
import { Box, LayoutComponent, ScrollBox } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";

import BillersModal from "./components/BillersModal";

export default function CorporateBillers() {
  const billerModalRef = useRef<BottomSheetModal>(null);

  const handleClose = () => billerModalRef.current?.close();
  const handlePresent = () => billerModalRef.current?.present();

  return (
    <LayoutComponent isBackArrow label="COPORATE BILLERS">
      <ScrollBox
        bounces={false}
        flex={1}
        paddingHorizontal="md"
        paddingVertical="md"
      >
        <Text variant="medium16">Select option</Text>
        <Box marginBottom="lg" marginTop="md">
          <SelectComponent label="Government" onPress={handlePresent} />
          <SelectComponent label="Airlines" />
          <SelectComponent label="Insurance" />
          <SelectComponent label="Construction" />
          <SelectComponent label="Cable TV" />
          <SelectComponent label="Investments" />
          <SelectComponent label="Shipping" />
          <SelectComponent label="Others" />
        </Box>
      </ScrollBox>
      <BillersModal
        bottomSheetModalRef={billerModalRef}
        handleClose={handleClose}
      />
    </LayoutComponent>
  );
}
