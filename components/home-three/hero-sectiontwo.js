/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import CountUp from "react-countup";

export default function HeroSectionTwo() {
  return (
    <div className="fugu--hero-section home-hero-2">
      <div id="fugu--counter"></div>
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-lg-4 d-flex justify-content-center"
            style={{ flexDirection: "column" }}
          >
            <div className="fugu--hero-content">
              <h1 className="wow fadeInUpX" data-wow-delay="0s">
                Digitize&nbsp;& <br />
                Streamline <br />
                Operations
              </h1>
              {/* <p className="wow fadeInUpX" data-wow-delay="0.10s">
                We are Music technology company that is revolutionizing the
                music industry for ALL!
              </p> */}
             
            </div>
          </div>
          <div className="col-lg-8">
            <div className="BL--hero-right">
              {/* <span className="dollar"><img src="/images/home/Dollar-mark.png" alt="dollar" /></span> */}

              <img src="/images/organizations/tablet.png" alt="hero" />
            </div>
           
          </div>
        </div>
        <div className="fugu--hero-shape1">
          <img src="/images/home/bluegradient.png" alt=""/>
        </div>
        <div
          className="fugu--hero-shape2"
        ></div>
      </div>
    </div>
  );
}
