import "./Rooms.css";
import rooms from "../../data/rooms";

import {
  FaWifi,
  FaCoffee,
  FaUsers,
  FaBed
} from "react-icons/fa";

function Rooms({ hotelId }) {

  const hotelRooms = rooms.filter(
    room => room.hotelId === hotelId
  );

  return (

    <section className="rooms">

      <div className="rooms-header">

        <h2>Available Rooms</h2>

        <p>
          Choose the perfect room for your unforgettable stay.
        </p>

      </div>

      <div className="rooms-container">

        {hotelRooms.map((room, index) => (

          <div
            className="room-card"
            key={index}
          >

            <div className="room-left">

              <h3>{room.type}</h3>

              <div className="room-features">

                <span>
                  <FaUsers />
                  {room.guests} Guests
                </span>

                <span>
                  <FaBed />
                  {room.size}
                </span>

                {room.wifi && (

                  <span>

                    <FaWifi />

                    Free WiFi

                  </span>

                )}

                {room.breakfast && (

                  <span>

                    <FaCoffee />

                    Breakfast

                  </span>

                )}

              </div>

              <p className="room-view">

                {room.view}

              </p>

            </div>

            <div className="room-right">

              <small>Starting From</small>

              <h2>

                ${room.price}

              </h2>

              <span>per night</span>

              <button>

                Reserve Room →

              </button>

            </div>

          </div>

        ))}

      </div>

    </section>

  );

}

export default Rooms;