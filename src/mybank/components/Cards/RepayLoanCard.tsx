import React, { VFC } from "react";

import { PrimaryButton } from "@/shared/components/Buttons";
import { Box, Card } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";

const RepayLoanCard: VFC = () => (
  <Card backgroundColor="whiteColor" padding="md">
    <Box>
      <Box mb="md">
        <Text>Loan amount</Text>
        <Text fontVariant="h4" fontWeight="bold">
          N4,000,000
        </Text>
      </Box>
      <Box flexDirection="row" mb="md">
        <Box flex={1}>
          <Text fontVariant="caption">Current loan balance</Text>
          <Text fontVariant="h6" fontWeight="bold">
            N2,500,000
          </Text>
        </Box>
        <Box flex={1}>
          <Text fontVariant="caption">Max. monthly repayment</Text>
          <Text fontVariant="h6" fontWeight="bold">
            N45,000
          </Text>
        </Box>
      </Box>
      <Box flexDirection="row" mb="md">
        <Box flex={1}>
          <Text fontVariant="caption">Interest rate</Text>
          <Text fontVariant="h6" fontWeight="bold">
            13%
          </Text>
        </Box>
        <Box flex={1}>
          <Text fontVariant="caption">Max. tenure</Text>
          <Text fontVariant="h6" fontWeight="bold">
            48 months
          </Text>
        </Box>
      </Box>
      <Box>
        <PrimaryButton
          containerProps={{ flex: 1 }}
          label="REPAY LOAN"
          labelProps={{ color: "whiteColor", fontVariant: "caption" }}
          paddingVertical="sm"
        />
      </Box>
    </Box>
  </Card>
);

export { RepayLoanCard };
