import "./UpiPaymentForm.css";
function UpiPaymentForm({

  upiId,
  setUpiId,

}) {

  return (

    <div className="payment-card">

      <h2>

        UPI Payment

      </h2>

      <label>

        Enter Your UPI ID

      </label>

      <input
        type="text"
        placeholder="example@upi"
        value={upiId}
        onChange={(e) =>
          setUpiId(e.target.value)
        }
      />

      <div className="upi-apps">

        <div className="upi-app">

          🟢 Google Pay

        </div>

        <div className="upi-app">

          🟣 PhonePe

        </div>

        <div className="upi-app">

          🔵 Paytm

        </div>

        <div className="upi-app">

          🟠 Amazon Pay

        </div>

      </div>

      <div className="upi-note">

        Your payment will be securely verified using your UPI application.

      </div>

    </div>

  );

}

export default UpiPaymentForm;