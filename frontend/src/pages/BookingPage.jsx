import "./BookingPage.css";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import hotelDetails from "../data/hotelDetails";
import { useState } from "react";

function BookingPage() {

  const { id } = useParams();

  const navigate = useNavigate();

  const location = useLocation();

  const booking = location.state;

  const hotel = hotelDetails.find(
    item => item.id === Number(id)
  );

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [request, setRequest] = useState("");

  if (!hotel) {

    return <h1>Hotel Not Found</h1>;

  }

  // If someone refreshes this page
  if (!booking) {

    return (

      <div className="booking-page">

        <h1>Booking information not found.</h1>

      </div>

    );

  }

  // ================= BOOKING DETAILS =================

  const nights = booking.nights;

  const adults = booking.adults;

  const children = booking.children;

  const rooms = booking.rooms;

  const checkIn = booking.checkIn;

  const checkOut = booking.checkOut;

  const subtotal = booking.subtotal;

  const taxes = booking.taxes;

  const total = booking.total;

  // ================= CONTINUE =================

  const handleContinue = () => {

    if (

      !firstName.trim() ||

      !lastName.trim() ||

      !email.trim() ||

      !phone.trim() ||

      !country.trim()

    ) {

      alert("Please fill all guest details.");

      return;

    }

    navigate(`/payment/${hotel.id}`, {

      state: {

        hotel,

        firstName,
        lastName,
        email,
        phone,
        country,
        request,

        checkIn,
        checkOut,

        adults,
        children,

        rooms,
        nights,

        subtotal,
        taxes,
        total

      }

    });

  };

  return (

    <div className="booking-page">

      <div className="booking-container">

        {/* ================= LEFT ================= */}

        <div className="booking-form">

          <h1>

            Complete Your Booking

          </h1>

          <p>

            Fill in your details to reserve your stay.

          </p>

          <div className="form-grid">

            <div>

              <label>First Name</label>

              <input
                type="text"
                placeholder="John"
                value={firstName}
                onChange={(e)=>setFirstName(e.target.value)}
              />

            </div>

            <div>

              <label>Last Name</label>

              <input
                type="text"
                placeholder="Doe"
                value={lastName}
                onChange={(e)=>setLastName(e.target.value)}
              />

            </div>

          </div>

          <label>Email Address</label>

          <input
            type="email"
            placeholder="john@email.com"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

          <label>Phone Number</label>

          <input
            type="text"
            placeholder="+91 XXXXX XXXXX"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
          />

          <label>Country</label>

          <input
            type="text"
            placeholder="India"
            value={country}
            onChange={(e)=>setCountry(e.target.value)}
          />

          <label>Special Requests</label>

          <textarea
            rows="5"
            placeholder="Any special requests..."
            value={request}
            onChange={(e)=>setRequest(e.target.value)}
          />
                  </div>

        {/* ================= RIGHT ================= */}

        <div className="booking-summary">

          <img
            src={hotel.image}
            alt={hotel.name}
          />

          <h2>{hotel.name}</h2>

          <p>{hotel.location}</p>

          <div className="summary-item">

            <span>Check In</span>

            <span>{checkIn}</span>

          </div>

          <div className="summary-item">

            <span>Check Out</span>

            <span>{checkOut}</span>

          </div>

          <div className="summary-item">

            <span>Guests</span>

            <span>

              {adults} Adult{adults > 1 ? "s" : ""}

              {children > 0 &&
                `, ${children} Child${children > 1 ? "ren" : ""}`}

            </span>

          </div>

          <div className="summary-item">

            <span>Rooms</span>

            <span>{rooms}</span>

          </div>

          <div className="summary-item">

            <span>Price / Night</span>

            <span>${hotel.price}</span>

          </div>

          <div className="summary-item">

            <span>Nights</span>

            <span>{nights}</span>

          </div>

          <div className="summary-item">

            <span>Subtotal</span>

            <span>${subtotal}</span>

          </div>

          <div className="summary-item">

            <span>Taxes</span>

            <span>${taxes}</span>

          </div>

          <hr />

          <div className="summary-total">

            <span>Total</span>

            <span>${total}</span>

          </div>

          <button
            className="checkout-btn"
            onClick={handleContinue}
          >

            Continue to Payment →

          </button>

        </div>

      </div>

    </div>

  );

}

export default BookingPage;