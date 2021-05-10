import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const image = {
  uri: "https://images.dog.ceo/breeds/deerhound-scottish/n02092002_6380.jpg",
};

const AppView = () => {
  const [pic, setPic] = useState({ message: "" });

  const addPhoto = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((json) => setPic(json))
      .catch((error) => console.error(error));
  };

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <TouchableOpacity onPress={addPhoto}>
          <Text style={styles.text}>CHANGE PHOTO</Text>
        </TouchableOpacity>
      </View>
      {!pic.message ? (
        <View>
          <Image style={styles.image} source={image} />
        </View>
      ) : (
        <View>
          <Image style={styles.image} source={{ uri: pic.message }} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    alignItems: "center",
    backgroundColor: "black",
  },
  image: {
    width: 350,
    height: 400,
    resizeMode: "contain",
  },
  button: {
    alignItems: "center",
    width: "50%",
    borderWidth: 1,
    borderColor: "#fff",
    padding: 10,
    marginVertical: 15,
    backgroundColor: "#00ced1",
  },
  text: {
    color: "#fff",
    fontSize: 17,
  },
});

export default AppView;
