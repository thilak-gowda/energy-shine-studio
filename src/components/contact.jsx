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
                                        HSR Layout 7th Sector
                                    </p>

                                    <div className="row">
                                        <h4>Follow Us On</h4>
                                        <div className="col-3"> <a href="">   <i class="fa-brands fa-instagram"></i></a></div>
                                        <div className="col-3"> <a href="">   <i class="fa-brands fa-facebook"></i></a></div>
                                        <div className="col-3"> <a href="">   <i class="fa-brands fa-x-twitter"></i></a></div>
                                    </div>

                                    <div className="mt-5"> <a href="" className="btm-icon" > <i class="fa-solid fa-phone pe-4 "></i> 908374878 </a></div>

                                    <div> <a href="" className="btm-icon"> <i class="fa-solid fa-envelope pe-4 "></i> ygaguru@gmail.com </a></div>

                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="call">
                        <a href=""> <i class="fa-solid fa-phone p-2 cal-1"></i></a>
                    </div>
                    <div className="call2">
                        <a href=""><i class="fa-brands fa-whatsapp p-2"></i></a>
                    </div>


                </div>
            </div>
        </div>
    )

}

export default Contact;
