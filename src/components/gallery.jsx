import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import style from "./main1.css";

import Heading from "./headinges";

import img3 from "./images/img21.jpg";

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

export default function Gall() {
    return (
        <>
            <div className="container">

                <Heading heeading="Gallery" />
                <p className="sub">
                    "Breathe. Stretch. Thrive. "
                </p>

                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide><img src={img3} className="w-100" alt="" /></SwiperSlide>
                    <SwiperSlide><img src={img3} className="w-100" alt="" /></SwiperSlide>
                    <SwiperSlide><img src={img3} className="w-100" alt="" /></SwiperSlide>
                    <SwiperSlide><img src={img3} className="w-100" alt="" /></SwiperSlide>
                    <SwiperSlide><img src={img3} className="w-100" alt="" /></SwiperSlide>
                    <SwiperSlide><img src={img3} className="w-100" alt="" /></SwiperSlide>
                    <SwiperSlide><img src={img3} className="w-100" alt="" /></SwiperSlide>
                    <SwiperSlide><img src={img3} className="w-100" alt="" /></SwiperSlide>
                    <SwiperSlide><img src={img3} className="w-100" alt="" /></SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}