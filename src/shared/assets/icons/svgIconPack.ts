import compass from "@/shared/assets/svg/compass.svg";
import eyeOpened from "@/shared/assets/svg/eye-opened.svg";

const svgIconPack = {
  compass,
  "eye-opened": eyeOpened,
};

export { svgIconPack };

export type SvgIconPackType = keyof typeof svgIconPack;
