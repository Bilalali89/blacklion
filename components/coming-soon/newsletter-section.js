export default function NewsletterSection() {
	return (
		<div className="BL-newsletter">
			<input type="email" placeholder="Enter your email" />
			<button type="submit" id="BL-submit-btn">
				Get Notified
			</button>
			<p>We do not share your information with any third party & no spam</p>
		</div>
	);
}
