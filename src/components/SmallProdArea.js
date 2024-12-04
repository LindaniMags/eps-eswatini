import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
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
            <MdOutlineKeyboardArrowRight />
            <MdOutlineKeyboardArrowRight />
          </div>
        </div>
        <div className="small-prod-carousel-con">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={3}
            loop={true}
          >
            <SwiperSlide>
              <SmallProdItem />
            </SwiperSlide>
            <SwiperSlide>
              <SmallProdItem />
            </SwiperSlide>
            <SwiperSlide>
              <SmallProdItem />
            </SwiperSlide>
            <SwiperSlide>
              <SmallProdItem />
            </SwiperSlide>
            <SwiperSlide>
              <SmallProdItem />
            </SwiperSlide>
            <SwiperSlide>
              <SmallProdItem />
            </SwiperSlide>
            <SwiperSlide>
              <SmallProdItem />
            </SwiperSlide>
            <SwiperSlide>
              <SmallProdItem />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SmallProdArea;
