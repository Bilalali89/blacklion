/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import CountUp from "react-countup";
import NewsLetter from "../home-three/news-letter";
import TextSliderOrg from "./text-slider";

export default function OrganisastionsHeroSection() {
  return (
    <div className="BL--org-hero-section">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-12 d-flex justify-content-center"
            style={{ flexDirection: "column" }}
          >
            <div className="BL--org-content">
              <h4 className="wow fadeInUpX" data-wow-delay="0s">
                WELCOME TO THE
              </h4>
              <h1 className="wow fadeInUpX" data-wow-delay="0s">
                ROARVOLUTION
              </h1>
            </div>
          </div>
        </div>
      </div>
      <TextSliderOrg/>
    </div>
  );
}
