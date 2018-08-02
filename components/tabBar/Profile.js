import React from "react";
import { Text, View } from "react-native";
import {
  createBottomTabNavigator,
  TabBarBottom,
  tabBarComponent
} from "react-navigation"; // Version can be specified in package.json

class Profile extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>PROFILE</Text>
      </View>
    );
  }
}

export default Profile;
