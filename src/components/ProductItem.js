import React from "react";
import { IoIosStar } from "react-icons/io";

const ProductItem = ({ category, title, prodImg }) => {
  return (
    <div className="product-item-con">
      <div className="product-item">
        <p>{title}</p>
        <div className="product-item-img-con">
          <img src={`./images/${prodImg}`} alt="logo" />
        </div>
        <div className="ratings-con-prod">
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
        </div>
        <div className="price-con">
          <p style={{ marginBottom: "10px" }}>{category}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
