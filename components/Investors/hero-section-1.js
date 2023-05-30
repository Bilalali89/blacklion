/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import CountUp from "react-countup";
import NewsLetterOrg from "../organizations/newsletter-org";
import NewsLetterCreatives from "../creatives/newsletter-creatives";
import NewsLetter from "../home-three/news-letter";
import NewsLetterInvestor from "./newsletter-investor";
import TextSliderOne from "../common/sliders/text/text-slider-one";
import TextSliderInvestor from "./text-slider-investor";

export default function InvestorsHeroSection() {
	return (
		<div className="fugu--hero-section" id="investorhero">
			<div id="fugu--counter"></div>
			<div className="container">
				<div className="row">
					<div className="col-lg-6 d-flex justify-content-center" style={{flexDirection:'column'}}>
						<div className="fugu--hero-content" style={{zIndex: '-1'}}>
							<h1 className="wow fadeInUpX" data-wow-delay="0s">
								Changing <br/>
								Music <br/>
								Consumption <br/>
                                FOREVER
							</h1>
						
						</div>
					</div>
					<div className="col-lg-6">
						<div className="BL--investor-hero-right">
                        <span className="notesmall">
                                <img src="/images/investors/note-back.png" alt="musicnote" />
                            </span>
							<span className="notebig">
                                <img src="/images/investors/note-front.png" alt="musicnote" />
                            </span>
							<img src="/images/investors/pac-man.png" alt="pacman" />
						</div>
					
					</div>
				</div>
               
                
				{/* <div className="fugu--hero-shape1">
					<img src="/images/all-img/v3/shape-hero1.png" alt="" />
				</div> */}
				{/* <div className="fugu--hero-shape2"></div> */}
			</div>
            <TextSliderInvestor />
            <div className="BL-text-para">
                    <div className="BL-text-para-text">
                    sign up for early access on
                    </div>
                    <h3>
                    Black Lion’s App & Marketplace
                    </h3>

                </div>
            <NewsLetterInvestor />
           
           
		</div>
	);
}
