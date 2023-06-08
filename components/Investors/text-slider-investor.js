/* eslint-disable @next/next/no-img-element */
import Slider from "react-slick";
export default function TextSliderInvestor() {
	const settingsOne = {
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
				breakpoint: 991,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	const settingsTwo = {
		rtl: true,
		infinite: true,
		slidesToShow: 4,
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
				breakpoint: 991,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<div className="fugu-text-slider-section" id="homeslide">
	
			<div className="fugu-text-slider-area2" style={{background: '#8C55FC'}}>
				<div className="fugu-text-slider2" dir="rtl">
					<Slider {...settingsTwo}>
						<div className="fugu-text-slider-data">
							<div className="fugu-text-slider-icon">
								<img src="/images/home/Polygon.png" alt="polygon" style={{paddingLeft: '100px'}} />
							</div>
							<h3>LISTEN 2 EARN </h3>
						</div>
						
						<div className="fugu-text-slider-data">
							<div className="fugu-text-slider-icon">
								<img src="/images/home/Polygon.png" alt="polygon" style={{paddingLeft: '100px'}}/>
							</div>
							<h3>LISTEN 2 EARN </h3>
						</div>
						<div className="fugu-text-slider-data">
							<div className="fugu-text-slider-icon">
								<img src="/images/home/Polygon.png" alt="polygon" style={{paddingLeft: '100px'}}/>
							</div>
							<h3>LISTEN 2 EARN </h3>
						</div>
						<div className="fugu-text-slider-data">
							<div className="fugu-text-slider-icon">
								<img src="/images/home/Polygon.png" alt="polygon" style={{paddingLeft: '100px'}}/>
							</div>
							<h3>LISTEN 2 EARN </h3>
						</div>
						<div className="fugu-text-slider-data">
							<div className="fugu-text-slider-icon">
								<img src="/images/home/Polygon.png" alt="polygon" style={{paddingLeft: '100px'}}/>
							</div>
							<h3>LISTEN 2 EARN </h3>
						</div>
					
						
					</Slider>
				</div>
			</div>
		</div>
	);
}
