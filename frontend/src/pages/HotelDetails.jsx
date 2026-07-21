import "./HotelDetails.css";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import {
  FaStar,
  FaMapMarkerAlt,
  FaHeart,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import hotelDetails from "../data/hotelDetails";
import Reviews from "../components/Reviews";
import Rooms from "../components/Rooms/Rooms";
import NearbyAttractions from "../components/NearbyAttractions";
import BookingCard from "../components/BookingCard";
import SimilarHotels from "../components/SimilarHotels";
import { useWishlist } from "../context/WishlistContext";

function HotelDetails() {
  const { id } = useParams();

  const hotel = hotelDetails.find(
    (item) => item.id === Number(id)
  );

  const [currentImage, setCurrentImage] = useState(0);

  const {
    toggleWishlist,
    isWishlisted,
  } = useWishlist();

  if (!hotel) {
    return <h1>Hotel Not Found</h1>;
  }

  const liked = isWishlisted(hotel.id);

  const previousImage = () => {
    setCurrentImage((prev) =>
      prev === 0
        ? hotel.gallery.length - 1
        : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === hotel.gallery.length - 1
        ? 0
        : prev + 1
    );
  };

  return (
    <div className="hotel-details">

      {/* ================= HERO ================= */}

      <section className="hotel-hero">

        <img
          src={hotel.image}
          alt={hotel.name}
        />

        <div className="hero-overlay">

          <div className="hero-content">

            <div className="hero-rating">

              <FaStar />

              <span>{hotel.rating}</span>

              <small>
                ({hotel.reviews} Reviews)
              </small>

            </div>

            <h1>{hotel.name}</h1>

            <p className="hero-location">

              <FaMapMarkerAlt />

              {hotel.location}

            </p>

            <p className="hero-description">

              {hotel.description}

            </p>

            <div className="hero-bottom">

              <div className="hero-price">

                <small>Starting From</small>

                <h2>

                  ${hotel.price}

                  <span> per night</span>

                </h2>

              </div>

              <div className="hero-buttons">

                <a
                  href="#booking-card"
                  className="book-btn"
                >
                  Book Now
                </a>

                <button
                  className={`wish-btn ${liked ? "active" : ""}`}
                  onClick={() => toggleWishlist(hotel)}
                >
                  <FaHeart />

                  {liked ? "Wishlisted" : "Wishlist"}
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= BOOKING CARD ================= */}

      <BookingCard
        hotelId={hotel.id}
        price={hotel.price}
      />

      {/* ================= GALLERY ================= */}

      <section className="hotel-gallery">

        <div className="gallery-header">

          <h2>Hotel Gallery</h2>

          <p>
            Explore every corner of the hotel before planning your stay.
          </p>

        </div>

        <div className="gallery-wrapper">

          <button
            className="gallery-arrow"
            onClick={previousImage}
          >
            <FaChevronLeft />
          </button>

          <img
            src={hotel.gallery[currentImage]}
            alt={hotel.name}
            className="gallery-main-image"
          />

          <button
            className="gallery-arrow"
            onClick={nextImage}
          >
            <FaChevronRight />
          </button>

        </div>

        <div className="gallery-counter">

          {currentImage + 1} / {hotel.gallery.length}

        </div>

        <div className="gallery-thumbnails">

          {hotel.gallery.map((image, index) => (

            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className={
                currentImage === index
                  ? "active-thumb"
                  : ""
              }
              onClick={() => setCurrentImage(index)}
            />

          ))}

        </div>

      </section>

      {/* ================= ROOMS ================= */}

      <Rooms hotelId={hotel.id} />

      {/* ================= AMENITIES ================= */}

      <section className="amenities">

        <h2>Amenities</h2>

        <ul>

          {hotel.amenities.map((item, index) => (

            <li key={index}>

              ✅ {item}

            </li>

          ))}

        </ul>

      </section>

      {/* ================= NEARBY ATTRACTIONS ================= */}

      <NearbyAttractions hotelId={hotel.id} />

      {/* ================= REVIEWS ================= */}

      <Reviews hotelId={hotel.id} />

      {/* ================= MORE DESTINATIONS ================= */}

      <SimilarHotels currentHotelId={hotel.id} />

    </div>
  );
}

export default HotelDetails;