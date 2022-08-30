import React from "react";
import {
  ImageIcon,
  ImageIconPackType,
  SvgIcon,
  SvgIconPackType,
} from "@/shared/assets/icons";
import { Box } from "@/shared/components/Layout";
import Pressable from "@/shared/components/Pressable";
import { Text, TextProps } from "@/shared/components/Typography";
import { PaletteType } from "@/shared/theme/palette";

interface TileTypes {
  onPress?: () => void;
  leftIconName?: ImageIconPackType;
  rightIconName?: SvgIconPackType;
  disableRightIcon?: boolean; // if rightIcon is disabled, no Icons will show up on the right
  title: string;
  titleVariant?: TextProps["variant"];
  subtitleVariant?: TextProps["variant"];
  subtitle?: string;
  backgroundColor?: PaletteType;
  titleColor?: PaletteType;
  subtitleColor?: PaletteType;
}

const Tile = ({
  onPress = () => {},
  leftIconName,
  title = "Title",
  subtitle,
  subtitleVariant = "regular10",
  titleVariant = "regular16",
  disableRightIcon,
  rightIconName = "chevron-forward",
  backgroundColor = "paleGrey50",
  titleColor = "textColor3",
  subtitleColor = "textColor3",
}: TileTypes) => (
  <Pressable
    alignItems="center"
    backgroundColor={backgroundColor}
    flexDirection="row"
    justifyContent="space-between"
    onPress={onPress}
    paddingVertical="md"
  >
    <Box
      alignItems="center"
      flexDirection="row"
      justifyContent="space-between"
      width="100%"
    >
      {leftIconName && (
        <ImageIcon
          color="black"
          name={leftIconName}
          size="m"
          style={{ marginRight: 16 }}
        />
      )}
      <Box paddingHorizontal="md">
        <Box>
          <Text variant={titleVariant} color={titleColor}>
            {title}
          </Text>
        </Box>
        <Box>
          {subtitle && <Text variant={subtitleVariant}>{subtitle}</Text>}
        </Box>
      </Box>
    </Box>
    <Box padding="sm">
      {!disableRightIcon && <SvgIcon name={rightIconName} size="xs"/>}
    </Box>
  </Pressable>
);

export default Tile;
