/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function CtaSection() {
	return (
		<div className="BL--cta-section">
			<div className="container">
				<div className="BL--cta-wrap">
					<div className="row">
						<div className="col-lg-6">
							<div className="BL--cta-thumb wow fadeInUpX" data-wow-delay=".10s">
								<img src="/images/all-img/v5/cta-thumb.png" alt="" />
							</div>
						</div>
						<div className="col-lg-6 d-flex align-items-center">
							<div className="BL--default-content">
								<h2>Subscribe to learn more and get updates</h2>
								<p>
									A membership site lets you create a secure platform that allows you to deliver
									content easily and automatically..
								</p>
								<div className="BL--newsletter BL--newsletter2">
									<input type="email" placeholder="Type your email here" />
									<button type="submit" id="fugu--submit-btn">
										Subscribe
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="BL--circle-shape circle-eight">
				<img src="/images/all-img/shapes-round.png" alt="" />
				<div className="waves wave-1"></div>
			</div>
			<div className="BL--circle-shape circle-nine">
				<img src="/images/all-img/shapes-round.png" alt="" />
				<div className="waves wave-1"></div>
			</div>
		</div>
	);
}
