import { useState } from "react";
import "./AIPlanner.css";

import PlannerForm from "../components/AIPlanner/PlannerForm";
import TripResult from "../components/AIPlanner/TripResult";

import tripPlans from "../data/tripPlans";
import hotels from "../data/hotels";

function AIPlanner() {

  const [formData, setFormData] = useState({
    destination: "",
    budget: "",
    days: "",
    travelers: "",
    style: "Luxury"
  });

  const [trip, setTrip] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const generateTrip = () => {

    // Validate all fields
    if (
      !formData.destination ||
      !formData.budget ||
      !formData.days ||
      !formData.travelers
    ) {
      alert("Please fill all the fields.");
      return;
    }

    const selectedTrip = tripPlans[formData.destination];
    const recommendedHotel = hotels.find(
  (hotel) =>
    hotel.location.toLowerCase() ===
    formData.destination.toLowerCase()
);

    if (!selectedTrip) {
      alert("Trip not available.");
      return;
    }

    const budget = Number(formData.budget);
    const days = Number(formData.days);

    // Budget Distribution
    const hotelCost = Math.round(budget * 0.45);
    const food = Math.round(budget * 0.20);
    const transport = Math.round(budget * 0.15);
    const activities = Math.round(budget * 0.20);

    // Generate itinerary based on days
    const itinerary = [];

    for (let i = 0; i < days; i++) {
      itinerary.push(
        selectedTrip.itinerary[
          i % selectedTrip.itinerary.length
        ]
      );
    }

    setTrip({
  ...selectedTrip,
  hotelCost,
  food,
  transport,
  activities,
  itinerary,
  recommendedHotel
});
  };

  return (
    <div className="ai-planner-page">

      <PlannerForm
        formData={formData}
        handleChange={handleChange}
        generateTrip={generateTrip}
      />

      <TripResult trip={trip} />

    </div>
  );
}

export default AIPlanner;