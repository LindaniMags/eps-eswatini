import React from "react";
import { IoIosStar } from "react-icons/io";

const SmallProdItem = ({ title, prodImg }) => {
  return (
    <div className="small-prod-item">
      <div className="small-prod-item-con">
        <div className="small-prod-txt">
          <p>{title}</p>
          <div className="ratings-con">
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
          </div>
        </div>
        <div className="small-prod-img-con">
          <img src={`./images/${prodImg}`} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default SmallProdItem;
