import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function BlogSidebarSection() {
	return (
		<div className="BL--blog-sidebar">
			<div className="BL--blog-sidebar-item">
				<div className="BL--newsletter BL--search">
					<input type="email" placeholder="Search..." />
					<button type="submit" id="BL--submit-btn">
						Search
					</button>
					<button id="BL--search-btn">
						<img src="/images/svg2/search.svg" alt="" />
					</button>
				</div>
			</div>
			<div className="BL--blog-sidebar-item">
				<h4>Categories:</h4>
				<div className="BL--category">
					<ul>
						<li>
							<Link href={"#"}> Art & Analysis (04)</Link>
						</li>
						<li>
							<Link href={"#"}> Collectible (02)</Link>
						</li>
						<li>
							<Link href={"#"}> Metaverse (06)</Link>
						</li>
						<li>
							<Link href={"#"}> Utility (27)</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className="BL--blog-sidebar-item">
				<h4>Latest Posts:</h4>
				<div className="BL--blog-post-wrap">
					<div className="BL--blog-post-thumb">
						<Link href={"#"}>
							<img src="/images/all-img/blog2/dark/blog1.png" alt="" />
						</Link>
					</div>
					<div className="BL--blog-post-data">
						<Link href={"#"}>
							<p>July 27, 2022</p>
						</Link>
						<Link href={"#"}>
							<h5>We’ve valued one of the biggest NFT portfolios in the world!</h5>
						</Link>
					</div>
				</div>
				<div className="BL--blog-post-wrap">
					<div className="BL--blog-post-thumb">
						<Link href={"#"}>
							<img src="/images/all-img/blog2/dark/blog2.png" alt="" />
						</Link>
					</div>
					<div className="BL--blog-post-data">
						<Link href={"#"}>
							<p>July 27, 2022</p>
						</Link>
						<Link href={"#"}>
							<h5>One global or several tiny NFT communities? Traders version</h5>
						</Link>
					</div>
				</div>
				<div className="BL--blog-post-wrap">
					<div className="BL--blog-post-thumb">
						<Link href={"#"}>
							<img src="/images/all-img/blog2/dark/blog3.png" alt="" />
						</Link>
					</div>
					<div className="BL--blog-post-data">
						<Link href={"#"}>
							<p>July 27, 2022</p>
						</Link>
						<Link href={"#"}>
							<h5>Always be on time on your metaverse event with Dwiss!</h5>
						</Link>
					</div>
				</div>
			</div>
			<div className="BL--blog-sidebar-item">
				<h4>Tags:</h4>
				<div className="BL--tags">
					<ul>
						<li>
							<Link href={"#"}> NFTs art</Link>
						</li>
						<li>
							<Link href={"#"}> Cryptocurrency</Link>
						</li>
						<li>
							<Link href={"#"}> Digital </Link>
						</li>
						<li>
							<Link href={"#"}> Analysis</Link>
						</li>
						<li>
							<Link href={"#"}> Earning</Link>
						</li>
						<li>
							<Link href={"#"}> Creative works</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
