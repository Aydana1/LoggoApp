import React, { Component } from "react";
import { AppRegistry } from "react-native";
import { Provider } from "react-native-paper";
import { createStackNavigator } from "react-navigation";

import VoiceTest from "./components/VoiceTest";
import Welcome from "./components/Welcome";
import AppGuide from "./components/AppGuide";

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
    Welcome: Welcome,
    AppGuide: AppGuide,
    VoiceTest: VoiceTest
  },
  {
    initialRouteName: "AppGuide"
  }
);

export default App;

AppRegistry.registerComponent("App", () => App);
