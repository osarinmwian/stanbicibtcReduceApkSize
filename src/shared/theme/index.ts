import { createTheme, useTheme as useRestyleTheme } from "@shopify/restyle";

import { RFValue } from "@/shared/utils/functions";

import { palette } from "./palette";
import type { PaddingSizesObjectType } from "./types";

const lightTheme = createTheme({
  borderRadii: {
    lg: RFValue(32),
    md: RFValue(16),
    none: 0,
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
    none: {
      paddingHorizontal: "none",
      paddingVertical: "none",
    },
    sm: {
      paddingHorizontal: "md",
      paddingVertical: "sm",
    },
    xl: {
      paddingHorizontal: "xxl",
      paddingVertical: "xl",
    },
    xs: {
      paddingHorizontal: "sm",
      paddingVertical: "xs",
    },
  } as PaddingSizesObjectType,

  buttonVariants: {
    defaults: {
      borderRadius: "sm",
    },
    filled: {
      backgroundColor: "primaryColor",
    },
    ghost: {
      backgroundColor: "paleGrey50",
    },
    none: {},
    outlined: {
      borderColor: "paleGrey",
      borderWidth: RFValue(1),
    },
    transparent: {
      backgroundColor: "transparent",
    },
  },

  colors: {
    ...palette,
    imageBackgroundTint: palette.primaryColor,
    mainBackground: palette.whiteColor,
    textColor: palette.darkGrey,
    textColorInverted: palette.whiteColor,
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
    lg: {
      height: RFValue(32),
      width: RFValue(32),
    },
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
    none: 0,
    sm: RFValue(8),
    ss: RFValue(6),
    xl: RFValue(64),
    xs: RFValue(4),
    xxl: RFValue(128),
    xxs: RFValue(2),
  },

  textInputSizes: {
    lg: {
      paddingHorizontal: "lg",
      paddingVertical: "lg",
    },
    md: {
      paddingHorizontal: "md",
      paddingVertical: "md",
    },
    none: {
      paddingHorizontal: "none",
      paddingVertical: "none",
    },
    sm: {
      paddingHorizontal: "sm",
      paddingVertical: "sm",
    },
    xl: {
      paddingHorizontal: "xl",
      paddingVertical: "xl",
    },
    xs: {
      paddingHorizontal: "xs",
      paddingVertical: "xs",
    },
  } as PaddingSizesObjectType,

  textInputVariants: {
    defaults: {
      borderRadius: "sm",
      fontSize: RFValue(14),
      fontWeight: "500",
    },
    filled: {
      backgroundColor: "paleGrey50",
      color: "primaryBlack",
    },
    none: {},
    outlined: {
      borderColor: "paleGrey",
      borderWidth: RFValue(1),
    },
    transparent: {
      backgroundColor: "transparent",
    },
  },

  textVariants: {
    body: {},
    bold10: {
      color: "darkGrey",
      fontFamily: "BentonSans-Bold",
      fontSize: RFValue(10),
      fontWeight: "700",
    },
    bold12: {
      color: "darkGrey",
      fontFamily: "BentonSans-Bold",
      fontSize: RFValue(10),
      fontWeight: "700",
    },
    bold14: {
      fontFamily: "BentonSans-Bold",
      fontSize: RFValue(14),
      fontWeight: "700",
    },
    bold16: {
      fontFamily: "BentonSans-Bold",
      fontSize: RFValue(16),
      fontWeight: "700",
    },
    bold18: {
      color: "textColor",
      fontFamily: "BentonSans-Bold",
      fontSize: RFValue(18),
      fontWeight: "700",
    },
    bold24: {
      fontFamily: "BentonSans-Bold",
      fontSize: RFValue(24),
      fontWeight: "100",
    },
    defaults: {
      color: "primaryBlack",
      fontSize: RFValue(14),
    },
    medium10: {
      fontFamily: "BentonSans-Medium",
      fontSize: RFValue(10),
      fontWeight: "400",
    },
    medium12: {
      color: "textColor",
      fontFamily: "BentonSans-Medium",
      fontSize: RFValue(12),
      fontWeight: "400",
    },
    medium14: {
      fontFamily: "BentonSans-Medium",
      fontSize: RFValue(14),
      fontWeight: "400",
    },
    medium16: {
      color: "textColor",
      fontFamily: "BentonSans-Medium",
      fontSize: RFValue(16),
      fontWeight: "400",
      lineHeight: RFValue(16),
    },
    medium18: {
      fontFamily: "BentonSans-Medium",
      fontSize: RFValue(18),
      fontWeight: "400",
    },
    medium8: {
      fontFamily: "BentonSans-Medium",
      fontSize: RFValue(8),
      fontWeight: "400",
    },
    none: {},
    regular10: {
      fontFamily: "BentonSans-Regular",
      fontSize: RFValue(10),
      fontWeight: "400",
      lineHeight: RFValue(16),
    },
    regular12: {
      fontFamily: "BentonSans-Regular",
      fontSize: RFValue(12),
      fontWeight: "400",
    },
    regular14: {
      color: "textColor",
      fontFamily: "BentonSans-Regular",
      fontSize: RFValue(14),
      fontWeight: "400",
      lineHeight: RFValue(20),
    },
    regular8: {
      fontFamily: "BentonSans-Regular",
      fontSize: RFValue(8),
      fontWeight: "400",
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
    imageBackgroundTint: palette.secondaryBlack,
    mainBackground: palette.secondaryBlack,
    textColor: palette.whiteColor,
    textColorInverted: palette.darkGrey,
  },
};

export default { darkTheme, lightTheme };
