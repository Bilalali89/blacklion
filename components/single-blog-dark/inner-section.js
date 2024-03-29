/* eslint-disable @next/next/no-img-element */
import BreadcrumbSection from "./breadcrumb-section";
import SingleBlogPost from "./single-blog-post";

export default function InnerSection() {
	return (
		<div className="BL--inner-section dark-version BL--single-blog">
			<div className="container">
				<div className="row">
					<div className="col-lg-10 offset-lg-1">
						<BreadcrumbSection />
						<SingleBlogPost />
					</div>
				</div>
			</div>
			<div className="BL--blog-shape1">
				<img src="assets/images/all-img/v3/shape2.png" alt="" />
			</div>
			<div className="BL--blog-shape3">
				<img src="assets/images/all-img/blog2/shape.png" alt="" />
			</div>
		</div>
	);
}
