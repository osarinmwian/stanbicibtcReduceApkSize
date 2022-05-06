import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
} from "@gorhom/bottom-sheet";
import { BlurView } from "expo-blur";
import React, { useCallback, useMemo, useRef } from "react";
import { StyleSheet } from "react-native";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import SearchableDropdown from "react-native-searchable-dropdown";

import { SvgIconPackType } from "@/shared/assets/icons";
import { PrimaryButton } from "@/shared/components/Buttons";
import { Box } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";

import FlightMenuPicker from "../../components/flightMenuPicker";

interface Props {
  pickerHeading: string;
  iconName: SvgIconPackType;
  pickerSubheading: string;
  mainHeading: string;
  items: Array<object>;
  onItemSelect: () => string;
  onTextChange: () => string;
  placeholder: string;
}
const DepartureModal = () => {
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ["50%", "50%"], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  // renders
  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
        opacity={0.8}
        pressBehavior="close"
      >
        <BlurView
          intensity={20}
          style={{ flex: 1, justifyContent: "center", padding: 20 }}
          tint="dark"
        />
      </BottomSheetBackdrop>
    ),
    [],
  );

  const items = [
    // name key is must.It is to show the text in front
    { id: 1, name: "angellist" },
    { id: 2, name: "codepen" },
    { id: 3, name: "envelope" },
    { id: 4, name: "etsy" },
    { id: 5, name: "facebook" },
    { id: 6, name: "foursquare" },
    { id: 7, name: "github-alt" },
    { id: 8, name: "github" },
    { id: 9, name: "gitlab" },
    { id: 10, name: "instagram" },
  ];

  return (
    <Box>
      <FlightMenuPicker
        heading="From where"
        iconName="chevron-down"
        key="1"
        onPress={handlePresentModalPress}
        subHeading="Lagos Local Airport II (LOS)" // destination={() =>
      />
      <BottomSheetModal
        backdropComponent={renderBackdrop}
        enableDismissOnClose
        ref={bottomSheetModalRef}
        snapPoints={snapPoints}
      >
        <Box flex={1}>
          <Box alignItems="flex-start" justifyContent="center" paddingLeft="sm">
            <Text
              color="black"
              marginBottom="md"
              marginTop="md"
              variant="medium14"
            >
              Departure
            </Text>
          </Box>
          <Box paddingHorizontal="md">
            <Box>
              <SearchableDropdown
                containerStyle={{ marginBottom: 25 }}
                // On text change listner on the searchable input
                items={items}
                // onItemSelect called after the selection from the dropdown
                itemsContainerStyle={{
                  // items container style you can pass maxHeight
                  // to restrict the items dropdown hieght
                  maxHeight: "75%",
                  // box-shadow: 0px 16px 24px 0px #00000014;
                }}
                // suggestion container style
                itemStyle={{
                  // marginTop: 2,
                  backgroundColor: "#fff",

                  borderBottomWidth: 1,

                  borderColor: "#bbb",
                  // single dropdown item style
                  padding: 16,
                }}
                itemTextStyle={{
                  // text style of a single dropdown item
                  color: "#222",
                }}
                onItemSelect={(item: string) => alert(JSON.stringify(item))}
                onTextChange={(text: string) => alert(JSON.stringify(text))}
                placeholder="Enter you departure location"
                // mapping of item array
                // defaultIndex={2}
                // default selected item index
                resetValue={false}
                // place holder for the search input
                textInputStyle={{
                  backgroundColor: "#efefef",

                  // borderWidth: 1,
                  // borderColor: "#ccc",
                  borderRadius: 10,
                  // inserted text style
                  padding: 18,
                }}
                // reset textInput Value with true and false state
                underlineColorAndroid="transparent"
                // To remove the underline from the android input
              />
            </Box>
            <PrimaryButton
              alignItems="center"
              backgroundColor="primaryColor"
              justifyContent="center"
              label="Done"
              labelProps={{ color: "whiteColor" }}
              labelVariant="medium10"
              // marginTop="md"
              paddingVertical="mmd"
            />
          </Box>
        </Box>
      </BottomSheetModal>
    </Box>
  );
};

export default DepartureModal;

const styles = StyleSheet.create({});
