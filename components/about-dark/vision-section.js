/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function VisionSection() {
	return (
		<div className="BL--vision-section">
			<div className="container">
				<div className="row">
					<div className="col-xl-4 col-lg-4">
						<div className="BL--swiper-slider-wrap">
							<div className="BL--swiper-slider">
								<div className="swiper-wrapper">
									<div className="swiper-slide">
										<div className="BL--card-wrap">
											<div className="BL--card-thumb">
												<img src="/images/all-img/v3/card5.jpg" alt="" />
											</div>
											<div className="BL--card-data">
												<h3>3D ZelenskiyNFT</h3>
												<p>Pre-sale : 18 May 2023</p>
												<div className="BL--card-footer">
													<div className="BL--card-footer-data">
														<span>Mint Price:</span>
														<h4>0.194 ETH</h4>
													</div>
													<Link href={"/"} legacyBehavior>
														<a className="BL--btn btn-sm bg-white">Place a Bid</a>
													</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-6 offset-xl-2 col-lg-7 offset-lg-1 d-flex align-items-center">
						<div className="BL--default-content content-sm">
							<h2>Our vision is to build a strong NFT portfolio of denomination</h2>
							<p>
								We're excited about a brand new type of digital good called NFT. NFTs have exciting new
								properties: unique, provably scarce, tradeable, and usable across multiple applications.
							</p>
							<p>
								Using blockchain technology to digitally signify ownership can make an investor's
								ownership of an asset more secure. Blockchain tech can also make ownership of more
								transparent.
							</p>
							<div className="BL--btn-wrap">
								<Link legacyBehavior href={"/"}>
									<a className="BL--btn bg-gradient">Join Community</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
