import Head from "next/head";
import OrganisastionsHeroSection from "../components/organizations/hero-section-1";
import TextSectionOrg from "../components/organizations/text-section-org";
import SocialSection from "../components/home-three/social-section";
import OrganisationsHeroSectionTwo from "../components/organizations/hero-section-2";
import OrganisationsHeroSectionThree from "../components/organizations/hero-section-3";

export default function Organizations() {
  return (
    <>
      <Head>
        <title>Blacklion - Organisations</title>
      </Head>
      <OrganisastionsHeroSection />
      <TextSectionOrg />
	  <SocialSection/>
	  <OrganisationsHeroSectionTwo/>
	  <OrganisationsHeroSectionThree/>
    </>
  );
}

export async function getStaticProps() {
  return { props: { header: "three", footer: "three" } };
}
