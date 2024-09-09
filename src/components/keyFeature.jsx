import React from "react";

import Heading from "./headinges";

import type1 from "./images/top-rated-instructors.jpeg";

import type2 from "./images/different-styles-for-all.jpeg";

import type3 from "./images/just-right-time-slots.jpeg";

function Keyfeature() {
    return (
        <div>
            <div className="container">
                <Heading heeading="Salient Highlights" />
                <p className="sub">
                    " Yoga for all, all for yoga! "
                </p>

                <p className="comnfnt">
                    Our top-rated instructors at Energy Shine Studio bring a wealth of expertise to a variety of yoga styles suitable for all ages and levels. From Ashtanga to meditation, you'll find your perfect practice.


                </p>

                <p className="comnfnt">
                    Our studio boasts state-of-the-art facilities that enhance your yoga journey. The serene environment and accessibility make it easy for everyone to embrace yoga, and we offer livestream classes for added convenience.
                </p>

                <div className="row">
                    <div className="col-md-4 mt-4 mt-md-0">
                        <img src={type2} alt="" className="w-100 img-bord typyoga" />

                        <p className="subhed1">
                        Top Rated Instructors
                        </p>

                        <p className="subcont1">
                        Discover the expertise of our top-rated yoga instructors, who guide you through diverse styles and levels, fostering well-being at its finest.
                        </p>
                    </div>

                    <div className="col-md-4 mt-4 mt-md-0">
                        <img src={type1} alt="" className="w-100 img-bord typyoga" />

                        <p className="subhed1">
                        Different styles for all
                        </p>


                        <p className="subcont1">
                        From gentle Hatha to dynamic Power Yoga, our studio offers diverse styles for all ages and levels, fostering well-rounded well-being.
                        </p>

                    </div>

                    <div className="col-md-4 mt-4 mt-md-0">
                        <img src={type3} alt="" className="w-100 img-bord typyoga" />

                        <p className="subhed1">
                        Just right time slots
                        </p>

                        <p className="subcont1">
                        Choose the perfect time for you from our convenient yoga class schedule, ensuring that your practice fits seamlessly into your life.
                        </p>

                        <div></div>

                    </div>
                </div>

            </div>
        </div>
    )
}




export default Keyfeature;