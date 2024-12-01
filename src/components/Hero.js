import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-con">
        <div className="cat-row">
          <div className="cat-title">
            <div className="cat-menu-title">
              <IoMdMenu style={{ fontSize: "25px", color: "white" }} />
              <p>Browse Categories</p>
            </div>
            <MdOutlineKeyboardArrowRight />
          </div>
          <div className="cat-con">
            <div className="cat-item">
              <p className="cat-name">category name</p>
              <MdOutlineKeyboardArrowRight />
            </div>
            <div className="cat-item">
              <p className="cat-name">category name</p>
              <MdOutlineKeyboardArrowRight />
            </div>
            <div className="cat-item">
              <p className="cat-name">category name</p>
              <MdOutlineKeyboardArrowRight />
            </div>
            <div className="cat-item">
              <p className="cat-name">category name</p>
              <MdOutlineKeyboardArrowRight />
            </div>
          </div>
        </div>
        <div className="hero-slide-con">
          <div className="hero-slide-text">
            <div className="top-qual-con">
              <p>Top quality</p>
              <div className="hr-slide">
                <hr />
              </div>
            </div>

            <h1 className="bg-txt">ESWATINI PLANT AND SPARES</h1>
            <div className="browse-btn">
              <a>Browse products</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
