import { FaLock } from "react-icons/fa";
import "./SecurePayment.css";
function SecurePayment() {

  return (

    <div className="secure-box">

      <div className="secure-icon">

        <FaLock />

      </div>

      <div className="secure-content">

        <h3>

          Secure Payment

        </h3>

        <p>

          Your payment is protected with
          256-bit SSL encryption. We never
          store your card information.

        </p>

      </div>

    </div>

  );

}

export default SecurePayment;