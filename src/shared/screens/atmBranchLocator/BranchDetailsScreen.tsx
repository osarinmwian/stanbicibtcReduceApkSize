import React from "react";
import { Image } from "react-native";

import { directions } from "@/shared/assets/image";
import { Box, LayoutComponent, ScrollBox } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";

import { BranchLocatorNavigationProps } from "./navigation/types";

export default function BranchDetailsScreen({
  route,
}: BranchLocatorNavigationProps<"BranchDetails">) {
  const { branchName, address } = route.params;

  return (
    <LayoutComponent isBackArrow label="BRANCH LOCATOR">
      <ScrollBox
        bounces={false}
        flex={1}
        paddingHorizontal="md"
        paddingVertical="md"
      >
        <Box>
          <Text color="textColor">Branch details</Text>

          <Text color="textColor2" mt="xs">
            Know more about this branch
          </Text>
        </Box>

        <Box borderColor="paleGrey" borderWidth={1} mt="md" padding="md">
          <Text color="textColor" variant="body">
            {branchName}
          </Text>

          <Text color="textColor2" mt="xs" variant="regular12">
            Branch name
          </Text>

          <Text color="textColor" mt="md" variant="body">
            {/* Plot 1167, Idejo, Adola Odeku street, Victoria Island, Lagos */}
            {address}
          </Text>

          <Text color="textColor2" mt="xs" variant="regular12">
            Branch address
          </Text>

          <Box
            alignItems="center"
            // borderRadius="xs"
            borderColor="paleGrey"
            borderWidth={1}
            justifyContent="center"
            mt="md"
            padding="md"
            width="50%"
          >
            <Image source={directions} style={{ width: 20, height: 23 }} />
            <Text color="primaryColor" mt="xs" variant="regular14">
              Get directions
            </Text>
          </Box>

          <Text color="textColor" mt="md" variant="body">
            idejobranch@stanbicibtc.com
          </Text>

          <Text color="textColor2" mt="xs" variant="regular12">
            Branch email
          </Text>

          <Text color="textColor" mt="md" variant="body">
            01 234 667, 0800 000 0000
          </Text>

          <Text color="textColor2" mt="xs" variant="regular12">
            Customer service line
          </Text>
        </Box>
      </ScrollBox>
    </LayoutComponent>
  );
}
