import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  FlatList,
  ScrollView,
  AppRegistry,
  TouchableHighlight,
  ActivityIndicator,
  TextInput
} from "react-native";

import { Button, Card, Title, Paragraph } from "react-native-paper";
import FontAwesome from "react-native-vector-icons/dist/FontAwesome";
import MaterialIcons from "react-native-vector-icons/dist/MaterialIcons";

export default class Welcome extends Component {
  state = {
    name: ""
  };
  render() {
    return (
      <View style={styles.container}>
        {/* <ImageBackground
          style={styles.wall}
          source={require("../assets/images/wall.png")}
          imageStyle={{ resizeMode: "cover" }}
        > */}

        {/* {({ loading }) => {
          return loading ? (
            <ActivityIndicator />
          ) : (
            <View> */}
        <View>
          <Image
            style={{ width: 100, height: 85 }}
            source={require("../assets/images/thelogo7.png")}
          />
          <Text
            style={{
              fontFamily: "RobotoCondensed-Bold",
              fontSize: 24,
              color: "white"
            }}
          >
            SpeechArt
          </Text>
        </View>
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontFamily: "Roboto-Bold",
            marginTop: 20,
            textAlign: "center"
          }}
        >
          Озвучивайте скороговорки и тренируйте речь!
        </Text>

        <Button
          style={{
            backgroundColor: "white"
          }}
          raised
          color="#0CD78E"
          onPress={() => this.props.navigation.navigate("AppGuide")}
        >
          Go!
        </Button>
        {/* </View>
          );
        }} */}

        {/* </ImageBackground> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wall: {
    width: 400,
    height: 660,
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center"
  },
  container: {
    height: 660,
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#0CD78E"
  }
});
