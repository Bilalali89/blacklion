/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import CountUp from "react-countup";

export default function HeroSection() {
	return (
		<div className="fugu--hero-section">
			<div id="fugu--counter"></div>
			<div className="container">
				<div className="row">
					<div className="col-lg-6 d-flex justify-content-center" style={{flexDirection:'column'}}>
						<div className="fugu--hero-content">
							<h1 className="wow fadeInUpX" data-wow-delay="0s">
								Unlock <br/>
								Your <br/>
								Value!
							</h1>
						
						</div>
					</div>
					<div className="col-lg-6" >
						<div className="BL--hero-right">
							<span className="dollar"><img src="/images/home/Dollar-mark.png" alt="dollar" /></span>
							
							<img src="/images/home/hero.png" alt="hero" />
						</div>
					
					</div>
				</div>
				<div className="fugu--hero-shape1">
					<img src="/images/all-img/v3/shape-hero1.png" alt="" />
				</div>
				<div className="fugu--hero-shape2"></div>
			</div>
		</div>
	);
}
