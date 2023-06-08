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
            className="col-lg-5 d-flex justify-content-center flex-direction-column"
          >
            <div className="fugu--hero-content">
              <h1 className="cursor-scale small">
                Insights <br />
                That <br />
                Pay
              </h1>
              <p style={{marginRight: '0px'}}>Use your data to understand your value. Secure cash payments instantly & globally.</p>
              
             
            </div>
          </div>
          <div className="col-lg-7">
            <div className="BL--musicians-hero2-right">
              <img src="/images/musicians/hero-section-2.png" alt="hero" />
            </div>
          
          </div>
        </div>

        <div
          className="BL--musicians-hero2-shape2"
        >
            <img src="/images/musicians/shape-hero2.png" alt="shape" />
        </div>
      </div>
	
    </div>
  );
}
