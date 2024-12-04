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
            slidesPerView={3}
            loop={true}
          >
            <SwiperSlide>
              <div
                className="featured-slice"
                style={{ borderRight: "solid 1px #ddd" }}
              >
                <FeaturedItem />
                <FeaturedItem />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="featured-slice"
                style={{ borderRight: "solid 1px #ddd" }}
              >
                <FeaturedItem />
                <FeaturedItem />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="featured-slice"
                style={{ borderRight: "solid 1px #ddd" }}
              >
                <FeaturedItem />
                <FeaturedItem />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="featured-slice"
                style={{ borderRight: "solid 1px #ddd" }}
              >
                <FeaturedItem />
                <FeaturedItem />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default FeaturedArea;
