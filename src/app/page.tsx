import { EducationSection } from "@/containers/EducationSection/EducationSection";
import { PortfolioSection } from "@/containers/PortfolioSection/PortfolioSection";
import { AwardsSection } from "@/containers/AwardsSection/AwardsSection";
import { HeroSection } from "@/containers/HeroSection/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <main className="w-full max-w-screen-lg my-5 px-4 md:mx-auto md:px-0">
        <div className="grid grid-rows-2 pb-20 md:grid-rows-1 md:grid-cols-2 gap-6">
          <EducationSection />
          <AwardsSection />
        </div>
        <PortfolioSection />
      </main>
      <footer className="w-full bg-blue">
        <p className="py-6 text-center">Built with 💜 by Mateus Bezerra</p>
      </footer>
    </>
  );
}
