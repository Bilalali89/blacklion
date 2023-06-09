import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function Team() {
	return (
		<div className="BL--team-section BL--section-padding2">
			<div className="container">
				<div className="BL--section-title-wrap">
					<div className="BL--section-title">
						<div className="BL--default-content content-sm">
							<h2>Meet our dynamic team</h2>
							<p>
								Collectors who value these relationships will look for NFTs with unique narratives and
								creation processes.
							</p>
						</div>
					</div>
					<div className="BL--section-button">
						<div className="BL--portfolio-btn">
							<Link href={"#"} legacyBehavior>
								<a className="BL--outline-btn">
									<span>View All Members</span>
								</a>
							</Link>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-4 col-md-6">
						<div className="BL--team-wrap wow fadeInUpX" data-wow-delay="0s">
							<div className="BL--team-left">
								<div className="BL--team-thumb">
									<img src="/images/all-img/v3/team1.jpg" alt="" />
								</div>
								<div className="BL--team-data">
									<h4>Jane Cooper</h4>
									<p>CEO & Founder</p>
								</div>
							</div>
							<button type="button" className="BL--dot-btn">
								<img src="/images/svg2/dots.svg" alt="" />
							</button>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="BL--team-wrap wow fadeInUpX" data-wow-delay="0.10s">
							<div className="BL--team-left">
								<div className="BL--team-thumb">
									<img src="/images/all-img/v3/team2.jpg" alt="" />
								</div>
								<div className="BL--team-data">
									<h4>Esther Howard</h4>
									<p>Art Director</p>
								</div>
							</div>
							<button type="button" className="BL--dot-btn">
								<img src="/images/svg2/dots.svg" alt="" />
							</button>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="BL--team-wrap wow fadeInUpX" data-wow-delay="0.20s">
							<div className="BL--team-left">
								<div className="BL--team-thumb">
									<img src="/images/all-img/v3/team3.jpg" alt="" />
								</div>
								<div className="BL--team-data">
									<h4>Cameron Williamson</h4>
									<p>Marketing Officer</p>
								</div>
							</div>
							<button type="button" className="BL--dot-btn">
								<img src="/images/svg2/dots.svg" alt="" />
							</button>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="BL--team-wrap wow fadeInUpX" data-wow-delay="0.30s">
							<div className="BL--team-left">
								<div className="BL--team-thumb">
									<img src="/images/all-img/v3/team4.jpg" alt="" />
								</div>
								<div className="BL--team-data">
									<h4>Brooklyn Simmons</h4>
									<p>Operating Officer</p>
								</div>
							</div>
							<button type="button" className="BL--dot-btn">
								<img src="/images/svg2/dots.svg" alt="" />
							</button>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="BL--team-wrap wow fadeInUpX" data-wow-delay="0.40s">
							<div className="BL--team-left">
								<div className="BL--team-thumb">
									<img src="/images/all-img/v3/team5.jpg" alt="" />
								</div>
								<div className="BL--team-data">
									<h4>Leslie Alexander</h4>
									<p>Graphic Designer</p>
								</div>
							</div>
							<button type="button" className="BL--dot-btn">
								<img src="/images/svg2/dots.svg" alt="" />
							</button>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="BL--team-wrap wow fadeInUpX" data-wow-delay="0.50s">
							<div className="BL--team-left">
								<div className="BL--team-thumb">
									<img src="/images/all-img/v3/team6.jpg" alt="" />
								</div>
								<div className="BL--team-data">
									<h4>Guy Hawkins</h4>
									<p>UI/UX Designer</p>
								</div>
							</div>
							<button type="button" className="BL--dot-btn">
								<img src="/images/svg2/dots.svg" alt="" />
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="BL--shape3">
				<img src="/images/shape2/shape3.png" alt="" />
			</div>
		</div>
	);
}
