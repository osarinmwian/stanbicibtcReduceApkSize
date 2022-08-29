import React, { FC } from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  StatusBar,
} from "react-native";
import { AirbnbRating } from "react-native-ratings";

import { arrow_down, hotelsave, loginBackground } from "@/mybank/assets/image";
import { MyBankNavigationProps } from "@/mybank/navigation/types";
import { ImageIcon } from "@/shared/assets/icons";
import { PrimaryButton } from "@/shared/components/Buttons";
import { Box } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";

const hotelData = [
  {
    id: 1,
    name: "Hyde Park Suites Apartment Buildings",
    arrivals: "Nov 7, 2022",
    departure: "Nov 11, 2022",
    booking_fee: "213,334",
    rating: 2,
  },
  {
    id: 2,
    name: "Hyde Park Suites Apartment Buildings",
    arrivals: "Nov 7, 2022",
    departure: "Nov 11, 2022",
    booking_fee: "213,334",
    rating: 5,
  },
  {
    id: 3,
    name: "Hyde Park Suites Apartment Buildings",
    arrivals: "Nov 7, 2022",
    departure: "Nov 11, 2022",
    booking_fee: "213,334",
    rating: 3,
  },
  {
    id: 4,
    name: "Hyde Park Suites Apartment Buildings",
    arrivals: "Nov 7, 2022",
    departure: "Nov 11, 2022",
    booking_fee: "213,334",
    rating: 4,
  },
];

const HotelsList: FC = ({
  navigation,
}: MyBankNavigationProps<"HotelsList">) => {
  const renderHeader = () => (
    <Box
      alignContent="center"
      flexDirection="row"
      height={40}
      justifyContent="space-between"
      marginHorizontal="md"
      marginTop="xl"
    >
      <Pressable onPress={() => navigation.goBack()}>
        <ImageIcon name="arrowLeft" />
      </Pressable>
      <Text style={{ fontWeight: "bold", color: "#fff" }}>HOTELS</Text>
      <Text />
    </Box>
  );

  const renderItem = ({ item }: any) => (
    <Box
      borderColor="paleGrey50"
      borderRadius="sm"
      borderWidth={0.9}
      marginHorizontal="md"
      marginVertical="sm"
      padding="md"
    >
      <Box alignContent="center" flexDirection="row">
        <Box
          backgroundColor="paleGrey50"
          borderRadius="sm"
          height={30}
          marginVertical="sm"
          width={30}
        />
        <Box height={30} marginHorizontal="sm" marginVertical="sm" width="50%">
          <Text variant="medium12">{item.name}</Text>
        </Box>
      </Box>
      <Box alignContent="center" flexDirection="row" marginVertical="md">
        <Box>
          <Text color="textTint" marginBottom="sm">
            Arrivals
          </Text>
          <Text variant="bold14">{item.arrivals}</Text>
        </Box>
        <Box marginLeft="lg">
          <Text color="textTint" marginBottom="sm">
            Departure
          </Text>
          <Text variant="bold14">{item.departure}</Text>
        </Box>
      </Box>
      <Box alignContent="center" flexDirection="row" marginVertical="md">
        <Box>
          <Text color="textTint" marginBottom="sm">
            Booking fee
          </Text>
          <Text variant="bold14">&#x20A6;{item.booking_fee}</Text>
        </Box>
        <Box marginLeft="lg">
          <Text color="textTint" marginBottom="sm">
            Hotel rating
          </Text>
          <AirbnbRating
            count={5}
            defaultRating={item.rating}
            isDisabled
            reviews={["1/5", "2/5", "3/5", "4/5", "5/5"]}
            showRating={false}
            size={16}
          />
        </Box>
      </Box>
      <Box
        alignItems="center"
        flexDirection="row"
        justifyContent="space-between"
        width="100%"
      >
        <PrimaryButton
          alignItems="center"
          backgroundColor="primaryColor"
          justifyContent="center"
          label="VIEW HOTEL"
          labelProps={{ color: "whiteColor" }}
          labelVariant="medium10"
          marginBottom="xs"
          marginRight="lg"
          marginTop="md"
          onPress={() => navigation.navigate("HotelView")}
          paddingVertical="md"
          width="100%"
        />
        <Image
          resizeMode="contain"
          source={hotelsave}
          style={{
            width: 35,
            height: 35,
            marginBottom: -10,
            marginLeft: 40,
          }}
        />
        <Box />
      </Box>
    </Box>
  );

  const renderListHeader = () => (
    <Box marginHorizontal="md" marginVertical="md">
      <Box marginBottom="sm">
        <Text marginBottom="sm" variant="medium14">
          Available Hotels
        </Text>
        <Text color="textTint">View flights and continue</Text>
      </Box>
      <Box flexDirection="row" marginTop="sm">
        <Box
          alignItems="center"
          borderColor="primaryColor"
          borderRadius="sm"
          borderWidth={1.3}
          flexDirection="row"
          height={35}
          justifyContent="space-around"
          width={80}
        >
          <Text>Filter</Text>

          <Pressable>
            <Image
              resizeMode="contain"
              source={arrow_down}
              style={{
                width: 10,
                height: 15,
              }}
            />
          </Pressable>
        </Box>
        <Box
          alignItems="center"
          borderColor="primaryColor"
          borderRadius="sm"
          borderWidth={1.3}
          flexDirection="row"
          height={35}
          justifyContent="space-around"
          marginLeft="md"
          paddingHorizontal="sm"
        >
          <Text>EDIT HOTEL DETAILS</Text>
        </Box>
      </Box>
    </Box>
  );

  const renderList = () => (
    <FlatList
      contentContainerStyle={{
        backgroundColor: "#fff",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      }}
      data={hotelData}
      keyExtractor={(item) => `item-${item.id}`}
      ListFooterComponent={<Box marginBottom="xl" />}
      ListHeaderComponent={renderListHeader()}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
    />
  );

  return (
    <>
      <StatusBar />
      <ImageBackground
        resizeMode="cover"
        source={loginBackground}
        style={{ flex: 1 }}
      >
        {renderHeader()}
        <Box flex={1}>{renderList()}</Box>
      </ImageBackground>
    </>
  );
};

export default HotelsList;
