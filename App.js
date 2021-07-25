import React, { useState, useRef } from "react";
import { StyleSheet } from "react-native";

import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import Main from "./screens/Main";

export default function App() {
  const [loaded] = useFonts({
    "Work Sans": require("./assets/fonts/WorkSans-Regular.ttf"),
    "Work Sans Bold": require("./assets/fonts/WorkSans-Bold.ttf"),
  });

  return loaded ? <Main /> : <AppLoading />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
