import "./WhyChooseUs.css";

import {
  FaGlobeAsia,
  FaRobot,
  FaShieldAlt,
  FaHeadset,
} from "react-icons/fa";

function WhyChooseUs() {
  const features = [
    {
      icon: <FaGlobeAsia />,
      title: "Global Destinations",
      description:
        "Explore thousands of breathtaking destinations across the globe with carefully curated travel experiences.",
    },
    {
      icon: <FaRobot />,
      title: "AI Trip Planner",
      description:
        "Let AI build personalized travel itineraries based on your interests, budget and travel style.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure Booking",
      description:
        "Your bookings and payments are protected with industry-standard encryption and trusted partners.",
    },
    {
      icon: <FaHeadset />,
      title: "24×7 Customer Support",
      description:
        "Our travel experts are available anytime to help before, during and after your journey.",
    },
  ];

  return (
    <section className="why">

      <div className="why-heading">

        <span className="section-tag">
          WHY HARVOYA
        </span>

        <h2>Travel Smarter with Harvoya</h2>

        <p>
          From AI-powered trip planning to secure bookings and 24×7 customer
          support, Harvoya brings everything you need to plan unforgettable
          journeys—all in one beautiful platform.
        </p>

      </div>

      <div className="feature-grid">

        {features.map((feature, index) => (

          <div className="feature-card" key={index}>

            <div className="feature-icon">
              {feature.icon}
            </div>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default WhyChooseUs;