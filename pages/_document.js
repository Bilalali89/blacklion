import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html>
			<Head>
				<link rel="icon" href="/images/favicon.ico" />
				<script src="https://cdn.jsdelivr.net/npm/gsap@3.12/dist/gsap.min.js"></script>

			
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
