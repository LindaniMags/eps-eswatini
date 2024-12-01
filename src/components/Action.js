import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

const Action = () => {
  return (
    <div className="action-area">
      <div className="action-con">
        <div className="action-item-con">
          <div className="action-item">
            <h1>Lorem ipsum dolor sit amet.</h1>
            <p style={{ textAlign: "start" }}>Lorem ipsum </p>
          </div>
          <div className="discover-btn">
            <button>Discover Now</button>
          </div>
          <div className="action-icons">
            <FaFacebookF />
            <FaXTwitter />
            <FaWhatsapp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Action;
