import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function HomeTwoHeroSection() {
	return (
		<div className="BL-hero-section2">
			<div className="container">
				<div className="BL-hero-content BL-hero-content2">
					<h1 className="wow fadeInUpX" data-wow-delay="0s">
						The leading platform for cryptocurrency traders
					</h1>
					<p className="wow fadeInUpX" data-wow-delay="0.25s">
						We offer a full-fledged long-term rental platform to cryptocurrency users. It plans to use
						blockchain technology to ensure a secure seamless rental experience.
					</p>
					<div className="BL-hero-btn-wrap wow fadeInUpX" data-wow-delay="0.40s">
						<Link href="contact" legacyBehavior>
							<a className="BL-btn BL-round-btn active">Get Started</a>
						</Link>

						<Link href="contact" legacyBehavior>
							<a className="BL-btn BL-round-btn">How to Buy & Sell</a>
						</Link>
					</div>
				</div>
			</div>
			<div className="BL-shape4">
				<img src="/images/shape/shape3.png" alt="" />
			</div>
			<div className="BL-shape5">
				<img src="/images/shape/shape4.png" alt="" />
			</div>
		</div>
	);
}
