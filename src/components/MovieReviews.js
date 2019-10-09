// Code MovieReviews Here
import React from 'react';

const MovieReviews = props => {
  //

  function renderReviews(reviewsArray) {

    return reviewsArray.map(review => {
      let {display_title, headline, mpaa_rating, summary_short} = review
      return(<div className="review" key={display_title}>
        <p><strong>{`Title: ${display_title} || Rating: ${mpaa_rating}`}</strong></p>
        <p>{`${headline}`}</p>
        <p>{`Summary: ${summary_short}`}</p>
      </div>)
    })
  }

  return (
    <div className="review-list">
      {renderReviews(props.reviews)}
    </div>
)
}

export default MovieReviews
