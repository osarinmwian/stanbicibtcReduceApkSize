import { ImageStyle, TextStyle } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import { palette } from "@/shared/theme/palette";

export const AIRTIMEICONSTYLE: ImageStyle = {
  height: RFValue(64),
  width: RFValue(64),
};

export const ROOT: ImageStyle = {
  flex: 1,
  paddingVertical: RFValue(20),
};

export const INPUTTEXT: TextStyle = {
  color: palette.textColor2,
  width: RFValue(86.01),
};
