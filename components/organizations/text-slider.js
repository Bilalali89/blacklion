/* eslint-disable @next/next/no-img-element */
import Slider from "react-slick";
export default function TextSliderOrg() {
	const settingsOne = {
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
		<div className="fugu-text-slider-section" id="homeslide" style={{background:'transparent'}}>
			<div className="fugu-text-slider-area1" style={{transform: 'rotate(-3.5deg) translateY(89px)'}} >
				<div className="fugu-text-slider1">
					<Slider {...settingsOne}>
						<div className="fugu-text-slider-data" >
							<div className="fugu-text-slider-icon">
								<img src="/images/home/Polygon.png" alt="polygon" />
							</div>
							<h3>UNLOCKING VALUE </h3>
						</div>
						<div className="fugu-text-slider-data">
							<div className="fugu-text-slider-icon">
								<img src="/images/home/Polygon.png" alt="polygon" />
							</div>
							<h3>UNLOCKING VALUE  </h3>
						</div>
                        <div className="fugu-text-slider-data">
							<div className="fugu-text-slider-icon">
								<img src="/images/home/Polygon.png" alt="polygon" />
							</div>
							<h3>UNLOCKING VALUE  </h3>
						</div>
                        <div className="fugu-text-slider-data">
							<div className="fugu-text-slider-icon">
								<img src="/images/home/Polygon.png" alt="polygon" />
							</div>
							<h3>UNLOCKING VALUE  </h3>
						</div>
                        <div className="fugu-text-slider-data">
							<div className="fugu-text-slider-icon">
								<img src="/images/home/Polygon.png" alt="polygon" />
							</div>
							<h3>UNLOCKING VALUE  </h3>
						</div>
                        <div className="fugu-text-slider-data">
							<div className="fugu-text-slider-icon">
								<img src="/images/home/Polygon.png" alt="polygon" />
							</div>
							<h3>UNLOCKING VALUE  </h3>
						</div>
                      
						
					</Slider>
				</div>
			</div>
			<div className="fugu-text-slider-area2" style={{background: '#BAFC55', marginTop: '-44px'}}>
				<div className="fugu-text-slider2" dir="rtl" >
					<Slider {...settingsTwo}>
						<div className="fugu-text-slider-data streamline">
							<div className="fugu-text-slider-icon">
								<img src="/images/home/Polygon.png" alt="polygon"  />
							</div>
							<h3>STREAMLINE OPERATIONS</h3>
						</div>
						
						<div className="fugu-text-slider-data streamline">
							<div className="fugu-text-slider-icon">
								<img src="/images/home/Polygon.png" alt="polygon"/>
							</div>
							<h3>STREAMLINE OPERATIONS</h3>
						</div>
						<div className="fugu-text-slider-data streamline">
							<div className="fugu-text-slider-icon">
								<img src="/images/home/Polygon.png" alt="polygon"/>
							</div>
							<h3>STREAMLINE OPERATIONS</h3>
						</div>
                        <div className="fugu-text-slider-data streamline">
							<div className="fugu-text-slider-icon">
								<img src="/images/home/Polygon.png" alt="polygon" />
							</div>
							<h3>STREAMLINE OPERATIONS</h3>
						</div>
                        <div className="fugu-text-slider-data streamline">
							<div className="fugu-text-slider-icon">
								<img src="/images/home/Polygon.png" alt="polygon"/>
							</div>
							<h3>STREAMLINE OPERATIONS</h3>
						</div>
						
						
					
						
					</Slider>
				</div>
			</div>
		</div>
	);
}
