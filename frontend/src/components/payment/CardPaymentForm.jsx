import { FaCreditCard } from "react-icons/fa";
import "./CardPaymentForm.css";
function CardPaymentForm({

  cardName,
  setCardName,

  cardNumber,
  setCardNumber,

  expiry,
  setExpiry,

  cvv,
  setCvv,

  address,
  setAddress,

}) {

  return (

    <div className="payment-card">

      <h2>

        <FaCreditCard />

        Card Details

      </h2>

      <label>

        Card Holder Name

      </label>

      <input
        type="text"
        placeholder="John Doe"
        value={cardName}
        onChange={(e) =>
          setCardName(e.target.value)
        }
      />

      <label>

        Card Number

      </label>

      <input
        type="text"
        placeholder="1234 5678 9012 3456"
        value={cardNumber}
        onChange={(e) =>
          setCardNumber(e.target.value)
        }
      />

      <div className="payment-grid">

        <div>

          <label>

            Expiry

          </label>

          <input
            type="text"
            placeholder="MM / YY"
            value={expiry}
            onChange={(e) =>
              setExpiry(e.target.value)
            }
          />

        </div>

        <div>

          <label>

            CVV

          </label>

          <input
            type="password"
            placeholder="123"
            value={cvv}
            onChange={(e) =>
              setCvv(e.target.value)
            }
          />

        </div>

      </div>

      <label>

        Billing Address

      </label>

      <textarea
        rows="4"
        placeholder="Enter Billing Address"
        value={address}
        onChange={(e) =>
          setAddress(e.target.value)
        }
      />

    </div>

  );

}

export default CardPaymentForm;