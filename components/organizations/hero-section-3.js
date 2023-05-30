/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import CountUp from "react-countup";

export default function OrganisationsHeroSectionThree() {
  return (
    <div className="fugu--hero-section BL--org-hero-section-3">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-4 d-flex justify-content-center"
            style={{ flexDirection: "column" }}
          >
            <div className="fugu--hero-content BL--org--text">
              <p>Currently being used by</p>
              <h1 className="wow fadeInUpX" data-wow-delay="0s">
                100+
              </h1>
              <p>Musicians</p>
            </div>
            <div className="BL--org-arrow">
              <img src="/images/organizations/white-arrow.png" alt="arrow" />
            </div>
          </div>
          <div className="col-lg-8">
            <div className="BL--musicians-hero2-right">
              <img
                src="/images/organizations/artist-collage.png"
                alt="artist"
              />
              <div className="BL--org-ellipse">
                <img src="/images/organizations/ellipse.png" alt="ellipse" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container BL--org-text-container">
        <div className="row">
          <div className="BL--org-text-alt">& industry market leader</div>
          <div className="BL--org--logo">
            <img src="/images/organizations/create-music-logo.png" alt="logo" />
            <div className="BL--org--leftring">
                <img src="/images/organizations/oval-gradient.png" alt="oval" />
            </div>
          </div>
          <div className="BL--org--cross">
            <img src="/images/organizations/white-cross.png" alt="cross" />
          </div>
          <div className="BL--org-cta">
            <h3 className="heading">
              Let us aid you in more deal making, saving time and resources
              whilst maximizing revenue…
            </h3>
            <div
              className="fugu--hero-btn wow fadeInUpX"
              data-wow-delay="0.20s"
            >
              <Link href={"#"} legacyBehavior>
                <a className="fugu--btn bg-gray active">Learn How!</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
