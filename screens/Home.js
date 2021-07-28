import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  Dimensions,
  View,
  TouchableOpacity,
} from "react-native";

import { foodMenu, restaurants } from "../data";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Icon1 = foodMenu[0].icon;

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.placeSection}>
        <Text style={styles.sectionTitle}>Food court nearby.</Text>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={restaurants}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <TouchableOpacity key={index} style={styles.restaurantItem}>
              <Image
                source={item.imageUri}
                style={{ width: 200, height: 100 }}
              />

              <View style={styles.restaurantItemTextSection}>
                <Text style={styles.restauranItemTextTitle}>{item.name}</Text>
                <Text style={styles.restauranItemText}>{item.location}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>

      <View>
        <Text style={styles.sectionTitle}>Find your favorite food</Text>
        <FlatList
          horizontal
          style={styles.menuOptions}
          data={foodMenu}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "space-between",
          }}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => {
            const Icon = item.icon;

            return (
              <TouchableOpacity style={styles.menuItem}>
                <Icon height={40} width={40} />
                <Text style={styles.iconText}>{item.name}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {},
  sectionTitle: {
    fontFamily: "Work Sans Bold",
    fontWeight: "800",
    fontSize: 17,
    marginVertical: 10,
  },
  restaurantItem: {
    width: 202,
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    elevation: 10,
    borderColor: "#000",
    borderWidth: 1,
    marginRight: 10,
  },
  restaurantItemTextSection: {
    padding: 10,
  },
  restauranItemTextTitle: {
    fontFamily: "Work Sans Bold",
    fontWeight: "800",
  },
  restauranItemText: {
    fontFamily: "Work Sans",
  },
  menuOptions: {
    width: width - 30,
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: "#eee",
  },
  menuItem: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconText: {
    fontFamily: "Work Sans",
  },
});
