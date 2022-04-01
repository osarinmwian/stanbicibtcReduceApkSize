import { NavigationContainer } from "@react-navigation/native";
import { withTranslation } from "react-i18next";

import MyBank from "@/mybank/navigation";

function Navigation() {
  return (
    <NavigationContainer>
      <MyBank />
    </NavigationContainer>
  );
}

export default withTranslation()(Navigation);
