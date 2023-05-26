/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function HeroSectionThree() {
  return (
    <div className="fugu--hero-section" id="herothree">
      <div className="container"  >
        <div className="BL--headline">
          <p className="wow fadeInUpX" data-wow-delay="0.10s">
            As a company with laser focus on music and technology, we have
            created two NEW products which are already disrupting the music
            industry in a big way!
          </p>
        </div>
        <div className="BL--greenarrow">
          <img src="/images/home/Zigzag-arrow-white.png" alt="arrow" />
        </div>
      </div>
      <div className="container" style={{marginBottom: '300px'}}>
        <div className="row">
          <div
            className="col-lg-4 d-flex justify-content-center"
            style={{ flexDirection: "column" }}
          >
            <div className="fugu--hero-content">
              <h1 className="wow fadeInUpX" data-wow-delay="0s">
                Blacklion <br />
                Valuation <br />
                Engine
              </h1>
              {/* <p className="wow fadeInUpX" data-wow-delay="0.10s">
                We are Music technology company that is revolutionizing the
                music industry for ALL!
              </p> */}
              <div
                className="fugu--btn-wrap fugu--hero-btn wow fadeInUpX"
                data-wow-delay="0.20s"
              >
                <Link href={"#"} legacyBehavior>
                  <a className="fugu--btn bg-gray active">More Details</a>
                </Link>
                {/* <Link href={"#"} legacyBehavior>
									<a className="fugu--btn bg-gray">View Artwork</a>
								</Link> */}
              </div>
              {/* <div className="fugu--counter-wrap wow fadeInUpX" data-wow-delay="0.30s">
								<div className="fugu--counter-data">
									<h2>
										<span data-percentage="45" className="fugu--counter">
											<CountUp end={45} />
										</span>
										<strong>K</strong>
									</h2>
									<p>Artwork</p>
								</div>
								<div className="fugu--counter-data">
									<h2>
										<span data-percentage="86" className="fugu--counter">
											<CountUp end={86} />
										</span>
										<strong>K</strong>
									</h2>
									<p>Auction</p>
								</div>
								<div className="fugu--counter-data">
									<h2>
										<span data-percentage="32" className="fugu--counter">
											<CountUp end={32} />
										</span>
										<strong>K</strong>
									</h2>
									<p>Artist</p>
								</div>
							</div> */}
            </div>
          </div>
          <div className="col-lg-8">
            <div className="BL--hero-right">
              {/* <span className="dollar"><img src="/images/home/Dollar-mark.png" alt="dollar" /></span> */}

              <img src="/images/home/Laptop.png" alt="laptop" />
            </div>
            {/* <div className="fugu--hero-right" id="rotateOne">
							<div className="fugu--card-wrap">
								<div className="fugu--card-thumb">
									<img src="/images/all-img/v3/hero-thumb2.png" alt="" />
								</div>
								<div className="fugu--card-data">
									<h3>The Exorians Universe</h3>
									<p>Pre-sale : 18 May 2023</p>
									<div className="fugu--card-footer">
										<div className="fugu--card-footer-data">
											<span>Mint Price:</span>
											<h4>0.194 ETH</h4>
										</div>
										<Link href={"#"} legacyBehavior>
											<a className="fugu--btn btn-sm bg-white">Place a Bid</a>
										</Link>
									</div>
								</div>
							</div>
						</div> */}
          </div>
        </div>
        {/* <div className="fugu--hero-shape1">
          <img src="/images/home/star-artist.svg" alt="" />
        </div> */}
        {/* <div
          className="fugu--hero-shape2"
          style={{ background: "#a73162" }}
        ></div> */}
      </div>
      <div className="container" id="app"> 
        <div className="row">
          <div
            className="col-lg-6 offset-lg-6 d-flex justify-content-center"
            style={{ flexDirection: "column" }}
          >
            <div className="fugu--hero-content">
              <h1 className="wow fadeInUpX" data-wow-delay="0s">
                Blacklion <br />
                App
                
              </h1>
              {/* <p className="wow fadeInUpX" data-wow-delay="0.10s">
                We are Music technology company that is revolutionizing the
                music industry for ALL!
              </p> */}
              <div
                className="fugu--btn-wrap fugu--hero-btn wow fadeInUpX"
                data-wow-delay="0.20s"
              >
                <Link href={"#"} legacyBehavior>
                  <a className="fugu--btn bg-gray active">More Details</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
