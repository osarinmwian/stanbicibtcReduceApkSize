import React, { FC, useState } from "react";
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { card1, card2 } from "@/mybank/assets/image";
import { MyBankNavigationProps } from "@/mybank/navigation/types";
import { PrimaryButton } from "@/shared/components/Buttons";
import { Box } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";

const SelectCard: FC<{
  setModalVisible: any;
  navigation: MyBankNavigationProps<"HotelView">;
}> = ({ setModalVisible, navigation }) => {
  const myCards = [
    {
      id: 1,
      name: "Stephen Lordson Doe",
      account_number: "6547389100",
      main_balance: "300,200.00",
      ledger_balance: "320,100.00",
      account_type: "current",
      img: card1,
    },
    {
      id: 2,
      name: "Stephen  Doe",
      account_number: "6547389100",
      main_balance: "300,200.00",
      ledger_balance: "320,100.00",
      account_type: "current",
      img: card2,
    },
  ];

  const [cardselected, setcardselected] = useState(null);

  const handleCardSelecte = (index: any) => {
    setcardselected(index);
  };

  const handleSubmit = () => {
    navigation.navigate("SelectSeats");
    setModalVisible(false);
  };

  const renderItemCard = ({ item, index }: any) => (
    <Box marginBottom="md" marginHorizontal="md">
      <TouchableOpacity onPress={() => handleCardSelecte(index)}>
        <ImageBackground
          imageStyle={{
            borderRadius: 15,
          }}
          resizeMode="cover"
          source={item.img}
          style={{
            width: "100%",
            height: 200,
            // borderRadius:15
          }}
        >
          <Box
            alignItems="center"
            flexDirection="row"
            justifyContent="space-between"
            padding="md"
          >
            <Box>
              <Text color="whiteColor" variant="regular12">
                {item.account_type.toUpperCase()}
              </Text>
              <Text color="whiteColor" marginTop="sm" variant="medium12">
                {item.name.toUpperCase()}
              </Text>
            </Box>
            <Text
              color="whiteColor"
              letterSpacing={1}
              textShadowColor="black"
              textShadowOffset={{ width: 1, height: 1 }}
              variant="medium12"
            >
              {item.account_number}
            </Text>
          </Box>
          <Box marginHorizontal="md" marginVertical="md">
            <Text color="whiteColor" variant="bold24">
              &#x20A6;{item.main_balance}
            </Text>
          </Box>
          <Box marginHorizontal="md" marginVertical="md">
            <Text
              color="whiteColor"
              textShadowColor="black"
              textShadowOffset={{ width: 1, height: 1 }}
              variant="regular14"
            >
              LEDGER BALANCE: &#x20A6;{item.ledger_balance}
            </Text>
          </Box>
        </ImageBackground>
      </TouchableOpacity>
    </Box>
  );

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => setModalVisible(false)}
      style={{
        backgroundColor: "transparentWhite",
        flex: 1,
        height: "50%",
        justifyContent: "flex-end",
      }}
    >
      <Box backgroundColor="whiteColor">
        <Box>
          <FlatList
            data={myCards}
            keyExtractor={(item) => `item-${item.id}`}
            ListHeaderComponent={
              <Box marginHorizontal="md" marginVertical="lg">
                <Text variant="medium16">Select debit account</Text>
              </Box>
            }
            renderItem={renderItemCard}
          />
        </Box>
        <Box marginBottom="lg" marginHorizontal="md">
          {cardselected ? (
            <PrimaryButton
              alignItems="center"
              backgroundColor="primaryColor"
              justifyContent="center"
              label="CONTINUE"
              labelProps={{ color: "whiteColor" }}
              labelVariant="medium12"
              marginBottom="xs"
              marginTop="md"
              onPress={() => handleSubmit()}
              paddingVertical="md"
              width="100%"
            />
          ) : (
            <PrimaryButton
              alignItems="center"
              backgroundColor="textTint2"
              justifyContent="center"
              label="CANCEL"
              labelProps={{ color: "darkGrey" }}
              labelVariant="medium12"
              marginBottom="xs"
              marginTop="md"
              onPress={() => handleSubmit()}
              paddingVertical="md"
              width="100%"
            />
          )}
        </Box>
      </Box>
    </TouchableOpacity>
  );
};

export default SelectCard;

const styles = StyleSheet.create({});
