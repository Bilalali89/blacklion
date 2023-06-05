import Head from "next/head";
import dynamic from "next/dynamic";
import TextSliderOne from "../components/common/sliders/text/text-slider-one";

import HeroSection from "../components/home-three/hero-section";
import HeroSectionTwo from "../components/home-three/hero-sectiontwo";
import SocialSection from "../components/home-three/social-section";
import HeroSectionThree from "../components/home-three/hero-sectionthree";
import TextSection from "../components/home-three/text-section";
import AppLinks from "../components/home-three/app-links";
import OrganisationsHeroSectionTwo from "../components/organizations/hero-section-2";



export default function Home() {
	return (
		<>
			<Head>
				<title>Blacklion</title>
			</Head>
			<HeroSection />
			<TextSliderOne />
			<HeroSectionTwo/>
			
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
