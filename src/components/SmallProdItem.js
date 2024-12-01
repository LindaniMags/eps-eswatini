import React from "react";
import { IoIosStar } from "react-icons/io";

const SmallProdItem = () => {
  return (
    <div className="small-prod-item">
      <div className="small-prod-item-con">
        <div className="small-prod-txt">
          <p>Product Name</p>
          <div className="ratings-con">
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
          </div>
          <p>E210.00</p>
        </div>
        <div className="small-prod-img-con">
          <img src="./images/logo192.png" alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default SmallProdItem;
