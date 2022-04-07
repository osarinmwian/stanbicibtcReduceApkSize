import { NavigationContainer } from "@react-navigation/native";
import { withTranslation } from "react-i18next";

import Root from "./Root";

function Navigation() {
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
}

export default withTranslation()(Navigation);
