import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import style from "./main1.css";

import Heading from "./headinges";

import gal1 from "./images/gallery/g-1.jpeg";
import gal2 from "./images/gallery/g-2.jpeg";
import gal3 from "./images/gallery/g-3.jpeg";
import gal4 from "./images/gallery/g-4.jpeg";
import gal5 from "./images/gallery/g-5.jpeg";
import gal6 from "./images/gallery/g-6.jpeg";
import gal7 from "./images/gallery/g-7.jpeg";
import gal8 from "./images/gallery/g-8.jpeg";
import gal9 from "./images/gallery/g-9.jpeg";
import gal11 from "./images/gallery/g-11.jpeg";

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

export default function Gall() {

    let widt = "";

    if (window.innerWidth < 760) {
        (widt = 1);
    } else {
        (widt = 3);
    }

    return (

        <>
            <div className="container">

                <Heading heeading="Gallery" />
                <p className="sub">
                    "Breathe. Stretch. Thrive. "
                </p>

                <Swiper
                    slidesPerView={widt}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide><img src={gal1} className="w-100" alt="" /></SwiperSlide>
                    <SwiperSlide><img src={gal2} className="w-100" alt="" /></SwiperSlide>
                    <SwiperSlide><img src={gal3} className="w-100" alt="" /></SwiperSlide>
                    <SwiperSlide><img src={gal4} className="w-100" alt="" /></SwiperSlide>
                    <SwiperSlide><img src={gal5} className="w-100" alt="" /></SwiperSlide>
                    <SwiperSlide><img src={gal6} className="w-100" alt="" /></SwiperSlide>
                    <SwiperSlide><img src={gal7} className="w-100" alt="" /></SwiperSlide>
                    <SwiperSlide><img src={gal8} className="w-100" alt="" /></SwiperSlide>
                    <SwiperSlide><img src={gal9} className="w-100" alt="" /></SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}