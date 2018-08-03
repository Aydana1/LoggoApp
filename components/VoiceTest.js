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
      words: []
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
    const words = e.value[0].spit(" ");
    this.setState({ words });
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

  showResults = () => {
    this.props.navigation.navigate("Results");
  };

  render() {
    const { currentLevel } = this.props.navigation.state.params;
    const { info, backgroundColor } = currentLevel;
    console.log("backgroundColor", backgroundColor);
    const { poem, level, img } = info;

    const poem_filtered = poem.replace(/[\.\,]/g, "");
    const terms = poem_filtered.split(" ");

    // const results = this.state.results.map(result => {
    //   const words = result.split(" "); //removing spaces between words and storing them in an array

    console.log("RRRRRR ", this.state.results);

    // var matched = 0;
    // var not_matched = 0;

    // for (var i = 0; i < poem_filtered.length; ++i) {
    //   // console.log(words[i], terms[i]);
    //   if (words[i] != undefined && terms[i] != undefined) {
    //     if (words[i].toLowerCase() === terms[i].toLowerCase()) {
    //       matched++;
    //       console.log(matched);
    //     } else {
    //       not_matched++;
    //     }
    //   }
    // }
    // var score = (matched / terms.length) * 100;
    // console.log("YOUR SCORE ", score);
    // });

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
            <CardContent style={[styles.cardContent, { backgroundColor }]}>
              <Paragraph style={styles.card}>{poem}</Paragraph>
            </CardContent>
            <CardCover style={styles.image} source={img} />
          </Card>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <TouchableHighlight onPress={this._startRecognizing.bind(this)}>
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
              onPress={this._stopRecognizing.bind(this)}
            >
              Stop
            </Button>
          </View>

          <Text style={styles.text}>Ваша речь:</Text>
          <Card style={{ width: 300 }}>
            <CardContent style={styles.cardContent}>
              <Paragraph style={styles.card}>{this.state.results}</Paragraph>
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
  image: {
    resizeMode: "contain"
  },
  button: {
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
    // fontFamily: "Cormorant-Regular",
    fontFamily: "Kurale-Regular",

    fontSize: 20
  },
  cardContent: {
    backgroundColor: "#C2185B"
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    fontFamily: "CormorantInfant-Bold",
    color: "#C2185B",
    marginTop: 20
  }
});
//OldStandard-Regular
//this.props.navigation.state.params.color

AppRegistry.registerComponent("VoiceTest", () => VoiceTest);
