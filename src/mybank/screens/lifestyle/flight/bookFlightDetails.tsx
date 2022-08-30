import {
  Dimensions,
  ImageBackground,
  Modal,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useCallback, useRef, useState } from "react";
import { loginBackground } from "@/mybank/assets/image";
import { Box, ScrollBox } from "@/shared/components/Layout";
import { ImageIcon } from "@/shared/assets/icons";
import { MyBankNavigationProps } from "@/mybank/navigation/types";
import { Text as Texts } from "@/shared/components/Typography";
import { BaseButton, PrimaryButton } from "@/shared/components/Buttons";
import { RFValue } from "react-native-responsive-fontsize";
import { CloseIcon, Flight, Hotel, LineIcon } from "@/mybank/assets/svg";
import FareSummary from "./components/FareSummary";
import SelectCard from "./components/SelectCards";

const { width, height } = Dimensions.get("screen");

const BookFlightDetails = ({
  navigation,
}: MyBankNavigationProps<"BookFlightDetails">) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [formModal, setFormModal] = useState(false);

  const handleMorePresent = useCallback(() => {
    setFormModal(false);
    setModalVisible(!modalVisible);
  }, []);

  const handleFormModal = useCallback(() => {
    setFormModal(true);
  }, []);

  const indemnityFormModal = () => (
    <ScrollBox
      backgroundColor="whiteColor"
      padding="md"
      width={"90%"}
      alignSelf="center"
      borderRadius="md"
      marginBottom="md"
      showsVerticalScrollIndicator={false}
    >
      <Pressable
        onPress={() => setFormModal(false)}
        style={{ marginBottom: 10 }}
      >
        <CloseIcon />
      </Pressable>
      <Box marginBottom="md">
        <Texts variant="medium14">Indemnity form</Texts>
      </Box>
      <Box>
        <Texts variant="regular14" marginBottom="md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non
          proin nec, aliquet. Eu justo ut semper non vel, sit aliquet et.
          Facilisis lectus eu vulputate fames. Neque montes, diam duis amet,
          volutpat, ut tellus. Sed posuere semper pellentesque purus viverra
          odio. Enim risus, sit magna id vulputate augue integer platea blandit.
          Massa hac nisi tortor venenatis vitae diam non bibendum.
        </Texts>
        <Texts variant="regular14" marginBottom="md">
          Facilisi tortor pharetra, feugiat odio libero iaculis. Odio eget duis
          tempor ante donec nec consequat, tincidunt dignissim. Gravida
          suspendisse id morbi egestas eget risus sagittis. Et at lorem a quis.
          Amet, risus id nunc non amet massa elit netus donec. Id amet, cum
          lacinia fringilla tellus sagittis nisi sit at. Habitasse nunc
          malesuada integer at egestas nibh. Aliquam ultricies quis scelerisque
          viverra.
        </Texts>
        <Texts variant="regular14" marginBottom="md">
          Purus congue risus urna elit. Gravida donec cras dictum non dui, ac ut
          in.Neque montes, diam duis amet, volutpat,
        </Texts>
      </Box>
      <PrimaryButton
        alignItems="center"
        backgroundColor="primaryColor"
        height={RFValue(45)}
        width={"100%"}
        justifyContent="center"
        borderRadius="md"
        label="BOOK FLIGHT"
        labelProps={{ color: "whiteColor" }}
        labelVariant="medium12"
        marginBottom="xs"
        marginTop="ssm"
        onPress={handleMorePresent}
        paddingVertical="md"
      />

      <PrimaryButton
        alignItems="center"
        backgroundColor="cardSecondary"
        height={RFValue(45)}
        width={"100%"}
        justifyContent="center"
        borderRadius="md"
        label="CANCEL"
        labelProps={{ color: "lightGrey" }}
        labelVariant="medium12"
        marginBottom="lg"
        marginTop="ssm"
        onPress={() => setFormModal(false)}
        paddingVertical="md"
      />
    </ScrollBox>
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
          <SelectCard
            navigation={navigation}
            setModalVisible={setModalVisible}
          />
        </Modal>
        <Modal animationType="slide" transparent visible={formModal}>
          {indemnityFormModal()}
        </Modal>
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
          <Text style={{ fontWeight: "bold", color: "#fff" }}>FLIGHTS</Text>
          <Text />
        </Box>
        <ScrollBox
          marginTop="md"
          backgroundColor="whiteColor"
          width={width}
          height={height}
          borderTopLeftRadius="md"
          borderTopRightRadius="md"
          padding="md"
        >
          <Box flexDirection="row" paddingVertical="sm">
            <Box>
              <Texts marginBottom="sm" variant="medium12" color="primaryColor">
                ITINERARY
              </Texts>
              <Box borderWidth={2} borderColor="primaryColor" />
            </Box>
            <Box marginLeft="md">
              <Texts marginBottom="sm" variant="medium12" color="black">
                FARE RULES
              </Texts>
            </Box>
          </Box>

          <FareSummary destination={handleFormModal} />
        </ScrollBox>
      </ImageBackground>
    </>
  );
};

export default BookFlightDetails;

const styles = StyleSheet.create({});
