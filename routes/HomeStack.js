import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
// import SelectLanguage from "../components/SelectLanguage";
// import Login from "../components/Login";

const screens = {
  selectLanguage: {
    screen: (
      <View>
        <Text>Hello</Text>
      </View>
    ),
  },
  login: {
    screen: (
      <View>
        <Text>Hello</Text>
      </View>
    ),
  },
};
const HomeStack = createStackNavigator({ screens });

export default createAppContainer(HomeStack);
