import React from "react";
import { Text, View, StyleSheet } from "react-native";
import {
  createBottomTabNavigator,
  TabBarBottom,
  tabBarComponent
} from "react-navigation"; // Version can be specified in package.json
import Icon from "react-native-vector-icons/Ionicons";

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{
            color: "white"
          }}
        >
          Statistics
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#CFD8DC"
  }
});
export default Home;
