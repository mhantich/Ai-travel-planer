import Hero from "@/components/Hero";
import LogoSection from "@/components/LogoSection";
import PopularTrips from "@/components/PopularTrips";
import Testimonials from "@/components/Testimonials";
import TravelPlanner from "@/components/TravelPlanner";

export default function Home() {
  return (
    <div>
      <Hero />
      <PopularTrips />
      <TravelPlanner />
      <Testimonials />
      <LogoSection />
    </div>
  );
}
