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
    none: 0,
    sm: RFValue(8),
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
      color: "primaryBlack",
      fontSize: RFValue(16),
      fontWeight: "500",
    },
    filled: {
      backgroundColor: "paleGrey50",
      color: "primaryBlack",
    },
    ghost: {
      backgroundColor: undefined,
    },
    outlined: {
      borderColor: "paleGrey",
      borderWidth: RFValue(1),
    },
  },

  textVariants: {
    body: {},
    defaults: {
      color: "primaryBlack",
      fontSize: RFValue(14),
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
