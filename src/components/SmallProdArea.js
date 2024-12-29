import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import SmallProdItem from "./SmallProdItem";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ProductItem from "./ProductItem";

const SmallProdArea = () => {
  return (
    <div className="small-prod-area">
      <div className="small-prod-area-con">
        <div className="small-prod-title">
          <p style={{ textWrap: "nowrap", fontSize: "26px" }}>
            <strong>Spare </strong>Parts
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
            spaceBetween={10}
            breakpoints={{
              1024: { slidesPerView: 3 },
              640: { slidesPerView: 2 },
              360: { slidesPerView: 1 },
            }}
            loop={true}
          >
            <SwiperSlide>
              <SmallProdItem title="Track Chain" prodImg="prod2.png" />
            </SwiperSlide>
            <SwiperSlide>
              <SmallProdItem title="Track Shoe" prodImg="prod1.png" />
            </SwiperSlide>
            <SwiperSlide>
              <SmallProdItem title="Filter" prodImg="product13.webp" />
            </SwiperSlide>
            <SwiperSlide>
              <SmallProdItem title="Track Link" prodImg="prod7.png" />
            </SwiperSlide>
            <SwiperSlide>
              <SmallProdItem title="Track Roller" prodImg="prod8.png" />
            </SwiperSlide>
            <SwiperSlide>
              <SmallProdItem title="Track Chain" prodImg="prod2.png" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SmallProdArea;
