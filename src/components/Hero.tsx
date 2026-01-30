"use client";

import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--navy)] via-[var(--navy-light)] to-[var(--navy-dark)]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent opacity-50" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent opacity-50" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-white/20">
          <span className="w-2 h-2 bg-[var(--gold)] rounded-full animate-pulse" />
          <span className="text-white/90 text-sm font-medium tracking-wide uppercase">
            Campaign 2028
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-[var(--font-merriweather)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-6">
          A New California
          <span className="block text-[var(--gold)]">For America</span>
        </h1>

        {/* Subheadline - Satirical undertone */}
        <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto mb-4 font-light">
          Bringing the Golden State's proven leadership to the White House.
        </p>
        <p className="text-lg text-white/60 max-w-2xl mx-auto mb-12 italic">
          &ldquo;What worked for Sacramento will work for Washington.&rdquo;
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#join"
            className="group flex items-center gap-2 bg-[var(--gold)] hover:bg-[var(--gold-light)] text-[var(--navy-dark)] px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            Join the Movement
            <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#issues"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 border border-white/30"
          >
            See the Vision
          </a>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { number: "16", label: "Years in Office" },
            { number: "$32B", label: "Fraud Lost" },
            { number: "#1", label: "Homeless Rate" },
            { number: "216K", label: "Left in 2025" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
            >
              <div className="text-3xl sm:text-4xl font-bold text-[var(--gold)] mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-white/60 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
