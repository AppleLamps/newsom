"use client";

import {
  HomeIcon,
  BuildingOfficeIcon,
  ShieldExclamationIcon,
  BoltIcon,
  ArrowTrendingUpIcon,
  BanknotesIcon,
  UsersIcon,
  BeakerIcon,
  FireIcon,
  TruckIcon,
  LockOpenIcon,
  AcademicCapIcon,
  GlobeAltIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";

const issues = [
  {
    icon: HomeIcon,
    title: "Housing for All",
    subtitle: "The California Model",
    description: "Under Governor Newsom's leadership, California has achieved the nation's highest homeless population. Now he wants to bring that success nationwide.",
    stat: "180,000+",
    statLabel: "Unhoused Californians",
    color: "from-orange-600 to-red-700", // Darker for better contrast
  },
  {
    icon: BuildingOfficeIcon,
    title: "Business Innovation",
    subtitle: "Corporate Relocation Program",
    description: "Hundreds of companies have relocated from California to explore new opportunities in other states. Newsom calls this 'economic dynamism.'",
    stat: "352",
    statLabel: "Companies Left (2023)",
    color: "from-blue-600 to-indigo-700",
  },
  {
    icon: ShieldExclamationIcon,
    title: "Public Safety",
    subtitle: "Progressive Justice Reform",
    description: "California's pioneering approach to criminal justice has led to remarkable statistics. Property crime? Just a form of wealth redistribution.",
    stat: "+15%",
    statLabel: "Property Crime Increase",
    color: "from-red-600 to-rose-700",
  },
  {
    icon: BoltIcon,
    title: "Energy Independence",
    subtitle: "The Green New Deal Preview",
    description: "Californians enjoy scheduled blackouts and the nation's highest electricity rates. It's a small price for saving the planet, one rolling outage at a time.",
    stat: "$0.32",
    statLabel: "Per kWh (National Avg: $0.16)",
    color: "from-yellow-600 to-amber-700",
  },
  {
    icon: ArrowTrendingUpIcon,
    title: "Tax Innovation",
    subtitle: "Revenue Enhancement",
    description: "California boasts the highest state income tax rate in America. Newsom believes Washington could use more of this 'revenue enhancement.'",
    stat: "13.3%",
    statLabel: "Top Income Tax Rate",
    color: "from-green-600 to-emerald-700",
  },
  {
    icon: BanknotesIcon,
    title: "Fiscal Responsibility",
    subtitle: "Investment in the Future",
    description: "With a state debt exceeding $500 billion, California shows how to spend today what tomorrow's taxpayers will earn.",
    stat: "$500B+",
    statLabel: "State Debt",
    color: "from-purple-600 to-violet-700",
  },
  {
    icon: UsersIcon,
    title: "Population Management",
    subtitle: "Sustainable Decline",
    description: "Over half a million residents have left California since 2020. Newsom calls this 'sustainable population management.'",
    stat: "500K+",
    statLabel: "Net Migration Loss",
    color: "from-cyan-600 to-blue-700",
  },
  {
    icon: BeakerIcon,
    title: "Regulatory Excellence",
    subtitle: "Permission to Innovate",
    description: "California's regulatory environment ensures nothing happens without proper permits, studies, and environmental impact reports. Efficiency is overrated.",
    stat: "395,000+",
    statLabel: "Pages of Regulations",
    color: "from-pink-600 to-rose-700",
  },
  {
    icon: TruckIcon,
    title: "High-Speed Rail",
    subtitle: "The Train to Nowhere",
    description: "Billions spent over decades with no operational segments. Federal funding revoked as a 'textbook example of government failure.' A boondoggle for the ages.",
    stat: "$100B+",
    statLabel: "Projected Total Cost",
    color: "from-gray-600 to-slate-700",
  },
  {
    icon: FireIcon,
    title: "Wildfire Management",
    subtitle: "Prevention Innovation",
    description: "Devastating fires fueled by poor forest management and 'red tape.' Trump had to bypass California permitting with executive orders. Climate focus over immediate action.",
    stat: "2025",
    statLabel: "Palisades Fire Disaster",
    color: "from-orange-700 to-red-800",
  },
  {
    icon: LockOpenIcon,
    title: "Unemployment Fraud",
    subtitle: "The EDD Scandal",
    description: "During the pandemic, California lost $20-32 billion to fraud due to weak verification systems. Years later, audits found vulnerabilities still unfixed.",
    stat: "$32B",
    statLabel: "Lost to Fraud",
    color: "from-red-700 to-rose-800",
  },
  {
    icon: AcademicCapIcon,
    title: "Education Excellence",
    subtitle: "Redefining Proficiency",
    description: "California ranks low nationally in proficiency despite high per-pupil spending. Chronic absenteeism and achievement gaps persist—at least we're consistent.",
    stat: "Bottom 10",
    statLabel: "National Ranking",
    color: "from-indigo-600 to-purple-700",
  },
  {
    icon: GlobeAltIcon,
    title: "Davos Diplomacy",
    subtitle: "International Grandstanding",
    description: "Newsom alleged Trump administration interference blocked his 2026 Davos speaking slot. Critics call it presidential auditioning and attention-seeking on the world stage.",
    stat: "2026",
    statLabel: "Controversy Year",
    color: "from-teal-600 to-cyan-700",
  },
  {
    icon: DocumentTextIcon,
    title: "Budget Deficits",
    subtitle: "Fiscal Wizardry",
    description: "California faced massive deficits ($38B in 2024, $12B in 2025) despite prior surpluses. Volatile tax reliance on high earners and expansive spending—what could go wrong?",
    stat: "$38B",
    statLabel: "2024 Deficit",
    color: "from-amber-700 to-orange-800",
  },
];

export default function Issues() {
  const featuredIssues = issues.slice(0, 4);
  const additionalIssues = issues.slice(4);

  return (
    <section id="issues" className="py-28 bg-[var(--cream)] relative overflow-hidden" aria-labelledby="issues-heading">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-24 right-10 h-64 w-64 rounded-full bg-[var(--gold)]/10 blur-3xl" />
        <div className="absolute bottom-10 left-0 h-72 w-72 rounded-full bg-[var(--campaign-red)]/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-16">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-[var(--campaign-red)] font-semibold tracking-[0.3em] uppercase text-xs mb-4">
              The Vision
            </span>
            <h2 id="issues-heading" className="font-[var(--font-merriweather)] text-4xl sm:text-5xl font-bold text-[var(--navy)] mb-6">
              Key Issues
            </h2>
            <p className="text-lg sm:text-xl text-[var(--gray-600)] leading-relaxed">
              Gavin Newsom has transformed California. Now he wants to bring that transformation to all of America.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 w-full max-w-md">
            <div className="rounded-2xl bg-white/80 border border-white shadow-sm p-5">
              <div className="text-2xl font-bold text-[var(--navy)]">14</div>
              <div className="text-xs uppercase tracking-[0.2em] text-[var(--gray-500)]">Priority Areas</div>
            </div>
            <div className="rounded-2xl bg-white/80 border border-white shadow-sm p-5">
              <div className="text-2xl font-bold text-[var(--navy)]">2028</div>
              <div className="text-xs uppercase tracking-[0.2em] text-[var(--gray-500)]">Campaign Focus</div>
            </div>
          </div>
        </div>

        {/* Featured Issues */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredIssues.map((issue, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-white border border-[var(--gray-200)] p-8 shadow-sm hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute top-0 right-0 h-32 w-32 bg-gradient-to-br from-[var(--gold)]/10 to-transparent opacity-60" />
              <div className="flex items-center justify-between mb-6">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${issue.color} flex items-center justify-center shadow-md`}>
                  <issue.icon className="w-7 h-7 text-white" aria-hidden="true" />
                </div>
                <span className="text-xs uppercase tracking-[0.4em] text-[var(--gray-400)]">Featured</span>
              </div>
              <h3 className="font-[var(--font-merriweather)] text-2xl font-bold text-[var(--navy)] mb-2">
                {issue.title}
              </h3>
              <p className="text-sm text-[var(--campaign-red)] font-semibold uppercase tracking-wide mb-4">
                {issue.subtitle}
              </p>
              <p className="text-[var(--gray-600)] leading-relaxed mb-8">
                {issue.description}
              </p>
              <div className="pt-6 border-t border-[var(--gray-200)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="text-3xl font-bold text-[var(--navy)]">
                  {issue.stat}
                </div>
                <div className="text-xs text-[var(--gray-500)] uppercase tracking-[0.2em]">
                  {issue.statLabel}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Issues */}
        <div className="rounded-3xl bg-white/70 border border-white shadow-sm p-8 sm:p-10">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl sm:text-2xl font-[var(--font-merriweather)] font-bold text-[var(--navy)]">
              Additional Focus Areas
            </h3>
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--gray-400)]">Overview</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {additionalIssues.map((issue, index) => (
              <div
                key={index}
                className="group rounded-2xl bg-white border border-[var(--gray-200)] p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${issue.color} flex items-center justify-center shadow-sm`}>
                    <issue.icon className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-[var(--font-merriweather)] text-lg font-bold text-[var(--navy)]">
                      {issue.title}
                    </h4>
                    <p className="text-xs uppercase tracking-[0.2em] text-[var(--campaign-red)] font-semibold">
                      {issue.subtitle}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-[var(--gray-600)] leading-relaxed mt-4">
                  {issue.description}
                </p>
                <div className="mt-4 pt-4 border-t border-[var(--gray-200)] flex items-center justify-between">
                  <span className="text-lg font-bold text-[var(--navy)]">{issue.stat}</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--gray-500)] text-right">
                    {issue.statLabel}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
