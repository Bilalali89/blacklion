/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function CreativeCTA() {
  return (
    <>
      <div className="BL-social-section">
        <div className="container">
             <div className="rt-spacer-100"></div>
            <div className="rt-spacer-100"></div>
          <div className="BL--org-cta">
            <h3 className="heading" style={{fontSize: '50px'}}>
            Sign up to our Smartphone App to connect, find 
new projects and be paid quickly and securely!
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
    </>
  );
}
