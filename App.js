import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./Screens/HomeScreen";
import CounterScreen from "./Screens/CounterScreen";
import LoginView from "./Screens/LoginView";
import ApiView from "./Screens/ApiView";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home Screen"
          component={HomeScreen}
          options={{
            headerStyle: {
              backgroundColor: "#00ced1",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Counter"
          component={CounterScreen}
          options={{
            headerStyle: {
              backgroundColor: "#48d1cc",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Login View"
          component={LoginView}
          options={{
            headerStyle: {
              backgroundColor: "#48d1cc",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Api Screen"
          component={ApiView}
          options={{
            headerStyle: {
              backgroundColor: "#48d1cc",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
