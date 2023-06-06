import Head from "next/head";
import InvestorsHeroSection from "../components/Investors/hero-section-1";
import SocialSection from "../components/home-three/social-section";


export default function Investors() {
	return (
		<>
			<Head>
				<title>Blacklion - Investors</title>
			</Head>	
			<InvestorsHeroSection />
			<SocialSection />	
		</>
	);
}

export async function getStaticProps() {
	return { props: { header: "three", footer: "three" } };
}
