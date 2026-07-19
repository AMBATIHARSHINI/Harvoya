// ================= HERO IMAGES =================

import maldives from "../assets/images/maldives.jpg";
import bali from "../assets/images/bali.jpg";
import paris from "../assets/images/paris.jpg";
import switzerland from "../assets/images/switzerland.jpg";
import italy from "../assets/images/italy.jpg";
import japan from "../assets/images/japan.jpg";


// ================= MALDIVES GALLERY =================

import maldives1 from "../assets/gallery/maldives/maldives1.jpg";
import maldives2 from "../assets/gallery/maldives/maldives2.jpg";
import maldives3 from "../assets/gallery/maldives/maldives3.jpg";
import maldives4 from "../assets/gallery/maldives/maldives4.jpg";
import maldives5 from "../assets/gallery/maldives/maldives5.jpg";


// ================= BALI GALLERY =================

import bali1 from "../assets/gallery/bali/bali1.jpg";
import bali2 from "../assets/gallery/bali/bali2.jpg";
import bali3 from "../assets/gallery/bali/bali3.jpg";
import bali4 from "../assets/gallery/bali/bali4.jpg";
import bali5 from "../assets/gallery/bali/bali5.jpg";


// ================= PARIS GALLERY =================

import paris1 from "../assets/gallery/paris/paris1.jpg";
import paris2 from "../assets/gallery/paris/paris2.jpg";
import paris3 from "../assets/gallery/paris/paris3.jpg";
import paris4 from "../assets/gallery/paris/paris4.jpg";
import paris5 from "../assets/gallery/paris/paris5.jpg";


// ================= SWITZERLAND GALLERY =================

import switzerland1 from "../assets/gallery/switzerland/switzerland1.jpg";
import switzerland2 from "../assets/gallery/switzerland/switzerland2.jpg";
import switzerland3 from "../assets/gallery/switzerland/switzerland3.jpg";
import switzerland4 from "../assets/gallery/switzerland/switzerland4.jpg";
import switzerland5 from "../assets/gallery/switzerland/switzerland5.jpg";


// ================= ITALY GALLERY =================

import italy1 from "../assets/gallery/italy/italy1.jpg";
import italy2 from "../assets/gallery/italy/italy2.jpg";
import italy3 from "../assets/gallery/italy/italy3.jpg";
import italy4 from "../assets/gallery/italy/italy4.jpg";
import italy5 from "../assets/gallery/italy/italy5.jpg";


// ================= JAPAN GALLERY =================

import japan1 from "../assets/gallery/japan/japan1.jpg";
import japan2 from "../assets/gallery/japan/japan2.jpg";
import japan3 from "../assets/gallery/japan/japan3.jpg";
import japan4 from "../assets/gallery/japan/japan4.jpg";
import japan5 from "../assets/gallery/japan/japan5.jpg";



const hotelDetails = [

  {
    id: 1,
    name: "Ocean Paradise Resort",
    image: maldives,

    gallery: [
      maldives1,
      maldives2,
      maldives3,
      maldives4,
      maldives5
    ],

    location: "Maldives",

    price: 299,

    rating: 4.9,

    reviews: 1248,

    description:
      "Ocean Paradise Resort offers luxurious overwater villas, private beaches, infinity pools, world-class dining and unforgettable sunsets. Perfect for honeymooners and luxury travelers.",

    amenities: [
      "Free WiFi",
      "Infinity Pool",
      "Private Beach",
      "Spa",
      "Restaurant",
      "Airport Transfer"
    ]
  },



  {
    id: 2,
    name: "Bali Green Retreat",

    image: bali,

    gallery: [
      bali1,
      bali2,
      bali3,
      bali4,
      bali5
    ],

    location: "Bali",

    price: 189,

    rating: 4.8,

    reviews: 986,

    description:
      "Experience peaceful rice fields, private villas, yoga retreats and authentic Balinese hospitality surrounded by breathtaking tropical nature.",

    amenities: [
      "Free WiFi",
      "Yoga Center",
      "Infinity Pool",
      "Spa",
      "Breakfast",
      "Airport Pickup"
    ]
  },



  {
    id: 3,

    name: "Paris Royal Hotel",

    image: paris,

    gallery: [
      paris1,
      paris2,
      paris3,
      paris4,
      paris5
    ],

    location: "France",

    price: 249,

    rating: 4.9,

    reviews: 1562,

    description:
      "Luxury hotel located near the Eiffel Tower featuring elegant rooms, rooftop dining, spa facilities and breathtaking city views.",

    amenities: [
      "Free WiFi",
      "City View",
      "Restaurant",
      "Spa",
      "Gym",
      "Airport Pickup"
    ]
  },



  {
    id: 4,

    name: "Alpine View Lodge",

    image: switzerland,

    gallery: [
      switzerland1,
      switzerland2,
      switzerland3,
      switzerland4,
      switzerland5
    ],

    location: "Switzerland",

    price: 279,

    rating: 4.8,

    reviews: 824,

    description:
      "Enjoy breathtaking mountain landscapes, cozy luxury cabins, skiing adventures and peaceful alpine surroundings throughout the year.",

    amenities: [
      "Free WiFi",
      "Mountain View",
      "Fireplace",
      "Restaurant",
      "Spa",
      "Parking"
    ]
  },



  {
    id: 5,

    name: "Venice Grand Suites",

    image: italy,

    gallery: [
      italy1,
      italy2,
      italy3,
      italy4,
      italy5
    ],

    location: "Italy",

    price: 219,

    rating: 4.7,

    reviews: 721,

    description:
      "Elegant suites beside the famous Venice canals featuring luxury interiors, gondola rides and romantic Italian experiences.",

    amenities: [
      "Free WiFi",
      "Breakfast",
      "Canal View",
      "Restaurant",
      "Airport Pickup",
      "Room Service"
    ]
  },



  {
    id: 6,

    name: "Kyoto Zen Stay",

    image: japan,

    gallery: [
      japan1,
      japan2,
      japan3,
      japan4,
      japan5
    ],

    location: "Japan",

    price: 239,

    rating: 4.9,

    reviews: 1350,

    description:
      "Traditional Japanese hospitality combined with modern luxury, peaceful gardens and beautiful temple views in the heart of Kyoto.",

    amenities: [
      "Free WiFi",
      "Onsen",
      "Restaurant",
      "Tea Ceremony",
      "Garden",
      "Airport Pickup"
    ]
  }

];

export default hotelDetails;