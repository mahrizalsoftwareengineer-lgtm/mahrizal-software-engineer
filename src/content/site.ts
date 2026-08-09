export const site = {
  name: "Mahrizal",
  fullName: "Mahrizal",
  title: "Software Engineer · System Analyst · Project Manager · AI Developer",
  tagline:
    "I turn ambiguous business problems into production-ready software and AI solutions — from analysis to delivery.",
  location: "Bogor, Indonesia",
  email: "amahrizal@gmail.com",
  whatsapp: "6288210909810",
  phoneDisplay: "+62 882-1090-9810",
  github: "https://github.com/mahrizalsoftwareengineer-lgtm",
  linkedin: "https://linkedin.com/in/mahrizal",
  agencyUrl: "https://YOUR_AGENCY_URL.vercel.app",
  siteUrl: "https://mahrizal-software-engineer.vercel.app",
  resumeUrl: "/resume.pdf",
  availability: "Open to opportunities — Engineering Manager, AI Developer, System Analyst",
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
  {
    id: "ai",
    label: "AI Developer",
    summary:
      "I design AI features that plug into real workflows — not demo-only model showcases.",
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
    "I am building a healthy career path in a supportive work environment where I can deepen my craft and deliver meaningful impact.",
    "At work, I am strongest at bridging — connecting business needs, technical decisions, and execution that can ship. That is why this portfolio presents Engineering, Analysis, Delivery, and AI through one consistent narrative.",
    "I am looking for a collaborative team with clear standards. From there, I want to grow deeper professionally and keep raising the quality of what I ship.",
  ],
  principles: [
    "Start from the problem, not from the tools.",
    "Ship something useful first; refine after real signals appear.",
    "Document just enough so others can continue without guessing.",
    "Use AI only when it removes a measurable bottleneck.",
  ],
} as const;

export function getWhatsAppUrl(message?: string) {
  const base = `https://wa.me/${site.whatsapp}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
