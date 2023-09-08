import React from "react";

import Heading from "./headinges";

import img2 from "./images/img21.jpg";


function Trainers() {
    return (
        <div className="trainers container">
            <Heading heeading="Core offerings" />
            <p className="sub">
                "Breathe. Stretch. Thrive. "
            </p>
            <div className="row">
                <div className="col-3">
                    <img src={img2} alt="" className="w-100" />
                </div>

                <div className="col-3">
                    <img src={img2} alt="" className="w-100" />
                </div>

                <div className="col-3">
                    <img src={img2} alt="" className="w-100" />
                </div>

                <div className="col-3">
                    <img src={img2} alt="" className="w-100" />
                </div>
            </div>
        </div>
    )
}

export default Trainers;