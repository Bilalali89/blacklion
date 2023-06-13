/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function FooterHomeThree() {
	return (
		<footer className="BL-foote3-section">
			<div className="container">
				<div className="BL-footer-middle">
					<div className="row">
						<div className="col-xl-2 col-lg-2">
							<div className="BL-footer-logo cursor-scale small">
								<img src="/images/logo/Logo.png" alt="logo" />
							</div>
						</div>
						<div className="col-xl-10 col-lg-10 d-flex justify-content-end">
							<div className="BL-footer-menu2">
								<ul>
									{/* <li>
										<Link href={"#"}> About </Link>
									</li> */}
									<li>
										<Link href={"#"}> FAQs </Link>
									</li>
									<li>
										<Link href={"#"}> Terms of Service </Link>
									</li>
									<li>
										<Link href={"#"}> Privacy Policy </Link>
									</li>
									
								</ul>
							</div>
						</div>
						{/* <div className="col-xl-3 col-lg-2">
							<Link href="mailto:name@email.com" legacyBehavior>
								<a className="BL-email">
									<img src="/images/svg/eamil.svg" alt="" />
									info@example.com
								</a>
							</Link>
						</div> */}
					</div>
				</div>
				<div className="BL-footer-bottom" style={{textAlign: 'center'}}>
					<div className="row">
						<div className="col-lg-12 col-md-12">
							<p>All Rights Reserved © 2023 Blacklion Investment Group</p>
						</div>
						
					</div>
				</div>
			</div>
		</footer>
	);
}
