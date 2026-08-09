export const site = {
  name: "Mahrizal",
  fullName: "Mahrizal",
  title: "AI Developer · Software Engineer",
  titleSupport: "Supervisor · Leading 4 software engineering teams",
  tagline:
    "I turn ambiguous business problems into production-ready software and AI-assisted solutions — from analysis to delivery — while leading engineering teams.",
  location: "Bogor, Indonesia",
  email: "amahrizal@gmail.com",
  whatsapp: "6288210909810",
  phoneDisplay: "+62 882-1090-9810",
  github: "https://github.com/mahrizalsoftwareengineer-lgtm",
  githubHandle: "mahrizalsoftwareengineer-lgtm",
  linkedin: "https://linkedin.com/in/mahrizal",
  siteUrl: "https://mahrizal-software-engineer.vercel.app",
  resumeUrl: "/resume",
  photo: "/images/mahrizal.png",
  photoAlt: "Portrait of Mahrizal, AI Developer and Software Engineer",
  availability:
    "Open to opportunities — AI Developer, Software Engineer, Tech Lead / Engineering Supervisor",
  heroStack: [
    "Laravel",
    "MySQL",
    "Redis",
    "Next.js",
    "System Design",
    "Data Analytics",
  ],
} as const;

export const skills = {
  hard: [
    "PHP",
    "Laravel",
    "MySQL",
    "PostgreSQL",
    "React",
    "Next.js",
    "Redis",
    "Message Queue",
    "System Analysis",
    "UML",
    "Data Analytics",
  ],
  soft: [
    "Communication",
    "Negotiation",
    "Problem Solving",
    "Leadership",
    "People Management",
    "Time Management",
  ],
} as const;

export const roles = [
  {
    id: "ai",
    label: "AI Developer",
    summary:
      "I design data and AI-assisted solutions that plug into real workflows — dashboards, automation, and decision support — not demo-only showcases.",
  },
  {
    id: "engineering",
    label: "Software Engineer",
    summary:
      "I build clean, maintainable, production-ready systems — from architecture to release.",
  },
  {
    id: "analysis",
    label: "System Analyst",
    summary:
      "I break ambiguous business needs into clear requirements, flows, and acceptance criteria.",
  },
  {
    id: "delivery",
    label: "Supervisor / Project Manager",
    summary:
      "I lead engineering teams and protect scope, risk, and timeline so delivery stays focused and stakeholders stay aligned.",
  },
] as const;

export const experience = [
  {
    company: "MUC — Software Engineering",
    role: "Supervisor · Software Engineer · AI Developer",
    period: "2023 – Present",
    summary:
      "Supervise and lead 4 software engineering teams while staying hands-on on internal platforms, delivery quality, and productivity analytics for operational decisions.",
    highlights: [
      "Lead 4 software engineering teams: priorities, mentoring, delivery rhythm, and stakeholder alignment",
      "Owned MUC Net Timesheet productivity dashboard (Laravel + MySQL analytics)",
      "Bridge business needs with technical execution across operations and management",
      "Keep standards for code quality, release readiness, and measurable workload visibility",
    ],
  },
  {
    company: "SIA Militan",
    role: "Full-stack Owner · AI-assisted Development",
    period: "2023 – 2025",
    summary:
      "Designed and shipped a production membership information system used daily by about 2,000 active users.",
    highlights: [
      "End-to-end ownership: architecture, security, delivery, maintenance",
      "Redis, caching, and message queues for production workloads",
      "AI-assisted development with personal ownership of quality gates",
    ],
  },
] as const;

export const strengths = [
  {
    title: "Problem → Solution",
    body: "Start from the business problem, then choose the technology. No unnecessary stack for show.",
  },
  {
    title: "End-to-end ownership",
    body: "Comfortable owning analysis, technical decisions, implementation, and release communication.",
  },
  {
    title: "Delivery with trade-offs",
    body: "I know when to cut scope, when to protect quality, and how to explain those decisions clearly.",
  },
  {
    title: "Clear communication",
    body: "I can talk with both technical and non-technical stakeholders without losing the point of the decision.",
  },
] as const;

export const about = {
  headline: "I build credibility through verifiable results, not empty claims.",
  paragraphs: [
    "I currently supervise 4 software engineering teams while remaining hands-on as an AI Developer and Software Engineer — shipping systems that help teams monitor work, make decisions, and operate reliably in production.",
    "At work, I am strongest at bridging people, business needs, technical decisions, and execution that can ship. This portfolio highlights live systems, decision-support work, and leadership with clear ownership.",
    "I am looking for a collaborative environment with clear standards, where I can deepen AI and engineering craft while leading teams that deliver measurable impact.",
  ],
  principles: [
    "Start from the problem, not from the tools.",
    "Ship something useful first; refine after real signals appear.",
    "Document just enough so others can continue without guessing.",
    "Use AI and analytics only when they remove a measurable bottleneck.",
  ],
} as const;

export const githubRepos = [
  {
    name: "mahrizal-software-engineer",
    url: "https://github.com/mahrizalsoftwareengineer-lgtm/mahrizal-software-engineer",
    description: "Personal portfolio — Next.js, case studies, CV page, security headers.",
  },
  {
    name: "thoriqulirsyad",
    url: "https://github.com/mahrizalsoftwareengineer-lgtm/thoriqulirsyad",
    description: "Pondok Pesantren Thoriqul Irsyad website — Next.js, Supabase, admin panel.",
  },
] as const;

export const resume = {
  summary:
    "AI Developer and Software Engineer based in Bogor, Indonesia. Currently supervising 4 software engineering teams while staying hands-on with Laravel, MySQL, Redis, and analytics dashboards for operational monitoring and decision-making. Comfortable owning systems and delivery end-to-end — from requirements to production.",
  selectedWork: [
    {
      title: "MUC Net Timesheet",
      detail:
        "Productivity dashboard from MySQL timesheet data for assignment monitoring and compliance visibility.",
    },
    {
      title: "SIA Militan",
      detail:
        "Membership information system for ~2,000 active users with Redis, queues, and security hardening.",
    },
  ],
} as const;

export function getWhatsAppUrl(message?: string) {
  const base = `https://wa.me/${site.whatsapp}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
