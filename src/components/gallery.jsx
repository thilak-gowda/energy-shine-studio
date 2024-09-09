import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import style from "./main1.css";

import Heading from "./headinges";

import gal121 from "./images/gallery/g-2-1.jpeg";
import gal122 from "./images/gallery/g-2-2.jpeg";
import gal123 from "./images/gallery/g-2-3.jpeg";
import gal124 from "./images/gallery/g-2-4.jpeg";
import gal125 from "./images/gallery/g-2-5.jpeg";
import gal126 from "./images/gallery/g-2-6.jpeg";
import gal127 from "./images/gallery/g-2-7.jpeg";
import gal128 from "./images/gallery/g-2-8.jpeg";
import gal129 from "./images/gallery/g-2-9.jpeg";
import gal1210 from "./images/gallery/g-2-10.jpeg";
import gal1211 from "./images/gallery/g-2-11.jpeg";
import gal1212 from "./images/gallery/g-2-12.jpeg";
// import gal1213 from "./images/gallery/g-2-13.jpeg";
// import gal1214 from "./images/gallery/g-2-14.jpeg";

import gal1 from "./images/gallery/g-1.jpeg";
import gal2 from "./images/gallery/g-2.jpeg";
import gal3 from "./images/gallery/g-3.jpeg";
import gal4 from "./images/gallery/g-4.jpeg";
import gal5 from "./images/gallery/g-5.jpeg";
import gal6 from "./images/gallery/g-6.jpeg";
import gal7 from "./images/gallery/g-7.jpeg";
import gal8 from "./images/gallery/g-8.jpeg";
import gal9 from "./images/gallery/g-9.jpeg";
import gal10 from "./images/gallery/g-10.jpeg";
import gal11 from "./images/gallery/g-11.jpeg";
import gal12 from "./images/gallery/g-12.jpeg";
import gal13 from "./images/gallery/g-13.jpeg";

import img22 from "./images/g-10.jpeg";

import img23 from "./images/g-12.jpeg";
import img24 from "./images/g-13.jpeg";

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

                    {/* new-images august-9th */}
                    <SwiperSlide><img src={gal121} className="galleryImg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src={gal122} className="galleryImg" alt="" /></SwiperSlide>

                    <SwiperSlide><img src={gal123} className="galleryImg" alt="" /></SwiperSlide>

                    <SwiperSlide><img src={gal124} className="galleryImg" alt="" /></SwiperSlide>

                    <SwiperSlide><img src={gal125} className="galleryImg" alt="" /></SwiperSlide>

                    <SwiperSlide><img src={gal126} className="galleryImg" alt="" /></SwiperSlide>

                    <SwiperSlide><img src={gal127} className="galleryImg" alt="" /></SwiperSlide>

                    <SwiperSlide><img src={gal128} className="galleryImg" alt="" /></SwiperSlide>

                    <SwiperSlide><img src={gal129} className="galleryImg" alt="" /></SwiperSlide>

                    <SwiperSlide><img src={gal1210} className="galleryImg" alt="" /></SwiperSlide>

                    <SwiperSlide><img src={gal1211} className="galleryImg" alt="" /></SwiperSlide>

                    <SwiperSlide><img src={gal1212} className="galleryImg" alt="" /></SwiperSlide>



                    {/* old gallery */}

                    <SwiperSlide><img src={gal1} className="galleryImg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src={gal2} className="galleryImg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src={gal3} className="galleryImg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src={gal4} className="galleryImg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src={gal5} className="galleryImg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src={gal6} className="galleryImg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src={gal7} className="galleryImg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src={gal8} className="galleryImg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src={gal9} className="galleryImg" alt="" /></SwiperSlide>

                    <SwiperSlide><img src={img22} className="galleryImg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src={img23} className="galleryImg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src={img24} className="galleryImg" alt="" /></SwiperSlide>


                    <SwiperSlide><img src={gal10} className="galleryImg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src={gal11} className="galleryImg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src={gal12} className="galleryImg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src={gal13} className="galleryImg" alt="" /></SwiperSlide>

                </Swiper>
            </div>
        </>
    );
}