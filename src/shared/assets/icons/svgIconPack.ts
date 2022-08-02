import arrowBack from "@/shared/assets/svg/arrow-back.svg";
import arrowForward from "@/shared/assets/svg/arrow-forward.svg";
import ashPlane from "@/shared/assets/svg/ashPlane.svg";
import bed from "@/shared/assets/svg/bed.svg";
import calculator from "@/shared/assets/svg/calculator.svg";
import calendar from "@/shared/assets/svg/calendar.svg";
import car from "@/shared/assets/svg/car.svg";
import cash from "@/shared/assets/svg/cash.svg";
import centili from "@/shared/assets/svg/centili.svg";
import chevronBack from "@/shared/assets/svg/chevron-back.svg";
import chevronDown from "@/shared/assets/svg/chevron-down.svg";
import chevronForward from "@/shared/assets/svg/chevron-forward.svg";
import chevronDownward from "@/shared/assets/svg/chevronDown.svg";
import close from "@/shared/assets/svg/close.svg";
import coins from "@/shared/assets/svg/coins.svg";
import coinsMany from "@/shared/assets/svg/coins-many.svg";
import compass from "@/shared/assets/svg/compass.svg";
import eyeOpened from "@/shared/assets/svg/eye-opened.svg";
import history from "@/shared/assets/svg/history.svg";
import leaf from "@/shared/assets/svg/leaf.svg";
import minusSquare from "@/shared/assets/svg/minus-square.svg";
import plane from "@/shared/assets/svg/plane.svg";
import plusSquare from "@/shared/assets/svg/plus-square.svg";
import companyLogo from "@/shared/assets/svg/standard_bank_logo.svg";
import graduationCap from '@/shared/assets/svg/graduation-cap.svg';
import tshirt from '@/shared/assets/svg/tshirt.svg';
import gift from '@/shared/assets/svg/gift.svg';
import utensils from '@/shared/assets/svg/utensils.svg';
import copy from '@/shared/assets/svg/copy.svg';
import briefcase from '@/shared/assets/svg/briefcase-medical.svg';
import building from '@/shared/assets/svg/building.svg';
import university from '@/shared/assets/svg/university.svg';
import piggyBank from '@/shared/assets/svg/piggy-bank.svg';
import exchangeAlt from '@/shared/assets/svg/exchange-alt.svg';
import home from '@/shared/assets/svg/home.svg';
import carCrash from '@/shared/assets/svg/car-crash.svg';
import carWhite from '@/shared/assets/svg/pfm-cars.svg';
import moneyBill from '@/shared/assets/svg/money-bill.svg';
import horizontalPlane from '@/shared/assets/svg/plane (1).svg';
import chevronRightSlim from '@/shared/assets/svg/chevron-right-slim.svg';
import arrowBackward from '@/shared/assets/svg/arrow-backward.svg'
import circle from '@/shared/assets/svg/circle.svg';
import checkCircle from '@/shared/assets/svg/check-circle.svg';
import eyeClosed from '@/shared/assets/svg/eye-closed.svg'
import notification from "@/shared/assets/svg/notification.svg";
import profile from "@/shared/assets/svg/profile.svg";

const svgIconPack = {
  "arrow-back": arrowBack,
  "arrow-forward": arrowForward,
  ashPlane,
  calculator,
  calendar,
  car,
  cash,
  centili,
  "chevron-back": chevronBack,
  "chevron-down": chevronDown,
  "chevron-downward": chevronDownward,
  "chevron-forward": chevronForward,
  "chevron-right-slim": chevronRightSlim,
  close,
  coins,
  "coins-many": coinsMany,
  "company-logo": companyLogo,
  compass,
  "eye-opened": eyeOpened,
  history,
  hotel: bed,
  leaf,
  minusSquare,
  plane,
  plusSquare,
  graduationCap,
  tshirt,
  gift,
  utensils,
  copy,
  briefcase,
  building,
  university,
  "piggy-bank": piggyBank,
  "exchange-alt": exchangeAlt,
  home,
  "car-crash": carCrash,
  "car-white": carWhite,
  "money-bill": moneyBill,
  "plane-horizontal": horizontalPlane,
  "arrow-backward": arrowBackward,
  "check-circle-unchecked": circle,
  "check-circle-checked": checkCircle,
  "eye-closed": eyeClosed,
  notification,
  profile,
};

export { svgIconPack };

export type SvgIconPackType = keyof typeof svgIconPack;
