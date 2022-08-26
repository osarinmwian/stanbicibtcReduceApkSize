import React, { FC, useState } from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  StatusBar,
  TouchableOpacity,
} from "react-native";

import { loginBackground, plus } from "@/mybank/assets/image";
import { MyBankNavigationProps } from "@/mybank/navigation/types";
import { ImageIcon } from "@/shared/assets/icons";
import { Box } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";

const BillPayment: FC = ({
  navigation,
}: MyBankNavigationProps<"BillPayment">) => {
  const [showselect, setshowselect] = useState(false);
  const [selectedOption, setselectedOption] = useState<any>([]);
  const titleData = [
    { id: "1", name: "Mr" },
    { id: "1", name: "Mrs" },
  ];

  interface TitleProps {
    item: {
      id: string;
      title: string;
    };
  }

  const [optiondata, setoptiondata] = useState<any>([
    { title: "Aid Grants And Donations", id: 1 },
    { title: "Airtel Data", id: 2 },
    { title: "Associations And Societies", id: 3 },
    { title: "BankOne MFBs", id: 4 },
    { title: "Betting, Lottery And Gaming", id: 5 },
    { title: "Blackberry", id: 6 },
    { title: "Cable TV", id: 7 },
    { title: "Credit And Loans", id: 8 },
    { title: "Cross River State Govrment", id: 9 },
    { title: "Dealer Payment", id: 10 },
    { title: "Dues And Services", id: 11 },
    { title: "Dealer Payment", id: 12 },
    { title: "Dues And Services Charges", id: 13 },
    { title: "Embassies", id: 14 },
    { title: "Event Tickets", id: 15 },
    { title: "Financial", id: 16 },
    { title: "governemt payments", id: 17 },
    { title: "insureDirect", id: 18 },
    { title: "internet services", id: 19 },
    { title: "interswitch services", id: 20 },
    { title: "invoice payments", id: 21 },
    { title: "merhnats payments", id: 22 },
    { title: "mobile money wallets", id: 23 },
    { title: "nestle distributors", id: 24 },
    { title: "online shopping", id: 25 },
    { title: "pay TV", id: 26 },
    { title: "payChoice", id: 27 },
    { title: "prepaid card services", id: 28 },
    { title: "religious institutions", id: 29 },
    { title: "school and exams fees", id: 30 },
    { title: "send and recieve money", id: 31 },
    { title: "transport and toll payments", id: 33 },
    { title: "travel and hotel", id: 34 },
    { title: "utilities", id: 35 },
  ]);

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
      <Text style={{ fontWeight: "bold", color: "#fff" }}>BILL PAYMENT</Text>
      <Text />
    </Box>
  );

  const handleSelectOption = (event: any) => {
    setselectedOption((pre) => [event, ...pre]);
    setoptiondata((pre) => pre.filter((item) => item.id !== event.id));
  };

  const handleUndoSelectOption = (event: any) => {
    setoptiondata((pre) => [...pre, event]);
    setselectedOption((pre) => pre.filter((item) => item.id !== event.id));
  };

  const handleSelectToggle = () => {
    setshowselect(!showselect);
  };

  const renderOptionItem = ({ item }: TitleProps) => (
    <Box
      backgroundColor="textTint2"
      borderRadius="sm"
      flexDirection="row"
      justifyContent="space-between"
      marginBottom="sm"
      padding="md"
    >
      <Text textTransform="capitalize" variant="medium12">
        {item.title}
      </Text>
      {!showselect ? (
        <ImageIcon color="black" name="arrowRight" size="xs" />
      ) : (
        <TouchableOpacity onPress={() => handleSelectOption(item)}>
          <Box
            borderColor="primaryColor"
            borderRadius="md"
            borderWidth={2}
            height={16}
            width={16}
          />
        </TouchableOpacity>
      )}
    </Box>
  );
  const renderOptionHeader = () => (
    <Box>
      <Text marginBottom="sm" variant="medium14">
        Saved Bills
      </Text>
      {selectedOption && selectedOption.length > 0 ? (
        selectedOption.map(
          (item: {
            title:
              | boolean
              | React.ReactChild
              | React.ReactFragment
              | React.ReactPortal
              | null
              | undefined;
          }) => (
            <Box
              backgroundColor="textTint2"
              borderRadius="sm"
              flexDirection="row"
              justifyContent="space-between"
              marginBottom="sm"
              padding="md"
            >
              <Text textTransform="capitalize" variant="medium12">
                {item.title}
              </Text>
              <TouchableOpacity onPress={() => handleUndoSelectOption(item)}>
                <Box
                  alignItems="center"
                  borderColor="primaryColor"
                  borderRadius="md"
                  borderWidth={1}
                  height={18}
                  justifyContent="center"
                  width={18}
                >
                  <Box
                    backgroundColor="primaryColor"
                    borderRadius="md"
                    height={12}
                    width={12}
                  />
                </Box>
              </TouchableOpacity>
            </Box>
          ),
        )
      ) : (
        <Box alignItems="center" justifyContent="center" marginVertical="md">
          <Text marginBottom="sm">No saved bills</Text>
          <Box width="60%">
            <Text color="textTint" variant="regular12">
              You currently have no saved be click + to add new be
            </Text>
          </Box>
        </Box>
      )}
      <Box alignItems="center">
        <TouchableOpacity onPress={handleSelectToggle}>
          <Box marginTop="sm">
            <Image source={plus} />
          </Box>
        </TouchableOpacity>
      </Box>
      <Box marginBottom="sm">
        <Text variant="medium14">Select Option</Text>
      </Box>
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
        {renderHeader()}
        <Box
          backgroundColor="whiteColor"
          borderRadius="md"
          flex={1}
          padding="md"
        >
          <FlatList
            data={optiondata}
            keyExtractor={(item) => `item-${item.id}`}
            ListFooterComponent={<Box marginBottom="xl" />}
            ListHeaderComponent={renderOptionHeader()}
            renderItem={renderOptionItem}
            showsVerticalScrollIndicator={false}
          />
        </Box>
      </ImageBackground>
    </>
  );
};

export default BillPayment;
