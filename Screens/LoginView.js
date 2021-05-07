import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Alert,
  TextInput,
  TouchableOpacity,
  Text,
  ImageBackground,
} from "react-native";

const image = {
  uri:
    "https://images.pexels.com/photos/2760856/pexels-photo-2760856.jpeg?cs=srgb&dl=pexels-jeffrey-czum-2760856.jpg&fm=jpg",
};

const LoginView = (props) => {
  const [enteredEmail, setEmail] = useState("");
  const [enteredPassword, setPassword] = useState("");

  const { container, inputEmail, inputPassword, button, text } = styles;

  const inputEnterMail = (email) => {
    setEmail(email);
    console.log(email);
  };

  const inputEnterPassword = (password) => {
    setPassword(password);
    console.log(password);
  };
  const wrongAlert = () => {
    Alert.alert("Wrong Email or Password, try again!");
    setPassword("");
    setEmail("");
  };

  return (
    <ImageBackground source={image} style={styles.image}>
      <View style={container}>
        <View>
          <Text style={text}>LOGIN REACT APP</Text>
        </View>

        <TextInput
          onChangeText={inputEnterMail}
          style={inputEmail}
          placeholder="Enter email"
          value={enteredEmail}
        />
        <TextInput
          onChangeText={inputEnterPassword}
          style={inputPassword}
          placeholder="Enter password"
          value={enteredPassword}
        />

        <View style={{ marginTop: 30, borderWidth: 1, width: 120 }}>
          <TouchableOpacity style={button} color="#000" onPress={wrongAlert}>
            <Text>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  text: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#000",
  },
  container: {
    alignItems: "center",
    marginTop: "50%",
  },
  inputEmail: {
    borderBottomWidth: 1,
    padding: 10,
    marginTop: 20,
    width: 200,
  },
  inputPassword: {
    borderBottomWidth: 1,
    padding: 10,
    marginTop: 20,
    width: 200,
  },
  button: {
    alignItems: "center",
    padding: 8,
  },
});

export default LoginView;
