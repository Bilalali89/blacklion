/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import CountUp from "react-countup";

export default function HeroSection() {
  return (
    <div className="fugu--hero-section home-hero-one">
      <div id="fugu--counter"></div>
      <div className="container">
        <div className="row">
          <div
            className="col-lg-4 d-flex justify-content-center"
            style={{ flexDirection: "column" }}
          >
            <div className="fugu--hero-content">
              <h1 className="wow fadeInUpX" data-wow-delay="0s">
                Enhanced <br />
                Music
                <br />
                Valuations <br />
                <span className="text">with</span> AI
              </h1>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="BL--hero-right">
              <span className="dollar">
                <img src="/images/home/Dollar-mark.png" alt="dollar" />
              </span>

              <img src="/images/home/Laptop-home.png" alt="laptop" />
            </div>
            <div className="BL--hero--btn">
              <Link href={"#"} legacyBehavior>
                <a className="hero-btn">GET EARLY ACCESS</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="fugu--hero-shape1" style={{ zIndex: "-2" }}>
          <img src="/images/all-img/v3/shape-hero1.png" alt="shape" />
        </div>
        <div className="fugu--hero-shape2" style={{ zIndex: "-2" }}></div>
      </div>
    </div>
  );
}
