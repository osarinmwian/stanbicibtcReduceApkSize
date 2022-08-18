import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
    image: {
      width: 82,
      height: 82,
    },
    container: {
      width: 88,
      height: 88,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 44,
      marginVertical: 24,
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
      justifyContent: "center",
      alignItems: "center",
      right: 40,
    },
  });