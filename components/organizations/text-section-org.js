/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import NewsLetterOrg from "./newsletter-org";

export default function TextSectionOrg() {
  return (
        <>
        <div className="BL-background-dark">
        <div className="BL-text-section-org container-fluid">
            <div className="container">
                <div className="BL-text">
                    <div className="BL-text-one">
                          <p className="wow fadeInUpX" data-wow-delay="0s">
                          Organisations
						</p>
                    </div>
                    <div className="BL-text-two">
                          <p className="wow fadeInUpX" data-wow-delay="0s">
                            Record Labels
						</p>
                    </div>
                    <div className="BL-text-three">
                          <p className="wow fadeInUpX" data-wow-delay="0s">
							Distributors
						</p>
                    </div>
                    <div className="BL-text-four">
                          <p className="wow fadeInUpX" data-wow-delay="0s">
							Publishers
						</p>
                    </div>
              
                </div>
                <div className="BL-text-para">
                    <div className="BL-text-para-text">
                    sign up for early access on
                    </div>
                    <h3>
                    Black Lion’s Valuation Engine
                    </h3>

                </div>
                {/* <div className="BL--newsletter-shape">
                    <img src="/images/home/newsletter-shape.png" alt="shape" />
                </div> */}

            </div>
           <NewsLetterOrg/>
        </div>
        </div>
      

        </>
  );
}
