import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen } from "@/shared/modules/storybook/screens/Home";

import type { StoryBookRootStackParameterList } from "./types";

const Stack = createNativeStackNavigator<StoryBookRootStackParameterList>();

function StoryBookNavigation() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen component={HomeScreen} name="Home" />
    </Stack.Navigator>
  );
}

export default StoryBookNavigation;
