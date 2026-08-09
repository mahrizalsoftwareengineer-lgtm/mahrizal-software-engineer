export type RoleTag =
  | "Engineering"
  | "System Analysis"
  | "Project Manager"
  | "AI Developer";

export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  tags: RoleTag[];
  year: string;
  status: "Live" | "In progress" | "Case study";
  context: string;
  problem: string;
  role: string;
  actions: string[];
  tradeoffs: string[];
  results: string[];
  stack: string[];
  image?: string;
  imageAlt?: string;
  links: {
    live?: string;
    github?: string;
    demo?: string;
  };
  featured?: boolean;
  /** Internal only — never rendered on public pages */
  note?: string;
};

export const cases: CaseStudy[] = [
  {
    slug: "sia-militan",
    title: "SIA Militan: membership information system for 2,000 active users",
    subtitle:
      "Production Laravel platform with Redis, message queues, and security hardening — built end-to-end.",
    tags: ["Engineering", "System Analysis", "AI Developer"],
    year: "2023–2025",
    status: "Live",
    featured: true,
    context:
      "A community needed a membership information system (SIA) that could centralize daily operations — member data, activities, and internal services — for about 2,000 active users.",
    problem:
      "Without a reliable system, member data easily drifts out of sync, access becomes fragile, and performance drops as traffic or background work increases. The system needed a secure foundation that could handle real production load.",
    role: "Full-stack owner using AI-assisted development — architecture, implementation, security, and delivery.",
    actions: [
      "Built SIA Militan end-to-end with Laravel as the core for community membership management.",
      "Used AI-assisted development to accelerate implementation, while keeping architecture decisions and quality gates under personal ownership.",
      "Applied strong security practices for authentication, authorization, and protection of sensitive member data.",
      "Designed the system for performance with caching, message queues, and Redis for asynchronous workloads.",
      "Kept daily operations stable for thousands of active users.",
    ],
    tradeoffs: [
      "Moved heavy work into message queues so user requests stayed responsive.",
      "Used cache/Redis to reduce database load on frequently accessed data, accepting careful invalidation as the trade-off.",
      "Used AI to accelerate coding — not to replace review, security, or design decisions.",
    ],
    results: [
      "~2,000 active users rely on the system for daily community operations.",
      "Background workloads no longer block interactive user requests.",
      "Production ownership proof: security, system design, and ongoing maintenance in one delivery.",
    ],
    stack: [
      "PHP",
      "Laravel",
      "MySQL",
      "Redis",
      "Cache",
      "Message Queue",
      "AI-assisted development",
      "Security hardening",
    ],
    image: "/cases/sia-militan.png",
    imageAlt: "SIA Militan login page — Member and Admin role selection",
    links: {},
  },
  {
    slug: "muc-net-timesheet",
    title: "MUC Net Timesheet: productivity dashboard for assignments",
    subtitle:
      "Analytics dashboard from MySQL timesheet data — monitoring, controlling, and data-driven decisions.",
    tags: ["AI Developer", "Engineering", "System Analysis"],
    year: "2023–2025",
    status: "Live",
    featured: true,
    context:
      "Internal teams already stored daily timesheet data in MySQL. Management needed a productivity dashboard that turned that data into insight for assignment monitoring, workload visibility, and filling compliance.",
    problem:
      "Work activity data existed, but it was hard to read for decisions. Without an analytics layer, monitoring and controlling assignments stayed manual and often late.",
    role: "AI Developer — turning timesheet data into a productivity dashboard for operational decisions.",
    actions: [
      "Extracted and processed timesheet data from MySQL into productivity metrics relevant to assignments.",
      "Built an analytics dashboard for progress monitoring, workload visibility, and timesheet compliance control.",
      "Designed actionable indicators so management could allocate resources based on actual data.",
      "Aligned business needs (what must be monitored) with the available timesheet data model.",
      "Presented insights in a UI that is usable daily — not just raw reports.",
    ],
    tradeoffs: [
      "Chose metrics that drive decisions, not a dashboard full of charts with no action.",
      "Kept queries/aggregations fast enough for daily use without over-engineering the analytics pipeline.",
    ],
    results: [
      "One operational source of truth for daily timesheet-based assignment visibility.",
      "Managers can monitor workload and compliance without manual spreadsheet collation.",
      "Resource allocation discussions shifted from assumptions to activity data.",
    ],
    stack: [
      "Laravel",
      "MySQL",
      "Data analytics",
      "Dashboard productivity",
      "PHP",
    ],
    links: {},
  },
  {
    slug: "controlled-release-delivery",
    title: "Controlled release: quality gates under a tight deadline",
    subtitle:
      "Protecting priorities, risks, and stakeholder communication until the feature is truly live.",
    tags: ["Project Manager", "Engineering"],
    year: "2024–2025",
    status: "Case study",
    featured: true,
    context:
      "An internal delivery with time pressure, cross-party dependencies, and feature expectations that kept growing near the deadline.",
    problem:
      "Without clear gates, quality slips easily: late bugs, unclear status, and uncontrolled scope.",
    role: "Technical project manager / tech lead for release coordination.",
    actions: [
      "Broke work into milestones and a monitorable critical path.",
      "Built a short risk list with mitigations (owner and fallback).",
      "Set a simple definition of done: review, light testing, and release criteria.",
      "Shared status updates non-technical stakeholders could understand — progress, blockers, decisions.",
      "Decided what to cut or postpone so the release date could hold.",
    ],
    tradeoffs: [
      "Chose a reliable ship date over forcing every feature into the release.",
      "Kept quality gates proportional — enough to prevent incidents without slowing the team.",
    ],
    results: [
      "Release shipped with consciously re-agreed scope.",
      "Stakeholders understood what made it in, what was deferred, and why.",
      "Status rhythm reduced last-week surprises for the team and business owners.",
    ],
    stack: ["Milestone planning", "Risk management", "Code review", "Release checklist"],
    links: {},
  },
];

export function getCaseBySlug(slug: string) {
  return cases.find((item) => item.slug === slug);
}

export function getFeaturedCases() {
  return cases.filter((item) => item.featured);
}

export function getPublicCases() {
  return cases.filter((item) => item.featured || item.status === "Live");
}
