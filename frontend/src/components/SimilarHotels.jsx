import "./SimilarHotels.css";
import hotelDetails from "../data/hotelDetails";
import { Link } from "react-router-dom";
import { FaStar, FaMapMarkerAlt } from "react-icons/fa";

function SimilarHotels({ currentHotelId }) {

  const hotels = hotelDetails
    .filter(hotel => hotel.id !== currentHotelId)
    .slice(0, 3);

  return (

    <section className="similar-hotels">

      <div className="similar-header">

        <h2>Explore More Destinations</h2>

        <p>
          Discover beautiful destinations around the world and find your next unforgettable stay.
        </p>

      </div>

      <div className="similar-grid">

        {hotels.map((hotel) => (

          <div
            className="similar-card"
            key={hotel.id}
          >

            <img
              src={hotel.image}
              alt={hotel.name}
            />

            <div className="similar-content">

              <h3>{hotel.name}</h3>

              <p>

                <FaMapMarkerAlt />

                {hotel.location}

              </p>

              <div className="similar-bottom">

                <span>

                  <FaStar />

                  {hotel.rating}

                </span>

                <h4>

                  From ${hotel.price}

                  <small> / night</small>

                </h4>

              </div>

              <Link
                to={`/hotel/${hotel.id}`}
                className="similar-btn"
              >

                Explore Destination →

              </Link>

            </div>

          </div>

        ))}

      </div>

    </section>

  );

}

export default SimilarHotels;