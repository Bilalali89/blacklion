/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import NewsLetter from "./news-letter";

export default function TextSection() {
  return (
        <>
        <div className="BL-background-dark">
        <div className="BL-text-section container-fluid">
            <div className="container">
                <div className="BL-text">
                    <div className="BL-text-one">
                          <p className="wow fadeInUpX" data-wow-delay="0s">
							Musicians
						</p>
                    </div>
                    <div className="BL-text-two">
                          <p className="wow fadeInUpX" data-wow-delay="0s">
							Organisations
						</p>
                    </div>
                    <div className="BL-text-three">
                          <p className="wow fadeInUpX" data-wow-delay="0s">
							Investors
						</p>
                    </div>
                    <div className="BL-text-four">
                          <p className="wow fadeInUpX" data-wow-delay="0s">
							Creatives!
						</p>
                    </div>
              
                </div>
                <div className="BL-text-para">
                    <div className="BL-text-para-text">
                    We invite you to join us in the
                    </div>
                    <h3>
                         #roarvolution
                    </h3>

                </div>
                <div className="BL--newsletter-shape">
                    <img src="/images/home/newsletter-shape.png" alt="shape" />
                </div>

            </div>
            <NewsLetter />
        </div>
        </div>
      

        </>
  );
}
