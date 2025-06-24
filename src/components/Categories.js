import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router";

const Categories = ({ isMobile = false, isOpen = false, onToggle = null }) => {
  const categories = [
    { name: "Undercarriage Parts", path: "/undercarry" },
    { name: "Electrical Parts", path: "/electrical" },
    { name: "G.E.T", path: "/ground" },
    { name: "Construction Equipment", path: "/construction" },
    { name: "Service Kit Filters", path: "/filters" },
    { name: "Other Spares & Equipment", path: "/spares" },
  ];

  if (isMobile) {
    return (
      <>
        <div className="mobile-cat-toggle" onClick={onToggle}>
          <IoMdMenu className="mobile-menu-icon" />
          <span>Categories</span>
        </div>
        <div className={`mobile-cat-dropdown ${isOpen ? "open" : ""}`}>
          <div className="mobile-cat-list">
            {categories.map((category, index) => (
              <div key={index} className="mobile-cat-item">
                <Link to={category.path} onClick={onToggle}>
                  <span className="mobile-cat-name">{category.name}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }

  // Desktop version (original)
  return (
    <div className="cat-row">
      <div className="cat-title">
        <div className="cat-menu-title">
          <IoMdMenu style={{ fontSize: "25px", color: "white" }} />
          <p style={{ color: "white" }}>Browse Categories</p>
        </div>
        <MdOutlineKeyboardArrowRight />
      </div>
      <div className="cat-con">
        {categories.map((category, index) => (
          <div key={index} className="cat-item">
            <Link to={category.path}>
              <p className="cat-name">{category.name}</p>
            </Link>
            <MdOutlineKeyboardArrowRight />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
