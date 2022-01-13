

import ReactStars from "react-rating-stars-component";
import React from "react";

function Rating({rating, setRating}){
  const ratingChanged = (newRating) => {
     setRating(newRating)
      console.log(newRating)
    };
 
  return(
    <div className="rate">
    <ReactStars
    count={5}
    onChange={ratingChanged}
    value = {rating}
    size={24}
    activeColor="#ffd700"
    />
   </div>
 
  )
}

export default Rating