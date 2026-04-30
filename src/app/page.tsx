import TopNavBar from "@/components/TopNavBar";
import SideNavBar from "@/components/SideNavBar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <TopNavBar />
      <SideNavBar />
      <main className="min-h-screen grid-pattern pt-20 lg:pl-20 bg-background relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
