import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
    textInput: {
      height: 50,
      marginHorizontal: 10,
      color: "#fff",
      paddingLeft: 20,
    },
    image: {
      width: 40,
      height: 40,
    },
    container: {
      width: 40,
      height: 40,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 44,
      marginTop: 80,
    },
    smallImageContainer: {
      width: RFValue(30),
      height: RFValue(30),
      borderRadius: RFValue(5),
      justifyContent: "center",
      alignItems: "center",
      marginRight: RFValue(12),
    },
    smallImage: {
      tintColor: "#fff",
    },
    cancel: {
      position: "absolute",
      right: -30,
    },
  });
  