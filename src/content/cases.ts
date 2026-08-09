export type RoleTag =
  | "Engineering"
  | "System Analysis"
  | "Delivery/PM"
  | "AI";

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
    title: "SIA Militan: sistem informasi anggota untuk 2.000 user aktif",
    subtitle:
      "Platform komunitas berbasis Laravel dengan keamanan tinggi, cache, message queue, dan Redis.",
    tags: ["Engineering", "System Analysis", "Delivery/PM"],
    year: "2023–2025",
    status: "Live",
    featured: true,
    context:
      "Komunitas membutuhkan sistem informasi anggota (SIA) yang mampu menangani operasional harian secara terpusat — data anggota, aktivitas, dan layanan internal — dengan jumlah pengguna aktif mencapai sekitar 2.000 orang.",
    problem:
      "Tanpa sistem yang andal, data anggota mudah tidak sinkron, akses rentan, dan performa menurun saat traffic atau proses background meningkat. Diperlukan fondasi yang aman sekaligus siap scale untuk beban nyata.",
    role: "Software engineer dengan keterlibatan system design dan pengamanan aplikasi.",
    actions: [
      "Membangun SIA Militan dengan Laravel sebagai core aplikasi untuk manajemen anggota komunitas.",
      "Menerapkan praktik security tinggi pada autentikasi, otorisasi, dan proteksi data sensitif anggota.",
      "Merancang system design untuk performa: caching, message queue, dan Redis untuk workload yang tidak harus sinkron.",
      "Memastikan alur operasional tetap stabil untuk pemakaian harian oleh ribuan user aktif.",
    ],
    tradeoffs: [
      "Memisahkan pekerjaan berat ke message queue agar request user tetap responsif.",
      "Memakai cache/Redis untuk mengurangi beban database pada data yang sering diakses, dengan trade-off invalidation yang harus dikelola hati-hati.",
    ],
    results: [
      "Sistem dipakai sekitar 2.000 user aktif untuk operasional komunitas.",
      "Arsitektur siap menahan beban proses background tanpa mengorbankan pengalaman user.",
      "Fondasi security dan system design menjadi bukti kemampuan engineering di scale nyata.",
    ],
    stack: [
      "PHP",
      "Laravel",
      "MySQL",
      "Redis",
      "Cache",
      "Message Queue",
      "Security hardening",
    ],
    image: "/cases/sia-militan.png",
    imageAlt:
      "Halaman login SIA Militan — pilihan peran Anggota dan Admin",
    links: {},
  },
  {
    slug: "muc-net-timesheet",
    title: "MUC Net Timesheet: dashboard productivity untuk penugasan",
    subtitle:
      "Platform timesheet internal berbasis Laravel + MySQL untuk monitoring, controlling, dan keputusan berbasis data.",
    tags: ["Engineering", "System Analysis", "Delivery/PM"],
    year: "2023–2025",
    status: "Live",
    featured: true,
    context:
      "Tim internal membutuhkan sistem timesheet harian yang tidak hanya mencatat jam kerja, tetapi juga memberi visibilitas penugasan kepada manajemen — siapa mengerjakan apa, berapa lama, dan bagaimana beban kerja tersebar antar project.",
    problem:
      "Data aktivitas kerja tersebar dan sulit dipakai untuk monitoring. Tanpa dashboard analitik, manajemen sulit mengontrol kepatuhan pengisian, memantau progress penugasan, dan mengambil keputusan alokasi resource secara tepat.",
    role: "Tech lead / system owner — dari alur timesheet sampai dashboard productivity.",
    actions: [
      "Membangun dan memelihara platform timesheet internal (MUC Net) untuk pencatatan aktivitas kerja harian per penugasan.",
      "Menarik dan mengolah data MySQL menjadi dashboard analytics untuk monitoring & controlling produktivitas tim.",
      "Merancang alur pengisian timesheet yang usable: pilih periode, catat aktivitas, durasi, dan konteks project/penugasan.",
      "Menyelaraskan kebutuhan stakeholder (karyawan, manager, operasi) agar data timesheet bisa dipakai untuk reporting dan keputusan.",
      "Menjaga kualitas rilis lewat task breakdown, mentoring developer, dan koordinasi dengan QA/stakeholder.",
    ],
    tradeoffs: [
      "Memprioritaskan visibilitas operasional (monitoring penugasan) daripada fitur analytics yang terlalu kompleks di fase awal.",
      "Menjaga validasi data timesheet cukup ketat untuk akuntabilitas, tanpa membuat proses pengisian terasa berat bagi user harian.",
    ],
    results: [
      "Tim punya satu sumber data timesheet untuk pelaporan operasional harian.",
      "Manajemen mendapat dashboard untuk monitoring penugasan, beban kerja, dan controlling pengisian timesheet.",
      "Keputusan alokasi resource dan evaluasi progress lebih berbasis data aktivitas aktual, bukan asumsi.",
    ],
    stack: [
      "PHP",
      "Laravel",
      "MySQL",
      "Dashboard analytics",
      "Role-based access",
      "Internal web app",
    ],
    // image: "/cases/muc-net-timesheet.png",
    // imageAlt: "Halaman timesheet MUC Net — entri aktivitas kerja harian",
    links: {},
    note: "Tambahkan screenshot timesheet (blur data sensitif) ke public/cases/muc-net-timesheet.png. Isi metrik kepatuhan/produktivitas di results jika ada angka resmi.",
  },
  {
    slug: "mahrizal-digital-agency",
    title: "Mahrizal Digital: dari ide ke situs live untuk UMKM",
    subtitle:
      "Membangun digital agency end-to-end — positioning, website sales, dan pipeline lead.",
    tags: ["Delivery/PM", "Engineering", "System Analysis"],
    year: "2026",
    status: "In progress",
    featured: true,
    context:
      "Banyak UMKM butuh partner teknologi yang approachable. Saya membangun Mahrizal Digital sebagai practice yang fokus pada solusi digital praktis: website, sistem informasi, SEO, dan security.",
    problem:
      "UMKM sering bingung mulai dari mana. Mereka butuh kejelasan layanan, kredibilitas, dan jalur kontak yang mudah — bukan jargon teknologi.",
    role: "Product owner + engineer + delivery lead (multi-hat).",
    actions: [
      "Menentukan positioning, layanan, dan pesan utama untuk pemilik UMKM.",
      "Memecah scope MVP: apa yang harus live dulu vs yang bisa menyusul.",
      "Membangun situs sales & lead generation (Next.js) dengan SEO dasar dan contact flow.",
      "Merancang go-live plan dan iterasi setelah ada sinyal dari calon klien.",
    ],
    tradeoffs: [
      "Memilih kecepatan + kejelasan pesan daripada fitur dashboard yang kompleks di fase awal.",
      "Fokus ke lead generation dulu, baru perluasan layanan setelah ada traction.",
    ],
    results: [
      "Website agency siap live sebagai fondasi kredibilitas dan akuisisi klien pertama.",
      "Alur dari kunjungan → pemahaman layanan → kontak dibuat sesingkat mungkin.",
      "Menjadi bukti end-to-end ownership: dari analisis bisnis sampai implementasi.",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    links: {
      live: "https://YOUR_AGENCY_URL.vercel.app",
      github: "https://github.com/YOUR_GITHUB_USERNAME/agency-mahrizal",
    },
    note: "Ganti link live & GitHub dengan URL aslimu setelah deploy.",
  },
  {
    slug: "requirement-to-backlog",
    title: "Dari requirement kabur ke backlog yang bisa di-ship",
    subtitle:
      "Menyederhanakan permintaan bisnis menjadi scope, flow, dan acceptance criteria yang jelas.",
    tags: ["System Analysis", "Delivery/PM", "Engineering"],
    year: "2024–2025",
    status: "Case study",
    context:
      // TODO: ganti dengan konteks projectmu (boleh anonim)
      "Di project internal/klien, permintaan datang dalam bentuk keinginan luas — “mau sistem yang bisa…” — tanpa batas yang jelas antar stakeholder.",
    problem:
      "Scope mengambang, ekspektasi beda-beda, dan risiko rework tinggi jika langsung coding tanpa alignment.",
    role: "System analyst dengan keterlibatan delivery dan keputusan teknis.",
    actions: [
      "Melakukan discovery singkat: siapa user, apa outcome yang diharapkan, apa constraint-nya.",
      "Memetakan proses as-is → to-be dalam flow yang mudah dibahas bersama bisnis.",
      "Menulis use case / acceptance criteria untuk MVP vs phase berikutnya.",
      "Menyelaraskan prioritas dengan kapasitas implementasi agar timeline realistis.",
    ],
    tradeoffs: [
      "Memotong nice-to-have agar MVP tetap bisa dirilis tanpa mengorbankan inti value.",
      "Dokumentasi dibuat cukup untuk alignment — tidak over-produce.",
    ],
    results: [
      // TODO: ganti dengan hasil nyata (angka lebih baik)
      "Stakeholder punya satu sumber kebenaran untuk scope.",
      "Tim implementasi punya kriteria selesai yang bisa diuji.",
      "Rework akibat salah paham requirement berkurang.",
    ],
    stack: ["Process mapping", "Use cases", "Backlog prioritization", "Agile delivery"],
    links: {},
    note: "Anonimize nama perusahaan. Tambahkan screenshot flow/AC (blur data sensitif) di folder public/cases/.",
  },
  {
    slug: "controlled-release-delivery",
    title: "Rilis terkontrol: quality gate di tengah deadline ketat",
    subtitle:
      "Menjaga prioritas, risiko, dan komunikasi stakeholder sampai fitur benar-benar live.",
    tags: ["Delivery/PM", "Engineering"],
    year: "2024–2025",
    status: "Case study",
    context:
      // TODO: ganti dengan konteks projectmu
      "Project dengan tekanan waktu, dependency lintas pihak, dan ekspektasi fitur yang terus bertambah mendekati deadline.",
    problem:
      "Tanpa gate yang jelas, kualitas mudah longsor: bug late, status kabur, dan scope tidak terkendali.",
    role: "Tech lead / acting engineering manager / delivery lead teknis.",
    actions: [
      "Memecah work menjadi milestone dan critical path yang bisa dipantau.",
      "Membuat risk list singkat + mitigasi (siapa owner, apa fallback-nya).",
      "Menetapkan definisi done sederhana: review, testing ringan, dan kriteria rilis.",
      "Memberi update status yang dipahami non-teknis — progress, blocker, keputusan.",
      "Memutuskan cut/postpone fitur agar tanggal rilis tetap bertahan.",
    ],
    tradeoffs: [
      "Memilih ship date yang dapat diandalkan daripada memaksakan semua fitur masuk.",
      "Quality gate dibuat proporsional — cukup untuk mencegah incident, tidak memperlambat tim.",
    ],
    results: [
      // TODO: isi metrik nyata jika ada
      "Rilis berjalan dengan scope yang disepakati ulang secara sadar.",
      "Stakeholder paham apa yang masuk, apa yang ditunda, dan kenapa.",
      "Tim punya ritme status yang mengurangi kejutan di minggu terakhir.",
    ],
    stack: ["Milestone planning", "Risk management", "Code review", "Release checklist"],
    links: {},
    note: "Cocok ditonjolkan saat apply Engineering Manager / Project Manager.",
  },
  {
    slug: "ai-workflow-feature",
    title: "Fitur AI yang masuk ke workflow — bukan chatbot pajangan",
    subtitle:
      "Membangun bantuan AI yang measurable: input jelas, output berguna, ada fallback manusia.",
    tags: ["AI", "Engineering", "System Analysis"],
    year: "2025–2026",
    status: "In progress",
    featured: true,
    context:
      // TODO: sesuaikan use case AI-mu (contoh: ringkas dokumen, klasifikasi tiket, draft balasan, FAQ internal)
      "Proses manual lambat dan rentan inkonsistensi. Tim butuh bantuan AI untuk mempercepat langkah berulang — bukan chat bebas tanpa tujuan.",
    problem:
      "Demo AI sering terlihat keren tapi tidak terhubung ke pekerjaan harian. Tanpa framing masalah, adopsi rendah dan risiko hallucination tinggi.",
    role: "AI developer + engineer, dengan framing masalah ala system analyst.",
    actions: [
      "Memilih use case yang measurable (waktu, akurasi, atau throughput).",
      "Mendesain flow: input → processing (prompt/RAG/tools) → output → human review bila perlu.",
      "Mengintegrasikan model/API dengan guardrail dasar: fallback, batasan data, dan contoh evaluasi.",
      "Membangun UI yang menjelaskan apa yang AI bantu — bukan black box.",
    ],
    tradeoffs: [
      "Menyeimbangkan akurasi, latency, dan cost.",
      "Memilih solusi sederhana dulu (prompt + struktur) sebelum menambah kompleksitas RAG.",
    ],
    results: [
      // TODO: ganti dengan hasil eval / demo
      "Prototype/demo yang bisa dijalankan dan ditunjukkan ke interviewer/klien.",
      "Kriteria evaluasi awal untuk membedakan “berhasil” vs “terlihat pintar”.",
      "Pola kerja yang bisa dipindah ke use case bisnis lain.",
    ],
    stack: ["TypeScript", "LLM API", "Prompt design", "Next.js", "Eval checklist"],
    links: {
      github: "https://github.com/YOUR_GITHUB_USERNAME/YOUR_AI_REPO",
      demo: "https://YOUR_AI_DEMO.vercel.app",
    },
    note: "Kalau belum ada project AI kerja: selesaikan 1 mini-product publik kecil tapi utuh, lalu update case ini.",
  },
];

export function getCaseBySlug(slug: string) {
  return cases.find((item) => item.slug === slug);
}

export function getFeaturedCases() {
  return cases.filter((item) => item.featured);
}
