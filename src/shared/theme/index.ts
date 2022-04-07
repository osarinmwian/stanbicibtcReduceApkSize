import { createTheme, useTheme as useRestyleTheme } from "@shopify/restyle";
import { StyleProp, TextStyle } from "react-native";

import { palette } from "./palette";

const buttonLabelDefaults: StyleProp<TextStyle> = {
  fontSize: 14,
  fontWeight: "500",
  textTransform: "capitalize",
};

const lightTheme = createTheme({
  borderRadii: {
    lg: 32,
    md: 16,
    sm: 8,
    xl: 64,
    xs: 4,
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
      borderWidth: 1,
    },
  },

  colors: {
    ...palette,
    mainBackground: palette.whiteColor,
    textColor: palette.darkGrey,
  },

  spacing: {
    lg: 32,
    md: 16,
    sm: 8,
    xl: 64,
    xs: 4,
    xxl: 128,
    xxs: 2,
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
