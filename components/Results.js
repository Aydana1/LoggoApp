import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  View,
  ScrollView,
  AppRegistry,
  TouchableHighlight,
  StatusBar
} from "react-native";
import { Button, Card, Title, Paragraph } from "react-native-paper";
import CardContent from "../node_modules/react-native-paper/src/components/Card/CardContent";
import CardCover from "../node_modules/react-native-paper/src/components/Card/CardCover";

//{ backgroundColor: "#4A148C", height: 660 }

export default class Results extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.wall}
          source={require("../assets/images/res.png")}
          imageStyle={{ resizeMode: "cover" }}
        >
          <StatusBar
            translucent
            backgroundColor="rgba(0, 0, 0, 0.20)"
            animated
          />
          <View>
            <Text
              style={{
                textAlign: "center",
                fontSize: 25,
                fontFamily: "OldStandard-Regular",

                color: "white",
                marginBottom: 20
              }}
            >
              Ваш результат:
            </Text>

            <Card
              style={{
                width: 300
              }}
            >
              <CardContent style={{ backgroundColor: "white" }}>
                <Paragraph
                  style={{
                    color: "#311B92",
                    textAlign: "center",
                    fontSize: 18,
                    fontFamily: "Kurale-Regular"
                  }}
                >
                  Точность: 70%
                </Paragraph>
                <Paragraph
                  style={{
                    color: "#311B92",
                    textAlign: "center",
                    fontSize: 18,
                    fontFamily: "Kurale-Regular"
                  }}
                >
                  Время: 20сек
                </Paragraph>
              </CardContent>
            </Card>
          </View>

          <Card
            style={{
              width: 330
            }}
          >
            <CardContent style={{ backgroundColor: "white" }}>
              <Paragraph
                style={{
                  color: "#311B92",
                  textAlign: "center",
                  fontSize: 18,
                  fontFamily: "Kurale-Regular"
                }}
              >
                Количество правильных слов: 8
              </Paragraph>
              <Paragraph
                style={{
                  color: "#311B92",
                  textAlign: "center",
                  fontSize: 18,
                  fontFamily: "Kurale-Regular"
                }}
              >
                Количество неправильных слов: 3
              </Paragraph>
            </CardContent>
          </Card>

          <Text
            style={{
              color: "#311B92",
              textAlign: "center",
              fontFamily: "Kurale-Regular",
              fontSize: 20,
              marginTop: 40
            }}
          >
            Вы заработали 100 баллов!
          </Text>

          <Button
            style={{
              backgroundColor: "white",
              width: 150
            }}
            compact
            color="#4A148C"
            onPress={() => this.props.navigation.goBack()}
          >
            Повторить
          </Button>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 70,
    height: 70
  },
  // container: {
  //   flex: 1,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   backgroundColor: "#F5FCFF"
  // },
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

AppRegistry.registerComponent("VoiceTest", () => VoiceTest);
