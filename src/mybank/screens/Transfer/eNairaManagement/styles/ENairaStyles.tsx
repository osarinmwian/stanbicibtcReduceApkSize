import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "rgba(0, 137, 255, 0.1)",

    flexDirection: "row",

    // borderRadius: RFValue(50),
    height: RFValue(40),

    justifyContent: "space-between",

    // paddingVertical: RFValue(8),
    padding: RFValue(10),
  },
  filledTextInput: {
    borderRadius: 10,
    color: "#EFEFEF",
    justifyContent: "center",
  },
  filledTextInputContainer: {
    backgroundColor: "#EFEFEF",
    borderRadius: 10,
    justifyContent: "center",
    marginTop: 5,
    paddingVertical: 50,
  },
  filledTextInputLabel: { color: "#222222", marginTop: 4 },
  iconContainer: {
    alignItems: "center",
    borderRadius: RFValue(24),
    height: RFValue(48),
    justifyContent: "center",
    width: RFValue(48),
  },
  inputContainerStyle: { backgroundColor: "#F6F6F6", borderRadius: 10 },
  inputStyle: { borderRadius: 10, color: "#EFEFEF" },
  keyboardAvoidingView: {
    flex: 1,
  },
  labelTextStyle: {
    color: "#767676",
    marginTop: 5,
  },
  rotate: {
    transform: [{ rotate: "90deg" }],
  },
});
