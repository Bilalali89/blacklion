/* eslint-disable @next/next/no-img-element */
import Isotope from "isotope-layout";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
export default function FilterGalarryOne() {
	const isotope = useRef();
	const [activeClass, setActiveClass] = useState("*");
	const [filterKey, setFilterKey] = useState("*");
	useEffect(() => {
		setTimeout(() => {
			isotope.current = new Isotope("#BL--four-column", {
				itemSelector: ".collection-grid-item",

				resizable: false,
				masonry: {
					columnWidth: ".collection-grid-item",
					gutterWidth: 0,
				},
			});
		}, 1000);
		return () => isotope.current.destroy();
	}, []);

	useEffect(() => {
		if (isotope.current)
			filterKey === "*"
				? isotope.current.arrange({ filter: `*` })
				: isotope.current.arrange({ filter: `.${filterKey}` });
	}, [filterKey]);

	const handleFilterKeyChange = (key) => () => {
		setFilterKey(key);
		setActiveClass(key);
	};

	const handleActiveClass = (key) => {
		if (key === activeClass) return "active";
	};
	return (
		<div className="BL--portfolio-section BL--section-padding">
			<div className="container">
				<div className="BL--section-title">
					<div className="BL--default-content content-sm">
						<h2>Explore the most unique artworks</h2>
						<p>
							NFTs are usually associated with non-physical art but in reality, there are several
							different types of NFTs and are explained in this guide.
						</p>
					</div>
				</div>

				<div className="BL--portfolio-menu">
					<ul className="option-set clear-both">
						<li onClick={handleFilterKeyChange("*")} className={handleActiveClass("*")}>
							<span>
								<img src="/images/all-img/v3/m-icon1.png" alt="" /> Artworks
							</span>
						</li>
						<li onClick={handleFilterKeyChange("video")} className={handleActiveClass("video")}>
							<span>
								<img src="/images/all-img/v3/m-icon2.png" alt="" />
								Video-Game
							</span>
						</li>
						<li onClick={handleFilterKeyChange("virtual")} className={handleActiveClass("virtual")}>
							<span>
								<img src="/images/all-img/v3/m-icon3.png" alt="" /> Virtual Land
							</span>
						</li>
						<li onClick={handleFilterKeyChange("domain")} className={handleActiveClass("domain")}>
							<span>
								<img src="/images/all-img/v3/m-icon4.png" alt="" /> Domain Names
							</span>
						</li>
						<li onClick={handleFilterKeyChange("music")} className={handleActiveClass("music")}>
							<span>
								<img src="/images/all-img/v3/m-icon5.png" alt="" />
								Music
							</span>
						</li>
						<li onClick={handleFilterKeyChange("sports")} className={handleActiveClass("sports")}>
							<span>
								<img src="/images/all-img/v3/m-icon6.png" alt="" />
								Sports
							</span>
						</li>
					</ul>
				</div>
				<div className="BL--portfolio-wrap" id="BL--four-column">
					<div className="collection-grid-item sports domain">
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
									<Link href={"#"} legacyBehavior>
										<a className="BL--btn btn-sm bg-white">Place a Bid</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="collection-grid-item video marketing">
						<div className="BL--card-wrap">
							<div className="BL--card-thumb">
								<img src="/images/all-img/v3/card6.jpg" alt="" />
							</div>
							<div className="BL--card-data">
								<h3>Scotch Noblemen Song</h3>
								<p>Pre-sale : 18 May 2023</p>
								<div className="BL--card-footer">
									<div className="BL--card-footer-data">
										<span>Mint Price:</span>
										<h4>0.194 ETH</h4>
									</div>
									<Link href={"#"} legacyBehavior>
										<a className="BL--btn btn-sm bg-white">Place a Bid</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="collection-grid-item marketing virtual video">
						<div className="BL--card-wrap">
							<div className="BL--card-thumb">
								<img src="/images/all-img/v3/card7.jpg" alt="" />
							</div>
							<div className="BL--card-data">
								<h3>WarriorBatz Crow</h3>
								<p>Pre-sale : 18 May 2023</p>
								<div className="BL--card-footer">
									<div className="BL--card-footer-data">
										<span>Mint Price:</span>
										<h4>0.194 ETH</h4>
									</div>
									<Link href={"#"} legacyBehavior>
										<a className="BL--btn btn-sm bg-white">Place a Bid</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="collection-grid-item music marketing">
						<div className="BL--card-wrap">
							<div className="BL--card-thumb">
								<img src="/images/all-img/v3/card8.jpg" alt="" />
							</div>
							<div className="BL--card-data">
								<h3>Axie Infinity Table Game</h3>
								<p>Pre-sale : 18 May 2023</p>
								<div className="BL--card-footer">
									<div className="BL--card-footer-data">
										<span>Mint Price:</span>
										<h4>0.194 ETH</h4>
									</div>
									<Link href={"#"} legacyBehavior>
										<a className="BL--btn btn-sm bg-white">Place a Bid</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="collection-grid-item virtual">
						<div className="BL--card-wrap">
							<div className="BL--card-thumb">
								<img src="/images/all-img/v3/card9.jpg" alt="" />
							</div>
							<div className="BL--card-data">
								<h3>Doodle Genesis</h3>
								<p>Pre-sale : 18 May 2023</p>
								<div className="BL--card-footer">
									<div className="BL--card-footer-data">
										<span>Mint Price:</span>
										<h4>0.194 ETH</h4>
									</div>
									<Link href={"#"} legacyBehavior>
										<a className="BL--btn btn-sm bg-white">Place a Bid</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="collection-grid-item video music">
						<div className="BL--card-wrap">
							<div className="BL--card-thumb">
								<img src="/images/all-img/v3/card10.jpg" alt="" />
							</div>
							<div className="BL--card-data">
								<h3>DAW World – 400 NFT</h3>
								<p>Pre-sale : 18 May 2023</p>
								<div className="BL--card-footer">
									<div className="BL--card-footer-data">
										<span>Mint Price:</span>
										<h4>0.194 ETH</h4>
									</div>
									<Link href={"#"} legacyBehavior>
										<a className="BL--btn btn-sm bg-white">Place a Bid</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="collection-grid-item virtual marketing">
						<div className="BL--card-wrap">
							<div className="BL--card-thumb">
								<img src="/images/all-img/v3/card11.jpg" alt="" />
							</div>
							<div className="BL--card-data">
								<h3>Trippin’ App Tribe</h3>
								<p>Pre-sale : 18 May 2023</p>
								<div className="BL--card-footer">
									<div className="BL--card-footer-data">
										<span>Mint Price:</span>
										<h4>0.194 ETH</h4>
									</div>
									<Link href={"#"} legacyBehavior>
										<a className="BL--btn btn-sm bg-white">Place a Bid</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="collection-grid-item marketing music">
						<div className="BL--card-wrap">
							<div className="BL--card-thumb">
								<img src="/images/all-img/v3/card12.jpg" alt="" />
							</div>
							<div className="BL--card-data">
								<h3>Eminem Song The Way</h3>
								<p>Pre-sale : 18 May 2023</p>
								<div className="BL--card-footer">
									<div className="BL--card-footer-data">
										<span>Mint Price:</span>
										<h4>0.194 ETH</h4>
									</div>
									<Link href={"#"} legacyBehavior>
										<a className="BL--btn btn-sm bg-white">Place a Bid</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="BL--portfolio-btn">
					<Link href={"#"} legacyBehavior>
						<a className="BL--outline-btn">
							<span>View All NFTs</span>
						</a>
					</Link>
				</div>
			</div>
			<div className="BL--shape2">
				<img src="/images/shape2/shape2.png" alt="" />
			</div>
		</div>
	);
}
