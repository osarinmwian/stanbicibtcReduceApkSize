import {
  BottomSheetBackdropProps,
  BottomSheetModal,
} from "@gorhom/bottom-sheet";
import React, { FC, useCallback, useMemo, useRef, useState } from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import SearchableDropdown from "react-native-searchable-dropdown";

import { Box } from "@/shared/components/Layout";
import { Backdrop } from "@/shared/components/Modal/Backdrop";
import { Text } from "@/shared/components/Typography";

import FlightMenuPicker from "../../components/flightMenuPicker";

// interface Props {
//   pickerHeading: string;
//   iconName: SvgIconPackType;
//   pickerSubheading: string;
//   mainHeading: string;
//   items: Array<object>;
//   onItemSelect: () => string;
//   onTextChange: () => string;
//   placeholder: string;
// }

interface DestinationProps {
  name: string;
}
const DestinationModal: FC<{ title: string; items: any }> = ({
  title,
  items,
}) => {
  const [destination, setdestination] = useState({
    name: "Select option",
  } as DestinationProps);
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ["50%", "50%"], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleDismissModalPress = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);

  // renders
  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <Backdrop
        onPress={() => {
          handleDismissModalPress();
        }}
        {...props}
      />
    ),
    [handleDismissModalPress],
  );

  const onItemSelect = (event: any) => {
    setdestination(event);
    bottomSheetModalRef.current?.dismiss();
  };

  return (
    <Box>
      <FlightMenuPicker
        heading={title}
        iconName="chevron-down"
        key="1"
        onPress={handlePresentModalPress}
        subHeading={destination.name} // destination={() =>
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
              Destinations
            </Text>
          </Box>
          <Box paddingHorizontal="md">
            <Box>
              <SearchableDropdown
                containerStyle={{ marginBottom: 25 }}
                // On text change listner on the searchable input
                items={items}
                itemsContainerStyle={{
                  // items container style you can pass maxHeight
                  // to restrict the items dropdown hieght
                  maxHeight: "75%",
                  // box-shadow: 0px 16px 24px 0px #00000014;
                }}
                // onItemSelect called after the selection from the dropdown
                itemStyle={{
                  // marginTop: 2,
                  backgroundColor: "#fff",
                  borderBottomWidth: 1,

                  borderColor: "#bbb",
                  // single dropdown item style
                  padding: 16,
                }}
                // suggestion container style
                itemTextStyle={{
                  // text style of a single dropdown item
                  color: "#222",
                }}
                onItemSelect={(event: any) => onItemSelect(event)}
                // onItemSelect={(item: string) => alert(JSON.stringify(item))}
                // onTextChange={(text: string) => alert(JSON.stringify(text))}
                placeholder="Enter you destination location"
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
          </Box>
        </Box>
      </BottomSheetModal>
    </Box>
  );
};

export default DestinationModal;
