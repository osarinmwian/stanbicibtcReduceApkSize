import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { Image, StatusBar, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "@/mybank/screens/Extras/styles/ExtraSearchbarStyles";
import { backgroundIcons } from "@/shared/assets/image";
import { ImageBackground } from "@/shared/components/";
import { BaseButton } from "@/shared/components/Buttons";
import { Box } from "@/shared/components/Layout";
import { Modal } from "@/shared/components/Modal";
import { BaseTextInput } from "@/shared/components/TextInput";
import { Text } from "@/shared/components/Typography";

import searchAppFeatures from "./Component/searchAppFeatures";

const ExtrasSearchBar: React.FC = () => {
  const [searchTitle, setSearchTitle]: [string, (searchTitle: string) => void] =
    React.useState("");

  const moreModalRef = useRef<BottomSheetModal>(null);

  const navigation = useNavigation();

  const { t } = useTranslation();
  return (
    <SafeAreaView edges={["top"]} style={{ flex: 1 }}>
      <StatusBar backgroundColor="#0033AA" barStyle="light-content" />
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
              flex={1}
              flexDirection="row"
              justifyContent="center"
              marginHorizontal="sm"
              width={330}
            >
              <BaseTextInput
                backgroundColor="lightBlack"
                flex={1}
                marginVertical="md"
                onChangeText={(event) => setSearchTitle(event)}
                placeholder="Search app features"
                placeholderTextColor="rgba(255,255,255,0.4)"
                size="xs"
                style={styles.textInput}
                value={searchTitle}
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
                      }
                      if (
                        allItems.title
                          .toLowerCase()
                          .includes(searchTitle.toLowerCase())
                      ) {
                        return allItems;
                      }
                      return allItems;
                    })
                    .map((items: typeof searchAppFeatures[0]) => {
                      <Text
                        color="lightGrey"
                        marginVertical="md"
                        paddingHorizontal="sm"
                        variant="medium14"
                      >
                        Search result {`"${searchTitle}"`}
                      </Text>;
                      function handleClickEvent() {
                        switch (items.key) {
                          case "1":
                            return navigation.navigate("Beneficiaries");
                          case "2":
                            return navigation.navigate("Notification");
                          default:
                            return navigation.navigate("PrepaidCards");
                        }
                      }

                      return (
                        <Box>
                          <BaseButton
                            backgroundColor="superlightGrey"
                            marginVertical="sm"
                            onPress={() => handleClickEvent()}
                            paddingHorizontal="md"
                            paddingVertical="md"
                          >
                            <Text color="primaryColorLight" variant="medium14">
                              {items.title}
                            </Text>
                          </BaseButton>
                        </Box>
                      );
                    })}
                  {searchAppFeatures.length > 0 && (
                    <Box alignItems="center" justifyContent="center">
                      <BaseButton
                        backgroundColor="whiteColor"
                        onPress={() => navigation.navigate("Notification")}
                        style={styles.container}
                      >
                        <Image
                          source={require("@/mybank/assets/image/searchicon.png")}
                          style={styles.image}
                        />
                      </BaseButton>
                      <Box marginVertical="sm">
                        <Text color="lightGrey" textAlign="center">
                          {t(
                            "mybank.prepaid.extrasearch.extraSearchInstruction",
                          )}
                        </Text>
                      </Box>
                    </Box>
                  )}
                </ScrollView>
              </Box>
            </Box>
            <Modal ref={moreModalRef} >
              
            </Modal>
          </Box>
        </ImageBackground>
      </Box>
    </SafeAreaView>
  );
};

export default ExtrasSearchBar;
