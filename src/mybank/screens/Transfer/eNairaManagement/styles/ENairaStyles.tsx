import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",

    backgroundColor: "rgba(0, 137, 255, 0.1)",

    flexDirection: "row",

    // borderRadius: RFValue(50),
    height: RFValue(40),

    justifyContent: "space-between",

    // paddingVertical: RFValue(8),
    padding: RFValue(10),
  },
  filledTextInput: { borderRadius: 10, color: "#EFEFEF" },
  filledTextInputContainer: {
    backgroundColor: "#F6F6F6",
    borderRadius: 10,
  },
  filledTextInputLabel: { color: "#767676", marginTop: 5 },
  iconContainer: {
    alignItems: "center",
    borderRadius: RFValue(24),
    height: RFValue(48),
    justifyContent: "center",
    width: RFValue(48),
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  rotate: {
    transform: [{ rotate: "90deg" }],
  },
});
