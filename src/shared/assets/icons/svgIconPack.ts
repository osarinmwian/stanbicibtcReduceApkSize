import arrowBack from "@/shared/assets/svg/arrow-back.svg";
import arrowBackward from "@/shared/assets/svg/arrow-backward.svg";
import arrowForward from "@/shared/assets/svg/arrow-forward.svg";
import ashPlane from "@/shared/assets/svg/ashPlane.svg";
import companyLogo from "@/shared/assets/svg/bank-logo.svg";
import bed from "@/shared/assets/svg/bed.svg";
import briefcase from "@/shared/assets/svg/briefcase-medical.svg";
import building from "@/shared/assets/svg/building.svg";
import buyEnaira from "@/shared/assets/svg/buyEnaira.svg";
import calculator from "@/shared/assets/svg/calculator.svg";
import calendar from "@/shared/assets/svg/calendar.svg";
import car from "@/shared/assets/svg/car.svg";
import carCrash from "@/shared/assets/svg/car-crash.svg";
import cash from "@/shared/assets/svg/cash.svg";
import centili from "@/shared/assets/svg/centili.svg";
import checkCircle from "@/shared/assets/svg/check-circle.svg";
import chevronBack from "@/shared/assets/svg/chevron-back.svg";
import chevronDown from "@/shared/assets/svg/chevron-down.svg";
import chevronDownSharp from "@/shared/assets/svg/chevron-down-sharp-white.svg";
import chevronForward from "@/shared/assets/svg/chevron-forward.svg";
import chevronRightSlim from "@/shared/assets/svg/chevron-right-slim.svg";
import chevronDownward from "@/shared/assets/svg/chevronDown.svg";
import circle from "@/shared/assets/svg/circle.svg";
import close from "@/shared/assets/svg/close.svg";
import coins from "@/shared/assets/svg/coins.svg";
import coinsMany from "@/shared/assets/svg/coins-many.svg";
import compass from "@/shared/assets/svg/compass.svg";
import copy from "@/shared/assets/svg/copy.svg";
import deleteIcon from "@/shared/assets/svg/delete.svg";
import exchangeAlt from "@/shared/assets/svg/exchange-alt.svg";
import eyeClosed from "@/shared/assets/svg/eye-closed.svg";
import eyeOpened from "@/shared/assets/svg/eye-opened.svg";
import gift from "@/shared/assets/svg/gift.svg";
import graduationCap from "@/shared/assets/svg/graduation-cap.svg";
import history from "@/shared/assets/svg/history.svg";
import home from "@/shared/assets/svg/home.svg";
import leaf from "@/shared/assets/svg/leaf.svg";
import minusSquare from "@/shared/assets/svg/minus-square.svg";
import moneyBill from "@/shared/assets/svg/money-bill.svg";
import notification from "@/shared/assets/svg/notification.svg";
import carWhite from "@/shared/assets/svg/pfm-cars.svg";
import piggyBank from "@/shared/assets/svg/piggy-bank.svg";
import horizontalPlane from "@/shared/assets/svg/plane (1).svg";
import plane from "@/shared/assets/svg/plane.svg";
import plusSquare from "@/shared/assets/svg/plus-square.svg";
import profile from "@/shared/assets/svg/profile.svg";
import sellEnaira from "@/shared/assets/svg/sellEnaira.svg";
import tshirt from "@/shared/assets/svg/tshirt.svg";
import university from "@/shared/assets/svg/university.svg";
import utensils from "@/shared/assets/svg/utensils.svg";
import fingerprint from "@/shared/assets/svg/fingerprint.svg";
import userGear from "@/shared/assets/svg/user-gear.svg";
import lightning from "@/shared/assets/svg/lightning.svg";
import phoneReverse from "@/shared/assets/svg/phone-reverse.svg";

const svgIconPack = {
  "arrow-back": arrowBack,
  "arrow-backward": arrowBackward,
  "arrow-forward": arrowForward,
  ashPlane,
  briefcase,
  building,
  buyEnaira,
  calculator,
  calendar,
  car,
  "car-crash": carCrash,
  "car-white": carWhite,
  cash,
  centili,
  "check-circle-checked": checkCircle,
  "check-circle-unchecked": circle,
  "chevron-back": chevronBack,
  "chevron-down": chevronDown,
  "chevron-down-sharp-white": chevronDownSharp,
  "chevron-downward": chevronDownward,
  "chevron-forward": chevronForward,
  "chevron-right-slim": chevronRightSlim,
  close,
  coins,
  "coins-many": coinsMany,
  "company-logo": companyLogo,
  compass,
  copy,
  "delete-icon": deleteIcon,
  "exchange-alt": exchangeAlt,
  "eye-closed": eyeClosed,
  "eye-opened": eyeOpened,
  fingerprint,
  gift,
  graduationCap,
  history,
  home,
  hotel: bed,
  leaf,
  lightning,
  minusSquare,
  "money-bill": moneyBill,
  notification,
  "phone-reverse": phoneReverse,
  "piggy-bank": piggyBank,
  plane,
  "plane-horizontal": horizontalPlane,
  plusSquare,
  profile,
  sellEnaira,
  tshirt,
  university,
  "user-gear": userGear,
  utensils,
};

export { svgIconPack };

export type SvgIconPackType = keyof typeof svgIconPack;
