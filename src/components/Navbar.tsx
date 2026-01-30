"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navLinks = [
  { name: "Priorities", href: "#issues" },
  { name: "Record", href: "#record" },
  { name: "About", href: "#about" },
  { name: "Join Us", href: "#join" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [mobileMenuOpen]);

  // Focus trap for mobile menu
  const handleKeyDown = useCallback((event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'Tab') return;

    if (!menuRef.current) return;

    const focusableElements = menuRef.current.querySelectorAll(
      'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled])'
    ) as NodeListOf<HTMLElement>;

    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement.focus();
        event.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement.focus();
        event.preventDefault();
      }
    }
  }, []);

  // Focus first menu item when menu opens
  useEffect(() => {
    if (mobileMenuOpen && menuRef.current) {
      const firstLink = menuRef.current.querySelector('a') as HTMLElement;
      firstLink?.focus();
    }
  }, [mobileMenuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-6"
        }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="group flex items-center gap-3 focus:outline-none" aria-label="Newsom 2028 Campaign Home">
            <div className={`transition-all duration-300 ${scrolled ? "text-[var(--navy)]" : "text-white"}`}>
              <span className="font-serif font-black text-2xl tracking-tighter">
                NEWSOM
              </span>
              <span className={`ml-1 text-xs font-bold tracking-[0.3em] uppercase ${scrolled ? "text-[var(--gold)]" : "text-[var(--gold)]"}`}>
                2028
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8" role="menubar">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm tracking-widest uppercase font-medium transition-colors duration-300 hover:text-[var(--gold)] ${scrolled ? "text-[var(--navy-light)]" : "text-white/90"
                  }`}
                role="menuitem"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#donate"
              className={`px-6 py-2 rounded-sm text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:shadow-lg ${scrolled
                  ? "bg-[var(--navy)] text-white hover:bg-[var(--navy-light)]"
                  : "bg-[var(--white)] text-[var(--navy)] hover:bg-[var(--gold)] hover:text-white"
                }`}
            >
              Donate
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            ref={menuButtonRef}
            className={`md:hidden p-2 rounded-sm ${scrolled ? "text-[var(--navy)]" : "text-white"}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-controls="mobile-menu"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-[var(--navy)] transition-transform duration-300 ease-in-out transform ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
      >
        <div className="flex justify-end p-6">
          <button
            type="button"
            className="text-white p-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            <XMarkIcon className="h-8 w-8" aria-hidden="true" />
          </button>
        </div>

        <div
          ref={menuRef}
          id="mobile-menu"
          className="flex flex-col items-center justify-center h-[80vh] space-y-8"
          onKeyDown={handleKeyDown}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-3xl font-serif font-bold text-white hover:text-[var(--gold)] transition-colors"
              role="menuitem"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#donate"
            className="mt-8 bg-[var(--gold)] text-[var(--navy-dark)] px-10 py-4 rounded-full text-lg font-bold tracking-widest uppercase"
            role="menuitem"
            onClick={() => setMobileMenuOpen(false)}
          >
            Donate
          </a>
        </div>
      </div>
    </nav>
  );
}
