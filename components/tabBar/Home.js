import React from "react";
import { Text, View } from "react-native";
import {
  createBottomTabNavigator,
  TabBarBottom,
  tabBarComponent
} from "react-navigation"; // Version can be specified in package.json
import Icon from "react-native-vector-icons/Ionicons";

class Home extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>HOME</Text>
      </View>
    );
  }
}

export default Home;
