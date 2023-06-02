import Head from "next/head";
import dynamic from "next/dynamic";
import TextSliderOne from "../components/common/sliders/text/text-slider-one";
import CardSliderOne from "../components/common/sliders/card/card-slider-one";
import TextSliderTwo from "../components/common/sliders/text/text-slider-two";
import HeroSection from "../components/home-three/hero-section";
import HeroSectionTwo from "../components/home-three/hero-sectiontwo";
import NewsLetter from "../components/home-three/news-letter";
import NftRoadMap from "../components/home-three/nft-roadmap";
import Team from "../components/home-three/Team";
import SocialSection from "../components/home-three/social-section";
import HeroSectionThree from "../components/home-three/hero-sectionthree";
import TextSection from "../components/home-three/text-section";
import AppLinks from "../components/home-three/app-links";
import OrganisationsHeroSectionTwo from "../components/organizations/hero-section-2";
import HeroSectionSteps from "../components/home-three/hero-section-steps";


export default function Home() {
	return (
		<>
			<Head>
				<title>Blacklion</title>
			</Head>
			<HeroSection />
			<TextSliderOne />
			<HeroSectionTwo/>
			<HeroSectionSteps/>
			{/* <SocialSection/> */}
			<HeroSectionThree/>
			<AppLinks/>
			<TextSection/>
			
		</>
	);
}

export async function getStaticProps() {
	return { props: { header: "three", footer: "two" } };
}
