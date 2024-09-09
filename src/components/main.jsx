import React from "react";

import Banner from "./banner";

import IntroSec from "./sec1";

import About from "./about";

import Keyfeature from "./keyFeature";

import OurClass from "./ourclases";

import Contact from "./contact";

import Trainers from "./trainer";

import Gall from "./gallery";

import AOS from 'aos';


import 'aos/dist/aos.css';

// import "./Premier.pdf";

import style from "./main1.css";









let currentYear = new Date().getFullYear();



function Mainsec() {
    return (
        <div className="main">
          
            <section className="banner">
                <Banner />

            </section>

            <section className="sec bg-img">
                <IntroSec />
            </section>

            <section className="about sec ">
                <About />
            </section>

            <section className="sec bg-img">
                <Keyfeature />
            </section>

            {/* <section className="sec bg-img">
                <Trainers />
            </section> */}

            <section className="OurClass sec ">
                <OurClass />
            </section>

            <section className="sec ">
                <Gall />
            </section>

            <section className="bg-img sec">
                <Contact />
            </section>

          

            <div className="copyrights py-2">
                © 2023 All Rights Reserved by Energy Shine Studdio. <br />

                Digital Partner <a href="http://thilak.tech/" className="text-white"> DotTech</a>

            </div>

        </div>);
}

export default Mainsec