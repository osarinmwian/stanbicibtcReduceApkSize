import { ImageStyle } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const ROOT: ImageStyle = {
  flex: 1,
  paddingVertical: RFValue(10),
};

export const BACK: ImageStyle = {
  height: RFValue(15),
  width: RFValue(12),
};

export const FINGERPRINT: ImageStyle = {
  marginRight: 10,
};

export const LOGO: ImageStyle = {
  height: RFValue(43),
  width: RFValue(37),
};
