import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function CommentSection() {
	return (
		<div className="BL--comment-wrap">
			<h3>3 comments on this post:</h3>
			<div className="BL--comment-list">
				<ul>
					<li>
						<div className="BL--comment-body">
							<div className="BL--comment-author">
								<img src="/images/all-img/blog2/author1.png" alt="" />
							</div>
							<div className="BL--comment-meta">
								<h5>Juliya Naik</h5>
								<span>Dec. 25, 2022</span>
								<p>
									The value that this server serves up is next level.I have just joined but wow I see
									myself always coming back refreshing hoping for more.My advice for anyone wanting to
									dabble in NFTs join without a moment.
								</p>
							</div>
							<Link href={"#"} legacyBehavior>
								<a className="BL--comment-reply">Reply</a>
							</Link>
						</div>
					</li>
					<li className="children">
						<div className="BL--comment-body">
							<div className="BL--comment-author">
								<img src="/images/all-img/blog2/author2.png" alt="" />
							</div>
							<div className="BL--comment-meta">
								<h5>Willium Marco</h5>
								<span>Dec. 25, 2022</span>
								<p>
									NFT Trading Academy is amazing. Ever since I was invited as an influencer this has
									been a crucial piece in terms of where I interact with the NFT Space and source
									knowledge.
								</p>
							</div>
							<Link href={"#"} legacyBehavior>
								<a className="BL--comment-reply">Reply</a>
							</Link>
						</div>
					</li>
					<li>
						<div className="BL--comment-body">
							<div className="BL--comment-author">
								<img src="/images/all-img/blog2/author3.png" alt="" />
							</div>
							<div className="BL--comment-meta">
								<h5>Robert fox</h5>
								<span>Dec. 25, 2022</span>
								<p>
									I have been using the service and it is great value for your money! With only one
									good call you can make back what you pay plus profit. It is a very organized discord
									and it has many channels talking about all NFT related topics. I highly recommend
									it!
								</p>
							</div>
							<Link href={"#"} legacyBehavior>
								<a className="BL--comment-reply">Reply</a>
							</Link>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
}
