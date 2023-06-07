import Head from "next/head";

import AppLinks from "../components/home-three/app-links";
import HeroSection from "../components/home-three/hero-section";
import HeroSectionThree from "../components/home-three/hero-sectionthree";
import HeroSectionTwo from "../components/home-three/hero-sectiontwo";
import TextSection from "../components/home-three/text-section";



export default function Home() {
	return (
		<>
			<Head>
				<title>Blacklion</title>
			</Head>
			<HeroSection />
			<HeroSectionTwo/>
			<HeroSectionThree/>
			<AppLinks/>
			<TextSection/>
			
		</>
	);
}

export async function getStaticProps() {
	return { props: { header: "three", footer: "two" } };
}
