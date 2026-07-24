import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useWishlist } from "../../context/WishlistContext";
import { useCompare } from "../../context/CompareContext";
function Navbar() {

  const { wishlist } = useWishlist();
  const { compareHotels } = useCompare();

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

          {wishlist.length > 0 && (

            <span className="wishlist-count">

              {wishlist.length}

            </span>

          )}

        </Link>
         <Link to="/compare" className="compare-nav-btn">

  ⚖️ Compare

  {compareHotels.length > 0 && (

    <span className="compare-count">

      {compareHotels.length}

    </span>

  )}

</Link>
<Link to="/ai-planner" className="ai-planner-btn">
  🤖 AI Planner
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