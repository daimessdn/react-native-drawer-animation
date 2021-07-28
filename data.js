// SVG item for menu item
import Beverages from "./assets/svg/Beverages";
import LocalMeat from "./assets/svg/LocalMeat";
import Pizza from "./assets/svg/PIzza";
import Salad from "./assets/svg/Salad";

export const restaurants = [
  {
    id: "1",
    name: "Warung SS Depok",
    location: "Depok, West Java",
    imageUri: require("./assets/restaurant-photo/photo3jpg.jpg"),
  },
  {
    id: "2",
    name: "Sate Khas Senayan",
    location: "Depok, West Java",
    imageUri: require("./assets/restaurant-photo/sate-khas-senayan-depok.jpg"),
  },
  {
    id: "3",
    name: "Restoran Mang Engking",
    location: "Depok, West Java",
    imageUri: require("./assets/restaurant-photo/cocok-bawa-keluarga.jpg"),
  },
];

export const foodMenu = [
  {
    id: "1",
    icon: Salad,
    name: "Salad",
  },
  {
    id: "2",
    icon: Pizza,
    name: "Pizza",
  },
  {
    id: "3",
    icon: LocalMeat,
    name: "Local Meat",
  },
  {
    id: "4",
    icon: Beverages,
    name: "Beverages",
  },
];

export const breakfastMenu = [
  {
    id: "1",
    name: "Lontong Sayur",
    image: require("./assets/food-menu/6099df69ead68.jpeg"),
    price: 15000,
    rating: 4.6,
    store: "Warung Tupat Bu Sri",
    location: "Pamulang, Banten"
  },
  {
    id: "2",
    name: "Bubur Ayam Gempor",
    image: require("./assets/food-menu/5f09e008e7fee.jpg"),
    price: 12000,
    rating: 4.5,
    store: "Bubur Ayam Tasik Kang Maman",
    location: "Depok, West Java"
  },
  {
    id: "3",
    name: "Nasi Uduk Betawi",
    image: require("./assets/food-menu/6032066dc88e0.jpg"),
    price: 13000,
    rating: 4.3,
    store: "Warung Nasi Uduk Bu Irma",
    location: "Bogor, West Java"
  }
]