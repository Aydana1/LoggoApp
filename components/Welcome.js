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
        <ImageBackground
          style={styles.wall}
          source={require("../assets/images/wall.png")}
          imageStyle={{ resizeMode: "cover" }}
        >
          <Image
            style={{ width: 100, height: 120 }}
            source={require("../assets/images/logo3.png")}
          />
          <Text
            style={{
              color: "white",
              fontSize: 20,
              fontFamily: "CormorantInfant-Bold",
              marginTop: 20
            }}
          >
            Добро пожаловать!
          </Text>

          {/* <View>
            <Text
              style={{
                color: "white",
                fontSize: 15,
                marginBottom: 10
              }}
            >
              Как вас зовут?
            </Text>

            <TextInput
              label="Name"
              value={this.state.name}
              onChangeText={name => this.setState({ name })}
              placeholder="Ваше имя"
              style={{
                width: 300,
                backgroundColor: "white"
              }}
            />
          </View> */}

          {/* <FontAwesome name="fas fa-microphone-alt" size={25} color="#29B6F6" />
      <MaterialIcons name="record_voice_over" size={25} color="#29B6F6" /> */}
          <Button
            style={{
              backgroundColor: "white"
            }}
            raised
            color="#4A148C"
            onPress={() => this.props.navigation.navigate("AppGuide")}
          >
            Войти
          </Button>
        </ImageBackground>
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
    alignItems: "center"
  }
});
