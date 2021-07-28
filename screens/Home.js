import React from "react";
import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from "react-native";

import { restaurants } from "../data";

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
        </View>
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
        marginBottom: 10,
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
});
