import { BottomSheetModal } from "@gorhom/bottom-sheet";
import React, { FC, useCallback, useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  Modal,
  Pressable,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { AirbnbRating } from "react-native-ratings";

import {
  bath,
  bed,
  caretleft,
  caretright,
  hotelbanner,
  hotelbanner2,
  loginBackground,
  mapcreenshot,
  reviewicon,
  right_arrow,
  shieldalt,
  star,
  users,
} from "@/mybank/assets/image";
import { MyBankNavigationProps } from "@/mybank/navigation/types";
import { ImageIcon } from "@/shared/assets/icons";
import { PrimaryButton } from "@/shared/components/Buttons";
import { Box } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";

import BookHotel from "./components/BookHotel";
import { MapImage } from "@/mybank/assets/svg";

const hotelviewData = {
  id: 1,
  name: "Hyde Park Suites Apartment Buildings",
  arrivals: "Nov 7, 2022",
  departure: "Nov 11, 2022",
  booking_fee: "N213,334",
  rating: 3,
  hotelsImages: [
    { img: hotelbanner, id: 1 },
    { img: mapcreenshot, id: 2 },
    { id: 3, img: hotelbanner2 },
  ],
  property_units_beds: 2,
  property_units_bath: 2,
  property_units_guests: 3,
  about:
    "London's Hyde Park Hotel is located in London's world-renowned West End, a cosy neighbourhood with scenic park views. Nestled on a quiet Victorian block in trendy Westbourne Grove area and close to Notting Hill, the hotel is a short walk to Queensway and Bayswater tube stations..",
  property_amenties: [
    "Coffee/Tea Maker",
    "Hair Dryer",
    "Refrigerator",
    "Telephone",
    "Ironing Facilities",
    "Satellite/Cable TV",
    " Shower",
    "Toiletries",
    "Writing Desk",
    "24-hour front desk",
    "Laundry Service",
    "Luggage Storage",
    "Free Wi-Fi in all rooms",
    "Wi-Fi in Public Area",
  ],
  location: {
    id: 1,
    img: mapcreenshot,
    region: {
      latitude: 3.406448,
      longitude: 6.465422,
      latitudeDelta: 3.406448,
      longitudeDelta: 3.406448,
    },
    markers: [
      {
        id: 1,
        latitude: 6.431401715747725,
        longitude: 3.430374,
        title: "Eko Hotel And Suites Victoria Island",
      },
    ],
    address:
      "Plot 1174, Ademola Adetokunbo Street Victoria Island, Lagos, Nigeria",
  },
  totalreviews: "4.71(126 reviews)",
  reviews: [
    {
      icon: reviewicon,
      _id: 1,
      name: "Jessica",
      created_at: "April 12, 2022",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non proin nec, aliquet. Eu justo ut semper non vel, sit aliquet et. Facilisis lectus eu vulputate fames. Neque montes, diam duis amet, volutpat, ut tellus...",
    },
    {
      icon: reviewicon,
      _id: 2,
      name: "Jessica",
      created_at: "April 12, 2022",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non proin nec, aliquet. Eu justo ut semper non vel, sit aliquet et. Facilisis lectus eu vulputate fames Neque montes, diam duis amet, volutpat, ut tellus...",
    },
  ],
  host_details: {
    icon: reviewicon,
    created_at: "April 12, 2022",
    total_reviews: 766,
    name: "John Doe",
    status: "identity verify",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non proin nec, aliquet. Eu justo ut semper non vel, sit aliquet et. Facilisis lectus eu vulputate fames. Neque montes, diam duis amet, volutpat, ut tellus...",
  },
};

const HotelView: FC = ({ navigation }: MyBankNavigationProps<"HotelView">) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [listData] = useState([
    { id: 1, title: "House Rule" },
    { id: 2, title: "House & Safety" },
    { id: 3, title: "Cancellation Policy" },
    { id: 4, title: "Report this Listing" },
  ]);

  const moreModalRef = useRef<BottomSheetModal>(null);

  const handleMorePresent = useCallback(() => {
    setModalVisible(!modalVisible);
  }, []);
  const [currentphoto, setcurrentphoto] = useState({ img: hotelbanner, id: 1 });
  const [currentphotoindex, setcurrentphotoindex] = useState<number>(0);

  const [hotelviewfooter] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non proin nec, aliquet. Eu justo ut semper non vel, sit aliquet et. Facilisis lectus eu vulputate fames. Neque montes, diam duis amet, volutpat, ut tellus...",
  );

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

  const renderItemList = ({ item, index }: any) => (
    <Box
      borderBottomWidth={index === listData.length - 1 ? 0 : 0.7}
      borderColor="textTint2"
      marginHorizontal="md"
      paddingVertical="md"
    >
      <TouchableOpacity
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text>{item.title}</Text>
        <Image
          resizeMode="contain"
          source={right_arrow}
          style={{
            width: 11,
            height: 11,
          }}
        />
      </TouchableOpacity>
    </Box>
  );

  const renderHotelHeader = () => (
    <Box marginHorizontal="md" marginVertical="lg">
      <Text variant="bold14">{hotelviewData.name}</Text>
      <Box
        alignItems="flex-start"
        justifyContent="flex-start"
        marginVertical="sm"
      >
        <AirbnbRating
          count={5}
          defaultRating={hotelviewData.rating}
          isDisabled
          reviews={["1/5", "2/5", "3/5", "4/5", "5/5"]}
          showRating={false}
          size={16}
        />
      </Box>
      <Text color="textTint" marginBottom="sm" variant="medium10">
        Booking fee
      </Text>
      <Text variant="bold14">&#8358;213, 334</Text>
      <PrimaryButton
        alignItems="center"
        backgroundColor="primaryColor"
        justifyContent="center"
        label="BOOK HOTEL NOW"
        labelProps={{ color: "whiteColor" }}
        labelVariant="medium12"
        marginBottom="xs"
        marginTop="md"
        onPress={handleMorePresent}
        paddingVertical="md"
        width="100%"
      />
    </Box>
  );

  const handleSwipeLeft = () => {
    if (currentphotoindex >= hotelviewData.hotelsImages.length - 1) {
      setcurrentphotoindex(0);
    } else {
      setcurrentphotoindex((previous) => previous + 1);
    }

    // eslint-disable-next-line no-plusplus
    for (let index = 0; index <= hotelviewData.hotelsImages.length; index++) {
      if (index === currentphotoindex) {
        setcurrentphoto(hotelviewData.hotelsImages[index]);
      }
    }
  };
  const handleSwipeRigth = () => {
    if (currentphotoindex < 1) {
      setcurrentphotoindex(hotelviewData.hotelsImages.length - 1);
    } else {
      setcurrentphotoindex((previous) => previous - 1);
    }

    // eslint-disable-next-line no-plusplus
    for (let index = 0; index <= hotelviewData.hotelsImages.length; index++) {
      if (index === currentphotoindex) {
        setcurrentphoto(hotelviewData.hotelsImages[index]);
      }
    }
  };
  const renderItemPhotos = () => (
    <Box marginHorizontal="md">
      <ImageBackground
        imageStyle={{
          borderRadius: 10,
        }}
        source={currentphoto.img}
        style={{
          width: "100%",
          height: 180,
          backgroundColor: "#000",
          borderRadius: 10,
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={handleSwipeLeft}
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fff",
            height: 35,
            width: 35,
            borderRadius: 17,
            marginLeft: 15,
          }}
        >
          <Image
            source={caretleft}
            style={{
              height: 12,
              width: 7,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSwipeRigth}
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fff",
            height: 35,
            width: 35,
            borderRadius: 17,
            marginRight: 15,
          }}
        >
          <Image
            source={caretright}
            style={{
              height: 12,
              width: 7,
            }}
          />
        </TouchableOpacity>
      </ImageBackground>
    </Box>
  );

  const renderPropertyUnits = () => (
    <Box marginHorizontal="md" marginVertical="lg">
      <Text variant="medium12">PROPERTY UNITS</Text>
      <Box>
        <Box alignItems="center" flexDirection="row" marginVertical="sm">
          <Image
            resizeMode="contain"
            source={bed}
            style={{
              width: 25,
              height: 25,
            }}
          />
          <Text marginLeft="md" variant="regular12">
            {hotelviewData.property_units_beds} Beds
          </Text>
        </Box>
        <Box alignItems="center" flexDirection="row">
          <Image
            resizeMode="contain"
            source={bath}
            style={{
              width: 25,
              height: 25,
            }}
          />
          <Text marginLeft="md" variant="regular12">
            {hotelviewData.property_units_bath} Baths
          </Text>
        </Box>
        <Box alignItems="center" flexDirection="row" marginVertical="sm">
          <Image
            resizeMode="contain"
            source={users}
            style={{
              width: 25,
              height: 25,
            }}
          />
          <Text marginLeft="md" variant="regular12">
            {hotelviewData.property_units_guests} Guests
          </Text>
        </Box>
      </Box>
    </Box>
  );

  const renderAbouts = () => (
    <Box marginHorizontal="md">
      <Text marginBottom="md" variant="medium12">
        ABOUT {hotelviewData.name}
      </Text>
      <Text letterSpacing={1} lineHeight={20} variant="regular12">
        {hotelviewData.about}
      </Text>
    </Box>
  );

  const renderPropertyAmenities = () => (
    <Box marginHorizontal="md" marginVertical="md">
      <Text marginVertical="sm" variant="medium12">
        PROPERTY AMENITIES
      </Text>
      {hotelviewData.property_amenties.map((item) => (
        <Text lineHeight={25} variant="regular12">
          {item}
        </Text>
      ))}
    </Box>
  );

  const renderHotelAddress = () => (
    <Box marginBottom="md" marginHorizontal="md">
      <Text marginVertical="md" variant="medium12">
        ADDRESS
      </Text>
      <Box height={200} width="100%">
        {/* <MapView
          region={hotelviewData.location.region}
          style={{ flex: 1, borderRadius: 10 }}
          zoomControlEnabled
          zoomEnabled
        >
          {hotelviewData.location.markers.map((marker) => (
            <Marker
              coordinate={{
                latitude: marker.latitude,
                longitude: marker.longitude,
              }}
              key={marker.id}
              title={marker.title}
            />
          ))}
        </MapView> */}
        <MapImage />
      </Box>
      <Box width="90%">
        <Text
          color="textTint"
          lineHeight={20}
          marginTop="sm"
          variant="regular12"
        >
          {hotelviewData.location.address}
        </Text>
      </Box>
    </Box>
  );
  const renderReviewItem = ({ item }: any) => (
    <Box
      borderColor="textTint2"
      borderRadius="sm"
      borderWidth={1.5}
      marginRight="md"
      minHeight={150}
      padding="md"
      width={Dimensions.get("window").width / 1.3}
    >
      <Box flexDirection="row">
        <Image
          source={item.icon}
          style={{
            width: 40,
            height: 40,
          }}
        />
        <Box marginLeft="md">
          <Text variant="medium12">{item.name}</Text>
          <Text color="textTint" marginTop="ssm" variant="regular12">
            {item.created_at}
          </Text>
        </Box>
      </Box>
      <Box marginTop="md" width="100%">
        <Text lineHeight={20} variant="regular12">
          {item.comment}
        </Text>
      </Box>
    </Box>
  );

  const renderHotelReviews = () => (
    <Box>
      <FlatList
        data={hotelviewData.reviews}
        horizontal
        keyExtractor={(index) => `item-${index}`}
        renderItem={renderReviewItem}
        showsHorizontalScrollIndicator={false}
      />
    </Box>
  );
  const renderHotelTotalReviews = () => (
    <Box marginBottom="md" marginHorizontal="md">
      <Text marginVertical="sm" variant="medium12">
        REVIEWS
      </Text>
      <Box
        alignItems="center"
        flexDirection="row"
        justifyContent="flex-start"
        marginBottom="md"
      >
        <AirbnbRating
          count={5}
          defaultRating={hotelviewData.rating}
          isDisabled
          reviews={["1/5", "2/5", "3/5", "4/5", "5/5"]}
          showRating={false}
          size={15}
        />
        <Text
          color="textTint"
          lineHeight={20}
          marginLeft="md"
          marginTop="sm"
          variant="regular12"
        >
          {hotelviewData.totalreviews}
        </Text>
      </Box>
      {renderHotelReviews()}
    </Box>
  );

  const renderHostDetail = () => (
    <Box marginHorizontal="md">
      <Text marginVertical="md" variant="medium12">
        HOST DETAILS
      </Text>
      <Box flexDirection="row" marginVertical="sm">
        <Image
          source={hotelviewData.host_details.icon}
          style={{
            width: 40,
            height: 40,
          }}
        />
        <Box marginLeft="md">
          <Text variant="medium12">{hotelviewData.host_details.name}</Text>
          <Text color="textTint" marginTop="ssm" variant="regular12">
            {hotelviewData.host_details.created_at}
          </Text>
        </Box>
      </Box>

      <Box alignItems="center" flexDirection="row" marginVertical="sm">
        <Image
          resizeMode="contain"
          source={star}
          style={{
            width: 20,
            height: 20,
          }}
        />
        <Text marginLeft="md" variant="medium12">
          {hotelviewData.host_details.total_reviews} reviews
        </Text>
      </Box>
      <Box alignItems="center" flexDirection="row" marginVertical="sm">
        <Image
          resizeMode="contain"
          source={shieldalt}
          style={{
            width: 20,
            height: 20,
          }}
        />
        <Text marginLeft="md" variant="medium12">
          {hotelviewData.host_details.status}
        </Text>
      </Box>
      <Box marginVertical="sm">
        <Text lineHeight={20} variant="regular12">
          {hotelviewData.host_details.about}
        </Text>
      </Box>

      <PrimaryButton
        alignItems="center"
        backgroundColor="transparent"
        borderColor="primaryColor"
        borderWidth={1}
        justifyContent="center"
        label="CONTACT HOST"
        labelProps={{ color: "primaryColor" }}
        labelVariant="medium12"
        marginVertical="sm"
        // onPress={handleSearchHotel}
        paddingVertical="md"
      />
    </Box>
  );
  const renderHeaderViewHotel = () => (
    <Box>
      {renderHotelHeader()}
      {renderItemPhotos()}
      {renderPropertyUnits()}
      {renderAbouts()}
      {renderPropertyAmenities()}
      {renderHotelAddress()}
      {renderHotelTotalReviews()}
      {renderHostDetail()}
    </Box>
  );

  const renderHotelDetail = () => (
    <Box backgroundColor="whiteColor" borderRadius="sm" flex={1}>
      <FlatList
        data={listData}
        keyExtractor={(item) => `item-${item.id}`}
        ListFooterComponent={
          <Box marginHorizontal="sm" marginVertical="lg">
            <Text lineHeight={20} variant="regular12">
              {hotelviewfooter}
            </Text>
          </Box>
        }
        ListHeaderComponent={renderHeaderViewHotel()}
        renderItem={renderItemList}
        showsVerticalScrollIndicator={false}
      />
    </Box>
  );

  return (
    <>
      <StatusBar />
      <ImageBackground
        resizeMode="cover"
        source={loginBackground}
        style={{ flex: 1 }}
      >
        <Modal animationType="slide" transparent visible={modalVisible}>
          <BookHotel
            navigation={navigation}
            setModalVisible={setModalVisible}
          />
        </Modal>
        {renderHeader()}
        {renderHotelDetail()}
      </ImageBackground>
    </>
  );
};

export default HotelView;
