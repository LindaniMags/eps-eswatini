import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineSafety } from "react-icons/ai";
import { CiDollar } from "react-icons/ci";
import { LuLink } from "react-icons/lu";
import { IoIosStar } from "react-icons/io";

const About = () => {
  return (
    <div className="about-section">
      <div className="page-title">
        <p>About Us</p>
      </div>
      <div className="about-con">
        <div className="about-hero">
          <div className="abt-hero-img">
            <img src="./images/about1.webp" alt="logo" />
          </div>
          <h2>ESWATINI PLANT & SPARES</h2>
          <p>PARTS OF GREAT QUALITY</p>
        </div>
        <div className="why-us-area">
          <div className="why-us-con">
            <div className="why-us-item">
              <AiOutlineSafety />
              <h4>Reliability</h4>
              <p>We Are Providers of Reliable Services.</p>
            </div>
            <div className="why-us-item">
              <CiDollar />
              <h4>Affordable</h4>
              <p>Good Value For Your Money.</p>
            </div>
            <div className="why-us-item">
              <LuLink />
              <h4>Supply</h4>
              <p>International Supply Chain.</p>
            </div>
          </div>
        </div>
        <div className="cover-con" style={{ width: "100%", marginTop: "55px" }}>
          <div className="cover-item">
            <img src="./images/prod5.png" alt="logo" />
            <p>Replacement Parts</p>
            <p>
              We Supply High Quality Machinery Including, rammers, Petrol
              Generators, Trash Water Pump
            </p>
          </div>
          <div className="cover-item" style={{ textAlign: "center" }}>
            <img src="./images/prod10.png" alt="logo" />
            <p>Electrical Equipment</p>
            <p>
              We Supply High Quality Machinery Including, rammers, Petrol
              Generators, Trash Water Pump
            </p>
          </div>
          <div className="cover-item">
            <img src="./images/prod4.png" alt="logo" />
            <p>Construction Equipment</p>
            <p>
              We Supply High Quality Machinery Including, rammers, Petrol
              Generators, Trash Water Pump
            </p>
          </div>
        </div>
        <div className="feedback-area">
          <h1>What Our Customers Say</h1>
          <div className="testimo">
            <p>
              Fantastic experience! Friendly staff, excellent service, and
              top-quality products. Highly recommend!
            </p>
            <div className="user">
              <img src="./images/testimonial4.webp" alt="logo" />
              <h4>Customer Name</h4>
              <p>CEO of Company</p>
              <div className="customer-review">
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
