import "./Hero.css";
import heroImage from "../../assets/images/hero.jpg";

function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="overlay"></div>

      <div className="hero-content">

        <h1>Explore Beyond Limits</h1>

        <p>
          Discover breathtaking destinations around the world with Harvoya.
        </p>

        <div className="search-card">

          <div className="search-item">
            <label>Destination</label>
            <input
              type="text"
              placeholder="Where are you going?"
            />
          </div>

          <div className="search-item">
            <label>Check In</label>
            <input type="date" />
          </div>

          <div className="search-item">
            <label>Check Out</label>
            <input type="date" />
          </div>

          <div className="search-item">
            <label>Guests</label>
            <input
              type="number"
              placeholder="2"
              min="1"
            />
          </div>

          <button className="explore-btn">
            Explore Now
          </button>

        </div>

      </div>
    </section>
  );
}

export default Hero;