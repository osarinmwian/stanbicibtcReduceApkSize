export type SizeType = "lg" | "md" | "sm" | "xl" | "xs" | "xxl" | "xxs";

type ButtonSizesPaddingType = Record<
  "paddingHorizontal" | "paddingVertical",
  SizeType
>;

type ButtonSizesType = Exclude<SizeType, "xxl" | "xxs">;

export type ButtonSizesObjectType = Record<
  ButtonSizesType,
  ButtonSizesPaddingType
>;
