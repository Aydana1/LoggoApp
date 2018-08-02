import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
  AppRegistry,
  TouchableHighlight
} from "react-native";

import { Button, Card, Title, Paragraph } from "react-native-paper";

export default class Welcome extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: "#4A148C",
          height: 660,
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center"
        }}
      >
        <Text style={{ color: "white" }}>Добро пожаловать!</Text>
        <Button
          style={{ backgroundColor: "white" }}
          raised
          color="#4A148C"
          onPress={() => this.props.navigation.navigate("AppGuide")}
        >
          Войти
        </Button>
      </View>
    );
  }
}
