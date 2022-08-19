import React, { useState } from "react";
import { Image } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import { styles } from "@/mybank/screens/PrepaidCards/styles/PrepaidCardStyles";
import { BaseButton } from "@/shared/components/Buttons";
import { Box } from "@/shared/components/Layout";

export const PrepaidCardsProps: ({
  buttons,
  doSomethingAfterClick,
}: {
  buttons: number[];
  doSomethingAfterClick: (id: number) => void;
}) => JSX.Element = ({ buttons, doSomethingAfterClick }) => {
  const [clicked, setClicked] = useState(-1);
  const handleClick = (id: number) => {
    setClicked(id);
    doSomethingAfterClick(id);
  };

  return (
    <Box flexDirection="row">
      {buttons.map((buttonList: number, index: number) => (
        <Box>
          <BaseButton
            borderColor="easeContainer"
            height={RFValue(60)}
            marginRight="md"
            marginTop="lg"
            onPress={() => handleClick(index)}
            style={[index === clicked ? styles.buttonActive : styles.button]}
            variant="none"
            width={RFValue(60)}
          >
            <Image source={buttonList} style={styles.image} />
          </BaseButton>
        </Box>
      ))}
    </Box>
  );
};
