/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function AppLinks() {
	return (
		<div className="BL-applinks-section">
			<div className="container">
				<div className="BL-applinks-container">
					<div className="BL-applinks-container-content">
						<h4 className="wow fadeInUpX" data-wow-delay="0s">
							WE KNOW YOU'RE EAGER
						</h4>
					
						<div className="BL-applinks-icons wow fadeInUpX" data-wow-delay="0.25s">
						<Link href={"/"} legacyBehavior>
								<a className="BL-app-btn">
									<img src="/images/all-img/play-store.png" alt="playstore" />
								</a>
							</Link>
							<Link href={"/"} legacyBehavior>
								<a className="BL-app-btn">
									<img src="/images/all-img/app-store.png" alt="appstore" />
								</a>
							</Link>
							
						</div>
					</div>
				</div>
			
			</div>
		</div>
	);
}
