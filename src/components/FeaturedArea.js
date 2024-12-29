import React from "react";
import FeaturedItem from "./FeaturedItem";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const FeaturedArea = () => {
  return (
    <div className="featured-area">
      <div className="featured-area-con">
        <div className="featured-title-con">
          <p style={{ textWrap: "nowrap", fontSize: "26px" }}>
            <strong>Featured </strong>Categories
          </p>
          <div className="hr-feat">
            <hr />
          </div>
        </div>
        <div className="featured-carousel-con">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            breakpoints={{
              1080: { slidesPerView: 3 },
              768: { slidesPerView: 2 },
              360: { slidesPerView: 1 },
            }}
            loop={true}
          >
            <SwiperSlide>
              <div
                className="featured-slice"
                style={{ borderRight: "solid 1px #ddd" }}
              >
                <FeaturedItem
                  item1="Pumps"
                  item2="Generators"
                  item3="Lights"
                  category="Electrical Equipment"
                  featImg={"prod3.png"}
                />
                <FeaturedItem
                  item1="Chains"
                  item2="Links"
                  item3="Rollers"
                  category="Undercarriage Parts"
                  featImg={"prod8.png"}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="featured-slice"
                style={{ borderRight: "solid 1px #ddd" }}
              >
                <FeaturedItem
                  item1="Rammers"
                  item2="T.L.B"
                  item3="Rollers"
                  category="Construction Equipment"
                  featImg={"prod10.png"}
                />
                <FeaturedItem
                  item1="Adaptors"
                  item2="Shrouds"
                  item3="Blades"
                  category="G.E.T"
                  featImg={"prod7.png"}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="featured-slice"
                style={{ borderRight: "solid 1px #ddd" }}
              >
                <FeaturedItem
                  item1="Pins"
                  item2="Bolts"
                  item3="Nuts"
                  category="Spares"
                  featImg={"prod9.png"}
                />
                <FeaturedItem
                  item1="Filters"
                  item2="Tools"
                  item3="Links"
                  category="Replacements"
                  featImg={"product8.webp"}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="featured-slice"
                style={{ borderRight: "solid 1px #ddd" }}
              >
                <FeaturedItem
                  item1="Adaptors"
                  item2="Shrouds"
                  item3="Blades"
                  category="G.E.T"
                  featImg={"prod6.png"}
                />
                <FeaturedItem
                  item1="Rammers"
                  item2="T.L.B"
                  item3="Rollers"
                  category="Construction Equipment"
                  featImg={"prod10.png"}
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default FeaturedArea;
