/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";

export default function MusicianCardSlider() {
  return (
    <div className="BL--musician--cardslider">
      
      <div className="container-fluid"> 
        <div className="row">
        <Swiper
        slidesPerView={2}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src="/images/musicians/slide.png" alt="slide" /></SwiperSlide>
        <SwiperSlide><img src="/images/musicians/slide-2.png" alt="slide" /></SwiperSlide>
        <SwiperSlide><img src="/images/musicians/slide-3.png" alt="slide" /></SwiperSlide>
        <SwiperSlide><img src="/images/musicians/slide-4.png" alt="slide" /></SwiperSlide>
       
      </Swiper>
          
        </div>
        
      </div>
      
    </div>
  );
}


