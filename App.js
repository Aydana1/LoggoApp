import React, { Component } from "react";
import { AppRegistry } from "react-native";
import { Provider } from "react-native-paper";
import { createStackNavigator } from "react-navigation";

import VoiceTest from "./components/VoiceTest";
import Results from "./components/Results";
import TabBar from "./components/TabBar";

console.disableYellowBox = true;

class App extends React.Component {
  render() {
    return (
      <Provider>
        <RootStack />
        {/* <TabBar /> */}
      </Provider>
    );
  }
}

const RootStack = createStackNavigator(
  {
    VoiceTest: VoiceTest,
    Results: Results
  },
  {
    initialRouteName: "VoiceTest"
  }
);

export default App;

AppRegistry.registerComponent("App", () => App);
