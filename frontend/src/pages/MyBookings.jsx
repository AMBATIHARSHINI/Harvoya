import "./MyBookings.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCreditCard,
  FaUser,
  FaCheckCircle,
  FaEye,
  FaFileDownload
} from "react-icons/fa";

function MyBookings() {

  const [bookings, setBookings] = useState([]);

  useEffect(() => {

    const savedBookings =
      JSON.parse(localStorage.getItem("bookings")) || [];

    setBookings(savedBookings);

  }, []);

  return (

    <div className="my-bookings">

      <div className="bookings-header">

        <h1>My Bookings</h1>

        <p>
          View and manage all your hotel reservations.
        </p>

      </div>

      {bookings.length === 0 ? (

        <div className="empty-bookings">

          <h2>No Bookings Yet</h2>

          <p>
            Looks like you haven't booked any hotels yet.
          </p>

          <Link
            to="/hotels"
            className="browse-btn"
          >
            Browse Hotels
          </Link>

        </div>

      ) : (

        <div className="bookings-grid">

          {bookings.map((item) => (

            <div
              className="booking-card"
              key={item.bookingId}
            >

              <img
                src={item.hotelImage}
                alt={item.hotelName}
              />

              <div className="booking-content">

                <div className="booking-top">

                  <h2>{item.hotelName}</h2>

                  <span className="status">

                    <FaCheckCircle />

                    {item.status}

                  </span>

                </div>

                <p className="location">

                  <FaMapMarkerAlt />

                  {item.location}

                </p>

                <div className="booking-info">

                  <p>

                    <FaUser />

                    {item.guestName}

                  </p>

                  <p>

                    <FaCalendarAlt />

                    {item.checkIn} → {item.checkOut}

                  </p>

                  <p>

                    <FaCreditCard />

                    {item.paymentMethod}

                  </p>

                  <p>

                    <strong>Booking ID:</strong>

                    {" "}

                    {item.bookingId}

                  </p>

                  <p>

                    <strong>Total Paid:</strong>

                    {" "}

                    ${item.total}

                  </p>

                </div>

                <div className="booking-actions">

                  <Link
                    to={`/hotel/${item.hotelId}`}
                    className="view-btn"
                  >

                    <FaEye />

                    View Hotel

                  </Link>

                  <Link
    to={`/receipt/${item.bookingId}`}
    className="receipt-btn"
>
    <FaFileDownload />
    View Receipt
</Link>

                </div>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>

  );

}

export default MyBookings;