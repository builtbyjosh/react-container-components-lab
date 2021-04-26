// Code MovieReviews Here
import React from 'react'
const Review = ({ display_title, headline, byline, publication_date }) => {
  return (
    <div className="review" key={headline}>
      <h1>{display_title}</h1>
      <p>{headline}</p>
      <p>
        {byline}, {publication_date}
      </p>
    </div>
  );
};

const MovieReviews = ({ reviews }) => (
  <div className="review-list">{reviews.map(Review)}</div>
);

MovieReviews.defaultProps = {
  reviews: [],
};

export default MovieReviews