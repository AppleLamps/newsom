"use client";

import { HeartIcon, UsersIcon, ShareIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

export default function CTA() {
  return (
    <section id="join" className="py-28 bg-gradient-to-br from-[var(--navy)] via-[var(--navy-light)] to-[var(--navy-dark)] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--gold)]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--campaign-red)]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main CTA */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-[var(--gold)] font-semibold tracking-[0.3em] uppercase text-xs mb-4">
            Join the Campaign
          </span>
          <h2 className="font-[var(--font-merriweather)] text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Help Us Make History
          </h2>
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto mb-10">
            Together, we can bring California&apos;s proven leadership to Washington. 
            Because America deserves the same results the Golden State has achieved.
          </p>

          {/* Email Signup */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-sm shadow-[0_30px_60px_rgba(2,6,23,0.35)]">
              <form
                className="flex flex-col sm:flex-row gap-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const email = form.querySelector('input[type="email"]') as HTMLInputElement;
                  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                  if (email && email.value && !emailPattern.test(email.value)) {
                    email.setCustomValidity('Please enter a valid email address');
                    email.reportValidity();
                    return;
                  }

                  if (email) {
                    email.setCustomValidity('');
                    alert('Thank you for joining the campaign! (This is a demo - no data was collected)');
                    email.value = '';
                  }
                }}
              >
                <div className="flex-1 relative">
                  <EnvelopeIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60" aria-hidden="true" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="w-full pl-12 pr-4 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[var(--gold)] transition-colors"
                    aria-label="Email address"
                    aria-describedby="email-hint"
                  />
                </div>
                <button
                  type="submit"
                  className="px-8 py-4 bg-[var(--gold)] hover:bg-[var(--gold-light)] text-[var(--navy-dark)] font-bold rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:ring-offset-2 focus:ring-offset-[var(--navy)]"
                >
                  Join Us
                </button>
              </form>
              <p id="email-hint" className="text-white/40 text-sm mt-3">
                By joining, you agree to receive updates. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>

        {/* Action Cards */}
        <div id="donate" className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Donate */}
          <a
            href="#"
            className="group bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-[var(--gold)]/50 hover:bg-white/10 transition-all duration-300 text-center shadow-[0_20px_40px_rgba(2,6,23,0.25)]"
          >
            <div className="w-16 h-16 bg-[var(--campaign-red)] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <HeartIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Donate</h3>
            <p className="text-white/60 mb-4">
              Help fund the campaign to bring California values nationwide.
            </p>
            <span className="inline-flex items-center gap-2 text-[var(--gold)] font-semibold group-hover:gap-3 transition-all">
              Contribute Now →
            </span>
          </a>

          {/* Volunteer */}
          <a
            href="#"
            className="group bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-[var(--gold)]/50 hover:bg-white/10 transition-all duration-300 text-center shadow-[0_20px_40px_rgba(2,6,23,0.25)]"
          >
            <div className="w-16 h-16 bg-[var(--navy-light)] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border-2 border-white/20">
              <UsersIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Volunteer</h3>
            <p className="text-white/60 mb-4">
              Join thousands of Californians who&apos;ve already left the state.
            </p>
            <span className="inline-flex items-center gap-2 text-[var(--gold)] font-semibold group-hover:gap-3 transition-all">
              Get Involved →
            </span>
          </a>

          {/* Share */}
          <a
            href="#"
            className="group bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-[var(--gold)]/50 hover:bg-white/10 transition-all duration-300 text-center shadow-[0_20px_40px_rgba(2,6,23,0.25)]"
          >
            <div className="w-16 h-16 bg-[var(--gold)] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <ShareIcon className="w-8 h-8 text-[var(--navy-dark)]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Share</h3>
            <p className="text-white/60 mb-4">
              Spread the word. Let everyone know what&apos;s coming.
            </p>
            <span className="inline-flex items-center gap-2 text-[var(--gold)] font-semibold group-hover:gap-3 transition-all">
              Share Now →
            </span>
          </a>
        </div>

        {/* Disclaimer */}
        <div className="mt-16 text-center">
          <p className="text-white/40 text-sm max-w-2xl mx-auto">
            Paid for by Newsom 2028. Not authorized by any candidate or candidate&apos;s committee. 
            This is a satirical website. Please do not actually donate.
          </p>
        </div>
      </div>
    </section>
  );
}
