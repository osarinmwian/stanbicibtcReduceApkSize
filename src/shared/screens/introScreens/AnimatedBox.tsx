import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useRef } from "react";
import { Animated, Dimensions } from "react-native";

import { logo } from "@/mybank/assets/image";
import { Box } from "@/shared/components/Layout";

const { width, height } = Dimensions.get("window");

const AnimatedBox = () => {
  const posX = useRef(new Animated.Value(width / 2 - 44)).current;
  const posY = useRef(new Animated.Value(height / 2 - 44)).current;
  const scale = useRef(new Animated.Value(1)).current;

  const scaleFunction = () => {
    Animated.timing(scale, {
      toValue: 0.6,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const posYFunction = () => {
    Animated.timing(posY, {
      toValue: 20,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const posXFunction = () => {
    Animated.timing(posX, {
      toValue: width - 88,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  useFocusEffect(
    useCallback(() => {
      posYFunction();
      posXFunction();
      scaleFunction();
    }, []),
  );
  return (
    <Box left={0} position="absolute" right={0} top={0}>
      <Animated.View>
        <Animated.Image
          source={logo}
          style={{
            transform: [{ translateX: posX }, { translateY: posY }, { scale }],
          }}
        />
      </Animated.View>
    </Box>
  );
};

export default AnimatedBox;
