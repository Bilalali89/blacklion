/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import { useState } from "react";
const ModalVideo = dynamic(() => import("react-modal-video"), { ssr: false });

export default function VideoSectionOne({ marginBottom }) {
	const [isOpen, setOpen] = useState(false);
	return (
		<div className="section BL-team-page" style={{ marginBottom: marginBottom ? "100px" : null }}>
			<div className="container">
				<div className="BL-section-title max-w-full">
					<h2>We are a team of talented people</h2>
				</div>
				<div className="BL-video-thumb BL-video-thumb3 wow fadeInUpX" data-wow-delay=".10s">
					<img src="/images/all-img/about/video-thumb2.png" alt="" />
					<div className="BL-popup">
						<img src="/images/all-img/video-btn.png" alt="" />
						<div className="BL-play-btn" onClick={() => setOpen(true)}>
							<img src="/images/all-img/play-btn.png" alt="" />
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
