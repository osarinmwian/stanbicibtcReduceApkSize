// react
import React, { useState } from "react";
// react-native
import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";

// third-parties
import {
  account_bg1,
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
import { SvgIcon } from "@/shared/assets/icons";
import { backgroundIcons, standardBankLogo } from "@/shared/assets/image";
import { Box, BoxProps, SafeAreaBox } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";
import { MyBankNavigationProps } from "@/mybank/navigation/types";

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
    accountName: "Hello",
    accountNumber: "090200",
    availableBalance: 200,
    currency: 2,
    effectiveBalance: "10",
  },
  {
    accountName: "Hello",
    accountNumber: "040200",
    availableBalance: 200,
    currency: 2,
    effectiveBalance: "10",
  },
  {
    accountName: "Hello",
    accountNumber: "0950200",
    availableBalance: 200,
    currency: 2,
    effectiveBalance: "10",
  },
];

const SMEHomepage: MyBankNavigationProps<"Home"> = ({ navigation }: any) => {
  const [showBalance, setShowBalance] = useState(true);
  const [currentAccountNumber, setCurrentAccountNumber] = useState("");

  const quickLinks = [
    {
      body: "Pending",
      id: 0,
      image: quick_links1,
      name: "Buy Airtime",
      onPress: () => { },
    },
    {
      body: "Generate",
      id: 1,
      image: quick_links2,
      name: "Get Loan",
      onPress: () => { },
    },
    {
      body: "Enquiries &",
      id: 2,
      image: quick_links3,
      name: "Book Hotel",
      onPress: () => { },
    },
    {
      body: "Account",
      id: 3,
      image: quick_links4,
      name: "PFM",
      onPress: () => navigation.navigate('PfmNavigation'),
    },
    {
      body: "Pending",
      id: 0,
      image: quick_links5,
      name: "Buy Airtime",
      onPress: () => { },
    },
    {
      body: "Generate",
      id: 1,
      image: quick_links6,
      name: "Get Loan",
      onPress: () => { },
    },
    {
      body: "Enquiries &",
      id: 2,
      image: quick_links7,
      name: "Book Hotel",
      onPress: () => { },
    },
    {
      body: "Account",
      id: 3,
      image: quick_links8,
      name: "PFM",
      onPress: () => { },
    },
  ];

  const renderItem = ({
    item,
  }: {
    item: {
      accountName: string;
      accountNumber: string;
      availableBalance: number;
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
        source={account_bg1}
        style={{
          borderRadius: 16,
          height: 180,
          paddingHorizontal: 16,
          paddingVertical: 20,
          width: 343,
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
            <Text color="mainBackground" numberOfLines={1} variant="medium12">
              {accountName}
            </Text>

            <Text color="mainBackground" numberOfLines={1} variant="medium12">
              {accountNumber}
            </Text>
          </Box>

          <Box
            style={{
              flexDirection: "row",
              marginTop: 32,
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
              onPress={() => {
                setCurrentAccountNumber(accountNumber);
                return accountNumber === currentAccountNumber
                  ? setShowBalance(!showBalance)
                  : setShowBalance(true);
              }}
            >
              <SvgIcon name="eye-opened" />
            </TouchableOpacity>
          </Box>
          <Text
            color="mainBackground"
            style={{
              fontSize: RF(9),
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
            <Box {...iconProps}>
              <SvgIcon name="notification" />
            </Box>
            <Box {...iconProps}>
              <SvgIcon name="profile" />
            </Box>
            <Box
              flexDirection="row"
              {...iconProps}
              paddingHorizontal="md"
              width={undefined}
            >
              <Text color="mainBackground" variant="medium12">
                My Bank
              </Text>
              <SvgIcon name="chevron-down" />
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
              marginTop="sml"
              paddingHorizontal="md"
            >
              <Text variant="medium12">LOANS & Offers</Text>
              <Text color="primaryColor" variant="medium12">
                SEE ALL
              </Text>
            </Box>
            <Box>
              <ImageBackground
                source={loan_card}
                style={{ height: 128, width: 343 }}
              >
                <Box paddingHorizontal="lg" paddingTop="md">
                  <Text paddingBottom="md" variant="medium14">
                    Loans
                  </Text>
                  <Text variant="bold18">N450,000</Text>
                  <Text marginBottom="sm" variant="regular14">
                    Currently eligiblity{" "}
                  </Text>
                  <Text>Access your loan </Text>
                </Box>
              </ImageBackground>
            </Box>

            <Text marginBottom="md" marginHorizontal="md" variant="medium12">
              QUICK LINKS
            </Text>
            <Box flexDirection="row" paddingHorizontal="md">
              {quickLinks.slice(0, 4).map((item) => (
                <RenderQuickLinks item={item} key={item.name} />
              ))}
            </Box>
            <Box flexDirection="row" paddingHorizontal="md">
              {quickLinks.slice(4, 8).map((item) => (
                <RenderQuickLinks item={item} key={item.name} />
              ))}
            </Box>
          </ScrollView>
        </Box>
      </ImageBackground>
    </SafeAreaBox>
  );
};

export default SMEHomepage;
