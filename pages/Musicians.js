import Head from "next/head";
import TextSliderMusicians from "../components/common/sliders/text/text-slider-musicians";
import MusicianCardSlider from "../components/musicians/card-slider";
import MusicianDataInsight from "../components/musicians/hero-music-card";
import MusiciansHeroSection from "../components/musicians/hero-section";
import HeroSectionTwoMusicians from "../components/musicians/hero-section-2";
import HeroSectionFourMusicians from "../components/musicians/hero-section-4";

export default function Musicians() {
  return (
    <>
      <Head>
        <title>Blacklion - Musicians</title>
      </Head>
      <MusiciansHeroSection />
      <TextSliderMusicians />
      <HeroSectionTwoMusicians />
      <MusicianCardSlider />
      <MusicianDataInsight />
      <HeroSectionFourMusicians />
    </>
  );
}

export async function getStaticProps() {
  return { props: { header: "three", footer: "three" } };
}
