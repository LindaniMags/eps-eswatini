import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import ProductItem from "./ProductItem";

const ProductArea = () => {
  return (
    <div className="product-area">
      <div className="product-area-con">
        <div className="product-title-con">
          <div className="product-tabs">
            <p style={{ textWrap: "nowrap", fontSize: "26px" }}>
              <strong>Our </strong>Products
            </p>
            <div className="hr-prod">
              <hr />
            </div>
            <div className="product-tabs-con">
              <div className="product-tab">
                <p>Ewatini</p>
              </div>
              <div className="hr-tab">
                <hr />
              </div>
              <div className="product-tab">
                <p>Plant</p>
              </div>
              <div className="hr-tab">
                <hr />
              </div>
              <div className="product-tab">
                <p>Spares</p>
              </div>
            </div>
            <div className="hr-arrows">
              <hr />
            </div>
            <div className="arrows-con">
              <BsArrowLeft />
              <BsArrowRight />
            </div>
          </div>
        </div>
      </div>
      <div className="product-carousel-con">
        <div className="carousel-con">
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
                title="Track Shoe"
                prodImg={"prod1.png"}
                category="Undercarriage Parts"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem
                title="Mobile Generator"
                prodImg={"prod3.png"}
                category="Construction Equipment"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem
                title="Rammer"
                prodImg={"prod10.png"}
                category="Construction Equipment"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem
                title="Track Roller"
                prodImg={"prod2.png"}
                category="Undercarriage Parts"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem
                title="Carrier Roller"
                prodImg={"prod8.png"}
                category="Undercarriage Parts"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem
                title="Water Pump"
                prodImg={"prod5.png"}
                category="Construction Equipment"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductItem
                title="Bolts & Nuts"
                prodImg={"prod9.png"}
                category="Spares"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ProductArea;
