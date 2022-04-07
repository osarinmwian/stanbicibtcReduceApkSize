import { createTheme, useTheme as useRestyleTheme } from "@shopify/restyle";
import { StyleProp, TextStyle } from "react-native";

import { RFValue } from "@/shared/utils/functions";

import { palette } from "./palette";

const buttonLabelDefaults: StyleProp<TextStyle> = {
  fontSize: RFValue(14),
  fontWeight: "500",
  textTransform: "capitalize",
};

const lightTheme = createTheme({
  borderRadii: {
    lg: RFValue(32),
    md: RFValue(16),
    sm: RFValue(8),
    xl: RFValue(64),
    xs: RFValue(4),
  },

  breakpoints: {
    largeScreen: 412,
    phone: 0,
    tablet: 768,
  },

  buttonVariants: {
    defaults: {
      borderRadius: "sm",
      paddingHorizontal: "lg",
      paddingVertical: "md",
    },
    filled: {
      backgroundColor: "primaryColor",
    },
    ghost: {
      backgroundColor: "primaryColor10",
    },
    outlined: {
      borderColor: "primaryColor",
      borderWidth: RFValue(1),
    },
  },

  colors: {
    ...palette,
    mainBackground: palette.whiteColor,
    textColor: palette.darkGrey,
  },

  spacing: {
    lg: RFValue(32),
    md: RFValue(16),
    sm: RFValue(8),
    xl: RFValue(64),
    xs: RFValue(4),
    xxl: RFValue(128),
    xxs: RFValue(2),
  },

  textVariants: {
    buttonLabelFilled: {
      ...buttonLabelDefaults,
      color: "whiteColor",
    },
    buttonLabelGhost: {
      ...buttonLabelDefaults,
      color: "primaryColor",
    },
    buttonLabelOutlined: {
      ...buttonLabelDefaults,
      color: "primaryColor",
    },
  },
});

export type Theme = typeof lightTheme;

export const useTheme = () => useRestyleTheme<Theme>();

export const darkTheme: Theme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    mainBackground: palette.secondaryBlack,
    textColor: palette.whiteColor,
  },
};

export default { darkTheme, lightTheme };
