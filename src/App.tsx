import Navbar from "./components/navbar";
import Hero from "./components/hero";
import FeaturesCards from "./components/features";
import VideoDemo from "./components/video";

export default function LandingPage() {
  return (
     <div className="font-sans">
        <Navbar />
        <Hero />
        <FeaturesCards />
        <VideoDemo />
     </div>
  )
}

