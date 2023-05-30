/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import NewsLetterCreatives from "./newsletter-creatives";

export default function TextSectionCreatives() {
  return (
        <>
        <div className="BL-background-dark">
        <div className="BL-text-section-creatives container-fluid">
            <div className="container">
                <div className="BL-text">
                    <div className="BL-text-one">
                          <p className="wow fadeInUpX" data-wow-delay="0s">
                         Managers
						</p>
                    </div>
                    <div className="BL-text-two">
                          <p className="wow fadeInUpX" data-wow-delay="0s">
                           Publicists
						</p>
                    </div>
                    <div className="BL-text-three">
                          <p className="wow fadeInUpX" data-wow-delay="0s">
							Stylists
						</p>
                    </div>
                    <div className="BL-text-three">
                          <p className="wow fadeInUpX" data-wow-delay="0s">
							Radio Promoters
						</p>
                    </div>
                    <div className="BL-text-three">
                          <p className="wow fadeInUpX" data-wow-delay="0s">
							Music Supervisors
						</p>
                    </div>
                    <div className="BL-text-three">
                          <p className="wow fadeInUpX" data-wow-delay="0s">
							Creative Directors
						</p>
                    </div>
                
                    <div className="BL-text-four">
                          <p className="wow fadeInUpX" data-wow-delay="0s">
							Graphic Designers
						</p>
                    </div>
              
                </div>
                <div className="BL-text-para">
                    <div className="BL-text-para-text">
                    are
                    </div>
                    <div className="BL-text-para-text2">
                        ALL WELCOME
                    </div>

                </div>

                <div className="BL-text-para">
                    <div className="BL-text-para-text">
                    sign up for early access on
                    </div>
                    <h3>
                    Black Lion’s App & Marketplace
                    </h3>

                </div>
                

            </div>
           <NewsLetterCreatives/>
        </div>
        </div>
      

        </>
  );
}
