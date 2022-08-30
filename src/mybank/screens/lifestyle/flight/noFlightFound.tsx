import { RFValue } from "react-native-responsive-fontsize";

import BottomTabLandingPageTopBar from "@/mybank/components/TopBar";
import { MyBankNavigationProps } from "@/mybank/navigation/types";
import { SvgIcon } from "@/shared/assets/icons";
import { lifestyleBg } from "@/shared/assets/image";
import { PrimaryButton } from "@/shared/components/Buttons";
import { Box } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";

const NoFlightFound = ({
  navigation,
}: MyBankNavigationProps<"NoFlightsFound">) => (
  <>
    <BottomTabLandingPageTopBar
      heading="FLIGHTS"
      imageName={lifestyleBg}
      landingPage={false}
    />
    <Box
      style={{
        backgroundColor: "#fff",
        flex: 1,
        paddingHorizontal: RFValue(16),
      }}
    >
      <Box
        alignItems="center"
        flexDirection="row"
        justifyContent="space-between"
        marginTop="md"
      >
        <Text marginVertical="sm" variant="medium12">
          Search and book flights
        </Text>
      </Box>
      <Box
        alignItems="center"
        flex={1}
        justifyContent="center"
        marginBottom="md"
      >
        <Box alignItems="center">
          <Box
            alignItems="center"
            backgroundColor="textTint2"
            borderRadius="lg"
            height={RFValue(50)}
            justifyContent="center"
            width={RFValue(50)}
          >
            <SvgIcon name="ashPlane" size="sm" />
          </Box>

          <Box marginBottom="md" marginTop="sm">
            <Text marginVertical="sm" variant="medium14">
              No flight found for this destination
            </Text>

            <Text color="textTint" marginVertical="sm" variant="regular12">
              Try again or search another location
            </Text>
          </Box>
        </Box>

        <PrimaryButton
          alignItems="center"
          backgroundColor="primaryColor"
          justifyContent="center"
          label="SEARCH AGAIN"
          labelProps={{ color: "whiteColor" }}
          labelVariant="medium12"
          marginBottom="xs"
          marginTop="md"
          onPress={() => navigation.navigate("AvailableFlights")}
          paddingHorizontal="lg"
          paddingVertical="mmd"
        />
      </Box>
    </Box>
  </>
);

export default NoFlightFound;
