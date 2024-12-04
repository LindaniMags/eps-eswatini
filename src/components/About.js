import React from "react";
import { IoHomeOutline } from "react-icons/io5";
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
          <h2>This is our story</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed impedit
            ut nisi!
          </p>
        </div>
        <div className="why-us-area">
          <h2>Why Choose Us</h2>
          <div className="why-us-con">
            <div className="why-us-item">
              <IoHomeOutline />
              <h4>Choose title</h4>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className="why-us-item">
              <IoHomeOutline />
              <h4>Choose title</h4>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className="why-us-item">
              <IoHomeOutline />
              <h4>Choose title</h4>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </div>
        <div className="cover-con" style={{ width: "100%", marginTop: "55px" }}>
          <div className="cover-item">
            <img src="./images/services1.webp" alt="logo" />
            <p>Cover Item</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
              id quisquam suscipit doloribus vitae voluptatum!
            </p>
          </div>
          <div className="cover-item" style={{ textAlign: "center" }}>
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
        <div className="feedback-area">
          <h1>What Our Customers Say</h1>
          <div className="testimo">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore, temporibus!
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
