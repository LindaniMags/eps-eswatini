import React from "react";
import { IoIosStar } from "react-icons/io";

const ProductItem = () => {
  return (
    <div className="product-item-con">
      <div className="product-item">
        <p>JBL Bluetooth Speakers</p>
        <p style={{ marginBottom: "10px" }}>Category</p>
        <div className="product-item-img-con">
          <p className="span">-20%</p>
          <img src="./images/product8.webp" alt="logo" />
        </div>
        <div className="ratings-con-prod">
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
        </div>
        <div className="price-con">
          <p>E100.00</p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
