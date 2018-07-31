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
// import jsdiff from "diff";
var jsdiff = require("diff");
console.log("1", jsdiff);

import { Provider, Button, Card, Title, Paragraph } from "react-native-paper";

import Voice from "react-native-voice";
import CardContent from "../node_modules/react-native-paper/src/components/Card/CardContent";
import CardCover from "../node_modules/react-native-paper/src/components/Card/CardCover";

export default class VoiceTest extends Component {
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
      poems: [
        {
          level: 1,
          text:
            "У Сени и Сани в сенях сом с усами. У осы не усы, не усища, а усики."
        },
        {
          level: 2,
          text: "Тощий немощный Кощей Тащит ящик овощей."
        },
        {
          level: 3,
          text: "Шесть мышат в камышах шуршат."
        }
      ],
      outputs: [{ word: "", added: false }]
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
      results: e.value
    });
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
      const or_poems = this.state.poems.map(poem => poem.text);
      const original_poem = or_poems[2];
      console.log(original_poem);
      console.log(this.state.results[0]);
      var diff = jsdiff.diffChars(original_poem, "Шест мышат в камышах шулшат");
      var parts = [];
      diff.forEach(function(part) {
        console.log(part);
        if (part.added) {
          //green
          console.log(part.value);
        } else if (part.removed) {
          //red
          console.log(part.value);
        }
        this.setState({...this.state.outputs, {word: part.value, added: part.added}})
        // parts.push(part.value);
      });
      // console.log("JOINED: ", parts.join(""));

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

  renderItem = ({ item }) => {
    const parts = this.state.outputs.map(part => 
      console.log("PART: ", part.value)
    )
    return (
      <Card>
        <CardContent style={{ backgroundColor: "green" }}>
          <Paragraph style={{ color: "white" }}>{item}</Paragraph>
        </CardContent>
      </Card>
    );
  };

  calculateDifference = ({ poem1 }) => {
    console.log("passed poem1: ", poem1);
    this.props.navigation.navigate("Results");
  };

  render() {
    const or_poems = this.state.poems.map(poem => poem.text);
    const original_poem = or_poems[2];
    var or_words = original_poem.split(" ");
    var synthesized_poems = this.state.results.map(poem => {
      var words = poem.split(" ");
      words.forEach(word => console.log("word: ", word));
      var matched = 0;
      var not_matched = 0;
      for (var i = 0; i < original_poem.length; ++i) {
        //console.log(or_words[i] + " vs. " + words[i]);
        if (or_words[i] != undefined && words[i] != undefined) {
          // console.log("REPLACED: ", or_words[i].replace("[^a-z]+"));
          if (or_words[i].toLowerCase() === words[i].toLowerCase()) {
            //console.log("MATCHED: ", or_words[i].toLowerCase());
            matched++;
          } else {
            //console.log("NOT MATCHED: ", or_words[i].toLowerCase());
            not_matched++;
          }
        }
      }
      console.log("correct: ", matched);
      console.log("incorrect: ", not_matched);
      var score = (matched / or_words.length) * 100;
      console.log("YOUR SCORE ", score);
    });

    return (
      <Provider>
        <ScrollView>
          <View style={{ justifyContent: "center", marginTop: 10 }}>
            <Text style={{ fontSize: 20 }}>Уровень 1</Text>
          </View>

          <Card>
            <CardContent style={{ backgroundColor: "blue" }}>
              <Title style={{ color: "white" }}>Буква С</Title>
              <Paragraph style={{ color: "white" }}>{original_poem}</Paragraph>
            </CardContent>
          </Card>

          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <View>
              <TouchableHighlight
                style={{ marginTop: 10 }}
                onPress={this._startRecognizing.bind(this)}
              >
                <Image
                  style={styles.button}
                  source={require("../button.png")}
                />
              </TouchableHighlight>
            </View>

            <Button
              style={{ backgroundColor: "pink" }}
              raised
              onPress={this._stopRecognizing.bind(this)}
            >
              Stop
            </Button>
          </View>

          <Text style={{ fontSize: 15 }}>Your speech:</Text>
          <FlatList
            data={this.state.results}
            renderItem={this.renderItem}
            keyExtractor={item => item}
          />

          <Button
            style={{ backgroundColor: "pink" }}
            raised
            onPress={() => this.calculateDifference(original_poem)}
          >
            See results
          </Button>
        </ScrollView>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginBottom: 10
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});

AppRegistry.registerComponent("VoiceTest", () => VoiceTest);
