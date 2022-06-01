/* eslint-disable unicorn/prefer-module */
/* eslint-disable global-require */
const imageIconPack = {
  "@ease": require("@/shared/assets/image/@ease.png"),
  "@ease2": require("@/shared/assets/image/@ease2.png"),
  account: require("@/shared/assets/image/account.png"),
  add: require("@/shared/assets/image/add.png"),
  airtime: require("@/shared/assets/image/airtime.png"),
  atm: require("@/shared/assets/image/atm.png"),
  back: require("@/shared/assets/image/back.png"),
  balance: require("@/shared/assets/image/balance.png"),
  calender: require("@/shared/assets/image/calender.png"),
  close: require("@/shared/assets/image/close.png"),
  coins: require("@/shared/assets/image/coins.png"),
  compass: require("@/shared/assets/image/compass.png"),
  complain: require("@/shared/assets/image/complain.png"),
  customer: require("@/shared/assets/image/customer.png"),
  ewallet: require("@/shared/assets/image/eWallet.png"),
  eyeClosed: require("@/shared/assets/image/eye-closed.png"),
  eyeOpen: require("@/shared/assets/image/eye-opened.png"),
  fingerprint: require("@/shared/assets/image/fingerprint.png"),
  flight: require("@/shared/assets/image/flight.png"),
  flights: require("@/shared/assets/image/flights.png"),
  forgotpassword: require("@/shared/assets/image/forgotPassword.png"),
  forward: require("@/shared/assets/image/forward.png"),
  home2: require("@/shared/assets/image/home2.png"),
  insurance: require("@/shared/assets/image/insurance.png"),
  landingpagebackground: require("@/shared/assets/image/LandingPageBackground.png"),
  logo: require("@/shared/assets/image/logo.png"),
  mutualfunds: require("@/shared/assets/image/mutualFunds.png"),
  mybank: require("@/shared/assets/image/myBank.png"),
  payments2: require("@/shared/assets/image/payments2.png"),
  pension: require("@/shared/assets/image/pension.png"),
  question: require("@/shared/assets/image/question.png"),
  search: require("@/shared/assets/image/search.png"),
  star: require("@/shared/assets/image/star.png"),
  stocks: require("@/shared/assets/image/stocks.png"),
  time: require("@/shared/assets/image/time.png"),
  upload: require("@/shared/assets/image/upload.png"),
  user: require("@/shared/assets/image/user.png"),
  users: require("@/shared/assets/image/users.png"),
};

export { imageIconPack };

export type ImageIconPackType = keyof typeof imageIconPack;
