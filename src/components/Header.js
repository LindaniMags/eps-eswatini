import React, { useState, useEffect, useRef } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router";
import Categories from "./Categories";

function Header() {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const categoriesRef = useRef(null);

  const toggleCategories = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        categoriesRef.current &&
        !categoriesRef.current.contains(event.target)
      ) {
        setIsCategoriesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="header-con">
      <div className="header-top-con">
        <div className="header-top">
          <div className="follow-us">
            <p className="label">Follow us: </p>
            <div className="icons">
              <FaFacebookF />
              <FaXTwitter />
              <FaWhatsapp />
            </div>
          </div>
          <p className="contact-us">Contact us</p>
        </div>
      </div>

      <div className="header-middle">
        <div className="logo">
          <Link to="/">
            <img
              src="./images/eps-logo.png"
              alt="logo"
              style={{ width: "100px" }}
            />
          </Link>
        </div>
        <div className="mobile-categories-container" ref={categoriesRef}>
          <Categories
            isMobile={true}
            isOpen={isCategoriesOpen}
            onToggle={toggleCategories}
          />
        </div>
        <div className="search-con">
          <input type="text" className="sesarch-input" placeholder="Search" />
          <div className="search-btn">
            <button>
              <IoSearchOutline />
            </button>
          </div>
        </div>
        <div className="get-quote-con">Get Quote</div>
      </div>
      <div className="header-bottom">
        <div className="nav-con">
          <Link to="/" className="nav-item">
            Home
          </Link>
          <Link to="/about" className="nav-item">
            About
          </Link>
          <Link to="/services" className="nav-item">
            Services
          </Link>
          <Link to="/contact" className="nav-item">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
