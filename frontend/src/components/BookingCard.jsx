import "./BookingCard.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BookingCard({ hotelId, price }) {

  const navigate = useNavigate();

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);

  const [promo, setPromo] = useState("");

  let nights = 0;

  if (checkIn && checkOut) {

    const start = new Date(checkIn);
    const end = new Date(checkOut);

    const diff =
      (end - start) / (1000 * 60 * 60 * 24);

    nights = diff > 0 ? diff : 0;

  }

  // Price = Nights × Rooms × Price
  const subtotal = nights * rooms * price;

  const taxes = Math.round(subtotal * 0.08);

  const total = subtotal + taxes;

  // ================= Reserve =================

  const handleReserve = () => {

    if (!checkIn || !checkOut) {

      alert("Please select Check In and Check Out dates.");

      return;

    }

    if (nights <= 0) {

      alert("Check Out must be after Check In.");

      return;

    }

    navigate(`/booking/${hotelId}`, {

      state: {

        hotelId,
        checkIn,
        checkOut,
        nights,
        adults,
        children,
        rooms,
        price,
        subtotal,
        taxes,
        total,
        promo

      }

    });

  };

  return (

    <section
    id="booking-card"
    className="booking-section"
>

      <div className="booking-card">

        <h2>Reserve Your Stay</h2>

        {/* Check In */}

        <div className="booking-field">

          <label>Check In</label>

          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
          />

        </div>

        {/* Check Out */}

        <div className="booking-field">

          <label>Check Out</label>

          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
          />

        </div>

        {/* Adults */}

        <div className="booking-counter">

          <label>Adults</label>

          <div>

            <button
              onClick={() =>
                adults > 1 &&
                setAdults(adults - 1)
              }
            >
              −
            </button>

            <span>{adults}</span>

            <button
              onClick={() =>
                setAdults(adults + 1)
              }
            >
              +
            </button>

          </div>

        </div>

        {/* Children */}

        <div className="booking-counter">

          <label>Children</label>

          <div>

            <button
              onClick={() =>
                children > 0 &&
                setChildren(children - 1)
              }
            >
              −
            </button>

            <span>{children}</span>

            <button
              onClick={() =>
                setChildren(children + 1)
              }
            >
              +
            </button>

          </div>

        </div>

        {/* Rooms */}

        <div className="booking-counter">

          <label>Rooms</label>

          <div>

            <button
              onClick={() =>
                rooms > 1 &&
                setRooms(rooms - 1)
              }
            >
              −
            </button>

            <span>{rooms}</span>

            <button
              onClick={() =>
                setRooms(rooms + 1)
              }
            >
              +
            </button>

          </div>

        </div>

        {/* Promo Code */}

        <div className="booking-field">

          <label>Promo Code</label>

          <div className="promo-box">

            <input
              type="text"
              placeholder="Enter coupon"
              value={promo}
              onChange={(e) => setPromo(e.target.value)}
            />

            <button className="apply-btn">

              Apply

            </button>

          </div>

        </div>

        {/* Price Summary */}

        <div className="price-summary">

          <div>

            <span>

              {nights} Night{nights !== 1 ? "s" : ""} × {rooms} Room{rooms !== 1 ? "s" : ""} × ${price}

            </span>

            <span>

              ${subtotal}

            </span>

          </div>

          <div>

            <span>Taxes & Fees</span>

            <span>${taxes}</span>

          </div>

          <hr />

          <div className="total">

            <span>Total</span>

            <span>${total}</span>

          </div>

        </div>

        {/* Reserve Button */}

        <button
          className="reserve-btn"
          onClick={handleReserve}
        >

          Reserve Now →

        </button>

        {/* Trust Badges */}

        <div className="booking-features">

          <div className="booking-feature">

            ✅ Free Cancellation

          </div>

          <div className="booking-feature">

            🔒 Secure Booking

          </div>

          <div className="booking-feature">

            ⚡ Instant Confirmation

          </div>

        </div>

      </div>

    </section>

  );

}

export default BookingCard;