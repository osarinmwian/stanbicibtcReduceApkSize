import arrowBack from "@/shared/assets/svg/arrow-back.svg";
import arrowForward from "@/shared/assets/svg/arrow-forward.svg";
import companyLogo from "@/shared/assets/svg/bank-logo.svg";
import buyEnaira from "@/shared/assets/svg/buyEnaira.svg";
import calculator from "@/shared/assets/svg/calculator.svg";
import car from "@/shared/assets/svg/car.svg";
import cash from "@/shared/assets/svg/cash.svg";
import chevronBack from "@/shared/assets/svg/chevron-back.svg";
import chevronDown from "@/shared/assets/svg/chevron-down.svg";
import chevronForward from "@/shared/assets/svg/chevron-forward.svg";
import close from "@/shared/assets/svg/close.svg";
import coins from "@/shared/assets/svg/coins.svg";
import coinsMany from "@/shared/assets/svg/coins-many.svg";
import compass from "@/shared/assets/svg/compass.svg";
import eyeOpened from "@/shared/assets/svg/eye-opened.svg";
import history from "@/shared/assets/svg/history.svg";
import leaf from "@/shared/assets/svg/leaf.svg";
import notification from "@/shared/assets/svg/notification.svg";
import profile from "@/shared/assets/svg/profile.svg";
import sellEnaira from "@/shared/assets/svg/sellEnaira.svg";

const svgIconPack = {
  "arrow-back": arrowBack,
  "arrow-forward": arrowForward,
  buyEnaira,
  calculator,
  car,
  cash,
  "chevron-back": chevronBack,
  "chevron-down": chevronDown,
  "chevron-forward": chevronForward,
  close,
  coins,
  "coins-many": coinsMany,
  "company-logo": companyLogo,
  compass,
  "eye-opened": eyeOpened,
  history,
  leaf,
  notification,
  profile,
  sellEnaira,
};

export { svgIconPack };

export type SvgIconPackType = keyof typeof svgIconPack;
