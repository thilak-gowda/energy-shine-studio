import React, { useState } from "react";

import Heading from "./headinges";

import logo from './images/logo.png'

function Contact() {
    return (
        <div>
            <div className="container">
                <div className="row d-flex align-items-center">

                    <Heading heeading="Contact" />
                    <p className="sub">
                        " Find your Zen "
                    </p>
                    <div className="col-md-6">
                        <img src={logo} alt="" className="w-50 d-block mx-auto py-4" />



                    </div>
                    <div className="col-md-6">

                        <div className="row">
                            <div className="col-10 d-flex justify-content-center">


                                <div className="address">
                                    <h4>Addrerss</h4>

                                    <p className="adres">
                                        Energy Shine Studdio
                                        No. 7, Snehalokaa,
                                        Sri Sai Gardens, RTO Road,
                                        Rajanukunte, Bangalore - 560 064
                                    </p>

                                    <div className="row">
                                        <h4>Follow Us On</h4>
                                        <div className="col-3"> <a href="">   <i class="fa-brands fa-instagram"></i></a></div>
                                        <div className="col-3"> <a href="">   <i class="fa-brands fa-facebook"></i></a></div>
                                        <div className="col-3"> <a href="">   <i class="fa-brands fa-x-twitter"></i></a></div>
                                    </div>

                                    <div className="mt-5"> <a href="tel:+91 99453 05668 " target="_blank" className="btm-icon" > <i class="fa-solid fa-phone pe-4 "></i> 99453 05668 </a></div>

                                    <div className="mt-2"> <a href="tel:+91 70223 92809" target="_blank" className="btm-icon" > <i class="fa-solid fa-phone pe-4 "></i> 70223 92809  </a></div>

                                    <div> <a href="mailto:energyshinestuddio@gmail.com" className="btm-icon"> <i class="fa-solid fa-envelope pe-4 "></i> energyshinestuddio@gmail.com </a></div>

                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="call">
                        <a href="tel:+91 99453 05668" target="_blank" > <i class="fa-solid fa-phone p-2 cal-1"></i></a>
                    </div>
                    <div className="call2">
                        <a href="https://wa.me/+917022392809?text=We're here to help you find balance, strength, and peace through yoga. Feel free to ask any questions. Namaste!" target="_blank"><i class="fa-brands fa-whatsapp p-2"></i></a>
                    </div>


                </div>
            </div>
        </div>
    )

}

export default Contact;
