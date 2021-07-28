import React from 'react'
import { ScrollView, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import CheckListIcon from '../assets/svg/CheckList';
import DeliveryProgress from '../assets/svg/DeliveryProgress';
import Star from '../assets/svg/Star';
import { orderInProgress, ordersHistory } from '../data'

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Orders = () => {
  const generateRating = (rating) => {
    let result = [];

    for (let i = 0; i < rating; i++) {
      result.push("");
    }

    return result;
  };

  return (
    <ScrollView>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          Orders in Progress
        </Text>

        {
          orderInProgress.map((item, index) => (
            <TouchableOpacity key={index} style={styles.orderItem}>
              <Text style={styles.orderItemTitle}>{item.name}</Text>

              <Text style={styles.orderItemText} numberOfLines={1}>{item.store}</Text>
              <Text style={styles.orderItemText} numberOfLines={1}>{item.location}</Text>

              <View style={styles.deliveryInProgress}>
                <DeliveryProgress width={20} height={20} style={{ marginRight: 5 }} />
                <Text style={styles.orderItemText}>Delivery in progress.</Text>
              </View>
            </TouchableOpacity>
          ))
        }
      </View>

      <View style={[styles.section, { marginBottom: 100 }]}>
        <Text style={styles.sectionTitle}>
          Order History
        </Text>

        {
          ordersHistory.map((item, index) => (
            <TouchableOpacity key={index} style={styles.orderItem}>
              <Text style={styles.orderItemTitle}>{item.name}</Text>

              <Text style={styles.orderItemText} numberOfLines={1}>{item.store}</Text>
              <Text style={styles.orderItemText} numberOfLines={1}>{item.location}</Text>

              <View style={styles.deliveryInProgress}>
                <CheckListIcon color="#2a9d8f" width={20} height={20} style={{ marginRight: 5 }} />
                <Text style={styles.orderItemText}>Ordered at {new Date(item.dateOrdered * 1000).toDateString()}.</Text>
              </View>

              <View style={styles.deliveryInProgress}>
                <Text style={styles.orderItemText}>Your rating:</Text>
                {
                  generateRating(item.userRating).map((ratingItem, ratingIndex) => (
                    <Star key={ratingIndex} width={20} height={20} style={{ marginLeft: 5 }} />
                  ))
                }
              </View>
            </TouchableOpacity>
          ))
        }
      </View>
    </ScrollView>
  )
}

export default Orders

const styles = StyleSheet.create({
  section: {

  },
  sectionTitle: {
    fontFamily: "Work Sans Bold",
    fontWeight: "800",
    fontSize: 17,
    marginVertical: 10,
  },
  orderItem: {
    width: width - 30,
    padding: 10,
    borderRadius: 10,
    borderColor: "#000",
    borderWidth: 1,
    marginBottom: 10
  },
  orderItemTitle: {
    fontFamily: "Work Sans Bold",
    fontWeight: "800"
  },
  orderItemText: {
    fontFamily: "Work Sans"
  },
  deliveryInProgress: {
    flexDirection: "row",
    alignItems: "center"
  }
})
