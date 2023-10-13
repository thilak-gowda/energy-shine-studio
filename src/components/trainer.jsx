import React from "react";

import Heading from "./headinges";

import img22 from "./images/g-10.jpeg";

import img23 from "./images/g-12.jpeg";
import img24 from "./images/g-13.jpeg";


function Trainers() {
    return (
        <div className="trainers container">
            <Heading heeading="Core offerings" />
            <p className="sub">
                "Breathe. Stretch. Thrive. "
            </p>
            <div className="row">
                <div className="col-3">
                    <img src={img22} alt="" className="w-100" />
                </div>

                <div className="col-3">
                    <img src={img23} alt="" className="w-100" />
                </div>

                <div className="col-3">
                    <img src={img24} alt="" className="w-100" />
                </div>

                {/* <div className="col-3">
                    <img src={img2} alt="" className="w-100" />
                </div> */}
            </div>
        </div>
    )
}

export default Trainers;