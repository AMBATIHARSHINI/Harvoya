import "./TripResult.css";

const destinationImages = {
  Bali:
    "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=1200",
  Maldives:
    "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1200",
  Paris:
    "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200",
  Switzerland:
    "https://images.unsplash.com/photo-1508261305436-4c2f7f2c0d6e?w=1200",
  Italy:
    "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1200",
  Japan:
    "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200"
};

function TripResult({ trip }) {

  if (!trip) return null;

  const total =
    trip.hotelCost +
    trip.food +
    trip.transport +
    trip.activities;

  const destination = trip.title.split(" ")[1];

  return (
    <div className="trip-result">

      <div className="trip-hero">

        <img
          src={destinationImages[destination]}
          alt={destination}
        />

        <div className="trip-overlay">
          <h1>{trip.title}</h1>
          <p>Your AI generated travel itinerary</p>
        </div>

      </div>

      <div className="budget-grid">

        <div className="budget-item">
          🏨
          <h3>Hotel</h3>
          <p>${trip.hotelCost}</p>
        </div>

        <div className="budget-item">
          🍽
          <h3>Food</h3>
          <p>${trip.food}</p>
        </div>

        <div className="budget-item">
          🚖
          <h3>Transport</h3>
          <p>${trip.transport}</p>
        </div>

        <div className="budget-item">
          🎯
          <h3>Activities</h3>
          <p>${trip.activities}</p>
        </div>

      </div>

      <div className="total-card">
        💰 Estimated Budget : <strong>${total}</strong>
      </div>

      <div className="timeline">

        <h2>📅 Trip Itinerary</h2>

        {trip.itinerary.map((item, index) => (

          <div
            className="timeline-item"
            key={index}
          >
            <div className="circle">
              {index + 1}
            </div>

            <div className="timeline-content">

              <h3>Day {index + 1}</h3>

              <p>{item}</p>

            </div>

          </div>

        ))}

      </div>

      <div className="hotel-card">

  <h2>🏨 AI Recommended Hotel</h2>

  {trip.recommendedHotel && (
    <>
      <img
        src={trip.recommendedHotel.image}
        alt={trip.recommendedHotel.name}
        className="recommended-hotel-img"
      />

      <h3>{trip.recommendedHotel.name}</h3>

      <p>📍 {trip.recommendedHotel.location}</p>

      <p>⭐ {trip.recommendedHotel.rating}</p>

      <p>💲 ${trip.recommendedHotel.price} / Night</p>

      <button>View Hotel</button>
    </>
  )}

</div>
    </div>
  );
}

export default TripResult;