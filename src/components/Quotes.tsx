"use client";

import { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const quotes = [
  {
    text: "I am so proud of the work we've done in California. We are the model for the rest of the nation.",
    context: "On California's national influence",
    year: "2022",
  },
  {
    text: "We have among the lowest death rates in the country. We have among the highest vaccination rates.",
    context: "During COVID-19, shortly before California surpassed Florida in death rates",
    year: "2021",
  },
  {
    text: "I don't know what the definition of a small business is, but I know it's not 500 employees.",
    context: "On economic policy",
    year: "2020",
  },
  {
    text: "The future happens here first. We're America's coming attraction.",
    context: "On California as a trendsetter",
    year: "2019",
  },
  {
    text: "I want to make sure that we are not doing things that are going to exacerbate the problem.",
    context: "On the homeless crisis, after it worsened",
    year: "2023",
  },
  {
    text: "California is going to be the first state in the country to require vaccines for all healthcare workers.",
    context: "Announcing mandates that other states had already implemented",
    year: "2021",
  },
  {
    text: "I love this state. I love what we've built here. And I think the rest of the country could learn a lot from what we've accomplished.",
    context: "On his vision for America",
    year: "2023",
  },
  {
    text: "We have a 9% drop in unsheltered homelessness. We're making real progress.",
    context: "On homelessness statistics, from a historically high base",
    year: "2025",
  },
  {
    text: "The Trump administration interfered with my speaking slot at Davos.",
    context: "On his 2026 Davos controversy and alleged interference",
    year: "2026",
  },
];

export default function Quotes() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const nextQuote = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % quotes.length);
      setIsAnimating(false);
    }, 300);
  };

  const prevQuote = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + quotes.length) % quotes.length);
      setIsAnimating(false);
    }, 300);
  };

  // Auto-advance
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion || isPaused) return;

    const timer = setInterval(() => {
      // Logic from nextQuote
      if (!isAnimating) {
        setIsAnimating(true);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % quotes.length);
          setIsAnimating(false);
        }, 300);
      }
    }, 8000);

    return () => clearInterval(timer);
  }, [isPaused, isAnimating]); // Added dependencies

  const currentQuote = quotes[currentIndex];

  return (
    <section className="py-28 bg-[var(--cream)] relative overflow-hidden" aria-labelledby="quotes-heading">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-10 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-[var(--gold)]/10 blur-3xl" />
      </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-[var(--campaign-red)] font-semibold tracking-[0.3em] uppercase text-xs mb-4">
            Words to Remember
          </span>
          <h2 id="quotes-heading" className="font-[var(--font-merriweather)] text-4xl sm:text-5xl font-bold text-[var(--navy)] mb-6">
            In His Own Words
          </h2>
        </div>

        {/* Quote Card */}
        <div 
          className="relative bg-white rounded-[32px] shadow-[0_30px_60px_rgba(15,23,42,0.12)] p-8 sm:p-12 border border-[var(--gray-200)]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          {/* Quote Icon */}
          <div className="absolute -top-6 left-8 sm:left-12">
            <div className="w-12 h-12 bg-[var(--navy)] rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-[var(--gold)]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>
          </div>

          {/* Quote Content */}
          <div className={`transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`} aria-live="polite" aria-atomic="true">
            <blockquote className="text-2xl sm:text-3xl md:text-4xl font-[var(--font-merriweather)] text-[var(--navy)] leading-relaxed mb-8">
              &ldquo;{currentQuote.text}&rdquo;
            </blockquote>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <cite className="not-italic">
                  <span className="block text-[var(--campaign-red)] font-semibold">
                    Gavin Newsom
                  </span>
                  <span className="text-[var(--gray-500)] text-sm">
                    {currentQuote.context}, {currentQuote.year}
                  </span>
                </cite>
              </div>

              {/* Navigation */}
              <div className="flex items-center gap-3" role="group" aria-label="Quote navigation">
                <button
                  onClick={prevQuote}
                  className="p-3 rounded-full border border-[var(--gray-300)] hover:border-[var(--navy)] hover:bg-[var(--navy)] hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--navy)] focus:ring-offset-2"
                  aria-label="Previous quote"
                  aria-controls="quote-display"
                >
                  <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
                </button>
                <button
                  onClick={nextQuote}
                  className="p-3 rounded-full border border-[var(--gray-300)] hover:border-[var(--navy)] hover:bg-[var(--navy)] hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--navy)] focus:ring-offset-2"
                  aria-label="Next quote"
                  aria-controls="quote-display"
                >
                  <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          {/* Progress Dots */}
          <nav className="flex justify-center gap-2 mt-8" role="list" aria-label="Quote index">
            {quotes.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setTimeout(() => {
                      setCurrentIndex(index);
                      setIsAnimating(false);
                    }, 300);
                  }
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--navy)] focus:ring-offset-2 ${
                  index === currentIndex
                    ? "w-8 bg-[var(--navy)]"
                    : "bg-[var(--gray-300)] hover:bg-[var(--gray-400)]"
                }`}
                aria-label={`Go to quote ${index + 1}`}
                aria-current={index === currentIndex ? 'true' : 'false'}
                role="listitem"
              />
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
