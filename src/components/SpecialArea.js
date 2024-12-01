import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import ProductItem from "./ProductItem";

const SmallProdArea = () => {
  return (
    <div className="small-prod-area">
      <div className="small-prod-area-con">
        <div className="small-prod-title">
          <p style={{ textWrap: "nowrap", fontSize: "26px" }}>
            <strong>Featured </strong>Categories
          </p>
          <div className="hr-small-prod">
            <hr />
          </div>
          <div className="arrows-con">
            <MdOutlineKeyboardArrowRight />
            <MdOutlineKeyboardArrowRight />
          </div>
        </div>
        <div className="small-prod-carousel-con">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
      </div>
    </div>
  );
};

export default SmallProdArea;
