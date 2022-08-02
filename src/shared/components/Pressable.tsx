import { createBox } from "@shopify/restyle";
import { Pressable as NSPressable } from "react-native";

import { Theme } from "../theme";

const Pressable = createBox<
  Theme,
  React.ComponentProps<typeof NSPressable> & { children?: React.ReactNode }
>(NSPressable);

export type PressableProps = React.ComponentProps<typeof Pressable>;

export default Pressable;
