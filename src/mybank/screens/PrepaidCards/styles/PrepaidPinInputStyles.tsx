import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
    container: {
      borderRadius: RFValue(20),
      height: RFValue(40),
      width: RFValue(40),
    },
    delete: {
      width: 20,
      height: 20,
      justifyContent: "center",
      marginRight: 10,
      alignItems: "center",
    },
    accountContent: {
      width: "100%",
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      padding: 8,
      marginVertical: 10,
    },
    imageContainer:{
      justifyContent:'center',
      alignItems:'center',
      paddingVertical:10
    },
    image: {
      width: 60,
      height: 60,
      justifyContent: "center",
      alignItems: "center",
    },
    note: {
      width: "100%",
      textAlign: "center",
    },
    download: {
      padding: 6,
      textAlign: "center",
    },
    done: {
      padding: 6,
      textAlign: "center",
    },
    downloadButton: {
      marginVertical: 16,
      justifyContent: "center",
      alignItems: "center",
    },
    doneButton: {
      justifyContent: "center",
      alignItems: "center",
    },
  });
  