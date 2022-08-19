import React from "react";

import { MyBankNavigationProps } from "@/mybank/navigation/types";
import SelectComponent from "@/mybank/screens/Transfer/components/SelectComponent";
import { Box, LayoutComponent, ScrollBox } from "@/shared/components/Layout";

export default function PaymentLandingPage({
  navigation,
}: MyBankNavigationProps<"TransferLandingPage">) {
  return (
    <LayoutComponent isBackArrow={false} isIcon label="TRANSFER">
      <ScrollBox
        bounces={false}
        flex={1}
        paddingHorizontal="md"
        paddingVertical="md"
      >
        <Box marginBottom="lg">
          <SelectComponent
            iconName="star"
            label="Pay Bills"
            placeholder="Send money to yourself and other banks"
          />
          <SelectComponent
            iconName="home2"
            label="Coporate Billers"
            onPress={() => navigation.navigate("CorporateBillers")}
            placeholder="Send money to yourself and other banks"
          />
          <SelectComponent
            iconName="users"
            label="Buy Data"
            onPress={() => navigation.navigate("BuyDataStack")}
            placeholder="Send to single or multiple beneficiaries"
          />
          <SelectComponent
            iconName="@ease2"
            label="Cardless Withdrawal"
            placeholder="Send money to @ease accounts"
          />
          <SelectComponent
            iconName="payments2"
            label="Scheduled Payment"
            onPress={() => navigation.navigate("SchedulePaymentStack")}
            placeholder="Send payment to international accounts"
          />
          <SelectComponent
            iconName="ewallet"
            label="Load Prepaid Card"
            placeholder="Send money to e-Naira wallets"
          />
          <SelectComponent
            iconName="users"
            label="Pay With QR Code"
            placeholder="Manage or add beneficiaries"
          />
        </Box>
      </ScrollBox>
    </LayoutComponent>
  );
}
