/* eslint-disable @next/next/no-img-element */
import Slider from "react-slick";
export default function TextSliderOne(props) {
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

	let {backgroundColor} = props
	return (
		<div className="BL-text-slider-section" id="homeslide" style={{backgroundColor: `${backgroundColor}`}}>
			
			<div className="BL-text-slider-area2">
				<div className="BL-text-slider2" dir="rtl">
					<Slider {...settingsTwo}>
						<div className="BL-text-slider-data">
							<div className="BL-text-slider-icon">
								<img src="/images/home/Polygon.png" alt="polygon" style={{paddingLeft: '100px'}} />
							</div>
							<h3>UNLOCKING VALUE </h3>
						</div>
						
						<div className="BL-text-slider-data">
							<div className="BL-text-slider-icon">
								<img src="/images/home/Polygon.png" alt="polygon" style={{paddingLeft: '100px'}}/>
							</div>
							<h3>UNLOCKING VALUE </h3>
						</div>
						<div className="BL-text-slider-data">
							<div className="BL-text-slider-icon">
								<img src="/images/home/Polygon.png" alt="polygon" style={{paddingLeft: '100px'}}/>
							</div>
							<h3>UNLOCKING VALUE </h3>
						</div>
						<div className="BL-text-slider-data">
							<div className="BL-text-slider-icon">
								<img src="/images/home/Polygon.png" alt="polygon" style={{paddingLeft: '100px'}}/>
							</div>
							<h3>UNLOCKING VALUE </h3>
						</div>
						<div className="BL-text-slider-data">
							<div className="BL-text-slider-icon">
								<img src="/images/home/Polygon.png" alt="polygon" style={{paddingLeft: '100px'}}/>
							</div>
							<h3>UNLOCKING VALUE </h3>
						</div>
					
						
					</Slider>
				</div>
			</div>
		</div>
	);
}
