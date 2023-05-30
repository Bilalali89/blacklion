/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import CountUp from "react-countup";
import NewsLetter from "../home-three/news-letter";

export default function OrganisationsHeroSectionTwo() {
  return (
    <div className="fugu--hero-section BL--organization-sec">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-7 d-flex justify-content-center"
            style={{ flexDirection: "column" }}
          >
            <div className="fugu--hero-content BL--musicians-content">
              <h1 className="wow fadeInUpX" data-wow-delay="0s">
              Digitize &<br />
              Streamline
                <br />
                Operations
              </h1>
              <div className="rt-spacer-30"></div>
             
              <p className="wow fadeInUpX" data-wow-delay="0.10s">
              Whether it’s a Funding Estimate, Evaluation on Earnings, Contract Creation or Facilitating Payment…our lightning speed smart automation engine Roars in a matter of minutes and clicks.
              </p>
             
            </div>
            <div className="BL--organization--disc">
                <img src="/images/organizations/disc.png" alt="disc" />
            </div>
          </div>
          
        </div>
        {/* <div className="BL--musicians-hero-shape1">
          <img src="/images/musicians/green-bg.png" alt="greenbg" />
        </div> */}
        <div className="rt-spacer-100"></div>
        
        <div className="rt-spacer-50"></div>
        {/* <div className="fugu--hero-shape2"></div> */}
      </div>
    </div>
  );
}
