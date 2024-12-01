import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import ProductItem from "./ProductItem";

const ProductArea = () => {
  return (
    <div className="product-area">
      <div className="product-area-con">
        <div className="product-title-con">
          <div className="product-tabs">
            <p style={{ textWrap: "nowrap", fontSize: "26px" }}>
              <strong>Our </strong>Products
            </p>
            <div className="hr-prod">
              <hr />
            </div>
            <div className="product-tabs-con">
              <div className="product-tab">
                <p>Product 1</p>
              </div>
              <div className="hr-tab">
                <hr />
              </div>
              <div className="product-tab">
                <p>Product 2</p>
              </div>
              <div className="hr-tab">
                <hr />
              </div>
              <div className="product-tab">
                <p>Product 3</p>
              </div>
            </div>
            <div className="hr-arrows">
              <hr />
            </div>
            <div className="arrows-con">
              <MdOutlineKeyboardArrowRight />
              <MdOutlineKeyboardArrowRight />
            </div>
          </div>
        </div>
      </div>
      <div className="product-carousel-con">
        <div className="carousel-con">
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

export default ProductArea;
