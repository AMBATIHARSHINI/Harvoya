import "./DestinationCard.css";

function DestinationCard({
  image,
  country,
  tagline,
  rating,
  price,
}) {
  return (
    <div className="destination-card">

      <div className="image-container">

        <img src={image} alt={country} />

        <span className="rating">
          ⭐ {rating}
        </span>

      </div>

      <div className="card-content">

        <h3>{country}</h3>

        <p>{tagline}</p>

        <div className="price-section">

          <small>Starting from</small>

          <h4>{price}</h4>

        </div>

        <button>

          Explore Journey →

        </button>

      </div>

    </div>
  );
}

export default DestinationCard;