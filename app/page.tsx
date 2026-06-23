import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturesBar from "./components/FeaturesBar";
import AboutSection from "./components/AboutSection";
import ExperienciasSection from "./components/ExperienciasSection";
import DelegacionesSection from "./components/DelegacionesSection";
import EventosSection from "./components/EventosSection";
import PatrocinadoresSection from "./components/PatrocinadoresSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FeaturesBar />
      <AboutSection />
      <ExperienciasSection />
      <DelegacionesSection />
      <EventosSection />
      <PatrocinadoresSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
