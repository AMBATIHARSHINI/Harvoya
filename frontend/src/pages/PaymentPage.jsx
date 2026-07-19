import "./PaymentPage.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import hotelDetails from "../data/hotelDetails";

import GuestInfoCard from "../components/payment/GuestInfoCard";
import PaymentMethods from "../components/payment/PaymentMethods";
import CardPaymentForm from "../components/payment/CardPaymentForm";
import UpiPaymentForm from "../components/payment/UpiPaymentForm";
import NetBankingForm from "../components/payment/NetBankingForm";
import SecurePayment from "../components/payment/SecurePayment";
import BookingSummaryCard from "../components/payment/BookingSummaryCard";

function PaymentPage() {

  const { id } = useParams();

  const navigate = useNavigate();

  const location = useLocation();

  const booking = location.state;

  const hotel = hotelDetails.find(
    item => item.id === Number(id)
  );

  const [paymentMethod, setPaymentMethod] =
    useState("Credit Card");

  const [cardName, setCardName] =
    useState("");

  const [cardNumber, setCardNumber] =
    useState("");

  const [expiry, setExpiry] =
    useState("");

  const [cvv, setCvv] =
    useState("");

  const [address, setAddress] =
    useState("");

  const [upiId, setUpiId] =
    useState("");

  const [bank, setBank] =
    useState("");

  const [processing, setProcessing] =
    useState(false);

  if (!hotel || !booking) {

    return <h1>Booking information not found.</h1>;

  }

  const handlePayment = () => {

    // ================= Card =================

    if (
      paymentMethod === "Credit Card" ||
      paymentMethod === "Debit Card"
    ) {

      if (
        !cardName ||
        !cardNumber ||
        !expiry ||
        !cvv ||
        !address
      ) {

        alert("Please complete all card details.");

        return;

      }

    }

    // ================= UPI =================

    if (
      paymentMethod === "UPI" &&
      !upiId
    ) {

      alert("Please enter your UPI ID.");

      return;

    }

    // ================= Net Banking =================

    if (
      paymentMethod === "Net Banking" &&
      !bank
    ) {

      alert("Please select your bank.");

      return;

    }

    // ================= Start Processing =================

    setProcessing(true);

    const bookingId =
      "HARV-" +
      Math.floor(
        100000 + Math.random() * 900000
      );

    // ================= Booking Object =================

    const bookedHotel = {

      bookingId,

      hotelId: hotel.id,

      hotelName: hotel.name,

      hotelImage: hotel.image,

      location: hotel.location,

      guestName:
        booking.firstName +
        " " +
        booking.lastName,

      email: booking.email,

      phone: booking.phone,

      country: booking.country,

      checkIn: booking.checkIn,

      checkOut: booking.checkOut,

      adults: booking.adults,

      children: booking.children,

      rooms: booking.rooms,

      nights: booking.nights,

      total: booking.total,

      paymentMethod,

      bookingDate:
        new Date().toLocaleDateString(),

      status: "Confirmed"

    };

    // ================= Save =================

    // ================= Save =================


const oldBookings =
  JSON.parse(localStorage.getItem("bookings")) || [];

oldBookings.push(bookedHotel);

localStorage.setItem(
  "bookings",
  JSON.stringify(oldBookings)
);

    // ================= Redirect =================

    setTimeout(() => {

      navigate("/booking-success", {

        state: {

          hotel,

          booking,

          bookingId,

          paymentMethod

        }

      });

    }, 3000);

  };

  return (
    <>
  {processing && (

    <div className="payment-processing">

      <div className="processing-box">

        <div className="loader"></div>

        <h2>

          Processing Payment...

        </h2>

        <p>✓ Verifying Payment Details</p>

        <p>✓ Contacting Your Bank</p>

        <p>✓ Confirming Your Booking</p>

        <p>✓ Redirecting...</p>

      </div>

    </div>

  )}

  <div className="payment-page">

    <div className="payment-container">

      {/* ================= LEFT ================= */}

      <div className="payment-left">

        <div className="payment-card payment-header">

          <h1>

            Secure Checkout

          </h1>

          <p>

            Review your booking and complete your payment securely.

          </p>

        </div>

        <GuestInfoCard
          booking={booking}
        />

        <PaymentMethods
          paymentMethod={paymentMethod}
          setPaymentMethod={setPaymentMethod}
        />

        {(paymentMethod === "Credit Card" ||
          paymentMethod === "Debit Card") && (

          <CardPaymentForm

            cardName={cardName}
            setCardName={setCardName}

            cardNumber={cardNumber}
            setCardNumber={setCardNumber}

            expiry={expiry}
            setExpiry={setExpiry}

            cvv={cvv}
            setCvv={setCvv}

            address={address}
            setAddress={setAddress}

          />

        )}

        {paymentMethod === "UPI" && (

          <UpiPaymentForm

            upiId={upiId}
            setUpiId={setUpiId}

          />

        )}

        {paymentMethod === "Net Banking" && (

          <NetBankingForm

            bank={bank}
            setBank={setBank}

          />

        )}

        <SecurePayment />

      </div>

      {/* ================= RIGHT ================= */}

      <BookingSummaryCard

        hotel={hotel}

        booking={booking}

        handlePayment={handlePayment}

      />

    </div>

  </div>

</>

);

}

export default PaymentPage;