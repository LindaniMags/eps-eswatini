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
            breakpoints={{
              1440: { slidesPerView: 5 },
              1080: { slidesPerView: 4 },
              640: { slidesPerView: 3 },
              360: { slidesPerView: 2 },
            }}
            loop={true}
          >
            <SwiperSlide>
              <ProductItem
                title="Water Jet"
                prodImg={"prod5.png"}
                category="Electrical"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem
                title="Rammer"
                prodImg={"prod10.png"}
                category="Construction"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem
                title="Generator"
                prodImg={"prod6.png"}
                category="Electrical"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem
                title="Filter"
                prodImg={"product8.webp"}
                category="Replacements"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem
                title="Track Shoe"
                prodImg={"prod1.png"}
                category="Undercarriage"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem
                title="Roller"
                prodImg={"prod2.png"}
                category="Undercarriage"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SmallProdArea;
