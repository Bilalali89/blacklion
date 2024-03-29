/* eslint-disable @next/next/no-img-element */
import Slider from "react-slick";
export default function TextSliderTwo() {
	const settings = {
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		autoplay: true,
		autoplaySpeed: 0,
		speed: 10000,
		cssEase: "linear",
		pauseOnHover: true,
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<div className="BL--text-slider-section">
			<div className="BL--text-slider">
				<Slider {...settings}>
					<div className="BL--text-slider-data">
						<div className="BL--text-slider-icon">
							<img src="/images/all-img/v3/daimond.png" alt="" />
						</div>
						<h3>COLLECT RARE AND EXTRAORDINARY RARE ARTWORK</h3>
					</div>
					<div className="BL--text-slider-data">
						<div className="BL--text-slider-icon">
							<img src="/images/all-img/v3/daimond.png" alt="" />
						</div>
						<h3>COLLECT RARE AND EXTRAORDINARY RARE ARTWORK</h3>
					</div>
					<div className="BL--text-slider-data">
						<div className="BL--text-slider-icon">
							<img src="/images/all-img/v3/daimond.png" alt="" />
						</div>
						<h3>COLLECT RARE AND EXTRAORDINARY RARE ARTWORK</h3>
					</div>
				</Slider>
			</div>
		</div>
	);
}
