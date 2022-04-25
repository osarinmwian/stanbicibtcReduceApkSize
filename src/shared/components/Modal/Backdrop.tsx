import { BottomSheetBackdropProps } from "@gorhom/bottom-sheet";
import { BlurView } from "@react-native-community/blur";
import React, { useMemo } from "react";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

import { Pressable } from "@/shared/components/";
import { Box } from "@/shared/components/Layout";

const AnimatedBlur = Animated.createAnimatedComponent(BlurView);

export const Backdrop = ({
  animatedIndex,
  onPress,
  showIndex = 0,
  style,
}: BottomSheetBackdropProps & {
  onPress?: () => void;
  showIndex?: number;
}) => {
  const containerAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      animatedIndex.value,
      [showIndex - 1, showIndex],
      [0, 1],
      Extrapolate.CLAMP,
    ),
  }));

  const blurStyle = useMemo(
    () => [
      {
        height: "100%",
        width: "100%",
      },
      containerAnimatedStyle,
    ],
    [containerAnimatedStyle],
  );

  return (
    <Box style={style}>
      <Pressable onPress={onPress}>
        <AnimatedBlur
          blurAmount={5}
          blurType="light"
          overlayColor="rgba(0, 0, 0, 0.4)"
          style={blurStyle}
        />
      </Pressable>
    </Box>
  );
};
