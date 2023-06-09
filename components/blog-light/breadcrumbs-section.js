/* eslint-disable @next/next/no-img-element */
export default function BreadcrumbsSection() {
	return (
		<div className="BL--breadcrumbs-section">
			<div className="BL--breadcrumbs-data center-content">
				<h1 className="wow fadeInUpX" data-wow-delay="0s">
					Blog & Resources
				</h1>
				<p className="wow fadeInUpX" data-wow-delay="0.10s">
					Your source of market analysis, news, developments, and project reviews for the NFT ecosystem.
					Discover and keep up to date with the latest NFT news and events. Nexto is the best place to
					analyze, track and discover NFTs.
				</p>
				<div className="BL--newsletter BL--search wow fadeInUpX" data-wow-delay="0.20s">
					<input type="email" placeholder="Search..." />
					<button type="submit" id="BL--submit-btn">
						Search
					</button>
					<button id="BL--search-btn">
						<img src="/images/svg2/search.svg" alt="" />
					</button>
				</div>
			</div>
		</div>
	);
}
