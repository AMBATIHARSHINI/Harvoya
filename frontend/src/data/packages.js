import switzerland from "../assets/images/switzerland.jpg";
import japan from "../assets/images/japan.jpg";
import maldives from "../assets/images/maldives.jpg";
import italy from "../assets/images/italy.jpg";
import bali from "../assets/images/bali.jpg";
import paris from "../assets/images/paris.jpg";

const packages = [
  {
    id: 1,
    title: "Maldives Escape",
    location: "Maldives",
    image: maldives,
    duration: "5 Days • 4 Nights",
    rating: 4.9,
    oldPrice: "$1199",
    newPrice: "$899",
    badge: "🔥 Best Seller",
    includes: [
      "Luxury Resort",
      "Flights Included",
      "Breakfast Included",
      "Airport Pickup",
    ],
  },
  {
    id: 2,
    title: "Bali Paradise",
    location: "Bali",
    image: bali,
    duration: "6 Days • 5 Nights",
    rating: 4.8,
    oldPrice: "$1299",
    newPrice: "$999",
    badge: "🌴 Summer Deal",
    includes: [
      "Beach Resort",
      "Airport Transfer",
      "Breakfast",
      "Free Cancellation",
    ],
  },
  {
    id: 3,
    title: "Romantic Paris",
    location: "France",
    image: paris,
    duration: "4 Days • 3 Nights",
    rating: 4.9,
    oldPrice: "$1499",
    newPrice: "$1199",
    badge: "✨ New",
    includes: [
      "Luxury Hotel",
      "City Tour",
      "Breakfast",
      "Airport Pickup",
    ],
  },
  {
    id: 4,
    title: "Swiss Adventure",
    location: "Switzerland",
    image: switzerland,
    duration: "7 Days • 6 Nights",
    rating: 5.0,
    oldPrice: "$1899",
    newPrice: "$1499",
    badge: "💎 Luxury",
    includes: [
      "Mountain Resort",
      "Train Pass",
      "Breakfast",
      "Sightseeing",
    ],
  },
  {
    id: 5,
    title: "Italian Dream",
    location: "Italy",
    image: italy,
    duration: "5 Days • 4 Nights",
    rating: 4.7,
    oldPrice: "$1399",
    newPrice: "$1099",
    badge: "🔥 Popular",
    includes: [
      "Luxury Stay",
      "Breakfast",
      "Airport Pickup",
      "City Tour",
    ],
  },
  {
    id: 6,
    title: "Japan Explorer",
    location: "Japan",
    image: japan,
    duration: "6 Days • 5 Nights",
    rating: 4.9,
    oldPrice: "$1699",
    newPrice: "$1399",
    badge: "🎌 Trending",
    includes: [
      "Hotel Stay",
      "Breakfast",
      "Airport Pickup",
      "Temple Tour",
    ],
  },
];

export default packages;