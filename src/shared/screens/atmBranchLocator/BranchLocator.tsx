import React, { useState } from "react";
import { Image } from "react-native";
import { TextInput } from "react-native-gesture-handler";

import { map } from "@/shared/assets/image";
import { Box, LayoutComponent, ScrollBox } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";

import BranchLocationsComponent from "./components/BranchLocationsComponent";
import branches from "./files/branches";
import { BranchLocatorNavigationProps } from "./navigation/types";
import { MAPSTYLE } from "./styles/BranchLocatorStyles";

export default function BranchLocator({
  navigation,
}: BranchLocatorNavigationProps<"BranchLocator">) {
  const [searchInput, setSearchInput] = useState("");

  return (
    <LayoutComponent isBackArrow label="BRANCH LOCATOR">
      <ScrollBox
        bounces={false}
        flex={1}
        paddingHorizontal="md"
        paddingVertical="md"
      >
        <Box>
          <Text color="textColor">Branch locations</Text>

          <Text color="textColor2" mt="xs">
            Filter search to find locations
          </Text>

          <Box
            backgroundColor="cardSecondary"
            borderRadius="sm"
            mb="sm"
            mt="md"
            padding="sm"
          >
            <Text color="darkGrey" fontWeight="400">
              Location
            </Text>
            <TextInput
              onChangeText={(text) => setSearchInput(text)}
              placeholder="Lagos, Nigeria"
              value={searchInput}
            />
          </Box>
        </Box>

        <Box alignItems="center">
          <Image source={map} style={MAPSTYLE} />
        </Box>

        <Box borderRadius="md" flex={1} mb="lg" mt="md">
          {/* <FlatList
                        data={branches}
                        keyExtractor={(item) => item.id}
                        renderItem={({item}) => (
                            <BranchLocationsComponent
                                title={item.branch}
                                address={item.address}
                                search={searchInput}
                                id={item.id}
                            />
                        )}
                    /> */}
          {branches.map((item) => (
            <BranchLocationsComponent
              address={item.address}
              id={item.id}
              key={item.id}
              navigation={navigation}
              search={searchInput}
              title={item.branch}
            />
          ))}
        </Box>
      </ScrollBox>
    </LayoutComponent>
  );
}
