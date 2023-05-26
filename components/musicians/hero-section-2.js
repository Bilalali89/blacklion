/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import CountUp from "react-countup";

export default function HeroSectionTwoMusicians() {
  return (
    <div className="fugu--hero-section">
      <div id="fugu--counter"></div>
      <div className="container">
        <div className="row">
          <div
            className="col-lg-3 d-flex justify-content-center"
            style={{ flexDirection: "column" }}
          >
            <div className="fugu--hero-content">
              <h1 className="wow fadeInUpX" data-wow-delay="0s">
                Insights <br />
                That <br />
                Play
              </h1>
              
             
            </div>
          </div>
          <div className="col-lg-9">
            <div className="BL--musicians-hero2-right">
              <img src="/images/musicians/hero-section-2.png" alt="hero" />
            </div>
          
          </div>
        </div>
        {/* <div className="fugu--hero-shape1" style={{left: '-40%', top:'-44%', transform: 'scale(0.6)'}}>
          <img src="/images/home/bluegradient.png" alt="" style={{filter: 'blur(41px)'}} />
        </div> */}
        <div
          className="BL--musicians-hero2-shape2"
        >
            <img src="/images/musicians/shape-hero2.png" alt="shape" />
        </div>
      </div>
    </div>
  );
}
