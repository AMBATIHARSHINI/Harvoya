import "./HotelCard.css";
import {
  FaStar,
  FaHeart,
  FaMapMarkerAlt,
  FaWifi,
  FaSwimmingPool,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useWishlist } from "../../context/WishlistContext";
import { useCompare } from "../../context/CompareContext";

function HotelCard({ hotel }) {

  const {
    toggleWishlist,
    isWishlisted,
  } = useWishlist();

  const liked = isWishlisted(hotel.id);

  const {
    toggleCompare,
    isCompared,
  } = useCompare();

  const compared = isCompared(hotel.id);

  const handleWishlist = () => {
    toggleWishlist(hotel);
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

            <h2>${hotel.price}</h2>

            <p className="per-night">
              per night
            </p>

          </div>

        </div>

        <Link
          to={`/hotel/${hotel.id}`}
          className="hotel-btn"
        >
          View Hotel →
        </Link>

        {/* Compare Button */}
        <button
          className={`compare-btn ${compared ? "active" : ""}`}
          onClick={() => toggleCompare(hotel)}
        >
          ⚖️ {compared ? "Compared" : "Compare"}
        </button>

      </div>

    </div>
  );
}

export default HotelCard;