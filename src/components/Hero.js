import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-con">
        <div className="cat-row">
          <div className="cat-title">
            <div className="cat-menu-title">
              <IoMdMenu style={{ fontSize: "25px", color: "white" }} />
              <p style={{ color: "white" }}>Browse Categories</p>
            </div>
            <MdOutlineKeyboardArrowRight />
          </div>
          <div className="cat-con">
            <div className="cat-item">
              <p className="cat-name">Undercarriage Parts</p>
              <MdOutlineKeyboardArrowRight />
            </div>
            <div className="cat-item">
              <p className="cat-name">Electrical Parts</p>
              <MdOutlineKeyboardArrowRight />
            </div>
            <div className="cat-item">
              <p className="cat-name">G.E.T</p>
              <MdOutlineKeyboardArrowRight />
            </div>
            <div className="cat-item">
              <p className="cat-name">Construction Equipment</p>
              <MdOutlineKeyboardArrowRight />
            </div>
            <div className="cat-item">
              <p className="cat-name">Service Kit Filters</p>
              <MdOutlineKeyboardArrowRight />
            </div>
            <div className="cat-item">
              <p className="cat-name">Other Spares & Equipment</p>
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
              <Link to="shop">Browse products</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
