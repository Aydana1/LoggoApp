import React from "react";
import { Text, View } from "react-native";
import {
  createBottomTabNavigator,
  TabBarBottom,
  tabBarComponent
} from "react-navigation"; // Version can be specified in package.json
import Icon from "react-native-vector-icons/Ionicons";

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {/* <Text>Home!</Text> */}
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

class Dashboard extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Dashboard!</Text>
      </View>
    );
  }
}

export default createBottomTabNavigator(
  {
    Home: { screen: HomeScreen },
    Settings: { screen: SettingsScreen },
    Dashboard: { screen: Dashboard }
  }
  // {
  //   navigationOptions: ({ navigation }) => ({
  //     tabBarIcon: ({ focused, tintColor }) => {
  //       const { routeName } = navigation.state;
  //       let iconName;
  //       if (routeName === "Home") {
  //         iconName = "contact";
  //       } else if (routeName === "Settings") {
  //         iconName = "easel";
  //       } else if (routeName === "Dashboard") {
  //         iconName = "heart";
  //       }

  //       // You can return any component that you like here! We usually use an
  //       // icon component from react-native-vector-icons
  //       return <Icon name={iconName} size={25} color={tintColor} />;
  //     }
  //   })
  //   // tabBarComponent: TabBarBottom,
  //   // tabBarPosition: "bottom",
  //   // tabBarOptions: {
  //   //   activeTintColor: "tomato",
  //   //   inactiveTintColor: "gray"
  //   // },
  //   // animationEnabled: false,
  //   // swipeEnabled: false
  // }
);

//<ion-icon name="easel"></ion-icon>
