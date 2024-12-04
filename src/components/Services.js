import React from "react";
import { MdConstruction } from "react-icons/md";
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
            <img src="./images/services1.webp" alt="logo" />
            <p>Cover Item</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
              id quisquam suscipit doloribus vitae voluptatum!
            </p>
          </div>
          <div className="cover-item">
            <img src="./images/services2.webp" alt="logo" />
            <p>Cover Item</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
              id quisquam suscipit doloribus vitae voluptatum!
            </p>
          </div>
          <div className="cover-item">
            <img src="./images/services3.webp" alt="logo" />
            <p>Cover Item</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
              id quisquam suscipit doloribus vitae voluptatum!
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
                  <MdConstruction />
                  <div className="service-txt">
                    <h3>Service</h3>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                  </div>
                </div>
                <div className="segment">
                  <MdConstruction />
                  <div className="service-txt">
                    <h3>Service</h3>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                  </div>
                </div>
              </div>
              <div className="services-seg">
                <div className="segment">
                  <MdConstruction />
                  <div className="service-txt">
                    <h3>Service</h3>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                  </div>
                </div>
                <div className="segment">
                  <MdConstruction />
                  <div className="service-txt">
                    <h3>Service</h3>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                  </div>
                </div>
              </div>
              <div className="services-seg">
                <div className="segment">
                  <MdConstruction />
                  <div className="service-txt">
                    <h3>Service</h3>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                  </div>
                </div>
                <div className="segment">
                  <MdConstruction />
                  <div className="service-txt">
                    <h3>Service</h3>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                  </div>
                </div>
              </div>
              <div className="services-seg">
                <div className="segment">
                  <MdConstruction />
                  <div className="service-txt">
                    <h3>Service</h3>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                  </div>
                </div>
                <div className="segment">
                  <MdConstruction />
                  <div className="service-txt">
                    <h3>Service</h3>
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
              <h2>Unlimited Services</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Possimus totam, omnis, sint tempore accusamus fugiat magnam
                impedit obcaecati eos, dolor tempora. Vel ipsum accusantium
                cupiditate.
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
