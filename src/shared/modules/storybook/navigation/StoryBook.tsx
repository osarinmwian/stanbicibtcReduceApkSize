import { createStackNavigator } from "@react-navigation/stack";

import { HomeScreen } from "@/shared/modules/storybook/screens/Home";

import type { StoryBookRootStackParameterList } from "./types";

const Stack = createStackNavigator<StoryBookRootStackParameterList>();

function StoryBookNavigation() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen component={HomeScreen} name="Home" />
    </Stack.Navigator>
  );
}

export default StoryBookNavigation;
