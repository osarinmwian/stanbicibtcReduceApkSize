import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";
import { Box } from "@/shared/components/Layout";
import { Image } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { BaseButton } from "@/shared/components/Buttons";
import { styles } from "@/mybank/screens/PrepaidCards/styles/PrepaidCardStyles";

export const PrepaidCardsProps: ({
  buttons,
  doSomethingAfterClick,
}: {
  buttons: any;
  doSomethingAfterClick: any;
}) => JSX.Element = ({ buttons, doSomethingAfterClick }) => {
  const [clicked, setClicked] = useState(-1);
  const handleClick = (item: any, id: any) => {
    setClicked(id);
    doSomethingAfterClick(id);
  };

  return (
    <Box flexDirection="row">
      {buttons.map((buttonList: any, index: number) => {
        return (
          <BaseButton
            variant="none"
            width={RFValue(60)}
            height={RFValue(60)}
            marginRight="md"
            marginTop="lg"
            borderColor="easeContainer"
            key={index}
            style={[index === clicked ? styles.buttonActive : styles.button]}
            onPress={(item) => handleClick(item, index)}
          >
            <Image source={buttonList} style={styles.image} />
          </BaseButton>
        );
      })}
    </Box>
  );
};
