import React from "react";
import { View } from "react-native";
import Main from "./Main/Main";
import SearchResults from "./Main/SearchResults";
import { createStackNavigator,createSwitchNavigator, createAppContainer } from "react-navigation";

const Routes = createStackNavigator(
  {
    Main: {
      screen: Main

    },
    SearchResults: {
      screen: SearchResults
    }
  },
  {
    initialRouteName: "Main"
  }
);

const Container = createAppContainer(Routes)
export default Container;