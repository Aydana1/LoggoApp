import React, { Component } from "react";
import { StyleSheet, Text, View, AppRegistry } from "react-native";

import { Provider, Button, Card, Title, Paragraph } from "react-native-paper";

export default class VoiceTest extends Component {
  render() {
    return (
      <Provider>
        <Text>WELCOME</Text>
        <Button
          style={{ backgroundColor: "pink" }}
          raised
          // onPress={() => this.props.navigation.navigate("Results")}
        >
          RESULTS
        </Button>
      </Provider>
    );
  }
}
