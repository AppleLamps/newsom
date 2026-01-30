"use client";

import { useEffect, useRef, useState } from "react";

const achievements = [
  {
    number: 500,
    suffix: "B+",
    label: "State Debt",
    description: "California's outstanding debt obligations",
    context: "That's $12,500 per resident",
  },
  {
    number: 187000,
    suffix: "",
    label: "Unhoused Residents",
    description: "Highest homeless population in the nation (2024)",
    context: "23% increase since 2019 despite billions spent",
  },
  {
    number: 32,
    suffix: "B",
    label: "Lost to Fraud",
    description: "EDD unemployment fraud during pandemic",
    context: "Weak verification systems, still unfixed",
  },
  {
    number: 216000,
    suffix: "",
    label: "Residents Left (2025)",
    description: "Net out-migration leading the nation",
    context: "California led US in population exodus",
  },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    if (prefersReducedMotion) {
      // Use setTimeout to avoid synchronous state update warning
      const t = setTimeout(() => setCount(target), 0);
      return () => clearTimeout(t);
    }

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, target, prefersReducedMotion]);

  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(0) + "M";
    if (num >= 1000) return (num / 1000).toFixed(num >= 10000 ? 0 : 1) + "K";
    return num.toString();
  };

  const finalValue = formatNumber(target) + suffix;
  const currentValue = formatNumber(count) + suffix;

  return (
    <span ref={ref}>
      <span className="sr-only">{finalValue}</span>
      <span aria-hidden="true">{currentValue}</span>
    </span>
  );
}

export default function Record() {
  return (
    <section id="record" className="py-28 bg-[var(--navy-dark)] relative overflow-hidden" aria-labelledby="record-heading">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }} />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(217,119,6,0.15),transparent_55%)]" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-[var(--gold)] font-semibold tracking-[0.3em] uppercase text-xs mb-4">
            The Results
          </span>
          <h2 id="record-heading" className="font-[var(--font-merriweather)] text-4xl sm:text-5xl font-bold text-white mb-6">
            California by the Numbers
          </h2>
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto">
            Under Governor Newsom's leadership, California has achieved remarkable statistics. 
            These are the numbers that define his legacy.
          </p>
        </div>

        {/* Stats Grid */}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" role="list">
          {achievements.map((item, index) => (
            <li
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-[var(--gold)]/50 transition-all duration-300 hover:bg-white/10 shadow-[0_20px_40px_rgba(2,6,23,0.35)]"
            >
              <div className="text-5xl sm:text-6xl font-black text-[var(--gold)] mb-4">
                <AnimatedCounter target={item.number} suffix={item.suffix} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {item.label}
              </h3>
              <p className="text-white/70 mb-3">
                {item.description.replace(/'/g, "&apos;")}
              </p>
              <p className="text-sm text-[var(--gold)]/80 italic">
                {item.context.replace(/'/g, "&apos;")}
              </p>
            </li>
          ))}
        </ul>

        {/* Quote */}
        <div className="mt-16 text-center">
          <blockquote className="text-2xl sm:text-3xl text-white/90 italic max-w-4xl mx-auto leading-relaxed">
            &ldquo;I love this state. I love what we&apos;ve built here. And I think the rest of the country could learn a lot from what we&apos;ve accomplished.&rdquo;
          </blockquote>
          <cite className="block mt-4 text-[var(--gold)] font-semibold not-italic">
            — Gavin Newsom, 2023
          </cite>
        </div>
      </div>
    </section>
  );
}
