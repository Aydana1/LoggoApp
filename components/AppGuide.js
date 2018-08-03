import React from "react";
import { View, StyleSheet, Text, StatusBar } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 320
  }
});

const levels = [
  {
    key: "somethun",
    title: "Уровень 1",
    // text: "Буквы С, Р, Ш",
    info: {
      poem: "Цыплята и курица пьют чай на улице.",
      level: 1,
      img: require("../assets/images/1.jpg")
    },
    // image: require('./assets/1.jpg'),
    // imageStyle: styles.image,
    backgroundColor: "#C2185B",
    titleStyle: { color: "white", fontFamily: "CormorantInfant-Bold" }
  },
  {
    key: "somethun-dos",
    title: "Уровень 2",
    // text: "Буквы К, Ж, П",
    info: {
      poem: "Жадный жук жёлтопуз пожалел дружку арбуз.        ",
      level: 2,
      img: require("../assets/images/2.jpg")
    },

    // image: require('./assets/2.jpg'),
    // imageStyle: styles.image,
    backgroundColor: "#FFAB40",
    titleStyle: { color: "white", fontFamily: "CormorantInfant-Bold" }
  },
  {
    key: "somethun3",
    title: "Уровень 3",
    // text: "Буквы Х, Ф, Ц",
    info: {
      poem: "Чеpепaхa, не скучaя, чaс сидит зa чaшкой чaя.",
      level: 3,
      img: require("../assets/images/3.jpg")
    },

    backgroundColor: "#00BFA5",
    titleStyle: { color: "white", fontFamily: "CormorantInfant-Bold" }
  },
  {
    key: "somethun4",
    title: "Уровень 4",
    // text: "Буквы Х, Ф, Ц",
    info: {
      poem: "Выскочила мышка из-под рундучка, И опять под рундучок.",
      level: 4,
      img: require("../assets/images/4.jpeg")
    },

    backgroundColor: "#8E24AA",
    titleStyle: { color: "white", fontFamily: "CormorantInfant-Bold" }
  }
];

export default class AppGuide extends React.Component {
  state = {
    showRealApp: false
  };

  _onDone = () => {
    this.setState({ showRealApp: true });
  };

  itemPress = index => {
    const currentLevel = levels[index];

    if (currentLevel) {
      this.props.navigation.navigate("VoiceTest", { currentLevel });
    } else {
      console.warn("Current level is empty");
    }
  };

  render() {
    if (this.state.showRealApp) {
      return <AppGuide />;
    } else {
      return (
        <AppIntroSlider
          slides={levels}
          onItemPress={index => this.itemPress(index)}
        />
      );
    }
  }
}
