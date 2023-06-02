/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import CountUp from "react-countup";
import NewsLetter from "../home-three/news-letter";

export default function OrganisationsHeroSectionTwo() {
  return (
    <div className="fugu--hero-section BL--organization-sec">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 d-flex justify-content-center flex-direction-column">
            <div className="fugu--hero-content BL--organization-content">
              <h1 className="wow fadeInUpX" data-wow-delay="0s">
                Digitize&nbsp;&<br />
                Streamline
                <br />
                Operations
              </h1>
              <div className="rt-spacer-30"></div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="BL--organization-image justify-content-end d-flex">
              <img src="/images/organizations/tablet.png" alt="tablet" />
              <div className="BL--hero--btn-SAT">
                <span className="hero-btn">
                  Smart <br />
                  Automation <br />
                  Tool
                </span>
              </div>
            </div>
          
          </div>
        </div>
        <div className="rt-spacer-100"></div>
        <div className="rt-spacer-50"></div>
      </div>
    </div>
  );
}
