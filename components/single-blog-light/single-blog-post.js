/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import CommentInputSection from "./comment-input-section";
import CommentListSection from "./comment-list-section";

export default function SingleBlogPost() {
	return (
		<div className="BL-blog-single-wrap">
			<img className="wow fadeInUpX" src="/images/all-img/blog/blog-single-thumb.png" alt="" />
			<div className="BL-blog-meta">
				<ul>
					<li>
						<Link href={"#"}> Article </Link>
					</li>
					<li>
						<Link href={"#"}> August 26, 2022 </Link>
					</li>
				</ul>
			</div>
			<h5>
				Blockchain is a shared, immutable ledger that facilitates the process of recording transactions and
				tracking in a business network.
			</h5>
			<p>
				You may be fascinated by blockchain technology, hearing about all those breaking projects, and thinking
				about bringing it to your organization. If you have worked it is business for some years, you probably
				know there are rarely simple yes or no answers to the questions. Having said that, if the idea is: let’s
				take any relational database and change it into a blockchain network.
			</p>
			<p>
				Let’s take together six steps to assess six aspects that help indicate if the organization is ready for
				the blockchain project.{" "}
			</p>
			<h5>Here are the steps:</h5>
			<ul>
				<li>
					<span>1.</span>Consortium
				</li>
				<li>
					<span>2.</span>Company organizational complexity
				</li>
				<li>
					<span>3.</span>Database vs blockchain
				</li>
				<li>
					<span>4.</span>Trendsetter or follower
				</li>
				<li>
					<span>5.</span>One source of truth
				</li>
				<li>
					<span>6.</span>If… then…
				</li>
			</ul>
			<p>
				And then as a bonus topic, we will mention the easiest way to decide between a public and a private
				network.
			</p>
			<h5>How a blockchain supports consortia</h5>
			<p>
				A consortium is a way for businesses to join forces and reach goals they can not rthemselves. In a
				consortium, trust needs to be gained, so it’s beneficial when the technology transparency and following
				the rules. A distributed ledger is a way to achieve that.{" "}
			</p>
			<div className="row">
				<div className="col-md-6">
					<Link href={"#"}>
						<img className="wow fadeInUpX" data-wow-delay=".10s" src="/images/all-img/blog/01.png" alt="" />
					</Link>
				</div>
				<div className="col-md-6">
					<Link href={"#"}>
						<img className="wow fadeInUpX" data-wow-delay=".20s" src="/images/all-img/blog/02.png" alt="" />
					</Link>
				</div>
			</div>
			<h5>Do you know if you are ready for the blockchain project?</h5>
			<p>
				Analyzing aspects of the use case against readiness for the blockchain project isnt simple task, but
				there is a group of indicators if the blockchain can abring value to your idea. I presented 6 of them
				with descriptions. I hope they helped a the general blockchain or non-blockchain direction.
			</p>
			<div className="BL-user-wrap">
				<div className="BL-user-thumb">
					<img src="/images/all-img/blog/user.png" alt="" />
				</div>
				<div className="BL-user-data">
					<ul>
						<li>Patrick Perfetto</li>
						<li>
							<span>Founder@ xyzcompany</span>
						</li>
					</ul>
					<p>
						“Here, I'm rating the Fugu crypto app and the debit card. My experience is great! and as the app
						is very well designed. Crypto is a marketing is very good and I think it'll to win.”
					</p>
				</div>
				<div className="BL-social-icon3">
					<ul>
						<li>
							<Link href={"#"}>
								<svg
									width="13"
									height="11"
									viewBox="0 0 13 11"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M12.6518 1.76691C12.2028 1.96645 11.7289 2.09116 11.2301 2.16598C11.7289 1.86668 12.128 1.39279 12.3026 0.819124C11.8287 1.09348 11.3049 1.29302 10.7312 1.41773C10.2823 0.943833 9.63379 0.644531 8.93542 0.644531C7.58857 0.644531 6.49113 1.74197 6.49113 3.08883C6.49113 3.28836 6.51607 3.46295 6.56595 3.63755C4.54567 3.53778 2.72492 2.56505 1.50277 1.06854C1.30323 1.44267 1.17852 1.84174 1.17852 2.29069C1.17852 3.13871 1.60253 3.88697 2.27596 4.33592C1.87689 4.31098 1.50277 4.21121 1.15358 4.03662V4.06156C1.15358 5.25876 2.0016 6.25644 3.12398 6.48091C2.92445 6.5308 2.69997 6.55574 2.4755 6.55574C2.32585 6.55574 2.15125 6.5308 2.0016 6.50585C2.32585 7.47859 3.22375 8.2019 4.29625 8.2019C3.44823 8.85038 2.40067 9.24945 1.25335 9.24945C1.05381 9.24945 0.85428 9.24945 0.679688 9.22451C1.77713 9.92288 3.04916 10.322 4.4459 10.322C8.96037 10.322 11.4296 6.58068 11.4296 3.33825C11.4296 3.23848 11.4296 3.11377 11.4296 3.014C11.9035 2.68976 12.3275 2.26575 12.6518 1.76691Z"
										fill="white"
									></path>
								</svg>
							</Link>
						</li>
						<li>
							<Link href={"#"}>
								<svg
									width="8"
									height="14"
									viewBox="0 0 8 14"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M2.61761 13.7535V7.8033H0.615234V5.48437H2.61761V3.77424C2.61761 1.78964 3.82974 0.708984 5.60014 0.708984C6.44818 0.708984 7.17702 0.772123 7.38943 0.800344V2.87437L6.16156 2.87492C5.19872 2.87492 5.01229 3.33245 5.01229 4.00385V5.48437H7.30858L7.00959 7.8033H5.01228V13.7535H2.61761Z"
										fill="#13111A"
									></path>
								</svg>
							</Link>
						</li>
						<li>
							<Link href={"#"}>
								<svg
									width="16"
									height="16"
									viewBox="0 0 16 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M8.00221 2.05002C9.94011 2.05002 10.1696 2.05728 10.9352 2.09219C11.3954 2.09782 11.8514 2.18234 12.2831 2.34207C12.5962 2.46281 12.8805 2.64777 13.1178 2.88504C13.355 3.12232 13.54 3.40664 13.6607 3.71972C13.8205 4.15144 13.905 4.60736 13.9106 5.06765C13.9452 5.8332 13.9528 6.06269 13.9528 8.0006C13.9528 9.9385 13.9455 10.168 13.9106 10.9335C13.905 11.3938 13.8205 11.8498 13.6607 12.2815C13.54 12.5946 13.355 12.8789 13.1178 13.1161C12.8805 13.3534 12.5962 13.5384 12.2831 13.6591C11.8514 13.8189 11.3954 13.9034 10.9352 13.909C10.1699 13.9436 9.94045 13.9512 8.00221 13.9512C6.06396 13.9512 5.83446 13.9439 5.06926 13.909C4.60897 13.9034 4.15305 13.8189 3.72133 13.6591C3.40825 13.5384 3.12392 13.3534 2.88665 13.1161C2.64938 12.8789 2.46442 12.5946 2.34368 12.2815C2.18395 11.8498 2.09943 11.3938 2.0938 10.9335C2.05923 10.168 2.05163 9.9385 2.05163 8.0006C2.05163 6.06269 2.05889 5.8332 2.0938 5.06765C2.09943 4.60736 2.18395 4.15144 2.34368 3.71972C2.46442 3.40664 2.64938 3.12232 2.88665 2.88504C3.12392 2.64777 3.40825 2.46281 3.72133 2.34207C4.15305 2.18234 4.60897 2.09782 5.06926 2.09219C5.83481 2.05763 6.0643 2.05002 8.00221 2.05002ZM8.00221 0.742188C6.03216 0.742188 5.784 0.750482 5.00981 0.785736C4.40741 0.797718 3.8114 0.911778 3.24714 1.12306C2.76309 1.30544 2.32467 1.59123 1.96246 1.96051C1.59285 2.32285 1.30681 2.76152 1.12432 3.24587C0.913039 3.81014 0.79898 4.40614 0.786998 5.00855C0.752436 5.78205 0.744141 6.03021 0.744141 8.00025C0.744141 9.9703 0.752436 10.2185 0.787689 10.9926C0.799671 11.5951 0.913731 12.1911 1.12502 12.7553C1.3073 13.2396 1.5931 13.6783 1.96246 14.0407C2.32487 14.41 2.76353 14.6958 3.24783 14.8781C3.81209 15.0894 4.4081 15.2035 5.0105 15.2155C5.78469 15.25 6.03181 15.259 8.0029 15.259C9.97398 15.259 10.2211 15.2507 10.9953 15.2155C11.5977 15.2035 12.1937 15.0894 12.758 14.8781C13.24 14.6913 13.6777 14.4059 14.0431 14.0403C14.4085 13.6746 14.6936 13.2367 14.8801 12.7546C15.0914 12.1904 15.2054 11.5944 15.2174 10.992C15.252 10.2185 15.2603 9.9703 15.2603 8.00025C15.2603 6.03021 15.252 5.78205 15.2167 5.00786C15.2047 4.40545 15.0907 3.80944 14.8794 3.24518C14.6971 2.76089 14.4113 2.32222 14.042 1.95981C13.6795 1.59046 13.2409 1.30466 12.7566 1.12237C12.1923 0.911086 11.5963 0.797027 10.9939 0.785045C10.2204 0.750482 9.97225 0.742188 8.00221 0.742188Z"
										fill="white"
									></path>
									<path
										d="M8.00453 4.27441C7.26737 4.27441 6.54675 4.49301 5.93382 4.90256C5.32089 5.31211 4.84316 5.89421 4.56106 6.57527C4.27896 7.25632 4.20515 8.00574 4.34896 8.72874C4.49278 9.45174 4.84776 10.1159 5.36901 10.6371C5.89027 11.1584 6.55439 11.5134 7.2774 11.6572C8.0004 11.801 8.74981 11.7272 9.43087 11.4451C10.1119 11.163 10.694 10.6853 11.1036 10.0723C11.5131 9.45938 11.7317 8.73877 11.7317 8.0016C11.7317 7.01309 11.339 6.06507 10.6401 5.36608C9.94107 4.6671 8.99305 4.27441 8.00453 4.27441ZM8.00453 10.421C7.52603 10.421 7.05827 10.2791 6.66041 10.0132C6.26255 9.74738 5.95246 9.36953 5.76934 8.92745C5.58623 8.48537 5.53832 7.99892 5.63167 7.52961C5.72502 7.0603 5.95544 6.62921 6.29379 6.29086C6.63215 5.95251 7.06323 5.72209 7.53254 5.62874C8.00185 5.53538 8.4883 5.5833 8.93038 5.76641C9.37246 5.94953 9.75031 6.25962 10.0162 6.65748C10.282 7.05534 10.4239 7.5231 10.4239 8.0016C10.4239 8.64326 10.169 9.25863 9.71528 9.71234C9.26156 10.1661 8.64619 10.421 8.00453 10.421Z"
										fill="white"
									></path>
									<path
										d="M11.8768 4.99779C12.3578 4.99779 12.7478 4.60785 12.7478 4.12683C12.7478 3.6458 12.3578 3.25586 11.8768 3.25586C11.3958 3.25586 11.0059 3.6458 11.0059 4.12683C11.0059 4.60785 11.3958 4.99779 11.8768 4.99779Z"
										fill="white"
									></path>
								</svg>
							</Link>
						</li>
						<li>
							<Link href={"#"}>
								<svg
									width="15"
									height="15"
									viewBox="0 0 15 15"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M7.65173 0.742188C3.80429 0.742188 0.708984 3.83749 0.708984 7.68493C0.708984 10.7513 2.70502 13.3548 5.45319 14.2805C5.80033 14.3384 5.91604 14.1359 5.91604 13.9334C5.91604 13.7598 5.91604 13.3259 5.91604 12.7474C3.97786 13.1813 3.57287 11.8217 3.57287 11.8217C3.25466 11.0117 2.79181 10.8092 2.79181 10.8092C2.15539 10.3752 2.84966 10.3752 2.84966 10.3752C3.54394 10.4331 3.92 11.0985 3.92 11.0985C4.52749 12.1688 5.53998 11.8506 5.94497 11.677C6.00283 11.2142 6.1764 10.9249 6.37889 10.7513C4.8457 10.5777 3.22573 9.97025 3.22573 7.30887C3.22573 6.55674 3.48608 5.92032 3.94893 5.45747C3.89108 5.2839 3.63072 4.58963 4.00679 3.60607C4.00679 3.60607 4.58535 3.4325 5.91604 4.32927C6.46568 4.18463 7.07317 4.09785 7.65173 4.09785C8.23029 4.09785 8.83778 4.18463 9.38742 4.32927C10.7181 3.4325 11.2967 3.60607 11.2967 3.60607C11.6727 4.5607 11.4413 5.25497 11.3545 5.45747C11.7884 5.94925 12.0777 6.55674 12.0777 7.30887C12.0777 9.97025 10.4578 10.5488 8.89564 10.7224C9.15599 10.9249 9.35849 11.3588 9.35849 11.9952C9.35849 12.9209 9.35849 13.6731 9.35849 13.9045C9.35849 14.078 9.4742 14.3095 9.85027 14.2516C12.5984 13.3548 14.5945 10.7513 14.5945 7.68493C14.5945 3.83749 11.4992 0.742188 7.65173 0.742188Z"
										fill="white"
									></path>
								</svg>
							</Link>
						</li>
					</ul>
				</div>
			</div>

			<div className="BL-blog-post-wrap">
				<Link href={"#"} legacyBehavior>
					<a className="BL-blog-post-column">
						<div className="BL-blog-post-arrow">
							<div className="BL-blog-post-arrow-icon">
								<img src="/images/svg/arrow-black-left.svg" alt="" />
							</div>
							<div className="BL-blog-post-arrow-data">
								<p>Previous post</p>
							</div>
						</div>
						<h6>What does the NFT Ecosystem look like after the Boom?</h6>
					</a>
				</Link>
				<Link href={"#"} legacyBehavior>
					<a className="BL-blog-post-column post-column-right">
						<div className="BL-blog-post-arrow">
							<div className="BL-blog-post-arrow-data">
								<p>Next post</p>
							</div>
							<div className="BL-blog-post-arrow-icon">
								<img src="/images/svg/arrow-black-right.svg" alt="" />
							</div>
						</div>
						<h6>Metaverse Launch: Let’s take a step back with data!</h6>
					</a>
				</Link>
			</div>
			<CommentListSection />
			<CommentInputSection />
		</div>
	);
}
