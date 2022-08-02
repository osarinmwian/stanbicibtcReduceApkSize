import {
  backgroundColor,
  BackgroundColorProps,
  border,
  BorderProps,
  createRestyleComponent,
  layout,
  LayoutProps,
  opacity,
  OpacityProps,
  position,
  PositionProps,
  shadow,
  ShadowProps,
  spacing,
  SpacingProps,
  visible,
  VisibleProps,
} from "@shopify/restyle";
import React, { VFC } from "react";
import {
  Image as ReactImage,
  ImageProps as ReactImageProps,
} from "react-native";

import { Theme } from "@/shared/theme";

type RestyleProps = BackgroundColorProps<Theme> &
  OpacityProps<Theme> &
  VisibleProps<Theme> &
  ShadowProps<Theme> &
  PositionProps<Theme> &
  LayoutProps<Theme> &
  SpacingProps<Theme> &
  BorderProps<Theme> &
  ReactImageProps;

export type ImageProps = RestyleProps;

const Card = createRestyleComponent<RestyleProps, Theme>(
  [
    backgroundColor,
    opacity,
    visible,
    shadow,
    position,
    layout,
    spacing,
    border,
  ],
  ReactImage,
);

const Image: VFC<ImageProps> = (props) => <Card {...props} />;

export { Image };
