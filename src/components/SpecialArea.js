import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import ProductItem from "./ProductItem";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SmallProdArea = () => {
  return (
    <div className="small-prod-area">
      <div className="small-prod-area-con">
        <div className="small-prod-title">
          <p style={{ textWrap: "nowrap", fontSize: "26px" }}>
            <strong>Special </strong>Offers
          </p>
          <div className="hr-small-prod">
            <hr />
          </div>
          <div className="arrows-con">
            <BsArrowLeft />
            <BsArrowRight />
          </div>
        </div>
        <div className="small-prod-carousel-con">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={5}
            loop={true}
          >
            <SwiperSlide>
              <ProductItem />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SmallProdArea;
