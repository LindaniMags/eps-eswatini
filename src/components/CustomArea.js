import React from "react";
import SmallProdItem from "./SmallProdItem";

const CustomArea = () => {
  return (
    <div className="custom-area">
      <div className="custom-area-con">
        <div className="custom-items-con">
          <div className="custom-items">
            <div className="custom-item">
              <SmallProdItem title="Generator" prodImg="prod3.png" />
            </div>
            <div className="custom-item">
              <SmallProdItem title="Track Link" prodImg="prod7.png" />
            </div>
            <div className="custom-item">
              <SmallProdItem title="Nuts & Bolts" prodImg="prod9.png" />
            </div>
          </div>
        </div>
        <div className="custom-items-con">
          <div className="custom-items">
            <div className="custom-item">
              <SmallProdItem title="Pump" prodImg="prod4.png" />
            </div>
            <div className="custom-item">
              <SmallProdItem title="Track Shoe" prodImg="product8.webp" />
            </div>
            <div className="custom-item">
              <SmallProdItem title="Rammer" prodImg="prod10.png" />
            </div>
          </div>
        </div>
        <div className="custom-items-con">
          <div className="custom-items">
            <div className="custom-item">
              <SmallProdItem title="Track Shoe" prodImg="prod8.png" />
            </div>
            <div className="custom-item">
              <SmallProdItem title="Jet" prodImg="prod5.png" />
            </div>
            <div className="custom-item">
              <SmallProdItem title="Filter" prodImg="product13.webp" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomArea;
