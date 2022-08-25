import React, { FC, useState } from "react";
import { Dimensions, Image } from "react-native";

import { building, hotelbanner } from "@/mybank/assets/image";
import BottomTabLandingPageTopBar from "@/mybank/components/TopBar";
import { MyBankNavigationProps } from "@/mybank/navigation/types";
import { PrimaryButton } from "@/shared/components/Buttons";
import { Box } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";

const SearchHotelError: FC = ({
  navigation,
}: MyBankNavigationProps<"SearchHotelError">) => {
  const [searchSuccesss] = useState<boolean | null>(false);

  const handleSearchHotel = () => {
    if (searchSuccesss) {
      navigation.navigate("SearchHotelErrorList");
    } else {
      navigation.navigate("SearchHotelError");
    }
  };
  return (
    <>
      <BottomTabLandingPageTopBar
        heading="Hotels"
        hotelstyle={{ flex: 0.35 }}
        imageName={hotelbanner}
        landingPage={false}
      />
      <Box flex={1} marginHorizontal="md">
        <Box
          alignItems="center"
          flexDirection="row"
          justifyContent="space-between"
          marginTop="md"
        >
          <Text marginVertical="sm" variant="medium12">
            Search and book hotels
          </Text>
        </Box>
        <Box
          alignItems="center"
          flex={0.5}
          justifyContent="center"
          marginTop="xl"
        >
          <Box
            alignItems="center"
            backgroundColor="textTint2"
            borderRadius="lg"
            height={72}
            justifyContent="center"
            width={72}
          >
            <Image
              source={building}
              style={{
                width: 21,
                height: 24,
              }}
            />
          </Box>
          <Box alignItems="center" flex={1} justifyContent="center">
            <Text marginVertical="sm" variant="medium12">
              No listing found for this location
            </Text>
            <Text color="lightGrey" variant="medium12">
              Try again or search another location
            </Text>
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
            onPress={handleSearchHotel}
            paddingVertical="md"
            width={Dimensions.get("window").width / 2}
          />
        </Box>
      </Box>
    </>
  );
};

export default SearchHotelError;
