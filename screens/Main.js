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

import { Ionicons } from "@expo/vector-icons";

// screen components
import Home from "./Home";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Main = () => {
  // drawer open state
  const [drawerOpen, setDrawerOpen] = useState(false);

  // current menu state
  const [currentMenu, setCurrentMenu] = useState("Home");

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
      <StatusBar barStyle="light-content" translucent={false} />

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
            backgroundColor: "#eee",
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
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              style={{
                padding: 10,
                width: (width * 2) / 10,
                alignContent: "flex-end",
              }}
              onPress={() => openDrawer(!drawerOpen)}
            >
              <Ionicons
                name={drawerOpen ? "close" : "menu"}
                size={30}
                color="black"
              />
            </TouchableOpacity>

            <View
              style={{
                width: (width * 6) / 10,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "Work Sans Bold",
                  fontSize: 18,
                  fontWeight: "800",
                }}
              >
                {currentMenu}
              </Text>
            </View>
            <View style={{ width: (width * 2) / 10, height: 10 }} />
          </View>

          <View style={{ marginTop: 5, marginLeft: 15 }}>
            {currentMenu === "Home" ? (
              <Home />
            ) : currentMenu === "Orders" ? (
              <Text>Order your foods here!</Text>
            ) : (
              <Text>Here's your profile</Text>
            )}
          </View>
        </Animated.View>

        <View style={styles.drawerMenu}>
          <TouchableOpacity
            style={{ marginBottom: 20 }}
            onPress={() => {
              setCurrentMenu("Home");
              openDrawer(!drawerOpen);
            }}
          >
            <Text
              style={{
                color: currentMenu === "Home" ? "#FABC3C" : "#fff",
                fontFamily:
                  currentMenu === "Home" ? "Work Sans Bold" : "Work Sans",
                fontSize: 18,
              }}
            >
              Home
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ marginBottom: 20 }}
            onPress={() => {
              setCurrentMenu("Orders");
              openDrawer(!drawerOpen);
            }}
          >
            <Text
              style={{
                color: currentMenu === "Orders" ? "#FABC3C" : "#fff",
                fontFamily:
                  currentMenu === "Orders" ? "Work Sans Bold" : "Work Sans",
                fontSize: 18,
              }}
            >
              Orders
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ marginBottom: 20 }}
            onPress={() => {
              setCurrentMenu("Profile");
              openDrawer(!drawerOpen);
            }}
          >
            <Text
              style={{
                color: currentMenu === "Profile" ? "#FABC3C" : "#fff",
                fontFamily:
                  currentMenu === "Profile" ? "Work Sans Bold" : "Work Sans",
                fontWeight: "500",
                fontSize: 18,
              }}
            >
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
  },
});
