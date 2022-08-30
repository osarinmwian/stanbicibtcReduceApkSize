import React from "react";

import { MyBankNavigationProps } from "@/mybank/navigation/types";
import ListComponent from "@/mybank/screens/Transfer/components/ListComponent";
import UploadComponent from "@/mybank/screens/Transfer/components/UploadComponent";
import { PrimaryButton } from "@/shared/components/Buttons";
import { Box, LayoutComponent, ScrollBox } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";
import { RFValue } from "@/shared/utils/functions";

export default function FxTransferNewRequestFirstScreen({
  navigation,
}: MyBankNavigationProps<"FXTransferNewRequestFirstScreen">) {
  return (
    <LayoutComponent label="FX PAYMENT">
      <ScrollBox
        bounces={false}
        flex={1}
        paddingHorizontal="md"
        paddingVertical="md"
      >
        <Box padding="sm">
          <Text variant="medium12">Create new request</Text>
          <Box flex={1} flexDirection="row" mt="md">
            <Box
              alignItems="center"
              borderRadius="sm"
              flex={1}
              justifyContent="center"
              mr="sm"
              p="md"
              style={{ backgroundColor: "rgba(1, 105, 193, 0.12)" }}
            >
              <Text color="primaryColor" variant="regular10">
                FX Balance
              </Text>
              <Text color="primaryColor" mt="xs" variant="bold10">
                $20,000.00
              </Text>
            </Box>
            <Box
              alignItems="center"
              backgroundColor="transactColor"
              borderRadius="sm"
              flex={1}
              justifyContent="center"
              ml="sm"
              p="md"
            >
              <Text variant="regular10">BVN</Text>
              <Text mt="xs" variant="bold10">
                20667007671
              </Text>
            </Box>
          </Box>
          <Box mb="md" mt="md">
            <ListComponent
              biggerPlaceHolder
              label="SELECT PURCHASE TYPE"
              onPress={() => {}}
              placeholder="Adult"
            />
            <Box marginTop="md" />
            <ListComponent
              label="SELECT TRANSACTION TYPE"
              onPress={() => {}}
              placeholder=""
            />
            <Box marginTop="md" />
            <ListComponent
              biggerPlaceHolder
              label="SCHOOL FEES"
              onPress={() => {}}
              placeholder="IMAG_2021_12_CAC_FILE_..."
            />
            <Box marginTop="sm" />
            <UploadComponent
              label="MEDICAL BILL"
              onPress={() => {}}
              placeholder="UPLOAD DOCUMENT"
            />
            <UploadComponent
              label="MTA (MEDICAL TRAVEL ALLOWANCE)"
              onPress={() => {}}
              placeholder="UPLOAD DOCUMENT"
            />
            <UploadComponent
              label="PTA"
              onPress={() => {}}
              placeholder="UPLOAD DOCUMENT"
            />
            <UploadComponent
              label="BTA"
              onPress={() => {}}
              placeholder="UPLOAD DOCUMENT"
            />
            <PrimaryButton
              alignItems="center"
              backgroundColor="primaryColor"
              height={RFValue(52)}
              justifyContent="center"
              label="CONTINUE"
              labelProps={{ color: "whiteColor" }}
              labelVariant="medium12"
              marginBottom="xs"
              marginTop="md"
              onPress={() => {
                navigation.navigate("FXTransferNewRequestSecondScreen");
              }}
              paddingVertical="md"
            />
          </Box>
        </Box>
      </ScrollBox>
    </LayoutComponent>
  );
}
