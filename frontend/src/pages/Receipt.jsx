import "./Receipt.css";
import { useParams, Link } from "react-router-dom";
import {
  FaHotel,
  FaCalendarAlt,
  FaUser,
  FaCreditCard,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaFileDownload,
  FaArrowLeft
} from "react-icons/fa";

function Receipt() {

  const { bookingId } = useParams();

  const bookings =
    JSON.parse(localStorage.getItem("bookings")) || [];

  const booking =
    bookings.find(
      item => item.bookingId === bookingId
    );

  if (!booking) {

    return (

      <div className="receipt-error">

        <h1>

          Booking Receipt Not Found

        </h1>

        <Link
          to="/my-bookings"
          className="back-btn"
        >

          Back to My Bookings

        </Link>

      </div>

    );

  }

  return (

    <div className="receipt-page">

      <div className="receipt-card">

        {/* ================= HEADER ================= */}

        <div className="receipt-header">

          <h1>

            HARVOYA

          </h1>

          <h2>

            Booking Receipt

          </h2>

          <p>

            Thank you for choosing Harvoya.

          </p>

        </div>

        {/* ================= BOOKING ID ================= */}

        <div className="receipt-booking-id">

          <span>

            Booking ID

          </span>

          <h3>

            {booking.bookingId}

          </h3>

        </div>

        {/* ================= HOTEL ================= */}

        <div className="receipt-hotel">

          <img
            src={booking.hotelImage}
            alt={booking.hotelName}
          />

          <div>

            <h2>

              {booking.hotelName}

            </h2>

            <p>

              <FaMapMarkerAlt />

              {booking.location}

            </p>

          </div>

        </div>

        {/* ================= DETAILS ================= */}

        <div className="receipt-grid">

          <div className="receipt-item">

            <FaUser />

            <div>

              <span>

                Guest

              </span>

              <h4>

                {booking.guestName}

              </h4>

            </div>

          </div>

          <div className="receipt-item">

            <FaCalendarAlt />

            <div>

              <span>

                Check In

              </span>

              <h4>

                {booking.checkIn}

              </h4>

            </div>

          </div>

          <div className="receipt-item">

            <FaCalendarAlt />

            <div>

              <span>

                Check Out

              </span>

              <h4>

                {booking.checkOut}

              </h4>

            </div>

          </div>
                    <div className="receipt-item">

            <FaUser />

            <div>

              <span>

                Guests

              </span>

              <h4>

                {booking.adults} Adult{booking.adults > 1 ? "s" : ""}

                {booking.children > 0 &&
                  `, ${booking.children} Child${booking.children > 1 ? "ren" : ""}`}

              </h4>

            </div>

          </div>

          <div className="receipt-item">

            <FaHotel />

            <div>

              <span>

                Rooms

              </span>

              <h4>

                {booking.rooms}

              </h4>

            </div>

          </div>

          <div className="receipt-item">

            <FaCreditCard />

            <div>

              <span>

                Payment Method

              </span>

              <h4>

                {booking.paymentMethod}

              </h4>

            </div>

          </div>

          <div className="receipt-item">

            <FaCalendarAlt />

            <div>

              <span>

                Booking Date

              </span>

              <h4>

                {booking.bookingDate}

              </h4>

            </div>

          </div>

          <div className="receipt-item">

            <FaCheckCircle />

            <div>

              <span>

                Status

              </span>

              <h4 className="confirmed">

                {booking.status}

              </h4>

            </div>

          </div>

          <div className="receipt-item total-paid">

            <FaHotel />

            <div>

              <span>

                Total Paid

              </span>

              <h2>

                ${booking.total}

              </h2>

            </div>

          </div>

        </div>

        {/* ================= BUTTONS ================= */}

        <div className="receipt-buttons">

          <button
            className="download-btn"
            onClick={() => window.print()}
          >

            <FaFileDownload />

            Download PDF

          </button>

          <Link
            to="/my-bookings"
            className="back-btn"
          >

            <FaArrowLeft />

            Back to My Bookings

          </Link>

        </div>

      </div>

    </div>

  );

}

export default Receipt;