/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function HeroSectionThreeCreative() {
  return (
    <div className="BL--hero-section" id="creativeherothree">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-6 d-flex justify-content-center"
            style={{ flexDirection: "column" }}
          >
            <div className="BL--creative-content">
              <h1 className="wow fadeInUpX" data-wow-delay="0s">
                Creative
                <br />
                Networking
                <br />
                @&nbsp;Fingertips
              </h1>
              <p>
                Outsource your services with global <br />
                and digital exposure and get paid
                <br /> securely within minutes
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="musicdesk">
              <img src="/images/creatives/music-desk.png" alt="musicdesk" />
            </div>
            <div className="deskbg">
              <img src="/images/creatives/desk-path.png" alt="darkpath" />
            </div>
          </div>
        </div>
        {/* <div
          className="BL--creative-hero2-shape"
        >
            <img src="/images/creatives/sheild-path.png" alt="shape" />
        </div> */}
      </div>
    </div>
  );
}
