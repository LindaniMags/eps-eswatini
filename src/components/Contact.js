import React from "react";
import { MdOutlineLocalPhone } from "react-icons/md";
import { FaAddressBook } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <div className="contact-area">
      <div className="page-title">
        <p>About Us</p>
      </div>
      <img src="./images/about1.webp" alt="logo" />
      <div className="contact-con">
        <div className="contact-details">
          <h1>Contact Us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam,
            porro. Illum veritatis ea nulla reprehenderit, magnam eligendi ullam
            explicabo inventore earum, quaerat nemo error sit?
          </p>
          <div className="contacts">
            <div className="contact">
              <MdOutlineLocalPhone />
              <p>
                <strong>Phone:</strong> (268) 7631 0838 / 7931 0838
              </p>
            </div>
            <div className="contact">
              <FaAddressBook />
              <p>
                <strong>Address:</strong> Floron Business Center, Matsapha
                Industrial Site
              </p>
            </div>
            <div className="contact">
              <AiOutlineMail />
              <p>
                <strong>Email:</strong> sales@eswapas.com / jay@eswapas.com
              </p>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <h1>Get In Touch</h1>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="subject" placeholder="Subject" />
            <textarea placeholder="Message" />
            <button>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
