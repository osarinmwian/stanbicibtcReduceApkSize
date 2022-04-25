import { NavigationContainer } from "@react-navigation/native";
import { withTranslation } from "react-i18next";

import { navigationRef } from "@/mybank/navigation/altNavigation";

import RootNavigation from "./RootNavigation";

function Navigation() {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootNavigation />
    </NavigationContainer>
  );
}

export default withTranslation()(Navigation);
