import React from "react";
import { Image } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import { directions } from "@/shared/assets/image";
import { Box } from "@/shared/components/Layout";
import Pressable from "@/shared/components/Pressable";
import { Text } from "@/shared/components/Typography";

import { BranchLocatorNavigationProps } from "../navigation/types";

interface ModuleProps {
  title: string;
  address: string;
  id: string;
  search: string;
  navigation: BranchLocatorNavigationProps<"BranchLocator">["navigation"];
}

export default function BranchLocationsComponent(props: ModuleProps) {
  const { id, title, address, search, navigation } = props;

  if (
    title.toLowerCase().includes(search.toLocaleLowerCase().trim()) ||
    address.toLowerCase().includes(search.toLocaleLowerCase().trim())
  ) {
    return (
      <Pressable
        alignItems="center"
        borderColor="paleGrey"
        borderWidth={1}
        flexDirection="row"
        justifyContent="space-between"
        onPress={() => {
          // console.log(id, title, address)
          navigation.navigate("BranchDetails", {
            branchName: title,
            address,
          });
        }}
        padding="sm"
      >
        <Box
          alignItems="center"
          backgroundColor="paleGrey"
          borderRadius="lg"
          height={RFValue(32)}
          justifyContent="center"
          padding="sm"
          width={RFValue(32)}
          // marginRight="md"
        >
          <Text variant="medium12">{id}</Text>
        </Box>
        <Box width="50%">
          <Text color="textColor" mb="xs">
            {title}
          </Text>
          <Text color="textColor2">{address}</Text>
        </Box>

        <Box alignItems="center" justifyContent="center">
          <Image source={directions} style={{ width: 16, height: 18 }} />
          <Text color="primaryColor" mt="xs" variant="regular12">
            Get branch details
          </Text>
        </Box>
      </Pressable>
    );
  }
  return null;
}
