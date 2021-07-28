import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  Dimensions,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Star from "../assets/svg/Star";

import { breakfastMenu, foodMenu, restaurants } from "../data";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.placeSection}>
        <Text style={styles.sectionTitle}>Food court nearby.</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {restaurants.map((item, index) => (
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
          ))}
        </ScrollView>
      </View>

      <Text style={styles.sectionTitle}>Find your favorite food</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {
          foodMenu.map((item, index) => {
            const Icon = item.icon;

            return (
              <TouchableOpacity key={index} style={styles.menuItem}>
                <Icon height={40} width={40} />
                <Text style={styles.iconText}>{item.name}</Text>
              </TouchableOpacity>
            );
          })
        }
      </ScrollView>

      <View style={{ marginBottom: 100 }}>
        <Text style={styles.sectionTitle}>Time for breakfast</Text>
        <Text style={styles.sectionSubtitle}>Enjoy your breakfast with these appetizing foods.</Text>

        {
          breakfastMenu.map((item, index) => (
            <TouchableOpacity style={[styles.breakfastMenuItem, { marginBottom: 10 }]} key={index}>
              <Image source={item.image} style={styles.breakfastMenuImage} />

              <View style={styles.breakfastMenuInfoSection}>
                <View style={styles.rating}>
                  <Star height={10} width={10} style={{ marginRight: 5 }} />
                  <Text style={styles.breakfastMenuText}>{item.rating}</Text>
                </View>
                <Text style={styles.breakfastMenuTitle}>{item.name}</Text>
                <Text style={styles.breakfastMenuText}>{item.store}</Text>
                <Text style={styles.breakfastMenuText}>{item.location}</Text>
              </View>
            </TouchableOpacity>
          ))
        }
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {

  },
  sectionTitle: {
    fontFamily: "Work Sans Bold",
    fontWeight: "800",
    fontSize: 17,
    marginVertical: 10,
  },
  sectionSubtitle: {
    fontFamily: "Work Sans",
    marginTop: -10,
    marginBottom: 10
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
    width: (width - 30) / 4
  },
  iconText: {
    fontFamily: "Work Sans",
  },
  breakfastMenuItem: {
    width: width - 30,
    flexDirection: "row",
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 10,
    overflow: "hidden",
  },
  breakfastMenuImage: {
    width: ((width - 30) / 2) - 40,
    height: 100
  },
  breakfastMenuInfoSection: {
    width: ((width - 30) / 2) + 40,
    padding: 10
  },
  breakfastMenuTitle: {
    fontFamily: "Work Sans Bold",
    fontWeight: "800"
  },
  breakfastMenuText: {
    fontFamily: "Work Sans",
  },
  rating: {
    position: "absolute",
    top: 10, right: 10,
    flexDirection: "row",
    alignItems: "center"
  }
});
