import "./HotelCard.css";
import {
  FaStar,
  FaHeart,
  FaMapMarkerAlt,
  FaWifi,
  FaSwimmingPool,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function HotelCard({ hotel }) {

  const [liked, setLiked] = useState(false);

  useEffect(() => {

    const wishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    const exists =
      wishlist.find(item => item.id === hotel.id);

    if (exists) {
      setLiked(true);
    }

  }, [hotel.id]);

  const handleWishlist = () => {

    let wishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    const exists =
      wishlist.find(item => item.id === hotel.id);

    if (exists) {

      wishlist =
        wishlist.filter(
          item => item.id !== hotel.id
        );

      setLiked(false);

    } else {

      wishlist.push(hotel);

      setLiked(true);

    }

    localStorage.setItem(
      "wishlist",
      JSON.stringify(wishlist)
    );

  };

  return (

    <div className="hotel-card">

      {/* Hotel Image */}

      <div className="hotel-image">

        <img
          src={hotel.image}
          alt={hotel.name}
        />

        <div className="hotel-rating">

          <FaStar />

          <span>{hotel.rating}</span>

        </div>

        {/* Wishlist */}

        <div
          className={`wishlist ${liked ? "active" : ""}`}
          onClick={handleWishlist}
        >

          <FaHeart />

        </div>

      </div>

      {/* Hotel Content */}

      <div className="hotel-content">

        <h3>{hotel.name}</h3>

        <p className="location">

          <FaMapMarkerAlt />

          <span>{hotel.location}</span>

        </p>

        <span className="hotel-type">

          {hotel.type}

        </span>

        <div className="hotel-features">

          <span>

            <FaWifi />

            Free WiFi

          </span>

          <span>

            <FaSwimmingPool />

            Swimming Pool

          </span>

        </div>

        <div className="hotel-bottom">

          <div className="price">

            <small>Starting From</small>

            <h2>

              ${hotel.price}

            </h2>

            <p className="per-night">

              per night

            </p>

          </div>

        </div>

        {/* View Hotel */}

        <Link
          to={`/hotel/${hotel.id}`}
          className="hotel-btn"
        >

          View Hotel →

        </Link>

      </div>

    </div>

  );

}

export default HotelCard;