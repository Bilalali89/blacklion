/* eslint-disable @next/next/no-img-element */
import { MotionConfig, motion, useScroll } from "framer-motion";

export default function HeroSectionTwo() {
  // const { scrollYProgress } = useScroll();

  return (
    <div className="BL--hero-section home-hero-2">

      <div className="container-fluid">
        <div className="row">
          <div
            className="col-lg-4 d-flex justify-content-center flex-direction-column"
          >
            <div className="BL--hero-content">
              <h1 className="cursor-scale small">
                Digitize&nbsp;& <br />
                Streamline <br />
                Operations
              </h1>
            
            </div>
          </div>
          <div className="col-lg-8">
            <div className="BL--hero-right"> 
              <img src="/images/organizations/tablet.png" alt="hero"  />
            </div>
           
          </div>
        </div>
       
        <div className="BL--hero-shape1">
          <img src="/images/home/bluegradient.png" alt="shape" />
        </div>
        <div className="BL--hero-shape2"></div>
        <div className="BL--hero-shape3">
          <img src="/images/home/purple.png" alt="shape" />
        </div>
      </div>
    </div>
  );
}
