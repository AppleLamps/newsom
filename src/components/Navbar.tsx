"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navLinks = [
  { name: "Issues", href: "#issues" },
  { name: "Record", href: "#record" },
  { name: "About", href: "#about" },
  { name: "Join", href: "#join" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[var(--gray-200)]" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-[var(--navy)] focus:ring-offset-2 rounded-sm" aria-label="Newsom 2028 Campaign Home">
            <div className="w-10 h-10 bg-[var(--navy)] rounded-full flex items-center justify-center" aria-hidden="true">
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
          <div className="hidden md:flex items-center gap-8" role="menubar">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[var(--gray-700)] hover:text-[var(--navy)] font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--navy)] focus:ring-offset-2 rounded-sm px-2 py-1"
                role="menuitem"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#donate"
              className="bg-[var(--campaign-red)] hover:bg-[var(--red-dark)] text-white px-6 py-2 rounded-full font-semibold transition-all duration-200 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[var(--navy)] focus:ring-offset-2"
            >
              Donate
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            ref={menuButtonRef}
            className="md:hidden p-2 text-[var(--gray-700)] focus:outline-none focus:ring-2 focus:ring-[var(--navy)] focus:ring-offset-2 rounded-sm"
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
      {mobileMenuOpen && (
        <div
          ref={menuRef}
          id="mobile-menu"
          className="md:hidden bg-white border-t border-[var(--gray-200)]"
          role="menu"
          onKeyDown={handleKeyDown}
        >
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-[var(--gray-700)] hover:text-[var(--navy)] font-medium py-2 focus:outline-none focus:ring-2 focus:ring-[var(--navy)] focus:ring-offset-2 rounded-sm px-2 py-1"
                role="menuitem"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#donate"
              className="block bg-[var(--campaign-red)] text-white px-6 py-3 rounded-full font-semibold text-center mt-4 focus:outline-none focus:ring-2 focus:ring-[var(--navy)] focus:ring-offset-2"
              role="menuitem"
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
