/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function HeroSectionTwoCreative() {
  return (
    <div className="fugu--hero-section" id="creativeherotwo">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <img src="/images/creatives/shield-coin.png" alt="shield" />
          </div>
          <div
            className="col-lg-7 d-flex justify-content-center"
            style={{ flexDirection: "column" }}
          >
            <div className="BL--creative-content">
              <h1 className="wow fadeInUpX" data-wow-delay="0s">
                Get Paid
                <br />
                Securely
              </h1>
              <p>
                Outsource your services with global <br/>
                and digital exposure and get
                paid
                <br/> securely within minutes
              </p>
            </div>
          </div>
        </div>
        <div
          className="BL--creative-hero2-shape"
        >
            <img src="/images/creatives/sheild-path.png" alt="shape" />
        </div>
      </div>
    </div>
  );
}
