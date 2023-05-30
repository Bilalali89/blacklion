import Head from "next/head";
import CreaetivesHeroSection from "../components/creatives/hero-section-1";
import SocialSection from "../components/home-three/social-section";
import TextSectionOrg from "../components/organizations/text-section-org";
import TextSectionCreatives from "../components/creatives/text-section-creatives";
import HeroSectionThreeMusician from "../components/musicians/hero-section-3";
import HeroSectionTwoCreative from "../components/creatives/hero-section-2";
import HeroSectionThreeCreative from "../components/creatives/hero-section-3";
import CreativeCTA from "../components/creatives/call-to-action";


export default function Creatives() {
	return (
		<>
			<Head>
				<title>Blacklion - Creatives</title>
			</Head>
			<CreaetivesHeroSection />
			<TextSectionCreatives />
			<SocialSection/>
			<HeroSectionTwoCreative />
			<HeroSectionThreeCreative />
			

			
			
		</>
	);
}

export async function getStaticProps() {
	return { props: { header: "three", footer: "three" } };
}
