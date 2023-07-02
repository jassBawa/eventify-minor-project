import { StarOutlinedIcon, StarSolidIcon } from "@/assets/Icons";
import clsx from "clsx";
import React, { memo } from "react";

const Rating = ({ rating, onRatingChange }) => {
  const handleRatingClick = (selectedRating) => {
    onRatingChange(selectedRating);
  };

  const renderStars = () => {
    const maxRating = 5;
    const stars = [];

    for (let i = 1; i <= maxRating; i++) {
      const ratingValue = i;

      if (ratingValue <= rating) {
        stars.push(
          <StarSolidIcon
            key={i}
            className={clsx("h-8 w-8")}
            onClick={() => handleRatingClick(ratingValue)}
          />
        );
      } else {
        stars.push(
          <StarOutlinedIcon
            key={i}
            className={clsx("h-8 w-8")}
            onClick={() => handleRatingClick(ratingValue)}
          />
        );
      }
    }

    return stars;
  };

  return <div className="flex gap-3">{renderStars()}</div>;
};

export default memo(Rating);
