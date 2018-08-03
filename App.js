import React, { Component } from "react";
import { AppRegistry, StatusBar } from "react-native";
import { Provider } from "react-native-paper";
import {
  createStackNavigator,
  createBottomTabNavigator,
  TabBarBottom
} from "react-navigation";
import Ionicons from "react-native-vector-icons/dist/Ionicons";
import MaterialIcons from "react-native-vector-icons/dist/MaterialIcons";

console.log("II ", Ionicons);

import VoiceTest from "./components/VoiceTest";
import Welcome from "./components/Welcome";
import AppGuide from "./components/AppGuide";
import Results from "./components/Results";
import Home from "./components/tabBar/Home";
import Profile from "./components/tabBar/Profile";
import Timer from "./components/Timer";

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
            screen: AppGuide,
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
                return (
                  <MaterialIcons
                    name="trending-up"
                    size={25}
                    color={tintColor}
                  />
                );
              } else if (routeName === "VoiceTest") {
                return (
                  <MaterialIcons name="extension" size={25} color={tintColor} />
                );
              }
            }
          }),
          tabBarOptions: {
            showLabel: false,
            activeTintColor: "#29B6F6",
            inactiveTintColor: "gray"
          }
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
    },
    Timer: {
      screen: Timer,
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
