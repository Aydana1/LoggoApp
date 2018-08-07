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
import Voice from "react-native-voice";

export default class VoiceTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recognized: "",
      pitch: "",
      error: "",
      end: "",
      started: "",
      results: [],
      partialResults: [],
      words: [],
      buttonStateHolder: true //must be true
    };
    Voice.onSpeechStart = this.onSpeechStart.bind(this);
    Voice.onSpeechRecognized = this.onSpeechRecognized.bind(this);
    Voice.onSpeechEnd = this.onSpeechEnd.bind(this);
    Voice.onSpeechError = this.onSpeechError.bind(this);
    Voice.onSpeechResults = this.onSpeechResults.bind(this);
    Voice.onSpeechPartialResults = this.onSpeechPartialResults.bind(this);
    Voice.onSpeechVolumeChanged = this.onSpeechVolumeChanged.bind(this);
  }

  componentWillUnmount() {
    Voice.destroy().then(Voice.removeAllListeners);
  }

  onSpeechStart(e) {
    this.setState({
      started: "√"
    });
  }

  onSpeechRecognized(e) {
    this.setState({
      recognized: "√"
    });
  }

  onSpeechEnd(e) {
    this.setState({
      end: "√"
    });
  }

  onSpeechError(e) {
    this.setState({
      error: JSON.stringify(e.error)
    });
  }

  onSpeechResults(e) {
    this.setState({
      results: e.value[0]
    });
    const words = e.value[0].split(" ");
    this.setState({ words });
    if (e.value[0] != "") {
      this.setState({ buttonStateHolder: false });
    }
    console.log("RESULT: ", e.value[0]);
    console.log("WORDS: ", words);
  }

  onSpeechPartialResults(e) {
    this.setState({
      partialResults: e.value
    });
  }

  onSpeechVolumeChanged(e) {
    this.setState({
      pitch: e.value
    });
  }

  async _startRecognizing(e) {
    this.setState({
      recognized: "",
      pitch: "",
      error: "",
      started: "",
      results: [],
      partialResults: [],
      end: ""
    });

    try {
      await Voice.start("ru-RU");
    } catch (e) {
      console.error(e);
    }
  }

  async _stopRecognizing(e) {
    try {
      await Voice.stop();
    } catch (e) {
      console.error(e);
    }
  }

  async _cancelRecognizing(e) {
    try {
      await Voice.cancel();
    } catch (e) {
      console.error(e);
    }
  }

  async _destroyRecognizer(e) {
    try {
      await Voice.destroy();
    } catch (e) {
      console.error(e);
    }
    this.setState({
      recognized: "",
      pitch: "",
      error: "",
      started: "",
      results: [],
      partialResults: [],
      end: ""
    });
  }

  showResults = ({
    value,
    points,
    matched,
    not_matched,
    poem_filtered,
    results
  }) => {
    console.log("POINTS ", points);
    this.props.navigation.navigate("Results", {
      value,
      points,
      matched,
      not_matched,
      poem_filtered,
      results
    });
  };

  render() {
    const { currentLevel } = this.props.navigation.state.params;
    const { info, backgroundColor } = currentLevel;
    const { poem, level, img } = info;

    const poem_filtered = poem.replace(/[\.\,]/g, "");
    const terms = poem_filtered.split(" ");
    const color = backgroundColor;
    const results = this.state.results;

    var matched = 0;
    var not_matched = 0;
    for (var i = 0; i < poem_filtered.length; ++i) {
      if (this.state.words[i] != undefined && terms[i] != undefined) {
        if (this.state.words[i].toLowerCase() === terms[i].toLowerCase()) {
          matched++;
        } else {
          not_matched++;
        }
      }
    }
    const score = (matched / terms.length) * 100;
    const value = Math.round(score * 100) / 100;

    var points = 0;
    if (value <= 40 && value >= 20) {
      points += 10;
    } else if (value >= 40 && value <= 60) {
      points += 20;
    } else if (value >= 60 && value <= 80) {
      points += 30;
    } else if (value >= 80 && value <= 90) {
      points += 40;
    } else if (value >= 90) {
      points += 50;
    } else if (value <= 20) {
      points += 5;
    }
    return (
      <ScrollView
        style={{
          height: 700,
          backgroundColor: "#E0F7FA"
        }}
      >
        <StatusBar translucent backgroundColor="rgba(0, 0, 0, 0.20)" animated />
        <View style={styles.container}>
          <View>
            <Text style={styles.text}>Уровень {level}</Text>

            <Card
              style={{
                width: 300
              }}
            >
              <CardContent style={styles.cardContent}>
                <Paragraph style={styles.card}>{poem}</Paragraph>
              </CardContent>
              <CardCover style={styles.image} source={img} />
            </Card>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <TouchableHighlight onPress={this._startRecognizing.bind(this)}>
              <Image
                style={styles.button}
                source={require("../assets/images/recorder.png")}
              />
            </TouchableHighlight>

            <Text
              style={{
                color: "#00BFA5",
                fontFamily: "Roboto-Regular",
                borderBottomWidth: 0.3,
                borderBottomColor: "#33691E",
                paddingBottom: 30,
                width: 360,
                textAlign: "center"
              }}
            >
              Нажмите на микрофон и начните читать
            </Text>

            <Text style={styles.text}>Ваша речь:</Text>
            <Card style={{ width: 300 }}>
              <CardContent style={styles.cardContent}>
                <Paragraph style={styles.card}>{this.state.results}</Paragraph>
              </CardContent>
            </Card>
          </View>
          <Button
            style={{
              backgroundColor: "#0CD78E",
              width: 150
            }}
            color="white"
            compact
            disabled={this.state.buttonStateHolder}
            onPress={() =>
              this.showResults({
                value,
                points,
                matched,
                not_matched,
                poem_filtered,
                results
              })
            }
          >
            Результаты
          </Button>
        </View>
      </ScrollView>
    );
  }
}

//#FFAB40

const styles = StyleSheet.create({
  image: {
    resizeMode: "contain"
  },
  button: {
    width: 70,
    height: 65,
    marginBottom: 10
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#E0F7FA",
    height: 700
  },
  card: {
    color: "#227033",
    // was #227033
    textAlign: "center",
    fontFamily: "Roboto-Regular",
    fontSize: 18
  },
  cardContent: {
    backgroundColor: "white"
  },
  text: {
    textAlign: "center",
    fontSize: 24,
    fontFamily: "RobotoCondensed-Bold",
    color: "#0CD78E",
    marginBottom: 10,
    marginTop: 30,
    textDecorationLine: "underline"
  }
});
//OldStandard-Regular
//this.props.navigation.state.params.color

AppRegistry.registerComponent("VoiceTest", () => VoiceTest);
