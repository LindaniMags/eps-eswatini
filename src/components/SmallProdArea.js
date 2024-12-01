import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import SmallProdItem from "./SmallProdItem";

const SmallProdArea = () => {
  return (
    <div className="small-prod-area">
      <div className="small-prod-area-con">
        <div className="small-prod-title">
          <p style={{ textWrap: "nowrap", fontSize: "26px" }}>
            <strong>Spare </strong>Parts
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
          <SmallProdItem />
          <SmallProdItem />
          <SmallProdItem />
          <SmallProdItem />
          <SmallProdItem />
        </div>
      </div>
    </div>
  );
};

export default SmallProdArea;
