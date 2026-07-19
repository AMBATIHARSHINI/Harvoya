import "./BookingSummaryCard.css";
function BookingSummaryCard({

  hotel,
  booking,
  handlePayment,

}) {

  return (

    <div className="payment-summary">

      <img
        src={hotel.image}
        alt={hotel.name}
      />

      <div className="summary-content">

        <h2>

          {hotel.name}

        </h2>

        <p>

          📍 {hotel.location}

        </p>

        <div className="summary-item">

          <span>

            Check In

          </span>

          <span>

            {booking.checkIn}

          </span>

        </div>

        <div className="summary-item">

          <span>

            Check Out

          </span>

          <span>

            {booking.checkOut}

          </span>

        </div>

        <div className="summary-item">

          <span>

            Guests

          </span>

          <span>

            {booking.adults} Adults

            {booking.children > 0 &&
              `, ${booking.children} Children`
            }

          </span>

        </div>

        <div className="summary-item">

          <span>

            Rooms

          </span>

          <span>

            {booking.rooms}

          </span>

        </div>

        <div className="summary-item">

          <span>

            Nights

          </span>

          <span>

            {booking.nights}

          </span>

        </div>

        <div className="summary-item">

          <span>

            Subtotal

          </span>

          <span>

            ${booking.subtotal}

          </span>

        </div>

        <div className="summary-item">

          <span>

            Taxes

          </span>

          <span>

            ${booking.taxes}

          </span>

        </div>

        <hr />

        <div className="summary-total">

          <span>

            Total

          </span>

          <span>

            ${booking.total}

          </span>

        </div>

        <button
          className="pay-btn"
          onClick={handlePayment}
        >

          🔒 Pay Securely

          <br />

          ${booking.total}

        </button>

      </div>

    </div>

  );

}

export default BookingSummaryCard;