import React from "react";
import { GestureResponderEvent, TouchableOpacity } from "react-native";

import { Box } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";

const CopyButton: ({
  onPress,
}: {
  onPress: (event: GestureResponderEvent) => void;
}) => JSX.Element = ({ onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Box
      alignItems="center"
      backgroundColor="confirmCard"
      borderRadius="sm"
      justifyContent="center"
      paddingHorizontal="sml"
      paddingVertical="md"
    >
      <Text color="primaryColor" variant="medium12">
        COPY
      </Text>
    </Box>
  </TouchableOpacity>
);

export default CopyButton;
