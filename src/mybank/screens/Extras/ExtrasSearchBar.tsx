import { BottomSheetModal } from "@gorhom/bottom-sheet";
import React, { ChangeEvent, useCallback, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { backgroundIcons } from "@/shared/assets/image";
import { ImageBackground } from "@/shared/components/";
import { FlatList, Image, StatusBar, TouchableOpacity } from "react-native";
import { PrimaryButton } from "@/shared/components/Buttons";
import { Box } from "@/shared/components/Layout";
import { Text } from "@/shared/components/Typography";
import { BaseButton } from "@/shared/components/Buttons";
import { Modal } from "@/shared/components/Modal";
import { StyleSheet } from "react-native";
import { RFValue } from "@/shared/utils/functions";
import { TextInput } from "@/shared/components/TextInput";
import { useTranslation } from "react-i18next";
import { BaseTextInput } from "@/shared/components/TextInput";
import navigation from "@/shared/navigation";
import { useNavigation } from "@react-navigation/native";
import searchAppFeatures from "./Component/searchAppFeatures";
import { number } from "@storybook/addon-knobs";
import { ScrollView } from "react-native-gesture-handler";
import { styles } from "@/mybank/screens/Extras/styles/ExtraSearchbarStyles";

const ExtrasSearchBar: React.FC = () => {
  const [searchTitle, setSearchTitle]: [string, (searchTitle: string) => void] =
    React.useState("");
  // const [loading, setLoading] = useState(true);

  const moreModalRef = useRef<BottomSheetModal>(null);

  const handleMorePresent = useCallback(() => {
    moreModalRef.current?.present();
  }, []);

  const navigation = useNavigation();

  const { t } = useTranslation();
  return (
    <SafeAreaView edges={["top"]} style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" backgroundColor="#0033AA" />
      <Box
        alignItems="center"
        backgroundColor="primaryColor"
        flex={1}
        justifyContent="center"
      >
        <ImageBackground
          flex={1}
          resizeMode="cover"
          source={backgroundIcons}
          width="100%"
        >
          <Box flex={0.15}>
            <Box
              alignItems="center"
              flexDirection="row"
              marginHorizontal="sm"
              width={330}
              flex={1}
              justifyContent="center"
            >
              <BaseTextInput
                style={styles.textInput}
                placeholderTextColor="rgba(255,255,255,0.4)"
                backgroundColor="lightBlack"
                flex={1}
                placeholder="Search app features"
                size="xs"
                marginVertical="md"
                value={searchTitle}
                onChangeText={(event) => setSearchTitle(event)}
              />
              <TouchableOpacity style={styles.cancel}>
                <Image source={require("@/shared/assets/image/close.png")} />
              </TouchableOpacity>
            </Box>
          </Box>
          <Box
            backgroundColor="mainBackground"
            borderTopLeftRadius="md"
            borderTopRightRadius="md"
            flex={0.9}
            justifyContent="space-between"
            paddingBottom="lg"
            paddingHorizontal="md"
          >
            <Box>
              <Box>
                <ScrollView>
                  {searchAppFeatures
                    .filter((allItems) => {
                      if (searchTitle === "" || null) {
                        return null;
                      } else if (
                        allItems.title
                          .toLowerCase()
                          .includes(searchTitle.toLowerCase())
                      ) {
                        return allItems;
                      }
                    })
                    .map((items: any, index: number) => {
                      <Text
                        marginVertical="md"
                        variant="medium14"
                        color="lightGrey"
                        paddingHorizontal="sm"
                      >
                        Search result "{searchTitle}"
                      </Text>;
                      function handleClickEvent() {
                        switch (items.key) {
                          case "1":
                            return navigation.navigate("Beneficiaries");
                          case "2":
                            return navigation.navigate("Notification");
                          case "3":
                            return navigation.navigate("PrepaidCards");
                        }
                      }

                      return (
                        <Box key={index}>
                          <BaseButton
                            backgroundColor="superlightGrey"
                            paddingHorizontal="md"
                            paddingVertical="md"
                            marginVertical="sm"
                            onPress={() => handleClickEvent()}
                          >
                            <Text variant="medium14" color="primaryColorLight">
                              {items.title}
                            </Text>
                          </BaseButton>
                        </Box>
                      );
                    })}
                  {
                    searchAppFeatures.length &&
                    <Box justifyContent="center" alignItems="center">
                    <BaseButton
                      backgroundColor="whiteColor"
                      style={styles.container}
                      onPress={() => navigation.navigate("Notification")}
                    >
                      <Image
                        source={require("@/mybank/assets/image/searchicon.png")}
                        style={styles.image}
                      />
                    </BaseButton>
                    <Box marginVertical="sm">
                      <Text textAlign="center" color="lightGrey">
                        {t("mybank.prepaid.extrasearch.extraSearchInstruction")}
                      </Text>
                    </Box>
                  </Box>}
                </ScrollView>
              </Box>
            </Box>
            <Modal ref={moreModalRef}>

            </Modal>
          </Box>
        </ImageBackground>
      </Box>
    </SafeAreaView>
  );
};

export default ExtrasSearchBar;
