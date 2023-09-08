import React from "react";

import Heading from "./headinges";
import imgg1 from "./images/img1.jpg";

function About() {
    return (
        <div className="container">
            <div className="row d-flex align-items-center">
                <Heading heeading="About Us" />
                <p className="sub">
                    "Find serenity within"
                </p>
                <div className="col-md-6">

                    <div className="abtCont">
                        <p>  Energy Shine Studio is your gateway to a comprehensive array of yoga practices, carefully curated to cater to diverse needs. Our studio pulsates with positive energy, welcoming all who seek to breathe, stretch, and thrive through the transformative power of yoga. Nestled in the heart of the city, it's the ideal space to discover inner harmony among like-minded yoga enthusiasts.



</p>



                        <p> Variety of Yoga Practices: At Energy Shine Studio, we offer an extensive range of yoga disciplines to suit every level and aspiration. Whether you're drawn to the dynamic flow of Ashtanga Yoga, the serenity of meditation, or the strength-building intensity of Power Yoga, our studio has it all. Dive into the wisdom of Pranayama, embark on a weight-loss journey, or explore the benefits of a yogic diet plan. Whatever your path, we're here to guide you.</p>



                        <p>Energy Shine Studio is more than just a yoga studio; it's a vibrant community of individuals committed to personal growth and holistic well-being. Step onto the mat and experience the profound connection between mind, body, and spirit. Your path to Zen starts here, where you can awaken the Yogi within and embark on a transformative journey of self-discovery and vitality.</p>
                    </div>
                </div>
                <div className="col-md-6 ">
                    <img src={imgg1} className="w-100" alt="" />
                </div>
            </div>
        </div>
    )
}

export default About;