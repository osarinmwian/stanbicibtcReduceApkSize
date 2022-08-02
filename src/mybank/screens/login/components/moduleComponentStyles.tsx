import { TextStyle, ViewStyle } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const MODULECONTAINERSTYLE: ViewStyle = {
  alignItems: "center",
  borderRadius: 10,
  height: RFValue(80),
  justifyContent: "center",
  marginHorizontal: 5,
  marginVertical: RFValue(10),
  paddingHorizontal: 5,
  width: RFValue(95),
};

export const MODULETEXTSTYLE: TextStyle = {
  color: "#fff",
  fontSize: RFValue(10),
  marginTop: RFValue(7),
  textAlign: "center",
};
