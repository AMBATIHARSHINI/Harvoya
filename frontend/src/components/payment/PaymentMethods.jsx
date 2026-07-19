import "./PaymentMethods.css";
import {
  FaCreditCard,
  FaUniversity,
  FaMobileAlt,
  FaCcVisa,
  FaCcMastercard,
  FaCheckCircle,
} from "react-icons/fa";

function PaymentMethods({
  paymentMethod,
  setPaymentMethod,
}) {
  return (
    <div className="payment-card">

      <h2>Select Payment Method</h2>

      <div className="payment-options">

        {/* Credit Card */}

        <div
          className={`payment-option ${
            paymentMethod === "Credit Card"
              ? "active"
              : ""
          }`}
          onClick={() =>
            setPaymentMethod("Credit Card")
          }
        >
          <div className="payment-left-side">

            <FaCreditCard className="payment-icon" />

            <div>

              <h4>Credit Card</h4>

              <p>

                <FaCcVisa />

                <FaCcMastercard />

                Visa • Mastercard • RuPay

              </p>

            </div>

          </div>

          {paymentMethod === "Credit Card" && (

            <FaCheckCircle className="selected-icon" />

          )}

        </div>

        {/* Debit Card */}

        <div
          className={`payment-option ${
            paymentMethod === "Debit Card"
              ? "active"
              : ""
          }`}
          onClick={() =>
            setPaymentMethod("Debit Card")
          }
        >
          <div className="payment-left-side">

            <FaCreditCard className="payment-icon" />

            <div>

              <h4>Debit Card</h4>

              <p>All Major Debit Cards</p>

            </div>

          </div>

          {paymentMethod === "Debit Card" && (

            <FaCheckCircle className="selected-icon" />

          )}

        </div>

        {/* UPI */}

        <div
          className={`payment-option ${
            paymentMethod === "UPI"
              ? "active"
              : ""
          }`}
          onClick={() =>
            setPaymentMethod("UPI")
          }
        >
          <div className="payment-left-side">

            <FaMobileAlt className="payment-icon" />

            <div>

              <h4>UPI</h4>

              <p>Google Pay • PhonePe • Paytm</p>

            </div>

          </div>

          {paymentMethod === "UPI" && (

            <FaCheckCircle className="selected-icon" />

          )}

        </div>

        {/* Net Banking */}

        <div
          className={`payment-option ${
            paymentMethod === "Net Banking"
              ? "active"
              : ""
          }`}
          onClick={() =>
            setPaymentMethod("Net Banking")
          }
        >
          <div className="payment-left-side">

            <FaUniversity className="payment-icon" />

            <div>

              <h4>Net Banking</h4>

              <p>SBI • HDFC • ICICI</p>

            </div>

          </div>

          {paymentMethod === "Net Banking" && (

            <FaCheckCircle className="selected-icon" />

          )}

        </div>

      </div>

    </div>
  );
}

export default PaymentMethods;