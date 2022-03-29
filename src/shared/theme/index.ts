import { createTheme, useTheme as useRestyleTheme } from "@shopify/restyle";

const theme = createTheme({
  breakpoints: {
    bigscreen: 412,
    phone: 0,
    tablet: 768,
  },
  colors: {},
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
  textVariants: {},
});

export type Theme = typeof theme;

export const useTheme = () => useRestyleTheme<Theme>();

export default theme;
