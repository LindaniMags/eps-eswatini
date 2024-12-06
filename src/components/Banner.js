import React from "react";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-con">
        <div
          className="banner-content"
          style={{
            backgroundImage: `url(./images/filter-kit.png)`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div
          className="banner-content"
          style={{
            backgroundImage: `url(./images/spares.png)`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Banner;
