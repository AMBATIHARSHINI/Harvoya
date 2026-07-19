import "./NetBankingForm.css";
function NetBankingForm({

  bank,
  setBank,

}) {

  return (

    <div className="payment-card">

      <h2>

        Net Banking

      </h2>

      <label>

        Select Your Bank

      </label>

      <select
        value={bank}
        onChange={(e) =>
          setBank(e.target.value)
        }
      >

        <option value="">

          Select Bank

        </option>

        <option>

          State Bank of India (SBI)

        </option>

        <option>

          HDFC Bank

        </option>

        <option>

          ICICI Bank

        </option>

        <option>

          Axis Bank

        </option>

        <option>

          Kotak Mahindra Bank

        </option>

        <option>

          Punjab National Bank

        </option>

        <option>

          Canara Bank

        </option>

        <option>

          Bank of Baroda

        </option>

        <option>

          IndusInd Bank

        </option>

        <option>

          Union Bank of India

        </option>

      </select>

      <div className="bank-note">

        You will be redirected to your selected bank's secure login page to complete the payment.

      </div>

    </div>

  );

}

export default NetBankingForm;