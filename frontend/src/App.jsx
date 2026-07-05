import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DashboardPreview from "./components/DashboardPreview";
import Features from "./components/Features";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return(
  <div className="min-h-screen bg-[#050816] text-white overflow-x-hidden">
    <Navbar />
    <Hero />
    <DashboardPreview />
    <Features />
    <CTA />
    <Footer />
  </div>
  );
}

export default App;