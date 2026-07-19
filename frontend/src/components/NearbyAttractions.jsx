import "./NearbyAttractions.css";
import attractions from "../data/attractions";
import { FaStar, FaMapMarkerAlt } from "react-icons/fa";

function NearbyAttractions({ hotelId }) {

  const hotelAttractions = attractions.filter(
    item => item.hotelId === hotelId
  );

  return (

    <section className="nearby">

      <div className="nearby-header">

        <h2>Nearby Attractions</h2>

        <p>
          Explore the best places around your hotel.
        </p>

      </div>

      <div className="nearby-grid">

        {hotelAttractions.map((place, index) => (

          <div
            className="nearby-card"
            key={index}
          >

            <img
              src={place.image}
              alt={place.name}
            />

            <div className="nearby-content">

              <div className="nearby-top">

                <h3>{place.name}</h3>

                <span>

                  <FaStar />

                  {place.rating}

                </span>

              </div>

              <p>

                <FaMapMarkerAlt />

                {place.distance}

              </p>

              <button>

                View Details →

              </button>

            </div>

          </div>

        ))}

      </div>

    </section>

  );

}

export default NearbyAttractions;