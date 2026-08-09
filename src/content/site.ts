export const site = {
  name: "Mahrizal",
  fullName: "Mahrizal",
  title: "Software Engineer · System Analyst · Delivery Lead · AI Developer",
  tagline:
    "Saya mengubah masalah bisnis yang masih kabur menjadi solusi software & AI yang siap live — dari analisis sampai delivery.",
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
      "Membangun sistem yang rapi, maintainable, dan siap production — dari arsitektur sampai rilis.",
  },
  {
    id: "analysis",
    label: "System Analyst",
    summary:
      "Memecah kebutuhan bisnis yang kabur menjadi requirement, flow, dan acceptance criteria yang jelas.",
  },
  {
    id: "delivery",
    label: "Project / Delivery Lead",
    summary:
      "Menjaga scope, risiko, dan timeline agar tim tetap fokus dan stakeholder tetap aligned.",
  },
  {
    id: "ai",
    label: "AI Developer",
    summary:
      "Mendesain fitur AI yang terhubung ke workflow nyata — bukan sekadar demo model.",
  },
] as const;

export const strengths = [
  {
    title: "Problem → Solution",
    body: "Mulai dari masalah bisnis, baru memilih teknologi. Tidak memaksakan stack yang berlebihan.",
  },
  {
    title: "End-to-end ownership",
    body: "Nyaman memegang analisis, keputusan teknis, implementasi, sampai komunikasi rilis.",
  },
  {
    title: "Delivery dengan trade-off",
    body: "Tahu kapan memotong scope, kapan menjaga kualitas, dan bagaimana menjelaskan keputusan itu.",
  },
  {
    title: "Komunikasi yang jelas",
    body: "Bisa bicara dengan tim teknis dan non-teknis tanpa kehilangan esensi keputusan.",
  },
] as const;

export const about = {
  headline: "Saya membangun kredibilitas lewat hasil yang bisa dicek, bukan klaim kosong.",
  paragraphs: [
    "Saya sedang membangun jalur karier yang sehat: lingkungan kerja yang mendukung, sambil serius menumbuhkan praktik digital untuk UMKM melalui Mahrizal Digital.",
    "Di kerjaan, saya paling kuat saat bridging — menghubungkan kebutuhan bisnis, keputusan teknis, dan eksekusi yang bisa di-ship. Itu sebabnya portfolio ini menampilkan peran Engineering, Analysis, Delivery, dan AI dalam satu narasi yang konsisten.",
    "Saya mencari tim dengan suasana kolaboratif dan standar yang jelas. Dari situ saya ingin tumbuh lebih dalam secara profesional, sambil agency tetap jalan sebagai praktik jangka panjang.",
  ],
  principles: [
    "Mulai dari masalah, bukan dari tools.",
    "Ship yang berguna lebih dulu, sempurnakan setelah ada sinyal nyata.",
    "Dokumentasi cukup agar orang lain bisa lanjut tanpa menebak.",
    "AI hanya dipakai jika menyelesaikan bottleneck yang measurable.",
  ],
} as const;

export function getWhatsAppUrl(message?: string) {
  const base = `https://wa.me/${site.whatsapp}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
