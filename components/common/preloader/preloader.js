import { useEffect, useState } from "react";

export default function Preloader() {
	const [showLoader, setShowLoader] = useState(true);
	const [isLoded, setIsLoded] = useState(null);

	useEffect(() => {
		window.addEventListener("load", () => {
			setIsLoded("loaded");
		});

		const timer = setTimeout(() => {
			setShowLoader(false);
		}, 700);

		return () => clearTimeout(timer);
	});
	return (
		showLoader && (
			<div className={`BL-preloader ${isLoded}`}>
				<div className="text-center"><img src="/images/logo/Logo.png" alt="logo" /></div>
				{/* <div className="BL-spinner">
					<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
						<circle cx="50" cy="50" r="46" />
					</svg>
				</div> */}
				<div className="BL-title">loading...</div>
			</div>
		)
	);
}
