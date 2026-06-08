import { featuredReviews, googleReviewStats } from "@/data/reviews";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="star-rating" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => (
        <svg
          key={index}
          aria-hidden="true"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill={index < rating ? "currentColor" : "none"}
        >
          <path
            d="M12 2.5l2.76 5.59 6.17.9-4.47 4.35 1.05 6.14L12 17.9l-5.51 2.9 1.05-6.14-4.47-4.35 6.17-.9L12 2.5Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      ))}
    </div>
  );
}

export function ReviewsSection() {
  return (
    <section className="band soft" aria-labelledby="reviews-heading">
      <div className="section-inner section-head">
        <div>
          <div className="reviews-badge">
            <StarRating rating={5} />
            <span>
              <strong>{googleReviewStats.rating}</strong> on Google
            </span>
            <span className="reviews-count">
              {googleReviewStats.count}+ reviews
            </span>
          </div>
          <h2 id="reviews-heading">What Patients Say</h2>
          <p>
            Real feedback from Google reviews about care from Dr. Helin Derya
            Yildiz and the Ethicadent team.
          </p>
        </div>
        <a
          className="text-button"
          href={googleReviewStats.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read all Google reviews
        </a>
      </div>
      <div className="section-inner review-grid">
        {featuredReviews.map((review) => (
          <article key={review.author} className="review-card">
            <StarRating rating={review.rating} />
            <blockquote>
              <p>&ldquo;{review.text}&rdquo;</p>
            </blockquote>
            <footer>
              <cite>{review.author}</cite>
              <span>{review.source} review</span>
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
}
