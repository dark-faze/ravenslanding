import Navbar from "./components/navbar";
import Hero from "./components/hero";
import FeaturesCards from "./components/features";
import VideoDemo from "./components/video";
import PricingComponent from "./components/pricing";

export default function LandingPage() {
  return (
     <div className="font-sans">
        <Navbar />
        <Hero />
        <FeaturesCards />
        <VideoDemo />
        <PricingComponent />
     </div>
  )
}

