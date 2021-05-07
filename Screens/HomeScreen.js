import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

const image = {
  uri:
    "https://images.pexels.com/photos/2760856/pexels-photo-2760856.jpeg?cs=srgb&dl=pexels-jeffrey-czum-2760856.jpg&fm=jpg",
};

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground source={image} style={styles.image}>
      <View style={styles.container}>
        <Text style={styles.text}>REACT NATIVE PRACTICE</Text>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            style={styles.button}
            color="#000"
            title="Counter App"
            onPress={() => navigation.navigate("Counter")}
          >
            <Text>APP COUNTER</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            style={styles.button}
            title="Counter App"
            onPress={() => navigation.navigate("Login View")}
          >
            <Text>LOGIN VIEW</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginVertical: "40%",
  },
  image: {
    flex: 1,
  },
  text: {
    color: "white",
    fontSize: 21,
    fontWeight: "bold",
    textAlign: "center",
    color: "#000",
  },
  button: {
    alignItems: "center",
    padding: 8,
  },
  buttonWrapper: {
    marginTop: 30,
    borderWidth: 1,
    width: 180,
  },
});

export default HomeScreen;
