// react
import React, { useRef, useState, VFC } from "react";
// react-native
import { landingPageStyles } from "@/mybank/screens/Home/styles/Styles";
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
// third-parties
import {
  account_bg1,
  account_bg2,
  account_bg3,
  account_bg4,
  imageSlide,
  loan_card,
  quick_links1,
  quick_links2,
  quick_links3,
  quick_links4,
  quick_links5,
  quick_links6,
  quick_links7,
  quick_links8,
} from "@/mybank/assets/image";
import { MyBankNavigationProps } from "@/mybank/navigation/types";
import { SvgIcon } from "@/shared/assets/icons";
import { backgroundIcons, standardBankLogo } from "@/shared/assets/image";
import { Box, BoxProps, SafeAreaBox } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";
import { RFValue } from "react-native-responsive-fontsize";
const { width, height } = Dimensions.get("window");

const RF = (x: number) => x;
const Currency = (x: number) => x;
const format = (x: number | string) =>
  x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const iconProps: BoxProps = {
  alignItems: "center",
  borderRadius: "lg",
  height: 43,
  justifyContent: "center",
  marginRight: "md",
  style: { backgroundColor: "rgba(255, 255, 255, 0.16)" },
  width: 43,
};

const accounts = [
  {
    imageBackground: account_bg1,
    accountName: "EHIZOJIE SOLOMON IHAYERE",
    accountNumber: "0000826353",
    availableBalance: "1,200.450",
    currency: "N",
    effectiveBalance: "1,200.450",
  },
  {
    imageBackground: account_bg2,
    accountName: "EHIZOJIE SOLOMON IHAYERE",
    accountNumber: "0000826353",
    availableBalance: "1,200.450",
    currency: "N",
    effectiveBalance: "1,200.450",
  },
  {
    imageBackground: account_bg3,
    accountName: "EHIZOJIE SOLOMON IHAYERE",
    accountNumber: "0000826353",
    availableBalance: "1,200.450",
    currency: "N",
    effectiveBalance: "1,200.450",
  },
  {
    imageBackground: account_bg4,
    accountName: "EHIZOJIE SOLOMON IHAYERE",
    accountNumber: "0000826353",
    availableBalance: "1,200.450",
    currency: "N",
    effectiveBalance: "1,200.450",
  },
];

const imageSlider = [
  {
    image: imageSlide,
  },
  {
    image: imageSlide,
  },
  {
    image: imageSlide,
  },
];
const SMEHomepage: VFC<MyBankNavigationProps<"Home">> = ({ navigation }) => {
  const [showBalance, setShowBalance] = useState(true);
  const [currentAccountNumber, setCurrentAccountNumber] = useState("");

  const quickLinks = [
    {
      body: "Pending",
      id: 0,
      image: quick_links1,
      name: "Buy Airtime",
      onPress: () => navigation.navigate("BuyDataStack")
    },
    {
      body: "Generate",
      id: 1,
      image: quick_links2,
      name: "Get Loan",
      onPress: () => navigation.navigate("LoansNavigation"),
    },
    {
      body: "Enquiries &",
      id: 2,
      image: quick_links3,
      name: "Book Hotel",
      onPress: () => navigation.navigate("Hotels"),
    },
    {
      body: "Account",
      id: 3,
      image: quick_links4,
      name: "PFM",
      onPress: () => navigation.navigate("PfmNavigation"),
    },
    {
      body: "Pending",
      id: 4,
      image: quick_links5,
      name: "Book Flight",
      onPress: () => navigation.navigate("FlightIndex"),
    },
    {
      body: "Generate",
      id: 5,
      image: quick_links6,
      name: "3S Banking",
      onPress: () => navigation.navigate("ThreeSBanking"),
    },
    {
      body: "Enquiries &",
      id: 6,
      image: quick_links7,
      name: "eNaira",
      onPress: () => navigation.navigate("ENaira"),
    },
    {
      body: "Account",
      id: 7,
      image: quick_links8,
      name: "Get Statement",
      onPress: () => {},
    },
  ];

  const renderItem = ({
    item,
  }: {
    item: {
      imageBackground: number;
      accountName: string;
      accountNumber: string;
      availableBalance: string;
      currency: number;
      effectiveBalance: string;
    };
    index: number;
  }) => {
    const {
      accountName,
      accountNumber,
      availableBalance,
      currency,
      effectiveBalance,
    } = item;
    return (
      <ImageBackground
        source={item.imageBackground}
        style={{
          borderRadius: 16,
          height: 162,
          paddingHorizontal: 16,
          paddingVertical: 20,
          width: 324,
        }}
      >
        <Box paddingHorizontal="md">
          <Text color="mainBackground" variant="medium10">
            CURRENT
          </Text>
          <Box
            flexDirection="row"
            justifyContent="space-between"
            marginTop="sm"
            width="100%"
          >
            <Text
              color="mainBackground"
              numberOfLines={1}
              variant="medium12"
              fontSize={12}
            >
              {accountName}
            </Text>

            <Text color="mainBackground" numberOfLines={1} variant="medium12">
              {accountNumber}
            </Text>
          </Box>

          <Box
            style={{
              flexDirection: "row",
              marginTop: 30,
              width: "100%",
            }}
          >
            <Box
              style={{
                marginRight: RF(8),
                width: "55%",
              }}
            >
              <Text
                color="mainBackground"
                style={{
                  fontSize: RF(18),
                  lineHeight: RF(20),
                }}
                variant="bold18"
              >
                {showBalance && currentAccountNumber === accountNumber
                  ? `${Currency(currency)} ${format(availableBalance)}`
                  : `${Currency(currency)} XXX,XXX.XX`}
              </Text>
            </Box>
            <TouchableOpacity
              style={{ marginLeft: -20 }}
              onPress={() => {
                setCurrentAccountNumber(accountNumber);
                return accountNumber === currentAccountNumber
                  ? setShowBalance(!showBalance)
                  : setShowBalance(true);
              }}
            >
              <SvgIcon name="eye-opened" size="sm" />
            </TouchableOpacity>
          </Box>
          <Text
            color="mainBackground"
            style={{
              fontSize: RF(12),
              marginTop: 8,
            }}
            variant="regular12"
          >
            LEDGER BALANCE:{" "}
            {showBalance && currentAccountNumber === accountNumber
              ? `${Currency(currency)} ${format(effectiveBalance)}`
              : `${Currency(currency)} XXX,XXX.XX`}
          </Text>
        </Box>
      </ImageBackground>
    );
  };

  interface imageSliderProps {
    image: number;
  }
  let flatListRef = useRef<FlatList<imageSliderProps> | null>();
  const [currentIndex, setCurrentIndex] = useState(0);

  const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 });

  //To get our Index
  const onViewRef = useRef(({ changed }: { changed: any }) => {
    if (changed[0].isViewable) {
      setCurrentIndex(changed[0].index);
    }
  });

  // Using clicks to scroll to index
  const scrollToIndex = (index: number) => {
    flatListRef.current?.scrollToIndex({ animated: true, index: index });
  };

  const renderImageSlider: React.FC<{ item: imageSliderProps }> = ({
    item,
  }) => {
    return (
      <TouchableOpacity
        style={{ flex: 1, marginHorizontal: 20 }}
      >
        <Image
          source={item.image}
          style={{
            height: 190,
            width: 350,
            justifyContent:'center',
            alignSelf:'center',
            resizeMode: "contain",
            borderRadius: 10,
          }}
          resizeMode="contain"
        />
      </TouchableOpacity>
    );
  };

  const RenderQuickLinks = ({
    item,
  }: {
    item: {
      image: number;
      name: string;
      id: number;
      onPress(): void;
    };
  }) => {
    const { image, name, id, onPress } = item;

    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          marginBottom: 16,
          maxWidth: RF(100),
          paddingRight: id === quickLinks.length - 1 ? 0 : 15,
        }}
      >
        <ImageBackground
          source={image}
          style={{
            alignItems: "flex-end",
            alignSelf: "center",
            borderRadius: 20,
            height: 77,
            width: 77,
          }}
        />
        <Text marginTop="sm" variant="medium12">
          {name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaBox backgroundColor="wealthColor" flex={1}>
      <ImageBackground
        source={backgroundIcons}
        style={{
          flex: 1,
          width: "100%",
        }}
      >
        <Box
          flexDirection="row"
          justifyContent="space-between"
          marginBottom="sml"
          marginHorizontal="md"
          marginTop="sm"
        >
          <Box flexDirection="row">
            <Box
              {...iconProps}
              flexDirection="row"
              width={RFValue(43)}
              height={RFValue(43)}
            >
              <SvgIcon
                name="notification"
                onPress={() => navigation.navigate("Notifications")}
                size="md"
                style={{ padding: 5 }}
              />
              <Box
                borderRadius="lg"
                backgroundColor="mediumRed"
                padding="xs"
                position="absolute"
                style={{ top: 2, right: -8 }}
                width={RFValue(20)}
                height={RFValue(20)}
                justifyContent="center"
                alignItems="center"
              >
                <Text
                  color="whiteColor"
                  fontSize={9}
                  fontWeight="bold"
                  textAlign="center"
                >
                  12
                </Text>
              </Box>
            </Box>
            <Box {...iconProps} width={RFValue(43)} height={RFValue(43)}>
              <SvgIcon name="profile" size="md" />
            </Box>
            <Box
              flexDirection="row"
              {...iconProps}
              paddingHorizontal="md"
              width={undefined}
              borderRadius="sm"
            >
              <Text color="mainBackground" variant="medium12">
                My Bank
              </Text>
              <SvgIcon name="chevron-down" size="md" />
            </Box>
          </Box>
          <Image source={standardBankLogo} />
        </Box>
        <Box
          backgroundColor="mainBackground"
          borderTopEndRadius="md"
          borderTopStartRadius="md"
          flex={1}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            <Box
              flexDirection="row"
              justifyContent="space-between"
              marginBottom="md"
              marginTop="sml"
              paddingHorizontal="md"
            >
              <Text variant="medium12">ACCOUNTS</Text>
              <Text color="primaryColor" variant="medium12">
                SEE ALL
              </Text>
            </Box>
            <FlatList
              bounces
              data={accounts}
              horizontal
              keyExtractor={(index) => index.accountNumber}
              renderItem={renderItem}
              showsHorizontalScrollIndicator={false}
            />
            <Box
              flexDirection="row"
              justifyContent="space-between"
              paddingHorizontal="md"
              paddingVertical="md"
            >
              <Text variant="medium12">LOANS & OFFERS</Text>
              <Text color="primaryColor" variant="medium12">
                SEE ALL
              </Text>
            </Box>
            <Box>
              <ImageBackground
                source={loan_card}
                style={{
                  height: 205,
                  width: "98%",
                  position: "relative",
                  top: -30,
                }}
                resizeMode="cover"
              >
                <Box paddingHorizontal="lg" style={{ marginTop: 50 }}>
                  <Text marginBottom="sm" variant="medium14">
                    Loans
                  </Text>
                  <Text fontSize={20} fontWeight="bold">
                    N450,000
                  </Text>
                  <Text marginBottom="sm" variant="regular14">
                    Currently eligiblity{" "}
                  </Text>
                  <Box>
                    <Text variant="medium12" color="primaryColor30">
                      ACCESS YOUR LOAN
                    </Text>
                  </Box>
                </Box>
              </ImageBackground>
            </Box>
            <Box style={{ marginTop: -40 }}>
              <Text marginBottom="md" marginHorizontal="md" variant="medium12">
                QUICK LINKS
              </Text>
              <Box>
              <Box flexDirection="row" paddingHorizontal="md">
                {quickLinks.slice(0, 4).map((item) => (
                  <RenderQuickLinks item={item} key={item.id}/>
                ))}
              </Box>
              <Box flexDirection="row" paddingHorizontal="md">
                {quickLinks.slice(4, 8).map((item) => (
                  <RenderQuickLinks item={item} key={item.id} />
                ))}
              </Box>
              </Box>
            </Box>
            <Box>
              <Box
                flexDirection="row"
                justifyContent="space-between"
                paddingHorizontal="lg"
                paddingVertical="md"
              >
                <Text variant="medium12">ADS</Text>
                <Box flexDirection="row">
                  <Text color="primaryColor" variant="medium12">
                    Scroll to see more
                  </Text>
                  <View style={landingPageStyles.dotView}>
                    {imageSlider.map(({}, index: number) => {
                      <TouchableOpacity
                        key={index.toString()}
                        style={[
                          landingPageStyles.circle,
                          {
                            backgroundColor:
                              index == currentIndex ? 'black' : 'grey'
                          },
                        ]}
                        onPress={() => scrollToIndex(index)}
                      />;
                    })}
                  </View>
                </Box>
              </Box>
              <FlatList
                data={imageSlider}
                renderItem={renderImageSlider}
                keyExtractor={(item, index) => index.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                ref={(ref) => {
                  flatListRef.current = ref;
                }}
                style={{ maxHeight: 300 }}
                onViewableItemsChanged={onViewRef.current}
              />
            </Box>
          </ScrollView>
        </Box>
      </ImageBackground>
    </SafeAreaBox>
  );
};

export default SMEHomepage;
