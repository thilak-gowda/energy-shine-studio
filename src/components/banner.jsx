import React from "react";


import style from "./main1.css";

import video12 from "./images/yoga-banner.mp4";


function Banner() {
    return (<div className="viedoContainer">

        <video
            autoPlay
            muted
            loop
            className="bannerViedo"
        >
            <source
                src={video12}
                type="video/mp4"
            />
        </video>



        <p className="conViedo">
        Balance life's chaos with the serenity of yoga.
        </p>

    </div>)
}



export default Banner;


