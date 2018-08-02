import React, { Component } from "react";
import { AppRegistry, StatusBar } from "react-native";
import { Provider } from "react-native-paper";
import { createStackNavigator } from "react-navigation";

import VoiceTest from "./components/VoiceTest";
import Welcome from "./components/Welcome";
import AppGuide from "./components/AppGuide";
import Results from "./components/Results";
// import TabBar from "./components/TabBar";

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
      screen: VoiceTest,
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
