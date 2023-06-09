/* eslint-disable @next/next/no-img-element */
export default function TradingSectionTwo() {
	return (
		<div className="BL-trading-section2">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 order-lg-2">
						<div className="BL-trading-card BL-trading-card2">
							<div className="BL-trading-card-thumb">
								<img
									className="wow fadeInUpX"
									data-wow-delay="0s"
									src="/images/all-img/v2/card3.png"
									alt=""
								/>
								<div className="BL-trading-card-thumb2">
									<img
										className="wow fadeInUpX"
										data-wow-delay=".20s"
										src="/images/all-img/v2/card4.png"
										alt=""
									/>
								</div>
								<div className="BL-shape6">
									<img src="/images/shape/shape5.png" alt="" />
								</div>
								<div className="BL-shape7">
									<img src="/images/shape/shape6.png" alt="" />
								</div>
							</div>
						</div>
					</div>

					<div className="col-lg-6 col-md-10 d-flex align-items-center">
						<div className="BL-default-content">
							<h2>Start your crypto trading with the most easy process</h2>
							<p>
								It simplifies the process of buying and selling digital from anywhere in the world.
								Available to citizens in the United States, Europe, & Australia.
							</p>
							<div className="BL-accordion-wrap BL-accordion-wrap2">
								<div className="BL-accordion-item">
									<h4>Download and create an account easily</h4>
									<img src="/images/svg/arrow-black-right2.svg" alt="" />
								</div>
								<div className="BL-accordion-item">
									<h4>Link your bank account & make a payment</h4>
									<img src="/images/svg/arrow-black-right2.svg" alt="" />
								</div>
								<div className="BL-accordion-item">
									<h4>Start buying & selling crypto as you wish</h4>
									<img src="/images/svg/arrow-black-right2.svg" alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
