import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Services } from "./components/Services";
import { WhyZing } from "./components/WhyZing";
import { SplitFeature } from "./components/SplitFeature";
import { Testimonials } from "./components/Testimonials";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ scrollBehavior: "smooth" }}>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Services />
      <SplitFeature />
      <WhyZing />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
}
