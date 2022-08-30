import {
  ImageBackground,
  Pressable,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import React from "react";
import { Box, ScrollBox } from "@/shared/components/Layout";
import { ImageIcon } from "@/shared/assets/icons";
import { MyBankNavigationProps } from "@/mybank/navigation/types";
import { loginBackground } from "@/mybank/assets/image";
import { Text } from "@/shared/components/Typography";
import { ArrowDown, SeatView, ToiletIcon } from "@/mybank/assets/svg";
import { PrimaryButton } from "@/shared/components/Buttons";

const SelectSeats = ({ navigation }: MyBankNavigationProps<"SelectSeats">) => {
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
      <Text style={{ fontWeight: "bold", color: "#fff" }}>SELECT SEATS</Text>
      <Text />
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
        <ScrollBox
          backgroundColor="whiteColor"
          borderTopRightRadius="md"
          borderTopLeftRadius="md"
          showsVerticalScrollIndicator={false}
        >
          <Box padding="md">
            <Box>
              <Text variant="medium14">Selected seats</Text>
            </Box>
            <Box
              flexDirection="row"
              width={"100%"}
              justifyContent="space-between"
              marginTop="md"
            >
              <Box
                borderWidth={1}
                borderRadius="xs"
                borderColor="cardSecondary"
                padding="md"
                width={"48%"}
              >
                <Text marginBottom="xs" variant="medium14">
                  B2 Row 4
                </Text>
                <Text variant="regular12">Ehizojie Ihayere</Text>
              </Box>
              <Box
                borderWidth={1}
                borderRadius="xs"
                borderColor="cardSecondary"
                padding="md"
                width={"48%"}
              >
                <Text marginBottom="xs" variant="medium14">
                  B2 Row 4
                </Text>
                <Text variant="regular12">Ehizojie Ihayere</Text>
              </Box>
            </Box>

            <Box
              flexDirection="row"
              width={"100%"}
              justifyContent="space-between"
              marginTop="sm"
            >
              <Box
                borderWidth={1}
                borderRadius="xs"
                borderColor="cardSecondary"
                padding="md"
                width={"48%"}
              >
                <Text marginBottom="xs" variant="medium14">
                  B2 Row 4
                </Text>
                <Text variant="regular12">Ehizojie Ihayere</Text>
              </Box>
              <Box
                borderWidth={1}
                borderRadius="xs"
                borderColor="cardSecondary"
                padding="md"
                width={"48%"}
              >
                <Text marginBottom="xs" variant="medium14">
                  B2 Row 4
                </Text>
                <Text variant="regular12">Ehizojie Ihayere</Text>
              </Box>
            </Box>

            <Box marginTop="md" flexDirection="row">
              <Text variant="medium12" color="lightGrey">
                SEE ALL SELECTIONS
              </Text>
              <ArrowDown style={{ alignSelf: "center", marginLeft: 5 }} />
            </Box>

            <Box marginTop="md">
              <Text variant="medium12">Seats</Text>
              <Box
                // padding="md"
                // borderWidth={1}
                // borderRadius="xs"
                // borderColor="cardSecondary"
                marginTop="md"
              >
                <Box>
                  <SeatView width={"100%"} />
                </Box>
                {/* <Box flexDirection="row">
                  <Box marginRight="sm">
                    <Text marginBottom="md" textAlign="center">
                      A
                    </Text>
                    <Box
                      width={33.8}
                      height={33.8}
                      backgroundColor="primaryColor"
                      borderRadius="xs"
                      borderWidth={0.7}
                      borderColor="cardSecondary"
                    ></Box>
                  </Box>

                  <Box marginRight="sm">
                    <Text marginBottom="md" textAlign="center">
                      B
                    </Text>
                    <Box
                      width={33.8}
                      height={33.8}
                      borderWidth={0.7}
                      borderColor="cardSecondary"
                      borderRadius="xs"
                    ></Box>
                  </Box>

                  <Box marginRight="sm">
                    <Text marginBottom="md" textAlign="center">
                      C
                    </Text>
                    <Box
                      width={33.8}
                      height={33.8}
                      borderWidth={0.7}
                      borderColor="cardSecondary"
                      borderRadius="xs"
                    ></Box>
                  </Box>

                  <Text>3</Text>

                  <Box marginRight="sm">
                    <Text marginBottom="md" textAlign="center">
                      D
                    </Text>
                    <Box
                      width={33.8}
                      height={33.8}
                      borderWidth={0.7}
                      borderColor="cardSecondary"
                      borderRadius="xs"
                    ></Box>
                  </Box>
                </Box> */}
              </Box>
            </Box>

            <Box marginTop="md">
              <Box>
                <Text variant="medium14">Seat guide</Text>
              </Box>
              <Box
                borderWidth={1}
                borderColor="cardSecondary"
                borderRadius="xs"
                width={"100%"}
              >
                <Box flexDirection="row">
                  <Box
                    borderRadius="xs"
                    marginHorizontal="md"
                    borderWidth={1}
                    borderColor="cardSecondary"
                    width={33.8}
                    height={33.8}
                    marginTop="md"
                    marginBottom="sm"
                  ></Box>
                  <Text
                    style={{ alignSelf: "center" }}
                    variant="regular12"
                    color="lightGrey"
                  >
                    Available
                  </Text>
                </Box>

                <Box flexDirection="row">
                  <Box
                    borderRadius="xs"
                    marginHorizontal="md"
                    borderWidth={1}
                    backgroundColor="primaryColor"
                    borderColor="cardSecondary"
                    width={33.8}
                    height={33.8}
                    marginTop="sm"
                    marginBottom="sm"
                  ></Box>
                  <Text
                    style={{ alignSelf: "center" }}
                    variant="regular12"
                    color="lightGrey"
                  >
                    Taken
                  </Text>
                </Box>

                <Box flexDirection="row">
                  <Box
                    borderRadius="xs"
                    marginHorizontal="md"
                    borderWidth={1}
                    borderColor="cardSecondary"
                    backgroundColor="secondary3"
                    width={33.8}
                    height={33.8}
                    marginTop="sm"
                    marginBottom="sm"
                  ></Box>
                  <Text
                    style={{ alignSelf: "center" }}
                    variant="regular12"
                    color="lightGrey"
                  >
                    Selected
                  </Text>
                </Box>

                <Box flexDirection="row">
                  <Box
                    borderRadius="xs"
                    marginHorizontal="md"
                    borderWidth={1}
                    borderColor="cardSecondary"
                    backgroundColor="secondary6"
                    width={33.8}
                    height={33.8}
                    marginTop="sm"
                    marginBottom="sm"
                  ></Box>
                  <Text
                    style={{ alignSelf: "center" }}
                    variant="regular12"
                    color="lightGrey"
                  >
                    Unavailable
                  </Text>
                </Box>

                <Box flexDirection="row">
                  <Box
                    borderRadius="xs"
                    marginHorizontal="md"
                    borderWidth={1}
                    borderColor="cardSecondary"
                    width={33.8}
                    height={33.8}
                    marginTop="sm"
                    marginBottom="sm"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <ToiletIcon />
                  </Box>
                  <Text
                    style={{ alignSelf: "center" }}
                    variant="regular12"
                    color="lightGrey"
                  >
                    Toilet
                  </Text>
                </Box>

                <Box flexDirection="row">
                  <Box
                    borderRadius="xs"
                    marginHorizontal="md"
                    borderWidth={1}
                    borderColor="cardSecondary"
                    width={33.8}
                    height={33.8}
                    marginTop="sm"
                    marginBottom="sm"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <ToiletIcon />
                  </Box>
                  <Text
                    style={{ alignSelf: "center" }}
                    variant="regular12"
                    color="lightGrey"
                  >
                    Stairway
                  </Text>
                </Box>

                <Box flexDirection="row">
                  <Box
                    borderRadius="xs"
                    marginHorizontal="md"
                    borderWidth={1}
                    borderColor="cardSecondary"
                    width={33.8}
                    height={33.8}
                    marginTop="sm"
                    marginBottom="sm"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <ToiletIcon />
                  </Box>
                  <Text
                    style={{ alignSelf: "center" }}
                    variant="regular12"
                    color="lightGrey"
                  >
                    Gallery
                  </Text>
                </Box>
              </Box>
            </Box>

            <PrimaryButton
              alignItems="center"
              backgroundColor="primaryColor"
              borderColor="primaryColor"
              borderWidth={1}
              justifyContent="center"
              label="BOOK FLIGHT"
              labelProps={{ color: "whiteColor" }}
              labelVariant="medium12"
              marginVertical="lg"
              onPress={() => navigation.navigate("PassengerDetails")}
              paddingVertical="md"
            />
          </Box>
        </ScrollBox>
      </ImageBackground>
    </>
  );
};

export default SelectSeats;

const styles = StyleSheet.create({});
