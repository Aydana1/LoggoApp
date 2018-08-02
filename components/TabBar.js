import React from "react";
import { Text, View } from "react-native";
import {
  createBottomTabNavigator,
  TabBarBottom,
  tabBarComponent
} from "react-navigation"; // Version can be specified in package.json
import Icon from "react-native-vector-icons/Ionicons";
import Home from "./tabBar/Home";
import Profile from "./tabBar/Profile";

export default createBottomTabNavigator({
  Home: { screen: Home },
  Profile: { screen: Profile },
  {
    headerMode: 'none',
  }
});
