import "./FeaturedPackages.css";
import packages from "../data/packages";

function FeaturedPackages() {
  return (
    <section className="packages">

      <div className="packages-heading">

        <span className="package-tag">
          FEATURED PACKAGES
        </span>

        <h2>Find Your Perfect Vacation</h2>

        <p>
          Carefully crafted travel packages designed to give you unforgettable
          experiences at the world's most beautiful destinations.
        </p>

      </div>

      <div className="package-grid">

        {packages.map((pkg) => (

          <div className="package-card" key={pkg.id}>

            <div className="package-image">

              <img src={pkg.image} alt={pkg.title} />

              <span className="badge">
                {pkg.badge}
              </span>

              <span className="rating">
                ⭐ {pkg.rating}
              </span>

            </div>

            <div className="package-content">

              <h3>{pkg.title}</h3>

              <h4>{pkg.location}</h4>

              <p className="duration">
                📅 {pkg.duration}
              </p>

              <ul>

                {pkg.includes.map((item, index) => (

                  <li key={index}>
                    ✔ {item}
                  </li>

                ))}

              </ul>

              <div className="price">

                <span className="old-price">
                  {pkg.oldPrice}
                </span>

                <span className="new-price">
                  {pkg.newPrice}
                </span>

              </div>

              <button>
                Book Now →
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default FeaturedPackages;