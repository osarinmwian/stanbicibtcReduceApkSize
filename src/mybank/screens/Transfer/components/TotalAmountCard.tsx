import React, { VFC } from "react";

import { Box } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";

type TotalAmountCardProps = {
  amount?: string;
  charges?: string;
  total?: string;
};

const TotalAmountCard: VFC<TotalAmountCardProps> = ({
  amount = "N2,101,000.00",
  charges = "N2,000.00",
  total = "N2,103,000.00",
}) => (
  <Box mb="sm">
    <Box backgroundColor="confirmCard" borderRadius="sm" p="sml">
      <Box flexDirection="row" justifyContent="space-between">
        <Text variant="regular12">Amount</Text>
        <Text variant="regular12">{amount}</Text>
      </Box>
      <Box flexDirection="row" justifyContent="space-between" mt="md">
        <Text variant="regular12">Charges</Text>
        <Text variant="regular12">{charges}</Text>
      </Box>
      <Box flexDirection="row" justifyContent="space-between" mt="md">
        <Text variant="regular12">Total</Text>
        <Text variant="bold12">{total}</Text>
      </Box>
    </Box>
  </Box>
);

export default TotalAmountCard;
