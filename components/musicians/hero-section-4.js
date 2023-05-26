/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import CountUp from "react-countup";

export default function HeroSectionFourMusicians() {
  return (
    <div className="BL--musician-hero4-section">
      <div className="container">
        <div className="heart">
          <img
            src="/images/musicians/heart-blur.png"
            className="heartimg"
            alt="heart"
          />
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
              <div className="BL--musician-hero4-content">
                <h1 className="wow fadeInUpX" data-wow-delay="0s">
                  Match-Making
                </h1>
                <div className="rt-spacer-40"></div>
                <p className="wow fadeInUpX" data-wow-delay="0.10s">
                  We’re not Tinder, but we will find you the right partner
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5">
              <img src="/images/musicians/hero-section-4-1.png" alt="wave" className="imgwave" />
            </div>
            <div className="col-lg-7">
              <img src="/images/musicians/hero-section-4-2.png" alt="card" className="imgcard" />
            </div>
          </div>
        </div>
      </div>
      <div className="rt-spacer-100"></div>
      <div className="rt-spacer-100"></div>
      <div className="rt-spacer-100"></div>
      <div className="container">
        <div className="BL--musician-hero4-cta">
          <h3 className="heading">Become a Lion in a musical jungle!</h3>
          <div className="fugu--hero-btn wow fadeInUpX" data-wow-delay="0.20s">
            <Link href={"#"} legacyBehavior>
              <a className="fugu--btn bg-gray active">Learn How!</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
