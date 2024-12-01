import React from "react";
import FeaturedItem from "./FeaturedItem";

const FeaturedArea = () => {
  return (
    <div className="featured-area">
      <div className="featured-area-con">
        <div className="featured-title-con">
          <p style={{ textWrap: "nowrap", fontSize: "26px" }}>
            <strong>Featured </strong>Categories
          </p>
          <div className="hr-feat">
            <hr />
          </div>
        </div>
        <div className="featured-carousel-con">
          <FeaturedItem />
          <FeaturedItem />
          <FeaturedItem />
          <FeaturedItem />
          <FeaturedItem />
          <FeaturedItem />
        </div>
      </div>
    </div>
  );
};

export default FeaturedArea;
