import AboutUsPage from "@/components/Aboutus";
import FullImageSection from "@/components/FullImage";
import HeroSection from "@/components/HeroSection";
import OurPartnersPage from "@/components/Ourpartners";
import ServicesSection from "@/components/Services";
import WhyChooseUsSection from "@/components/WhyNeda";

export default function Home({ sectionRef, toggleMenu }) {
  return (
    <>
      <HeroSection sectionRef={sectionRef} toggleMenu={toggleMenu} />
      <AboutUsPage />
      <ServicesSection />
      {/* <OurPartnersPage /> */}
      <FullImageSection />
      <WhyChooseUsSection />
    </>
  );
}
