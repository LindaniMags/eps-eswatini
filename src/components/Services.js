import React from "react";
import { MdConstruction } from "react-icons/md";
import { LuConstruction } from "react-icons/lu";
import { CiFilter } from "react-icons/ci";
import { GiTankTread } from "react-icons/gi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdElectricBolt } from "react-icons/md";
import { PiShovel } from "react-icons/pi";
import Action from "./Action";

const Services = () => {
  return (
    <div className="services-area">
      <div className="services-con">
        <div className="page-title">
          <p>Our Services</p>
        </div>
        <div className="cover-con">
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
        <div className="service-items-con">
          <div className="services">
            <h1>Services</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis asperiores sint officia obcaecati. Non, maxime?
            </p>
            <div className="service-items-con">
              <div className="services-seg">
                <div className="segment">
                  <LuConstruction />
                  <div className="service-txt">
                    <h3>Construction</h3>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                  </div>
                </div>
                <div className="segment">
                  <CiFilter />
                  <div className="service-txt">
                    <h3>Filters</h3>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                  </div>
                </div>
              </div>
              <div className="services-seg">
                <div className="segment">
                  <GiTankTread />
                  <div className="service-txt">
                    <h3>Undercarriage</h3>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                  </div>
                </div>
                <div className="segment">
                  <MdElectricBolt />
                  <div className="service-txt">
                    <h3>Electrical</h3>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                  </div>
                </div>
              </div>
              <div className="services-seg">
                <div className="segment">
                  <MdConstruction />
                  <div className="service-txt">
                    <h3>Replacements</h3>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                  </div>
                </div>
                <div className="segment">
                  <PiShovel />
                  <div className="service-txt">
                    <h3>G.E.T</h3>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="services-banner-con">
          <div className="sevices-banner">
            <img src="./images/services4.webp" alt="banner-img" />
            <div className="services-banner-txt">
              <h2>Reliable Services</h2>
              <p>
                We Are Providers of Reliable Services in The Supply of Plant and
                Spares Of High Quality. Our Strong Regional and International
                Supply Chain Network Enables Us To Supply Our Customers With The
                Best Quality Products.
              </p>
              <a>
                <button className="learn-btn">Learn More</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
