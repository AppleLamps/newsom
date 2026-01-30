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
  return (
    <section id="issues" className="py-24 bg-[var(--cream)]" aria-labelledby="issues-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[var(--campaign-red)] font-semibold tracking-wider uppercase text-sm mb-4">
            The Vision
          </span>
          <h2 id="issues-heading" className="font-[var(--font-merriweather)] text-4xl sm:text-5xl font-bold text-[var(--navy)] mb-6">
            Key Issues
          </h2>
          <p className="text-xl text-[var(--gray-600)] max-w-3xl mx-auto">
            Gavin Newsom has transformed California. Now he wants to bring that transformation to all of America.
          </p>
        </div>

        {/* Issues Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {issues.map((issue, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-[var(--gray-200)] hover:border-[var(--gold)] hover:-translate-y-1"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${issue.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                <issue.icon className="w-7 h-7 text-white" aria-hidden="true" />
              </div>

              {/* Content */}
              <h3 className="font-[var(--font-merriweather)] text-xl font-bold text-[var(--navy)] mb-1">
                {issue.title}
              </h3>
              <p className="text-sm text-[var(--campaign-red)] font-medium mb-3">
                {issue.subtitle}
              </p>
              <p className="text-[var(--gray-600)] text-sm leading-relaxed mb-4">
                {issue.description}
              </p>

              {/* Stat */}
              <div className="pt-4 border-t border-[var(--gray-200)]">
                <div className="text-2xl font-bold text-[var(--navy)]">
                  {issue.stat}
                </div>
                <div className="text-xs text-[var(--gray-500)] uppercase tracking-wider">
                  {issue.statLabel}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
