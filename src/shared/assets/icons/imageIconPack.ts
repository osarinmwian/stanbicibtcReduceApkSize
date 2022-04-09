/* eslint-disable unicorn/prefer-module */
/* eslint-disable global-require */
const imageIconPack = {
  compass: require("@/shared/assets/image/compass.png"),
};

export { imageIconPack };

export type ImageIconPackType = keyof typeof imageIconPack;
