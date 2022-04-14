import { createTheme, useTheme as useRestyleTheme } from "@shopify/restyle";
import { Platform } from "react-native";

import { RFValue } from "@/shared/utils/functions";

import { palette } from "./palette";

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

  buttonGradients: {
    primary: [palette.secondaryColor, palette.secondary6, palette.primaryColor],
  },

  buttonSizes: {
    lg: {
      paddingHorizontal: "xl",
      paddingVertical: "lg",
    },
    md: {
      paddingHorizontal: "lg",
      paddingVertical: "md",
    },
    sm: {
      paddingHorizontal: "md",
      paddingVertical: "sm",
    },
    xs: {
      paddingHorizontal: "sm",
      paddingVertical: "xs",
    },
  },

  buttonVariants: {
    defaults: {
      borderRadius: "sm",
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

  fontSizes: {
    caption: RFValue(12),
    h1: RFValue(32),
    h2: RFValue(24),
    h3: RFValue(20),
    h4: RFValue(18),
    h5: RFValue(16),
    h6: RFValue(14),
    p: RFValue(14),
  },

  iconSizes: {
    md: {
      height: RFValue(24),
      width: RFValue(24),
    },
    sm: {
      height: RFValue(16),
      width: RFValue(16),
    },
    xl: {
      height: RFValue(48),
      width: RFValue(48),
    },
    xs: {
      height: RFValue(8),
      width: RFValue(8),
    },
  },

  spacing: {
    lg: RFValue(32),
    md: RFValue(16),
    s: RFValue(8),
    sm: RFValue(8),
    ss: RFValue(6),
    xl: RFValue(64),
    xs: RFValue(4),
    xxl: RFValue(128),
    xxs: RFValue(2),
  },

  textVariants: {
    bold10: {
      color: "darkGrey",
      fontFamily: "BentonSans-Bold",
      fontSize: RFValue(10),
      fontWeight: "700",
      textAlign: "center",
    },
    bold14: {
      fontFamily: "BentonSans Bold",
      fontSize: RFValue(14),
      fontWeight: "700",
      textAlign: "center",
    },
    bold24: {
      fontFamily: "BentonSans Bold",
      fontSize: RFValue(24),
      fontWeight: "700",
      textAlign: "center",
    },
    defaults: {
      fontSize: RFValue(14),
    },
    medium10: {
      fontFamily: "BentonSans-Medium",
      fontSize: RFValue(10),
      fontWeight: "400",
      textAlign: "center",
    },
    medium12: {
      fontFamily: "BentonSans-Medium",
      fontSize: RFValue(12),
      fontWeight: "400",
      textAlign: "center",
    },
    medium14: {
      fontFamily: "BentonSans-Medium",
      fontSize: RFValue(14),
      fontWeight: "400",
      textAlign: "center",
    },
    medium18: {
      fontFamily: "BentonSans-Medium",
      fontSize: RFValue(18),
      fontWeight: "400",
      lineHeight: 18.18,
      textAlign: "center",
    },
    regular10: {
      fontFamily:
        Platform.OS === "android" ? "BentonSans-Regular" : "BentonSans Regular",
      fontSize: RFValue(10),
      fontWeight: "400",
      // lineHeight: 18,
      textAlign: "center",
    },
    regular12: {
      fontFamily:
        Platform.OS === "android" ? "BentonSans-Regular" : "BentonSans Regular",
      fontSize: RFValue(12),
      fontWeight: "400",
      lineHeight: RFValue(16.22),
      textAlign: "center",
    },
    regular14: {
      fontFamily:
        Platform.OS === "android" ? "BentonSans-Regular" : "BentonSans Regular",
      fontSize: RFValue(14),
      fontWeight: "400",
      textAlign: "center",
    },
    title: {
      fontSize: RFValue(32),
    },
  },

  zIndices: {
    modal: 100,
    overlay: 10,
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
