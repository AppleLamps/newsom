import ErrorBoundary from "@/components/ErrorBoundary";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Issues from "@/components/Issues";
import dynamic from 'next/dynamic';

// Lazy load below-fold components for better performance
const Record = dynamic(() => import("@/components/Record"), {
  loading: () => (
    <section className="py-24 bg-[var(--navy)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 animate-pulse">
              <div className="h-20 bg-white/10 rounded-lg mb-4"></div>
              <div className="h-6 bg-white/10 rounded mb-2"></div>
              <div className="h-4 bg-white/10 rounded mb-2 w-3/4"></div>
              <div className="h-4 bg-white/10 rounded w-2/3"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  ),
});

const Quotes = dynamic(() => import("@/components/Quotes"), {
  loading: () => (
    <section className="py-24 bg-[var(--cream)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 border border-[var(--gray-200)] animate-pulse">
          <div className="h-48 bg-[var(--gray-200)] rounded-lg mb-8"></div>
          <div className="h-24 bg-[var(--gray-200)] rounded-lg"></div>
        </div>
      </div>
    </section>
  ),
});

const About = dynamic(() => import("@/components/About"), {
  loading: () => (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-4">
            <div className="h-12 bg-[var(--gray-200)] rounded animate-pulse w-1/3"></div>
            <div className="h-16 bg-[var(--gray-200)] rounded animate-pulse"></div>
            <div className="h-4 bg-[var(--gray-200)] rounded animate-pulse"></div>
            <div className="h-4 bg-[var(--gray-200)] rounded animate-pulse"></div>
            <div className="h-4 bg-[var(--gray-200)] rounded animate-pulse"></div>
          </div>
          <div>
            <div className="h-6 bg-[var(--gray-200)] rounded animate-pulse mb-8"></div>
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex gap-4 mb-6">
                <div className="w-12 h-12 bg-[var(--gray-200)] rounded-full animate-pulse"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-[var(--gray-200)] rounded animate-pulse w-1/4"></div>
                  <div className="h-4 bg-[var(--gray-200)] rounded animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  ),
});

const CTA = dynamic(() => import("@/components/CTA"), {
  loading: () => (
    <section className="py-24 bg-[var(--navy)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-4 mb-12">
          <div className="h-8 bg-white/10 rounded animate-pulse w-1/4 mx-auto"></div>
          <div className="h-16 bg-white/10 rounded animate-pulse w-2/3 mx-auto"></div>
          <div className="h-6 bg-white/10 rounded animate-pulse w-3/4 mx-auto"></div>
        </div>
        <div className="h-16 bg-white/10 rounded animate-pulse max-w-md mx-auto"></div>
      </div>
    </section>
  ),
});

const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => (
    <footer className="bg-[var(--navy-dark)] text-white py-12 border-t border-white/10 animate-pulse">
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-32 bg-white/5 rounded"></div>
      </div>
    </footer>
  ),
});

export default function Home() {
  return (
    <ErrorBoundary>
      <main id="main-content" className="min-h-screen" role="main">
        <Navbar />
        <Hero />
        <Issues />
        <Record />
        <Quotes />
        <About />
        <CTA />
        <Footer />
      </main>
    </ErrorBoundary>
  );
}
