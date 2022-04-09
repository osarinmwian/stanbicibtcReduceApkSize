import { NavigationContainer } from "@react-navigation/native";
import { withTranslation } from "react-i18next";

import RootNavigation from "./RootNavigation";

function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
}

export default withTranslation()(Navigation);
