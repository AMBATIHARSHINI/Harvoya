import "./Reviews.css";
import { FaStar } from "react-icons/fa";
import reviews from "../data/reviews";

function Reviews({ hotelId }) {

  const hotelReviews = reviews.filter(
    review => review.hotelId === hotelId
  );

  return (

    <section className="reviews-section">

      <div className="reviews-header">

        <h2>Guest Reviews</h2>

        <p>
          See what our guests say about their unforgettable experience.
        </p>

      </div>

      <div className="reviews-grid">

        {hotelReviews.map((review) => (

          <div
            className="review-card"
            key={review.id}
          >

            <div className="review-top">

              <img
                src={review.avatar}
                alt={review.name}
              />

              <div>

                <h3>{review.name}</h3>

                <span>{review.country}</span>

              </div>

            </div>

            <div className="review-stars">

              {[...Array(review.rating)].map((_, index) => (

                <FaStar key={index} />

              ))}

            </div>

            <p className="review-text">

              "{review.review}"

            </p>

          </div>

        ))}

      </div>

    </section>

  );

}

export default Reviews;