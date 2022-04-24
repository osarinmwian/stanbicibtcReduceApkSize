import arrowBack from "@/shared/assets/svg/arrow-back.svg";
import chevronBack from "@/shared/assets/svg/chevron-back.svg";
import compass from "@/shared/assets/svg/compass.svg";
import eyeOpened from "@/shared/assets/svg/eye-opened.svg";
import companyLogo from "@/shared/assets/svg/standard_bank_logo.svg";

const svgIconPack = {
  "arrow-back": arrowBack,
  "chevron-back": chevronBack,
  "company-logo": companyLogo,
  compass,
  "eye-opened": eyeOpened,
};

export { svgIconPack };

export type SvgIconPackType = keyof typeof svgIconPack;
