"use client";

import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden bg-[var(--navy-dark)] text-white" aria-labelledby="hero-heading">
      {/* Background - Atmospheric Gradient */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[var(--navy-light)] via-[var(--navy-dark)] to-black opacity-80" />

      {/* Subtle Animated Grain/Noise (Simulated with CSS) */}
      <div className="absolute inset-0 z-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center text-center">

        {/* Presidential Eyebrow */}
        <span className="mb-6 inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-[var(--gold)] text-xs font-bold tracking-[0.2em] uppercase animate-fade-in-up">
          The 2028 Campaign
        </span>

        {/* Main Headline - High visual impact */}
        <h1 id="hero-heading" className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] mb-8 animate-fade-in-up animate-delay-100">
          <span className="block text-white">A New</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)]">California</span>
        </h1>

        {/* Subheadline */}
        <p className="max-w-2xl text-lg md:text-xl text-[var(--gray-300)] font-light leading-relaxed mb-12 animate-fade-in-up animate-delay-200">
          Bringing the Golden State’s progressive vision to a nation in need of bold, decisive leadership. The future starts West.
        </p>

        {/* Minimalist CTAs */}
        <div className="flex flex-col sm:flex-row gap-6 items-center animate-fade-in-up animate-delay-300">
          <a
            href="#join"
            className="group relative px-8 py-4 bg-[var(--white)] text-[var(--navy-dark)] font-medium text-sm tracking-widest uppercase overflow-hidden transition-all hover:bg-[var(--gold)]"
          >
            <span className="relative z-10">Join the Movement</span>
          </a>
          <a
            href="#vision"
            className="group flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm tracking-widest uppercase"
          >
            <span>Explore The Vision</span>
            <span className="block w-8 h-[1px] bg-white/30 group-hover:bg-white transition-colors" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-pulse opacity-50">
        <span className="text-[10px] tracking-widest uppercase text-white/60">Scroll</span>
        <ChevronDownIcon className="w-4 h-4 text-white/60" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-[var(--navy-dark)] to-transparent opacity-80 z-20" />
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[var(--background)] to-transparent z-20" />
    </section>
  );
}
