/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function OrganizationsCTA() {
  return (
    <>
      <div className="BL-social-section BL-org-cta">
        <div className="container">
             <div className="rt-spacer-100"></div>
            <div className="rt-spacer-100"></div>
          <div className="BL--org-cta">
            <h4 className="heading">LET US AID WITH</h4>
            <h3 className="heading f-size-50 ballpen">
            <img src="/images/organizations/greencheck.png" alt="greencheck" /> More deal making
            </h3>
            <h3 className="heading f-size-50 clock">
            <img src="/images/organizations/greencheck.png" alt="greencheck" /> Saving time & resources 

            </h3>
            <h3 className="heading f-size-50 piggybank">
            <img src="/images/organizations/greencheck.png" alt="greencheck" /> Maximizing revenue
            </h3>
            <div className="rt-spacer-100"></div>
            <div
              className="fugu--hero-btn wow fadeInUpX"
              data-wow-delay="0.20s"
            >
              <Link href={"#"} legacyBehavior>
                <a className="fugu--btn bg-gray active">GET EARLY ACCESS!</a>
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}
