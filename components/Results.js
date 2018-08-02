import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  AppRegistry,
  TouchableHighlight,
  StatusBar
} from "react-native";
import { Button, Card, Title, Paragraph } from "react-native-paper";
import CardContent from "../node_modules/react-native-paper/src/components/Card/CardContent";
import CardCover from "../node_modules/react-native-paper/src/components/Card/CardCover";

export default class Results extends React.Component {
  render() {
    return (
      <View style={{ backgroundColor: "#4A148C", height: 660 }}>
        <StatusBar translucent backgroundColor="rgba(0, 0, 0, 0.20)" animated />
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            color: "white",
            marginTop: 60
          }}
        >
          Ваш результат:
        </Text>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 70
          }}
        >
          <Card
            style={{
              width: 300
            }}
          >
            <CardContent style={{ backgroundColor: "white" }}>
              <Paragraph
                style={{ color: "#311B92", textAlign: "center", fontSize: 18 }}
              >
                Точность: 70%
              </Paragraph>
              <Paragraph
                style={{ color: "#311B92", textAlign: "center", fontSize: 18 }}
              >
                Время: 20сек
              </Paragraph>
              <Title style={{ color: "#311B92", textAlign: "center" }}>
                Вы заработали 100 баллов!
              </Title>
            </CardContent>
          </Card>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 40
          }}
        >
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
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginBottom: 10,
    width: 70,
    height: 70
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});

AppRegistry.registerComponent("VoiceTest", () => VoiceTest);
