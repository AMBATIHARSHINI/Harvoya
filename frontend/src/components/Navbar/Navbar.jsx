import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useEffect, useState } from "react";

function Navbar() {

  const [wishlistCount, setWishlistCount] = useState(0);

  useEffect(() => {

    const updateWishlistCount = () => {

      const wishlist =
        JSON.parse(localStorage.getItem("wishlist")) || [];

      setWishlistCount(wishlist.length);

    };

    updateWishlistCount();

    window.addEventListener("storage", updateWishlistCount);

    const interval = setInterval(updateWishlistCount, 500);

    return () => {

      window.removeEventListener("storage", updateWishlistCount);

      clearInterval(interval);

    };

  }, []);

  return (

    <nav className="navbar">

      <div className="logo">

        <Link to="/">
          <h2>HARVOYA</h2>
        </Link>

      </div>

      <ul className="nav-links">

        <li><Link to="/">Home</Link></li>

        <li><a href="#destinations">Destinations</a></li>

        <li><a href="#hotels">Hotels</a></li>

        <li><a href="#packages">Packages</a></li>

        <li><a href="#about">About</a></li>

        <li><a href="#contact">Contact</a></li>

      </ul>

      <div className="nav-buttons">

        <Link to="/wishlist" className="wishlist-btn">

          <FaHeart />

          <span>Wishlist</span>

          {wishlistCount > 0 && (

            <span className="wishlist-count">

              {wishlistCount}

            </span>

          )}

        </Link>

        <button className="login-btn">

          Login

        </button>

        <button className="signup-btn">

          Sign Up

        </button>

      </div>

    </nav>

  );

}

export default Navbar;