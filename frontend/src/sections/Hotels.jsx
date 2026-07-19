import "./Hotels.css";
import hotels from "../data/hotels";
import HotelCard from "../components/HotelCard/HotelCard";

function Hotels() {
  return (
    <section className="hotels">

      <div className="hotels-heading">

        <span className="hotels-tag">
          POPULAR HOTELS
        </span>

        <h2>Stay at the World's Best Hotels</h2>

        <p>
          Discover handpicked luxury hotels, beach resorts, mountain retreats,
          and unforgettable stays carefully selected for your next vacation.
        </p>

      </div>

      <div className="hotels-grid">

        {hotels.map((hotel) => (

          <HotelCard
            key={hotel.id}
            hotel={hotel}
          />

        ))}

      </div>

    </section>
  );
}

export default Hotels;