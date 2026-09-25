import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Reviews from "./components/Reviews";
import Appointment from "./components/Appointment";
import Location from "./components/Location";
import Instagram from "./components/Instagram";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-bone font-body">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Reviews />
        <Appointment />
        <Location />
        <Instagram />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
