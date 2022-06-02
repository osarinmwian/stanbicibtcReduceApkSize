import React from "react";

import { MyBankNavigationProps } from "@/mybank/navigation/types";
import SelectComponent from "@/mybank/screens/Transfer/components/SelectComponent";
import { LayoutComponent, ScrollBox } from "@/shared/components/Layout";

export default function FxTransfer({
  navigation,
}: MyBankNavigationProps<"FXTransfer">) {
  return (
    <LayoutComponent label="FX PAYMENT">
      <ScrollBox
        bounces={false}
        flex={1}
        paddingHorizontal="md"
        paddingVertical="md"
      >
        <SelectComponent
          iconName="add"
          label="New Request"
          onPress={() => navigation.navigate("FXTransferNewRequestFirstScreen")}
          placeholder="Create new FX request"
        />
        <SelectComponent
          iconName="time"
          label="Request History"
          onPress={() => navigation.navigate("FXTransferTransactionHistory")}
          placeholder="See all requests made"
        />
      </ScrollBox>
    </LayoutComponent>
  );
}
