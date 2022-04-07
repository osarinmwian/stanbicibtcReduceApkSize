import { createTheme, useTheme as useRestyleTheme } from "@shopify/restyle";

import { palette } from "./palette";

const lightTheme = createTheme({
  borderRadii: {},
  breakpoints: {
    bigscreen: 412,
    phone: 0,
    tablet: 768,
  },
  buttonVariants: {
    defaults: {},
    filled: {},
  },
  colors: {
    ...palette,
    mainBackground: palette.whiteColor,
    textColor: palette.darkGrey,
  },

  spacing: {
    Ml: 60, // mega large
    l: 24, // large
    m: 16, // medium
    s: 8, // small
    sl: 20, // semi large
    sm: 12, // semi medium
    xl: 32, // extra large
    xs: 4, // extra small
    xxl: 40, // extra extra large
    xxs: 2, // extra extra small
  },

  textVariants: {
    buttonLabel: {
      fontSize: 14,
      fontWeight: "bold",
      textTransform: "uppercase",
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
