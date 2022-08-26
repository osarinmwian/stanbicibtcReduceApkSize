import React from "react";

import { MyBankNavigationProps } from "@/mybank/navigation/types";
import RecentTransactionsComponent from "@/mybank/screens/Transfer/components/RecentTransactionsComponent";
import SelectComponent from "@/mybank/screens/Transfer/components/SelectComponent";
import { BaseButton } from "@/shared/components/Buttons";
import { Box, LayoutComponent, ScrollBox } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";
import { RFValue } from "@/shared/utils/functions";

export default function TransferLandingPage({
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
        <Text marginTop="xs" variant="medium12">
          RECENT TRANSACTIONS
        </Text>
        <RecentTransactionsComponent />
        <Box marginBottom="lg">
          <SelectComponent
            iconName="star"
            label="Self Transfer"
            placeholder="Transfer money across your accounts"
          />
          <SelectComponent
            iconName="home2"
            label="Bank Transfer"
            onPress={() => navigation.navigate("BankTransfer")}
            placeholder="Send money to yourself and other banks"
          />
          <SelectComponent
            iconName="users"
            label="Beneficiary Transfer"
            placeholder="Send to single or multiple beneficiaries"
          />
          <SelectComponent
            iconName="@ease2"
            label="@ease Transfer"
            placeholder="Send money to @ease accounts"
          />
          <SelectComponent
            iconName="payments2"
            label="FX Payment"
            onPress={() => navigation.navigate("FXTransfer")}
            placeholder="Send payment to international accounts"
          />
          <SelectComponent
            iconName="ewallet"
            label="e-Naira Wallet"
            onPress={() => navigation.navigate("ENaira")}
            placeholder="Send money to e-Naira wallets"
          />
          <SelectComponent
            iconName="users"
            label="Beneficiaries"
            onPress={() => navigation.navigate("Beneficiary")}
            placeholder="Manage or add beneficiaries"
          />
          <BaseButton
            alignItems="center"
            backgroundColor="cardSecondary"
            height={RFValue(52)}
            justifyContent="center"
            marginVertical="sm"
            onPress={() =>
              navigation.navigate("BankTransferTransactionHistory")
            }
            paddingVertical="sm"
          >
            <Text
              color="primaryColor"
              textAlign="center"
              textTransform="uppercase"
              variant="medium10"
            >
              Transaction History
            </Text>
          </BaseButton>
        </Box>
      </ScrollBox>
    </LayoutComponent>
  );
}
