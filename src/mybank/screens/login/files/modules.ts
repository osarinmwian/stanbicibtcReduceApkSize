import { SvgIconPackType } from "@/shared/assets/icons";
import { PressableProps } from "@/shared/components/Pressable";
import { palette, PaletteType } from "@/shared/theme/palette";
import { backgroundColor } from "@shopify/restyle";
interface ModuleProps {
  title: string;
  backgroundColor: PressableProps["backgroundColor"];
  iconName: SvgIconPackType;
  destination: string;
  id: string;
  textColor: PaletteType;
}

const moduleComponentData: ModuleProps[] = [
  {
    backgroundColor: "whiteColor",
    destination: "LandingPage",
    id: "1",
    iconName: "lightning",
    title: "Create Instant Account",
    textColor: "primaryColor",
  },

  {
    backgroundColor: "transparentBlack",
    destination: "LandingPage",
    id: "2",
    iconName: "phone-reverse",
    title: "Call Customer Care",
    textColor: "whiteColor",
  },

  {
    backgroundColor: "transparentBlack",
    destination: "LandingPage",
    id: "3",
    iconName: "user-gear",
    title: "Goto Quick Services",
    textColor: "whiteColor",
  },
];

export default moduleComponentData;
