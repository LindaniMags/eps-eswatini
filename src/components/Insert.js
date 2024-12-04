import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { VscTools } from "react-icons/vsc";
import { PiTractorLight } from "react-icons/pi";
import { AiOutlineFilter } from "react-icons/ai";
import { TbReplace } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";

const Insert = () => {
  return (
    <div className="insert-section">
      <div className="insert-con">
        <div className="insert-item">
          <PiTractorLight className="insert-icon" />
          <div className="insert-txt-con">
            <h3>G.E.T</h3>
            <p>Ground Engagement Tools</p>
          </div>
        </div>
        <div className="vl-insert"></div>
        <div className="insert-item">
          <AiOutlineFilter className="insert-icon" />
          <div className="insert-txt-con">
            <h3>Service Kit Filters</h3>
            <p>Get the right filters at the right price</p>
          </div>
        </div>
        <div className="vl-insert"></div>
        <div className="insert-item">
          <VscTools className="insert-icon" />
          <div className="insert-txt-con">
            <h3>Free Shipping</h3>
            <p>Free Shipping for SD based</p>
          </div>
        </div>
        <div className="vl-insert"></div>
        <div className="insert-item">
          <TbReplace className="insert-icon" />
          <div className="insert-txt-con">
            <h3>Replacement Parts</h3>
            <p>Get the correct replacement parts</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insert;
