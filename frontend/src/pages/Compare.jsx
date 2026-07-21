import "./Compare.css";
import { useCompare } from "../context/CompareContext";

function Compare() {

  const { compareHotels, toggleCompare } = useCompare();

  if (compareHotels.length === 0) {

    return (
      <div className="compare-empty">

        <h1>No Hotels Selected</h1>

        <p>Select hotels to compare.</p>

      </div>
    );

  }

  return (

    <div className="compare-page">

      <h1>Compare Hotels</h1>

      <div className="compare-table">

        {/* Feature Column */}

        <div className="compare-column feature-column">

          <div className="compare-header">
            Feature
          </div>

          <div className="compare-cell image-cell">
            Image
          </div>

          <div className="compare-cell">Hotel</div>

          <div className="compare-cell">Location</div>

          <div className="compare-cell">Rating</div>

          <div className="compare-cell">Price</div>

          <div className="compare-cell">Type</div>

          <div className="compare-cell">Free WiFi</div>

          <div className="compare-cell">Swimming Pool</div>

          <div className="compare-cell">Action</div>

        </div>

        {/* Hotel Columns */}

        {compareHotels.map((hotel) => (

          <div className="compare-column" key={hotel.id}>

            <div className="compare-header">

              {hotel.name}

            </div>

            <div className="compare-cell image-cell">

              <img
                src={hotel.image}
                alt={hotel.name}
              />

            </div>

            <div className="compare-cell">
              {hotel.name}
            </div>

            <div className="compare-cell">
              {hotel.location}
            </div>

            <div className="compare-cell">
              ⭐ {hotel.rating}
            </div>

            <div className="compare-cell">
              ${hotel.price}
            </div>

            <div className="compare-cell">
              {hotel.type}
            </div>

            <div className="compare-cell">
              ✅
            </div>

            <div className="compare-cell">
              ✅
            </div>

            <div className="compare-cell">

              <button
                className="remove-btn"
                onClick={() => toggleCompare(hotel)}
              >
                Remove
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}

export default Compare;