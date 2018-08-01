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

import { Provider, Button, Card, Title, Paragraph } from "react-native-paper";

export default class AppGuide extends Component {
  render() {
    return (
      <Provider>
        <Text>APP GUIDE</Text>
        <Button
          raised
          onPress={() => this.props.navigation.navigate("VoiceTest")}
        >
          Next
        </Button>
      </Provider>
    );
  }
}
