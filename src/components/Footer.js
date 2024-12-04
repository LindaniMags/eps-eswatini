import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-con">
        <div className="company box">
          <div className="company-item-con">
            <div className="company-item">
              <div className="logo">
                <img
                  src="./images/eps-logo.png"
                  alt="logo"
                  style={{ width: "100px" }}
                />
              </div>
              <strong>
                <p>Parts Of Great Quality</p>
              </strong>
            </div>
            <div className="company-item">
              <strong>
                <p>Address</p>
              </strong>
              <p>Floron Business Center, Matsapha Industrial Site</p>
            </div>
            <div className="company-item">
              <strong>
                <p>Need Help?</p>
              </strong>
              <p>(268) 7631 0838 / 7931 0838</p>
            </div>
          </div>
        </div>
        <div className="info ">
          <strong>
            <p>Infomation</p>
          </strong>
          <p>Contact Us</p>
          <p>Delivery Information</p>
          <p>Privacy Policy</p>
          <p>Coming Soon</p>
          <p>Terms & Conditions</p>
        </div>
        <div className="extras ">
          <strong>
            <p>Extras</p>
          </strong>
          <p>Returns</p>
          <p>Order History</p>
          <p>Wish List</p>
          <p>Newsletter</p>
          <p>Specials</p>
        </div>
        <div className="newsletter box ">
          <strong>
            <p>Newsletter Subscribe</p>
          </strong>
          <p>We’ll never share your email address with a third-party.</p>
          <div className="subscribe-con">
            <input type="text" />
            <button>subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
