/* eslint-disable unicorn/prefer-module */
/* eslint-disable global-require */
const imageIconPack = {
  compass: require("@/shared/assets/image/compass.png"),
  eyeClosed: require("@/shared/assets/image/eye-closed.png"),
  eyeOpen: require("@/shared/assets/image/eye-opened.png"),
};

export { imageIconPack };

export type ImageIconPackType = keyof typeof imageIconPack;
