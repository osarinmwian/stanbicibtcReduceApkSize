import arrowBack from "@/shared/assets/svg/arrow-back.svg";
import arrowForward from "@/shared/assets/svg/arrow-forward.svg";
import bed from "@/shared/assets/svg/bed.svg";
import calculator from "@/shared/assets/svg/calculator.svg";
import calendar from "@/shared/assets/svg/calendar.svg";
import car from "@/shared/assets/svg/car.svg";
import cash from "@/shared/assets/svg/cash.svg";
import centili from "@/shared/assets/svg/centili.svg";
import chevronBack from "@/shared/assets/svg/chevron-back.svg";
import chevronForward from "@/shared/assets/svg/chevron-forward.svg";
import chevronDown from "@/shared/assets/svg/chevronDown.svg";
import close from "@/shared/assets/svg/close.svg";
import coins from "@/shared/assets/svg/coins.svg";
import coinsMany from "@/shared/assets/svg/coins-many.svg";
import compass from "@/shared/assets/svg/compass.svg";
import eyeOpened from "@/shared/assets/svg/eye-opened.svg";
import history from "@/shared/assets/svg/history.svg";
import leaf from "@/shared/assets/svg/leaf.svg";
import plane from "@/shared/assets/svg/plane.svg";
import companyLogo from "@/shared/assets/svg/standard_bank_logo.svg";

const svgIconPack = {
  "arrow-back": arrowBack,
  "arrow-forward": arrowForward,
  calculator,
  calendar,
  car,
  cash,
  centili,
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
  hotel: bed,
  leaf,
  plane,
};

export { svgIconPack };

export type SvgIconPackType = keyof typeof svgIconPack;
