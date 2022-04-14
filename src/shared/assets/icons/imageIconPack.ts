/* eslint-disable unicorn/prefer-module */
/* eslint-disable global-require */
const imageIconPack = {
  "@ease": require("@/shared/assets/image/@ease.png"),
  account: require("@/shared/assets/image/account.png"),
  airtime: require("@/shared/assets/image/airtime.png"),
  atm: require("@/shared/assets/image/atm.png"),
  back: require("@/shared/assets/image/back.png"),
  balance: require("@/shared/assets/image/balance.png"),
  close: require("@/shared/assets/image/close.png"),
  compass: require("@/shared/assets/image/compass.png"),
  complain: require("@/shared/assets/image/complain.png"),
  customer: require("@/shared/assets/image/customer.png"),
  fingerprint: require("@/shared/assets/image/fingerprint.png"),
  flight: require("@/shared/assets/image/flight.png"),
  flights: require("@/shared/assets/image/flights.png"),
  forgotpassword: require("@/shared/assets/image/forgotPassword.png"),
  insurance: require("@/shared/assets/image/insurance.png"),
  landingpagebackground: require("@/shared/assets/image/LandingPageBackground.png"),
  logo: require("@/shared/assets/image/logo.png"),
  mutualfunds: require("@/shared/assets/image/mutualFunds.png"),
  mybank: require("@/shared/assets/image/myBank.png"),
  pension: require("@/shared/assets/image/pension.png"),
  question: require("@/shared/assets/image/question.png"),
  stocks: require("@/shared/assets/image/stocks.png"),
};

export { imageIconPack };

export type ImageIconPackType = keyof typeof imageIconPack;
