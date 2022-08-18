import React from "react";

import { loginBackground } from "@/mybank/assets/image";
import BottomTabLandingPageTopBar from "@/mybank/components/TopBar";
import { Box } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";

const AvailableFlightsPage = () => (
  <>
    <BottomTabLandingPageTopBar
      heading="FLIGHTS"
      imageName={loginBackground}
      landingPage={false}
    />
    <Box
      backgroundColor="whiteColor"
      borderTopEndRadius="md"
      borderTopStartRadius="md"
      flex={1}
      marginTop="md"
      padding="md"
    >
      <Box>
        <Text>Available Flights</Text>
        <Text>View flights and continue</Text>
      </Box>
    </Box>
  </>
);

export default AvailableFlightsPage;
