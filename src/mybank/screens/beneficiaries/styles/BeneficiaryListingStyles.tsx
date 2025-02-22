import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
  containerBackground: {
    height: RFValue(100),
    paddingHorizontal: 8,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    paddingVertical: 20,
    marginTop: -10,
  },
  container: {
    borderRadius: RFValue(17),
    height: 34,
    width: 34,
    alignItems: "center",
    justifyContent: "center",
  },
  addition: {
    width: 16,
    height: 16,
    tintColor: "white",
  },
  primaryButton: {
    width: 130,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    position: "absolute",
    top: 380,
    right: 0,
  },
  delete: {
    width: 20,
    height: 22,
    justifyContent: "center",
    alignItems: "center",
    tintColor: "grey",
  },
  warning: {
    width: "100%",
    borderRadius: 10,
    flexDirection: "row",
    padding: 8,
    marginVertical: 10,
    backgroundColor: "#E0E7F5",
    justifyContent: "center",
  },
  image: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 4,
    marginHorizontal: 10,
  },
  note: {
    width: "85%",
    alignItems: "flex-start",
  },
  modalNote: {
    width: "85%",
    lineHeight: 20,
  },
  cancel: {
    padding: 10,
    textAlign: "center",
  },
  continue: {
    padding: 10,
    textAlign: "center",
  },
  cancelButton: {
    marginVertical: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  continueButton: {
    justifyContent: "center",
    alignItems: "center",
  },
});
