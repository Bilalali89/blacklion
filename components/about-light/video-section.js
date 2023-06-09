/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import { useState } from "react";
const ModalVideo = dynamic(() => import("react-modal-video"), { ssr: false });

export default function VideoSection() {
	const [isOpen, setOpen] = useState(false);
	return (
		<div className="BL--video-section3 BL--section-padding">
			<div className="container">
				<div className="BL--video-wrap">
					<div className="BL--video-column">
						<div className="BL--video-thumb wow fadeInUpX" data-wow-delay=".10s">
							<img src="/images/all-img/about2/video-thumb2.png" alt="" />
						</div>
						<div className="BL--video-thumb wow fadeInUpX" data-wow-delay=".20s">
							<img src="/images/all-img/about2/video-thumb3.png" alt="" />
						</div>
					</div>
					<div className="BL--popup" onClick={() => setOpen(true)}>
						<img src="/images/all-img/about2/play-button-orange.png" alt="" />
						<div className="BL--play-btn">
							<img src="/images/all-img/about2/play.png" alt="" />
						</div>
					</div>
				</div>
			</div>
			<ModalVideo
				channel="youtube"
				autoplay
				isOpen={isOpen}
				videoId="E1xkXZs0cAQ"
				onClose={() => setOpen(false)}
			/>
		</div>
	);
}
