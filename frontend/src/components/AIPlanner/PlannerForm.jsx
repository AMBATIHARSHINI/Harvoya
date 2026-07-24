import "./PlannerForm.css";

function PlannerForm({ formData, handleChange, generateTrip }) {
  return (
    <div className="planner-form">

      <h2>🤖 AI Trip Planner</h2>

      <p>Plan your dream vacation in seconds.</p>

      <div className="form-group">
        <label>Destination</label>

        <select
          name="destination"
          value={formData.destination}
          onChange={handleChange}
        >
          <option value="">Select Destination</option>
          <option value="Bali">Bali</option>
          <option value="Maldives">Maldives</option>
          <option value="Paris">Paris</option>
          <option value="Switzerland">Switzerland</option>
          <option value="Italy">Italy</option>
          <option value="Japan">Japan</option>
        </select>
      </div>

      <div className="form-group">
        <label>Budget ($)</label>

        <input
          type="number"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          placeholder="Enter Budget"
        />
      </div>

      <div className="form-group">
        <label>Days</label>

        <input
          type="number"
          name="days"
          value={formData.days}
          onChange={handleChange}
          placeholder="Number of Days"
        />
      </div>

      <div className="form-group">
        <label>Travelers</label>

        <input
          type="number"
          name="travelers"
          value={formData.travelers}
          onChange={handleChange}
          placeholder="Number of Travelers"
        />
      </div>

      <div className="form-group">
        <label>Travel Style</label>

        <select
          name="style"
          value={formData.style}
          onChange={handleChange}
        >
          <option value="Luxury">Luxury</option>
          <option value="Budget">Budget</option>
          <option value="Adventure">Adventure</option>
          <option value="Family">Family</option>
          <option value="Couple">Couple</option>
        </select>
      </div>

      <button
        className="generate-btn"
        onClick={generateTrip}
      >
        ✨ Generate Trip
      </button>

    </div>
  );
}

export default PlannerForm;