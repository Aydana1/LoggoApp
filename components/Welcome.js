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
import FontAwesome from "react-native-vector-icons/dist/FontAwesome";
import MaterialIcons from "react-native-vector-icons/dist/MaterialIcons";

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

        {/* <FontAwesome name="fas fa-microphone-alt" size={25} color="#29B6F6" />
      <MaterialIcons name="record_voice_over" size={25} color="#29B6F6" /> */}
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
