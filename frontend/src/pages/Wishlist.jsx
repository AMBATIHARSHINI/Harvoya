import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaTrash } from "react-icons/fa";
import "./Wishlist.css";

function Wishlist() {

  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {

    const savedWishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    setWishlist(savedWishlist);

  }, []);

  const removeFromWishlist = (id) => {

    const updatedWishlist = wishlist.filter(
      (hotel) => hotel.id !== id
    );

    setWishlist(updatedWishlist);

    localStorage.setItem(
      "wishlist",
      JSON.stringify(updatedWishlist)
    );

  };

  return (

    <div className="wishlist-page">

      <h1>
        <FaHeart className="wishlist-title-icon" />
        My Wishlist
      </h1>

      {wishlist.length === 0 ? (

        <div className="empty-wishlist">

          <FaHeart className="empty-heart" />

          <h2>Your Wishlist is Empty</h2>

          <p>
            Save your favourite hotels to see them here.
          </p>

          <Link to="/" className="browse-btn">
            Browse Hotels
          </Link>

        </div>

      ) : (

        <div className="wishlist-grid">

          {wishlist.map((hotel) => (

            <div className="wishlist-card" key={hotel.id}>

              <img
                src={hotel.image}
                alt={hotel.name}
              />

              <div className="wishlist-content">

                <h3>{hotel.name}</h3>

                <p>{hotel.location}</p>

                <h2>${hotel.price}</h2>

                <div className="wishlist-buttons">

                  <Link
                    to={`/hotel/${hotel.id}`}
                    className="view-btn"
                  >
                    View Hotel
                  </Link>

                  <button
                    className="remove-btn"
                    onClick={() =>
                      removeFromWishlist(hotel.id)
                    }
                  >
                    <FaTrash />
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>

  );

}

export default Wishlist;