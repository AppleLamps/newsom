import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Issues from "@/components/Issues";
import Record from "@/components/Record";
import Quotes from "@/components/Quotes";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Issues />
      <Record />
      <Quotes />
      <About />
      <CTA />
      <Footer />
    </main>
  );
}
