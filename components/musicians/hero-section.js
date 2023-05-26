/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import CountUp from "react-countup";
import NewsLetter from "../home-three/news-letter";

export default function MusiciansHeroSection() {
  return (
    <div className="fugu--hero-section">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-7 d-flex justify-content-center"
            style={{ flexDirection: "column" }}
          >
            <div className="fugu--hero-content">
              <h1 className="wow fadeInUpX" data-wow-delay="0s">
                Artists, <br />
                Producers
                <br />
                &amp;&nbsp;Songwriters!
              </h1>
              <p className="wow fadeInUpX" data-wow-delay="0.10s">
                Join the #Roarvolution today by signing up for early access.
              </p>

             
            </div>
          </div>
          <div className="col-lg-5">
            <div className="BL--musicians-hero-right">
              <span className="musicnote">
                <img src="/images/musicians/musicnote.png" alt="musicnote" />
              </span>

              <img src="/images/musicians/bell-phone.png" alt="bellphone" />
            </div>
        
          </div>
        </div>
        <div className="BL--musicians-hero-shape1">
          <img src="/images/musicians/green-bg.png" alt="greenbg" />
        </div>
        <div className="rt-spacer-100"></div>
        <NewsLetter />
        <div className="rt-spacer-50"></div>
        {/* <div className="fugu--hero-shape2"></div> */}
      </div>
    </div>
  );
}
