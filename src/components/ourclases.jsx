import React from "react";

import Heading from "./headinges";
import imgg1 from "./images/img21.jpg";

function OurClass() {
    return (
        <div className="container">
            <div className="row d-flex align-items-center">
                <Heading heeading="Core offerings" />
                <p className="sub">
                    "Breathe. Stretch. Thrive. "
                </p>

                <div className="col-md-7 ">
                    <img src={imgg1} className="w-100" alt="" />
                </div>

                <div className="col-md-5">

                    <div className="classCont">

                        <ul className="clsNm">
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
                            <a href="" className="enqbtn py-md-2 py-1 px-2 px-md-3">Enquire Now </a>
                        </div>


                    </div>
                </div>

            </div>
        </div>
    )
}

export default OurClass;