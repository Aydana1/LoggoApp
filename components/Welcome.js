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

export default class Welcome extends Component {
  render() {
    return (
      <Provider>
        <Text>WELCOME</Text>
        <Button
          style={{ backgroundColor: "pink" }}
          raised
          onPress={() => this.props.navigation.navigate("AppGuide")}
        >
          Next
        </Button>
      </Provider>
    );
  }
}
