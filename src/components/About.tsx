"use client";

import { MapPinIcon, AcademicCapIcon, BriefcaseIcon, TrophyIcon } from "@heroicons/react/24/outline";

const timeline = [
  {
    year: "1997",
    title: "PlumpJack Winery",
    description: "Founded with family money. Because every politician needs a winery.",
    icon: TrophyIcon,
  },
  {
    year: "2004",
    title: "Mayor of San Francisco",
    description: "Became the youngest mayor in SF history. The city has never been the same.",
    icon: MapPinIcon,
  },
  {
    year: "2011",
    title: "Lieutenant Governor",
    description: "Waited patiently for Jerry Brown to retire. And waited. And waited.",
    icon: BriefcaseIcon,
  },
  {
    year: "2019",
    title: "Governor of California",
    description: "The job he was born for. The state may never recover.",
    icon: AcademicCapIcon,
  },
  {
    year: "2028",
    title: "Presidential Candidate",
    description: "Running on his record. Literally running from his record.",
    icon: TrophyIcon,
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Bio */}
          <div>
            <span className="inline-block text-[var(--campaign-red)] font-semibold tracking-wider uppercase text-sm mb-4">
              Meet the Candidate
            </span>
            <h2 className="font-[var(--font-merriweather)] text-4xl sm:text-5xl font-bold text-[var(--navy)] mb-6">
              Gavin Newsom
            </h2>
            <div className="w-24 h-1 bg-[var(--gold)] mb-8" />

            <div className="prose prose-lg text-[var(--gray-600)] space-y-4">
              <p>
                Born into privilege and groomed for politics, Gavin Newsom has spent his career 
                proving that with enough family connections and the right zip code, anyone can 
                become a career politician.
              </p>
              <p>
                From his early days running a winery funded by the Getty family to his current 
                tenure as California's Governor, Newsom has consistently demonstrated an 
                uncanny ability to say one thing while doing another—a skill he hopes to bring 
                to the White House.
              </p>
              <p>
                Under his leadership, California has achieved remarkable milestones: the highest 
                homelessness rate in the nation, a mass exodus of businesses and residents, and 
                a state debt that would make most accountants weep. But hey, the restaurants in 
                Napa are still great.
              </p>
              <p>
                Now, Newsom wants to bring the &ldquo;California Dream&rdquo; to all of America. 
                Because if it worked so well for the Golden State, imagine what it could do for 
                the entire country.
              </p>
            </div>

            {/* Fun Facts */}
            <div className="mt-8 p-6 bg-[var(--cream)] rounded-xl border-l-4 border-[var(--gold)]">
              <h3 className="font-bold text-[var(--navy)] mb-3">Did You Know?</h3>
              <ul className="space-y-2 text-[var(--gray-600)]" role="list">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--gold)]" aria-hidden="true">•</span>
                  <span>His winery received a $2.9 million PPP loan that was later forgiven</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--gold)]" aria-hidden="true">•</span>
                  <span>He dined at the French Laundry while telling Californians to stay home</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--gold)]" aria-hidden="true">•</span>
                  <span>His children attended in-person private school while public schools remained closed</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--gold)]" aria-hidden="true">•</span>
                  <span>California lost up to $32 billion in unemployment fraud under his watch</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--gold)]" aria-hidden="true">•</span>
                  <span>Trump calls him "Newscum" and blames him personally for California's wildfires</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--gold)]" aria-hidden="true">•</span>
                  <span>He claims Trump blocked his Davos speaking slot in 2026</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Timeline */}
          <div className="lg:sticky lg:top-24">
            <h3 className="font-[var(--font-merriweather)] text-2xl font-bold text-[var(--navy)] mb-8">
              Career Timeline
            </h3>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 group"
                >
                  {/* Timeline Line */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-[var(--navy)] flex items-center justify-center group-hover:bg-[var(--gold)] transition-colors duration-300">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="w-0.5 h-full bg-[var(--gray-300)] mt-2" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="pb-8 flex-1">
                    <span className="inline-block bg-[var(--gold)]/10 text-[var(--gold-dark)] text-sm font-bold px-3 py-1 rounded-full mb-2">
                      {item.year}
                    </span>
                    <h4 className="font-bold text-[var(--navy)] text-lg mb-1">
                      {item.title}
                    </h4>
                    <p className="text-[var(--gray-600)]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
