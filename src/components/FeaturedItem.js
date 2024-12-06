import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const FeaturedItem = ({ item1, item2, item3, category, featImg }) => {
  return (
    <div className="featured-item-con">
      <div className="featured-item-content">
        <img src={`./images/${featImg}`} alt="logo" />
        <div className="featured-txt">
          <h4>{category}</h4>
          <p>{item1}</p>
          <p>{item2}</p>
          <p>{item3}</p>
          <div className="shop-now">
            <strong>
              <p>Shop Now</p>
            </strong>
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
