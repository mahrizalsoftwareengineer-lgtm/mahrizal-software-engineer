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
  note?: string;
};

export const cases: CaseStudy[] = [
  {
    slug: "sia-militan",
    title: "SIA Militan: membership information system for 2,000 active users",
    subtitle:
      "A community Laravel platform built end-to-end with AI-assisted development, Redis, and message queues.",
    tags: ["AI Developer", "Engineering", "System Analysis"],
    year: "2023–2025",
    status: "Live",
    featured: true,
    context:
      "A community needed a membership information system (SIA) that could centralize daily operations — member data, activities, and internal services — for about 2,000 active users.",
    problem:
      "Without a reliable system, member data easily drifts out of sync, access becomes fragile, and performance drops as traffic or background work increases. The system needed a secure foundation that could handle real production load.",
    role: "AI Developer — end-to-end ownership of architecture, implementation, security, and delivery with AI-assisted development.",
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
      "The system is used by about 2,000 active users for community operations.",
      "Architecture can absorb background workloads without sacrificing user experience.",
      "Demonstrates accountable AI Developer delivery at production scale with solid security and system design.",
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
    role: "AI Developer — focused on turning timesheet data into a productivity dashboard for operational decisions.",
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
      "Management gained a productivity dashboard based on actual timesheet data.",
      "Assignment monitoring and timesheet compliance control became more measurable.",
      "Resource allocation and progress evaluation became more data-driven, less assumption-based.",
    ],
    stack: [
      "Laravel",
      "MySQL",
      "Data analytics",
      "Dashboard productivity",
      "PHP",
    ],
    // image: "/cases/muc-net-timesheet.png",
    // imageAlt: "MUC Net Timesheet productivity dashboard",
    links: {},
    note: "Add a dashboard screenshot (blur sensitive data) to public/cases/muc-net-timesheet.png. Add compliance/productivity metrics to results when official numbers are available.",
  },
  {
    slug: "requirement-to-backlog",
    title: "From fuzzy requirements to a backlog that can ship",
    subtitle:
      "Simplifying business requests into clear scope, flows, and acceptance criteria.",
    tags: ["System Analysis", "Project Manager", "Engineering"],
    year: "2024–2025",
    status: "Case study",
    context:
      "On an internal/client project, requests arrived as broad wishes — “we want a system that can…” — without clear boundaries across stakeholders.",
    problem:
      "Scope floated, expectations differed, and rework risk was high if coding started without alignment.",
    role: "System analyst with delivery involvement and technical decision-making.",
    actions: [
      "Ran a short discovery: who the users are, what outcome is expected, and what the constraints are.",
      "Mapped as-is → to-be processes into flows that are easy to discuss with business stakeholders.",
      "Wrote use cases / acceptance criteria for MVP vs later phases.",
      "Aligned priorities with implementation capacity so the timeline stayed realistic.",
    ],
    tradeoffs: [
      "Cut nice-to-haves so the MVP could ship without sacrificing core value.",
      "Kept documentation enough for alignment — without over-producing.",
    ],
    results: [
      "Stakeholders shared one source of truth for scope.",
      "The implementation team had testable done criteria.",
      "Rework caused by misunderstood requirements decreased.",
    ],
    stack: ["Process mapping", "Use cases", "Backlog prioritization", "Agile delivery"],
    links: {},
    note: "Anonymize company names. Add flow/AC screenshots (blur sensitive data) under public/cases/.",
  },
  {
    slug: "controlled-release-delivery",
    title: "Controlled release: quality gates under a tight deadline",
    subtitle:
      "Protecting priorities, risks, and stakeholder communication until the feature is truly live.",
    tags: ["Project Manager", "Engineering"],
    year: "2024–2025",
    status: "Case study",
    context:
      "A project with time pressure, cross-party dependencies, and feature expectations that kept growing near the deadline.",
    problem:
      "Without clear gates, quality slips easily: late bugs, unclear status, and uncontrolled scope.",
    role: "Tech lead / acting engineering manager / technical project manager.",
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
      "The release shipped with a consciously re-agreed scope.",
      "Stakeholders understood what made it in, what was deferred, and why.",
      "The team had a status rhythm that reduced last-week surprises.",
    ],
    stack: ["Milestone planning", "Risk management", "Code review", "Release checklist"],
    links: {},
    note: "Strong fit when applying for Engineering Manager / Project Manager roles.",
  },
  {
    slug: "ai-workflow-feature",
    title: "AI features that enter the workflow — not decorative chatbots",
    subtitle:
      "Building measurable AI assistance: clear input, useful output, human fallback when needed.",
    tags: ["AI Developer", "Engineering", "System Analysis"],
    year: "2025–2026",
    status: "In progress",
    featured: true,
    context:
      "Manual processes were slow and inconsistent. The team needed AI assistance to speed up repeatable steps — not open-ended chat without a goal.",
    problem:
      "AI demos often look impressive but stay disconnected from daily work. Without problem framing, adoption stays low and hallucination risk stays high.",
    role: "AI developer + engineer, with system-analyst style problem framing.",
    actions: [
      "Chose a measurable use case (time, accuracy, or throughput).",
      "Designed the flow: input → processing (prompt/RAG/tools) → output → human review when needed.",
      "Integrated model/API with basic guardrails: fallback, data boundaries, and evaluation examples.",
      "Built a UI that explains what the AI helps with — not a black box.",
    ],
    tradeoffs: [
      "Balanced accuracy, latency, and cost.",
      "Started with a simple solution (prompt + structure) before adding RAG complexity.",
    ],
    results: [
      "A runnable prototype/demo that can be shown to interviewers or clients.",
      "Initial evaluation criteria to separate “works” from “looks smart”.",
      "A working pattern that can transfer to other business use cases.",
    ],
    stack: ["TypeScript", "LLM API", "Prompt design", "Next.js", "Eval checklist"],
    links: {
      github: "https://github.com/YOUR_GITHUB_USERNAME/YOUR_AI_REPO",
      demo: "https://YOUR_AI_DEMO.vercel.app",
    },
    note: "If there is no work AI project yet: finish one small public mini-product, then update this case.",
  },
];

export function getCaseBySlug(slug: string) {
  return cases.find((item) => item.slug === slug);
}

export function getFeaturedCases() {
  return cases.filter((item) => item.featured);
}
