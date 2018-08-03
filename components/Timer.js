import React from "react";
import { Text, View } from "react-native";

export default class Timer extends React.Component {
  state = {
    timer: null,
    counter: 0
  };

  componentDidMount() {
    let timer = setInterval(this.tick, 1000);
    this.setState({ timer });
  }

  componentWillUnmount() {
    this.clearInterval(this.state.timer);
  }

  tick() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  render() {
    <View>
      <Text>Loading{"...".substr(0, (this.state.counter % 3) + 1)}</Text>
    </View>;
  }
}
