import arrowBack from "@/shared/assets/svg/arrow-back.svg";
import car from "@/shared/assets/svg/car.svg";
import cash from "@/shared/assets/svg/cash.svg";
import chevronBack from "@/shared/assets/svg/chevron-back.svg";
import chevronForward from "@/shared/assets/svg/chevron-forward.svg";
import coins from "@/shared/assets/svg/coins.svg";
import compass from "@/shared/assets/svg/compass.svg";
import eyeOpened from "@/shared/assets/svg/eye-opened.svg";
import leaf from "@/shared/assets/svg/leaf.svg";
import companyLogo from "@/shared/assets/svg/standard_bank_logo.svg";

const svgIconPack = {
  "arrow-back": arrowBack,
  car,
  cash,
  "chevron-back": chevronBack,
  "chevron-forward": chevronForward,
  coins,
  "company-logo": companyLogo,
  compass,
  "eye-opened": eyeOpened,
  leaf,
};

export { svgIconPack };

export type SvgIconPackType = keyof typeof svgIconPack;
