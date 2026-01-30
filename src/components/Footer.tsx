"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--navy-dark)] text-white py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[var(--navy)] rounded-full flex items-center justify-center border border-[var(--gold)]">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <div>
                <span className="text-white font-bold text-xl tracking-tight">
                  NEWSOM
                </span>
                <span className="text-[var(--gold)] font-bold text-xl">2028</span>
              </div>
            </div>
            <p className="text-white/60 max-w-sm mb-4">
              Bringing California's proven leadership to Washington. 
              Because America deserves the same results.
            </p>
            <p className="text-[var(--gold)] text-sm font-semibold">
              A New California For America
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Campaign</h4>
            <ul className="space-y-2">
              <li>
                <a href="#issues" className="text-white/60 hover:text-[var(--gold)] transition-colors">
                  Issues
                </a>
              </li>
              <li>
                <a href="#record" className="text-white/60 hover:text-[var(--gold)] transition-colors">
                  Record
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/60 hover:text-[var(--gold)] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#join" className="text-white/60 hover:text-[var(--gold)] transition-colors">
                  Join
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/60 hover:text-[var(--gold)] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-[var(--gold)] transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-[var(--gold)] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Disclaimer */}
            <div className="text-center md:text-left">
              <p className="text-white/40 text-xs max-w-2xl">
                <span className="text-[var(--campaign-red)] font-semibold">PAID FOR BY NEWSOM 2028</span> — 
                NOT AUTHORIZED BY ANY CANDIDATE OR CANDIDATE'S COMMITTEE. 
                This is a satirical website created for entertainment purposes. 
                No actual political campaign is associated with this content.
              </p>
            </div>

            {/* Copyright */}
            <div className="text-white/40 text-sm">
              © {currentYear} Newsom 2028. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
