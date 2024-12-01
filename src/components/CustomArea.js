import React from "react";
import SmallProdItem from "./SmallProdItem";

const CustomArea = () => {
  return (
    <div className="custom-area">
      <div className="custom-area-con">
        <div className="custom-items-con">
          <div className="custom-items">
            <div className="custom-item">
              <SmallProdItem />
            </div>
            <div className="custom-item">
              <SmallProdItem />
            </div>
            <div className="custom-item">
              <SmallProdItem />
            </div>
          </div>
        </div>
        <div className="custom-items-con">
          <div className="custom-items">
            <div className="custom-item">
              <SmallProdItem />
            </div>
            <div className="custom-item">
              <SmallProdItem />
            </div>
            <div className="custom-item">
              <SmallProdItem />
            </div>
          </div>
        </div>
        <div className="custom-items-con" style={{ display: "none" }}>
          <div className="custom-items">
            <div className="custom-item">
              <SmallProdItem />
            </div>
            <div className="custom-item">
              <SmallProdItem />
            </div>
            <div className="custom-item">
              <SmallProdItem />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomArea;
