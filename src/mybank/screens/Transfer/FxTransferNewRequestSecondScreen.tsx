import React, { useState } from "react";

import { MyBankNavigationProps } from "@/mybank/navigation/types";
import ListComponent from "@/mybank/screens/Transfer/components/ListComponent";
import { CheckBoxButton, PrimaryButton } from "@/shared/components/Buttons";
import { Box, LayoutComponent, ScrollBox } from "@/shared/components/Layout";
import { OutlinedTextInput } from "@/shared/components/TextInput";
import { Text } from "@/shared/components/Typography";
import { useTheme } from "@/shared/theme";
import { RFValue } from "@/shared/utils/functions";

export default function FxTransferNewRequestSecondScreen({
  navigation,
}: MyBankNavigationProps<"FXTransferNewRequestSecondScreen">) {
  const [isChecked1, setChecked1] = useState(false);
  const theme = useTheme();
  return (
    <LayoutComponent label="FX PAYMENT">
      <ScrollBox
        bounces={false}
        contentContainerStyle={{ flex: 1 }}
        paddingHorizontal="md"
        paddingVertical="md"
      >
        <Box flex={1} padding="sm">
          <Text variant="medium12">Create new request</Text>
          <Box flexDirection="row" mt="md">
            <Box
              alignItems="center"
              backgroundColor="lightgreen2"
              borderRadius="sm"
              flex={1}
              justifyContent="center"
              mr="sm"
              p="md"
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
          <Box flex={1} mb="md" mt="md">
            <Box height={RFValue(52)} marginTop="sm">
              <OutlinedTextInput
                baseColor={theme.colors.whiteColor}
                fontSize={RFValue(10)}
                inputContainerStyle={{
                  backgroundColor: theme.colors.cardSecondary,
                  borderRadius: 10,
                  height: RFValue(52),
                }}
                label="ENTER AMOUNT"
                labelTextStyle={{ color: theme.colors.primaryBlack }}
                placeholder="₦0.00"
                tintColor={theme.colors.cardSecondary}
              />
            </Box>
            <Box flex={1} mt="xs">
              <ListComponent
                label="SELECT BANK STATE"
                onPress={() => {}}
                placeholder="Lagos"
              />
              <ListComponent
                label="SELECT BANK BRANCH"
                onPress={() => {}}
                placeholder=""
              />
              <Box mt="md">
                <CheckBoxButton
                  isChecked={isChecked1}
                  label="Terms and condition"
                  placeholder="I have read and agree to this loan request"
                  setChecked={setChecked1}
                />
              </Box>
            </Box>
          </Box>
          <PrimaryButton
            alignItems="center"
            backgroundColor="primaryColor"
            height={RFValue(52)}
            justifyContent="center"
            label="SUBMIT"
            labelProps={{ color: "whiteColor" }}
            labelVariant="medium12"
            marginBottom="xs"
            marginTop="md"
            onPress={() => {
              navigation.navigate("FXTransferEnterPin");
            }}
            paddingVertical="md"
          />
        </Box>
      </ScrollBox>
    </LayoutComponent>
  );
}
