/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import CountUp from "react-countup";
import NewsLetter from "../home-three/news-letter";

export default function MusiciansHeroSection() {
  return (
    <div className="fugu--hero-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 d-flex justify-content-center flex-direction-column">
            <div className="fugu--hero-content BL--musicians-content">
              <h1 className="wow fadeInUpX" data-wow-delay="0s">
                Artists, <br />
                Producers
                <br />
                &amp;&nbsp;Songwriters!
              </h1>
              <p className="wow fadeInUpX" data-wow-delay="0.10s">
                Join the #Roarvolution today by signing up for early access.
              </p>
              <div className="BL--musicians-arrow">
                <img
                  src="/images/musicians/green-arrow-down.png"
                  alt="greenarrow"
                />
              </div>
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
        <div className="row">
          <div className="col-lg-12">
            <div className="BL--musicician-mobile-sec">
            <div className="BL--hero--btn-musictoken">
                <span className="hero-btn">Music Tokens</span>
              </div>
              <div className="BL--hero--btn-marketplace">
                <span className="hero-btn">Marketplace</span>
              </div>
              <div className="BL--hero--btn-networking">
                <span className="hero-btn">Creative Networking</span>
              </div>
              <div className="BL--hero--btn-access">
                <span className="hero-btn">Access Capital</span>
              </div>
              <div className="BL--hero--btn-escrow">
                <span className="hero-btn">Digital Escrow</span>
              </div>
              <div className="BL--hero--btn-earlyaccess">
                <span className="hero-btn">GET EARLY ACCESS</span>
              </div>
              <img src="/images/musicians/mobile-phone.png" alt="mobile" />
            </div>
          </div>
        </div>
      
        <div className="BL--musicians-hero-shape1">
          <img src="/images/musicians/green-bg.png" alt="greenbg" />
        </div>
 

        <div className="rt-spacer-50"></div>
        {/* <div className="fugu--hero-shape2"></div> */}
      </div>
    </div>
  );
}
