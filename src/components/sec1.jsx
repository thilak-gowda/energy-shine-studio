import React from "react";

import imgg3 from "./images/g-13.jpeg";
// import imgg1 from "./images/g-13.jpeg";

import AOS from 'aos';

import 'aos/dist/aos.css';

import { useEffect } from "react";

function IntroSec() {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])
    return (
        <div>
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-6">
                        <p className="introHeading" data-aos="fade-right">

                            Experience yoga's many benefits at any age, gracefully.
                        </p>

                        <p className="subcontent">
                        Embrace the profound benefits that yoga offers at any age, and do so with grace. Regardless of your life stage, yoga presents an opportunity to cultivate physical strength, mental clarity, and emotional balance. It's a practice that respects the uniqueness of every individual, fostering well-being and inner harmony throughout one's entire life journey.
                        </p>

                        <a href="" className="enqbtn py-2 px-3 ">Enquire Now </a>

                    </div>

                    <div className="col-md-6 mt-4 mt-md-0">
                        <img src={imgg3} className="w-100 sec1img" alt="" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default IntroSec;