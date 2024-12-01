import React from "react";
import ProductItem from "./ProductItem";

const Shop = () => {
  return (
    <div className="shop-area">
      <div className="shop-con">
        <h1>Shop</h1>
        <div className="shop-space">
          <ProductItem style={{ marginRight: "0px" }} />
          <ProductItem style={{ margin: "0px" }} />
          <ProductItem style={{ margin: "0px" }} />
        </div>
      </div>
    </div>
  );
};

export default Shop;
