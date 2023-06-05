import Head from "next/head";
import OrganisastionsHeroSection from "../components/organizations/hero-section-1";
import TextSectionOrg from "../components/organizations/text-section-org";
import SocialSection from "../components/home-three/social-section";
import OrganisationsHeroSectionTwo from "../components/organizations/hero-section-2";
import OrganisationsHeroSectionThree from "../components/organizations/hero-section-3";
import HeroSectionSteps from "../components/home-three/hero-section-steps";
import CreativeCTA from "../components/creatives/call-to-action";
import OrganizationsCTA from "../components/organizations/bottom-cta";

export default function Organizations() {
  return (
    <>
      <Head>
        <title>Blacklion - Organisations</title>
      </Head>
      <OrganisastionsHeroSection />
      <TextSectionOrg />
      <OrganisationsHeroSectionTwo />
      <HeroSectionSteps backgroundColor="#13111a" />
      <OrganisationsHeroSectionThree />
      <SocialSection />
      <OrganizationsCTA />
      
    </>
  );
}

export async function getStaticProps() {
  return { props: { header: "three", footer: "three" } };
}
