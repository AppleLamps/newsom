"use client";

import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[var(--navy-dark)] text-white" aria-labelledby="hero-heading">
      {/* Background - Atmospheric Gradient */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[var(--navy-light)] via-[var(--navy-dark)] to-black opacity-90" />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(15,23,42,0.8),rgba(2,6,23,0.9))]" aria-hidden="true" />

      {/* Subtle Animated Grain/Noise (Simulated with CSS) */}
      <div className="absolute inset-0 z-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 flex flex-col gap-8 items-center text-center lg:text-left lg:items-start">

        {/* Presidential Eyebrow */}
        <span className="mb-4 inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/10 border border-white/15 text-[var(--gold)] text-xs font-bold tracking-[0.4em] uppercase animate-fade-in-up">
          The 2028 Campaign
        </span>

        {/* Main Headline - High visual impact */}
        <h1 id="hero-heading" className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] animate-fade-in-up animate-delay-100">
          <span className="block text-white">A New</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--gold)] via-[var(--gold-light)] to-[var(--gold)]">California</span>
        </h1>

        {/* Subheadline */}
        <p className="max-w-2xl text-lg md:text-xl text-white/70 font-light leading-relaxed animate-fade-in-up animate-delay-200">
          Bringing the Golden State’s progressive vision to a nation in need of bold, decisive leadership. The future starts West.
        </p>

        {/* Minimalist CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start animate-fade-in-up animate-delay-300">
          <a
            href="#join"
            className="group relative px-8 py-4 bg-[var(--white)] text-[var(--navy-dark)] font-semibold text-xs tracking-[0.3em] uppercase overflow-hidden transition-all hover:bg-[var(--gold)] hover:text-white shadow-[0_20px_40px_rgba(15,23,42,0.25)]"
          >
            <span className="relative z-10">Join the Movement</span>
          </a>
          <a
            href="#vision"
            className="group flex items-center gap-3 text-white/70 hover:text-white transition-colors text-xs tracking-[0.3em] uppercase"
          >
            <span>Explore The Vision</span>
            <span className="block w-8 h-[1px] bg-white/30 group-hover:bg-white transition-colors" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-pulse opacity-60">
        <span className="text-[10px] tracking-widest uppercase text-white/60">Scroll</span>
        <ChevronDownIcon className="w-4 h-4 text-white/60" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-[var(--navy-dark)] to-transparent opacity-80 z-20" />
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[var(--background)] to-transparent z-20" />
    </section>
  );
}
