import { useNavigation } from "@react-navigation/native";
import React, { VFC } from "react";

import { PrimaryButton } from "@/shared/components/Buttons";
import { Box, Card } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";

const EligibilityCard: VFC = () => {
  const navigation = useNavigation();
  return (
  <Card backgroundColor="loanCard" padding="md">
    <Box>
      <Box alignItems="flex-start" mb="md">
        <Box
          borderColor="mutualFundsContainer"
          borderRadius="xs"
          borderWidth={1}
          paddingHorizontal="sm"
          paddingVertical="xs"
        >
          <Text color="mutualFundsContainer" fontVariant="caption">
            Eligibility
          </Text>
        </Box>
      </Box>
      <Box>
        <Text>EZ Cash Loan</Text>
        <Text fontVariant="h4" fontWeight="bold">
          N4,000,000
        </Text>
      </Box>
      <Text color="textColor2" my="md">
        Click on the button below to proceed
      </Text>
      <Box>
        <PrimaryButton
          containerProps={{ flex: 1 }}
          label="PROCEED"
          labelProps={{ color: "whiteColor", fontVariant: "caption" }}
          paddingVertical="sm"
        />
      </Box>
      <Box mt="sm">
        <PrimaryButton
          containerProps={{ flex: 1 }}
          label="SEE ALL LOAN OFFERS"
          labelProps={{
            color: "primaryColor",
            fontVariant: "caption",
            fontWeight: "bold",
          }}
          variant="transparent"
          onPress={() => navigation.navigate("LoansAndOffers")}
        />
      </Box>
    </Box>
  </Card>
  )
};

export { EligibilityCard };
