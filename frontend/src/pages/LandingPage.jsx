import { useEffect, useState } from "react";
import Loader from "@/components/landing/Loader";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Performance from "@/components/landing/Performance";
import Gallery from "@/components/landing/Gallery";
import Specifications from "@/components/landing/Specifications";
import Testimonials from "@/components/landing/Testimonials";
import Pricing from "@/components/landing/Pricing";
import Footer from "@/components/landing/Footer";

export default function LandingPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [loading]);

  return (
    <div data-testid="landing-root" className="relative bg-black text-white min-h-screen">
      <Loader show={loading} />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Performance />
        <Gallery />
        <Specifications />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
