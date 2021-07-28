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
