import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import { BaseButton } from "@/shared/components/Buttons";
import { Box } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    borderColor: "#fff",
    justifyContent: "center",
  },

  buttonActive: {
    alignItems: "center",
    borderRadius: 50,
    borderWidth: 4,
    justifyContent: "center",
  },
  image: {
    borderRadius: 50,
    height: 50,
    width: 50,
  },
});

const AirtimeBiller: ({
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
    <>
      <Box flexDirection="row" justifyContent="space-between">
        {buttons.map((buttonList: any, index: number) => (
          <Box
            alignItems="center"
            flexDirection="column"
            justifyContent="center"
            key={buttonList}
          >
            <BaseButton
              alignItems="center"
              borderColor="secondaryColor"
              height={RFValue(55)}
              justifyContent="center"
              marginTop="md"
              onPress={(item) => handleClick(item, index)}
              style={[index === clicked ? styles.buttonActive : styles.button]}
              variant="none"
              width={RFValue(55)}
            >
              <Image source={buttonList.value} style={styles.image} />
            </BaseButton>
            <Text marginBottom="sm" variant="regular10">
              {buttonList.name}
            </Text>
          </Box>
        ))}
      </Box>
    </>
  );
};
export { AirtimeBiller };
