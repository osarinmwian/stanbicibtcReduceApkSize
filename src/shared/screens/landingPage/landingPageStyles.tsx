import { ImageStyle, TextStyle } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const LOGOSTYLE: ImageStyle = {
  height: RFValue(56),
  width: RFValue(49.14),
};

export const LOGOTEXTSTYLE: TextStyle = {
  color: "#fff",
  fontSize: RFValue(20),
  fontWeight: "700",
  marginTop: RFValue(5),
};

export const ROOT: ImageStyle = {
  flex: 1,
  paddingVertical: RFValue(20),
};
