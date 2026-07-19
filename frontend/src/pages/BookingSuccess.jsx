import "./BookingSuccess.css";
import { Link, useLocation } from "react-router-dom";
import {
  FaCheckCircle,
  FaHotel,
  FaCalendarAlt,
  FaUsers,
  FaBed,
  FaCreditCard,
  FaReceipt,
  FaHome,
  FaSuitcaseRolling
} from "react-icons/fa";

function BookingSuccess() {

  const location = useLocation();

  const { hotel, booking, bookingId, paymentMethod } =
    location.state || {};

  if (!hotel || !booking) {

    return (

      <div className="booking-error">

        <h1>Booking Not Found</h1>

        <Link to="/">Go Back Home</Link>

      </div>

    );

  }

  return (

    <div className="success-page">

      <div className="success-card">

        {/* Success Icon */}

        <div className="success-icon">

          <FaCheckCircle />

        </div>

        <h1>

          Booking Confirmed!

        </h1>

        <p>

          Congratulations! Your booking has been
          successfully confirmed.

        </p>

        {/* Booking ID */}

        <div className="booking-id">

          <span>Booking ID</span>

          <h2>{bookingId}</h2>

        </div>

        {/* Hotel */}

        <div className="hotel-preview">

          <img
            src={hotel.image}
            alt={hotel.name}
          />

          <div>

            <h3>{hotel.name}</h3>

            <p>{hotel.location}</p>

          </div>

        </div>

        {/* Details */}

        <div className="details-grid">

          <div className="detail-box">

            <FaCalendarAlt />

            <div>

              <span>Check In</span>

              <h4>{booking.checkIn}</h4>

            </div>

          </div>

          <div className="detail-box">

            <FaCalendarAlt />

            <div>

              <span>Check Out</span>

              <h4>{booking.checkOut}</h4>

            </div>

          </div>

          <div className="detail-box">

            <FaUsers />

            <div>

              <span>Guests</span>

              <h4>

                {booking.adults} Adults

                {booking.children > 0 &&
                  `, ${booking.children} Children`}

              </h4>

            </div>

          </div>

          <div className="detail-box">

            <FaBed />

            <div>

              <span>Rooms</span>

              <h4>{booking.rooms}</h4>

            </div>

          </div>

          <div className="detail-box">

            <FaCreditCard />

            <div>

              <span>Payment</span>

              <h4>{paymentMethod}</h4>

            </div>

          </div>

          <div className="detail-box">

            <FaHotel />

            <div>

              <span>Total Paid</span>

              <h4>${booking.total}</h4>

            </div>

          </div>

        </div>

        {/* Buttons */}

        <div className="success-buttons">

          <button className="receipt-btn">

            <FaReceipt />

            Download Receipt

          </button>

          <button
  className="booking-btn"
  onClick={() => {
    console.log("Button clicked");
    window.location.href = "/my-bookings";
  }}
>
  <FaSuitcaseRolling />
  My Bookings
</button>

          <Link
            to="/"
            className="home-btn"
          >

            <FaHome />

            Back Home

          </Link>

        </div>

      </div>

    </div>

  );

}

export default BookingSuccess;