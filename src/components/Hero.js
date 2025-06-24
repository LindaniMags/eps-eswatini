import React from "react";
import { Link } from "react-router";
import Categories from "./Categories";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-con">
        <Categories isMobile={false} />
        <div
          className="hero-slide-con"
          style={{
            backgroundImage: "url('./images/traactor.png')",
            backgroundSize: "cover",
          }}
        >
          <div className="hero-slide-text">
            <div className="top-qual-con">
              <p>Top quality</p>
              <div className="hr-slide">
                <hr />
              </div>
            </div>

            <h1 className="bg-txt">ESWATINI PLANT AND SPARES</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
