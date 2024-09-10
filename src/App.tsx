import Navbar from "./components/navbar";
import Hero from "./components/hero";
import FeaturesCards from "./components/features";

export default function LandingPage() {
  return (
     <div className="font-sans">
        <Navbar />
        <Hero />
        <FeaturesCards />
     </div>
  )
}

