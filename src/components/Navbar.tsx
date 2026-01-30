"use client";

import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navLinks = [
  { name: "Issues", href: "#issues" },
  { name: "Record", href: "#record" },
  { name: "About", href: "#about" },
  { name: "Join", href: "#join" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[var(--gray-200)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[var(--navy)] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-[var(--navy)] font-bold text-xl tracking-tight">
                NEWSOM
              </span>
              <span className="text-[var(--gold)] font-bold text-xl">2028</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[var(--gray-700)] hover:text-[var(--navy)] font-medium transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#donate"
              className="bg-[var(--campaign-red)] hover:bg-[var(--red-dark)] text-white px-6 py-2 rounded-full font-semibold transition-all duration-200 hover:shadow-lg"
            >
              Donate
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 text-[var(--gray-700)]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-[var(--gray-200)]">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-[var(--gray-700)] hover:text-[var(--navy)] font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#donate"
              className="block bg-[var(--campaign-red)] text-white px-6 py-3 rounded-full font-semibold text-center mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Donate
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
