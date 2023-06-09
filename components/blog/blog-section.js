import React from "react";
import BlogPost from "./blog-post";
import BlogSidebarSection from "./blog-sidebar-section";

export default function BlogSection() {
	return (
		<div className="BL-blog-section BL-section-padding">
			<div className="container">
				<div className="row">
					<BlogPost />
					<BlogSidebarSection />
				</div>
			</div>
		</div>
	);
}
