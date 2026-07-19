import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaGlobe,
} from "react-icons/fa";
import "./GuestInfoCard.css";
function GuestInfoCard({ booking }) {

  return (

    <div className="payment-card">

      <h2>Guest Information</h2>

      <div className="guest-grid">

        <div className="guest-item">

          <FaUser className="guest-icon" />

          <div>

            <span>Guest Name</span>

            <h4>
              {booking.firstName} {booking.lastName}
            </h4>

          </div>

        </div>

        <div className="guest-item">

          <FaEnvelope className="guest-icon" />

          <div>

            <span>Email</span>

            <h4>{booking.email}</h4>

          </div>

        </div>

        <div className="guest-item">

          <FaPhone className="guest-icon" />

          <div>

            <span>Phone</span>

            <h4>{booking.phone}</h4>

          </div>

        </div>

        <div className="guest-item">

          <FaGlobe className="guest-icon" />

          <div>

            <span>Country</span>

            <h4>{booking.country}</h4>

          </div>

        </div>

      </div>

    </div>

  );

}

export default GuestInfoCard;