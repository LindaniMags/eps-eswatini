import React from "react";
import { MdOutlineLocalPhone } from "react-icons/md";
import { FaAddressBook } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <div className="contact-area">
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
              <p>Phone</p>
            </div>
            <div className="contact">
              <FaAddressBook />
              <p>Address</p>
            </div>
            <div className="contact">
              <AiOutlineMail />
              <p>Email</p>
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
