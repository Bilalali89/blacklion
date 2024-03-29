/* eslint-disable @next/next/no-img-element */

import BreadcrumbSection from "./breadcrumb-section";
import ContactSection from "./contact-section";

export default function InnerSection() {
	return (
		<div className="BL--inner-section dark-version">
			<div className="container">
				<BreadcrumbSection />
				<ContactSection />
			</div>
			<div className="BL--blog-shape1">
				<img src="/images/all-img/v3/shape2.png" alt="" />
			</div>
			<div className="BL--blog-shape3">
				<img src="/images/all-img/blog2/shape.png" alt="" />
			</div>
		</div>
	);
}
