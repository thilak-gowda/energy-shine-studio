import React from "react";

import Heading from "./headinges";
// import imgg1 from "./images/img21.jpg";
import video12 from "./images/vied1.mp4";
import video2 from "./images/vied2.mp4";

function OurClass() {
    return (
        <div className="container">
            <div className="row d-flex align-items-center">
                <Heading heeading="Core offerings" />
                <p className="sub">
                    "Breathe. Stretch. Thrive. "
                </p>

                <div className="col-md-4 ">
                    {/* <img src={imgg1} className="w-100" alt="" /> */}
                    <video
                        autoPlay
                        muted
                        loop
                        className="bannerViedo rounded"
                    >
                        <source
                            src={video12}
                            type="video/mp4"
                        />
                    </video>
                </div>

                <div className="col-md-4">

                    <div className="classCont">

                        <ul className="clsNm text-center">
                            <li>
                                Hatha Yoga
                            </li>

                            <li>
                                Astanga Yoga
                            </li>

                            <li>
                                Meditation
                            </li>

                            <li>
                                Pranayama
                            </li>

                            <li>
                                Diet Program
                            </li>

                        </ul>
                        <div className="btn-div">
                            <a href="" className="enqbtn py-md-2 py-1 px-2 px-md-3 d-block mx-auto w-75 text-center">Enquire Now </a>
                        </div>


                    </div>
                </div>

                <div className="col-md-4 ">
                    {/* <img src={imgg1} className="w-100" alt="" /> */}
                    <video
                        autoPlay
                        muted
                        loop
                        className="bannerViedo rounded"
                    >
                        <source
                            src={video2}
                            type="video/mp4"
                        />
                    </video>
                </div>

            </div>
        </div>
    )
}

export default OurClass;