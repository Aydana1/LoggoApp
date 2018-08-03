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

export default class VoiceTest extends React.Component {
  showResults = () => {
    console.log("HHHHHoo");
    this.props.navigation.navigate("Results");
  };

  render() {
    const { currentLevel } = this.props.navigation.state.params;
    const { info } = currentLevel;
    const { poem, level } = info;

    return (
      <ScrollView>
        <StatusBar translucent backgroundColor="rgba(0, 0, 0, 0.20)" animated />
        <View style={styles.container}>
          <Text style={styles.text}>Уровень {level}</Text>

          <Card
            style={{
              width: 300
            }}
          >
            <CardContent style={styles.cardContent}>
              <Paragraph style={styles.card}>{poem}</Paragraph>
            </CardContent>
            {/* <CardCover source={{ uri: "https://picsum.photos/700" }} /> */}
          </Card>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <TouchableHighlight>
              <Image
                style={styles.button}
                source={require("../microphone.png")}
              />
            </TouchableHighlight>

            <Button
              style={{
                backgroundColor: "#29B6F6",
                width: 120,
                height: 40,
                marginLeft: 90
              }}
              raised
              color="white"
            >
              Stop
            </Button>
          </View>
          <Text style={styles.text}>Ваша речь:</Text>

          <Card style={{ width: 300 }}>
            <CardContent style={styles.cardContent}>
              <Paragraph style={styles.card}>
                Тощий немощный Кощей Тащит ящик овощей.
              </Paragraph>
            </CardContent>
          </Card>

          <Button
            style={{ backgroundColor: "#FFAB40", width: 150 }}
            color="white"
            compact
            onPress={this.showResults}
          >
            Результаты
          </Button>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    // marginBottom: 10,
    width: 70,
    height: 70
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#CFD8DC",
    height: 660
  },
  card: {
    color: "white",
    textAlign: "center",
    fontFamily: "Cormorant-Regular",
    fontSize: 20
  },
  cardContent: {
    backgroundColor: "#C2185B"
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    fontFamily: "OldStandard-Regular",
    color: "#C2185B",
    marginTop: 20
  }
});
//OldStandard-Regular
//this.props.navigation.state.params.color

AppRegistry.registerComponent("VoiceTest", () => VoiceTest);
