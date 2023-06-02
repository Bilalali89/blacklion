import Head from "next/head";
import MusiciansHeroSection from "../components/musicians/hero-section";
import TextSliderMusicians from "../components/common/sliders/text/text-slider-musicians";
import HeroSectionTwoMusicians from "../components/musicians/hero-section-2";
import SocialSection from "../components/home-three/social-section";
import HeroSectionThree from "../components/home-three/hero-sectionthree";
import HeroSectionThreeMusician from "../components/musicians/hero-section-3";
import HeroSectionFourMusicians from "../components/musicians/hero-section-4";
import MusicianDataInsight from "../components/musicians/hero-music-card";
import MusicianCardSlider from "../components/musicians/card-slider";

export default function Musicians() {
	return (
		<>
			<Head>
				<title>Blacklion - Musicians</title>
			</Head>
            <MusiciansHeroSection />          
            <TextSliderMusicians/>
            <HeroSectionTwoMusicians />	
			<MusicianCardSlider />
			<MusicianDataInsight />
            {/* <HeroSectionThreeMusician /> */}
            {/* <SocialSection/> */}
			<HeroSectionFourMusicians />
			
		</>
	);
}

export async function getStaticProps() {
	return { props: { header: "three", footer: "three" } };
}
