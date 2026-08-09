export const site = {
  name: "Mahrizal",
  fullName: "Mahrizal",
  title: "AI Developer · Software Engineer",
  titleSupport: "System Analysis · Project Delivery",
  tagline:
    "I turn ambiguous business problems into production-ready software and AI-assisted solutions — from analysis to delivery.",
  location: "Bogor, Indonesia",
  email: "amahrizal@gmail.com",
  whatsapp: "6288210909810",
  phoneDisplay: "+62 882-1090-9810",
  github: "https://github.com/mahrizalsoftwareengineer-lgtm",
  linkedin: "https://linkedin.com/in/mahrizal",
  siteUrl: "https://mahrizal-software-engineer.vercel.app",
  resumeUrl: "/resume",
  availability: "Open to opportunities — AI Developer, Software Engineer, System Analyst",
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
    label: "Project Manager",
    summary:
      "I protect scope, risk, and timeline so the team stays focused and stakeholders stay aligned.",
  },
] as const;

export const experience = [
  {
    company: "MUC — Internal Platforms",
    role: "Software Engineer · AI Developer",
    period: "2023 – Present",
    summary:
      "Build and improve internal systems for operations, including timesheet productivity analytics for monitoring, controlling, and assignment decisions.",
    highlights: [
      "Owned MUC Net Timesheet productivity dashboard (Laravel + MySQL analytics)",
      "Collaborated with stakeholders across operations and management",
      "Focused on measurable visibility for workload and compliance",
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
    "I am building a focused career as an AI Developer and Software Engineer — shipping systems that help teams monitor work, make decisions, and operate reliably in production.",
    "At work, I am strongest at bridging business needs, technical decisions, and execution that can ship. This portfolio highlights live systems and decision-support work with clear ownership.",
    "I am looking for a collaborative team with clear standards, where I can deepen AI and engineering craft while delivering measurable impact.",
  ],
  principles: [
    "Start from the problem, not from the tools.",
    "Ship something useful first; refine after real signals appear.",
    "Document just enough so others can continue without guessing.",
    "Use AI and analytics only when they remove a measurable bottleneck.",
  ],
} as const;

export const resume = {
  summary:
    "AI Developer and Software Engineer based in Bogor, Indonesia. Experienced in Laravel, MySQL, Redis, and analytics dashboards that support operational monitoring and decision-making. Comfortable owning systems end-to-end — from requirements to production.",
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
