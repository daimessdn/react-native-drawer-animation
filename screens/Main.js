import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Animated,
  Dimensions,
  Easing,
} from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Main = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  // animation state
  const scale = useRef(new Animated.Value(1)).current;
  const translateX = useRef(new Animated.Value(0)).current;
  const borderRadius = useRef(new Animated.Value(0)).current;

  // open drawer function + animation
  const openDrawer = (drawerOpen) => {
    Animated.timing(scale, {
      toValue: drawerOpen ? 0.85 : 1,
      duration: 300,
      easing: Easing.bezier(0.04, 0.86, 0.72, 0.99),
      useNativeDriver: true,
    }).start();
    Animated.timing(translateX, {
      toValue: drawerOpen ? 200 : 0,
      duration: 300,
      easing: Easing.bezier(0.04, 0.86, 0.72, 0.99),
      useNativeDriver: true,
    }).start();
    Animated.timing(borderRadius, {
      toValue: drawerOpen ? 10 : 0,
      duration: 300,
      easing: Easing.bezier(0.04, 0.86, 0.72, 0.99),
      useNativeDriver: true,
    }).start();

    setDrawerOpen(drawerOpen);
  };

  return (
    <>
      <StatusBar hidden />

      <View
        style={
          (styles.container,
          {
            backgroundColor: "#011627",
            width: width,
            height: height,
            padding: 10,
          })
        }
      >
        <Animated.View
          style={{
            backgroundColor: "#fff",
            height: height,
            width: width,
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 100,
            transform: [{ scale }, { translateX }],
            elevation: 10,
            borderRadius,
          }}
        >
          <TouchableOpacity
            style={{
              margin: 10,
              padding: 10,
              backgroundColor: "#ff0022",
              alignSelf: "flex-start",
              borderRadius: 10,
              elevation: 3,
            }}
            onPress={() => openDrawer(!drawerOpen)}
          >
            <Text
              style={{
                textAlign: "center",
                color: "#fff",
                fontFamily: "Work Sans",
              }}
            >
              Click me!
            </Text>
          </TouchableOpacity>
        </Animated.View>

        <View style={styles.drawerMenu}>
          <TouchableOpacity style={{ marginBottom: 15, }} onPress={() => { openDrawer(!drawerOpen) }}>
            <Text style={{ color: "#fff", fontFamily: "Work Sans", fontSize: 18, color: "#FABC3C" }}>
              Home
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ marginBottom: 15, }} onPress={() => { openDrawer(!drawerOpen) }}>
            <Text style={{ color: "#fff", fontFamily: "Work Sans", fontSize: 18 }}>
              Orders
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ marginBottom: 15, }} onPress={() => { openDrawer(!drawerOpen) }}>
            <Text style={{ color: "#fff", fontFamily: "Work Sans", fontSize: 18 }}>
              Profile
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
