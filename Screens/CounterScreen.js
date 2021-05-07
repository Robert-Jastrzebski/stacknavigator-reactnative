import React, { Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Colors from "../constans/colors";

const image = {
  uri:
    "https://images.pexels.com/photos/2760856/pexels-photo-2760856.jpeg?cs=srgb&dl=pexels-jeffrey-czum-2760856.jpg&fm=jpg",
};

class CounterScreen extends Component {
  state = {
    count: 0,
  };

  increaseCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decreaseCount = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  resetCounter = () => {
    this.setState({
      count: 0,
    });
  };

  render() {
    return (
      <ImageBackground source={image} style={styles.image}>
        <SafeAreaView style={styles.wrapperApp}>
          <View style={styles.textWrapper}>
            <Text style={styles.textApp}> Counter App </Text>
          </View>
          <View style={styles.wprapperCounter}>
            <TouchableOpacity onPress={this.decreaseCount}>
              <Text style={styles.text}> - </Text>
            </TouchableOpacity>
            <Text style={styles.text}> {this.state.count} </Text>
            <TouchableOpacity onPress={this.increaseCount}>
              <Text style={styles.text}> + </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.resetButton}>
            <TouchableOpacity onPress={this.resetCounter}>
              <Text style={styles.textResetButton}> Reset </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  wrapperApp: {
    flex: 1,
    marginVertical: "50%",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  wprapperCounter: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",

    marginVertical: 40,
  },
  textWrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  textApp: {
    fontSize: 30,
    color: Colors.primary,
  },

  text: {
    fontSize: 70,
    color: Colors.primary,
  },

  resetButton: {
    alignItems: "center",
  },
  textResetButton: {
    color: Colors.primary,
    fontSize: 30,
  },
});

export default CounterScreen;
