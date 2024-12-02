import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const FeaturedItem = () => {
  return (
    <div className="featured-item-con">
      <div className="featured-item-content">
        <img src="./images/logo192.png" alt="logo" />
        <div className="featured-txt">
          <h4>Featured Item</h4>
          <p>Category</p>
          <p>cat2</p>
          <p>cat3</p>
          <p>cat4</p>
          <div className="shop-now">
            <p>Shop Now</p>
            <MdOutlineKeyboardArrowRight
              style={{
                backgroundColor: "#ffd54c",
                borderRadius: "50%",
                padding: "3px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedItem;
