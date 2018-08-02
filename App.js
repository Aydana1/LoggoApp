import React, { Component } from "react";
import { AppRegistry, StatusBar } from "react-native";
import { Provider } from "react-native-paper";
import {
  createStackNavigator,
  createBottomTabNavigator,
  TabBarBottom
} from "react-navigation";
import Ionicons from "react-native-vector-icons/dist/Ionicons";

console.log("II ", Ionicons);

import VoiceTest from "./components/VoiceTest";
import Welcome from "./components/Welcome";
import AppGuide from "./components/AppGuide";
import Results from "./components/Results";
import Home from "./components/tabBar/Home";
import Profile from "./components/tabBar/Profile";

console.disableYellowBox = true;

class App extends React.Component {
  render() {
    return (
      <Provider>
        <RootStack />
      </Provider>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Welcome: {
      screen: Welcome,
      navigationOptions: ({ navigation }) => ({
        header: null,
        title: "Welcome"
      })
    },
    AppGuide: {
      screen: AppGuide,
      navigationOptions: ({ navigation }) => ({
        title: "Welcome",
        header: null
      })
    },
    VoiceTest: {
      screen: createBottomTabNavigator(
        {
          VoiceTest: {
            screen: VoiceTest,
            navigationOptions: ({ navigation }) => ({
              headerLeft: null,
              header: null
            })
          },
          Home: {
            screen: Home,
            navigationOptions: ({ navigation }) => ({
              // title: "Welcome",
              headerLeft: null,
              header: null
            })
          }
        },
        {
          navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
              const { routeName } = navigation.state;
              let iconName;
              if (routeName === "Home") {
                return <Ionicons name="apps" size={25} color="red" />;
              } else if (routeName === "VoiceTest") {
                return <Ionicons name="albums" size={25} color="red" />;
              }
            }
          })
        }
      ),
      navigationOptions: ({ navigation }) => ({
        // title: "Welcome",
        headerLeft: null,
        header: null
      })
    },
    Results: {
      screen: Results,
      navigationOptions: ({ navigation }) => ({
        headerLeft: null,
        header: null
      })
    }
  },
  {
    initialRouteName: "Welcome"
  }
);

export default App;

AppRegistry.registerComponent("App", () => App);
