import type { Localized, TimelineEntry, TimelineKind } from "@/types";

/**
 * Fictional sample history — replace with your own roles.
 * `kind` controls the icon used by the timeline and is translated through
 * `experienceKindLabelsContent`.
 */
export const experienceContent: Localized<TimelineEntry[]> = {
  en: [
    {
      id: "northlight",
      kind: "work",
      title: "Senior Full-Stack Developer",
      organisation: "Northlight Studio",
      location: "Copenhagen · Hybrid",
      start: "2023",
      end: "Present",
      summary:
        "A product studio building web apps for early-stage teams. I lead the frontend architecture and stay close to API design and releases.",
      highlights: [
        "Led the rebuild of a client’s analytics product, moving it from a legacy dashboard to a React app with route-based code splitting.",
        "Introduced a shared design system and a typed API client that four client projects now use.",
        "Shortened CI feedback time by splitting the test suites and caching dependency installs.",
        "Mentored two mid-level developers through structured code reviews and pairing sessions.",
      ],
      tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "Design systems"],
    },
    {
      id: "cobalt",
      kind: "work",
      title: "Full-Stack Developer",
      organisation: "Cobalt Systems",
      location: "Berlin · Remote",
      start: "2020",
      end: "2023",
      summary:
        "A B2B analytics platform for operations teams. I worked across the React client, the Node services, and the reporting data model.",
      highlights: [
        "Designed the permissions model and API that every workspace role relies on.",
        "Built a filterable reporting screen that keeps complex query state in the URL.",
        "Made pages load faster by shrinking the client bundle and deferring the heavy chart modules.",
        "Added integration tests around the billing and export flows, which broke most often.",
      ],
      tags: ["React", "TypeScript", "REST APIs", "Prisma", "PostgreSQL"],
    },
    {
      id: "freelance",
      kind: "freelance",
      title: "Freelance Web Developer",
      organisation: "Independent",
      location: "Remote",
      start: "2019",
      end: "2020",
      summary:
        "Designed and built focused websites and small online shops for independent studios and local businesses.",
      highlights: [
        "Delivered responsive marketing sites and lightweight storefronts from start to finish.",
        "Set up a repeatable handoff for content editing and analytics.",
        "Learned to scope work around the outcome the client wants, not a list of features.",
      ],
      tags: ["JavaScript", "CSS", "Accessibility", "CMS"],
    },
    {
      id: "open-source",
      kind: "development",
      title: "Open-source & technical writing",
      organisation: "Independent practice",
      location: "Remote",
      start: "2022",
      end: "Present",
      summary:
        "My way of learning in public: small utilities, careful code reviews, and notes on interface engineering.",
      highlights: [
        "Maintain a small TypeScript utility for typed form validation.",
        "Write practical articles on React architecture, accessibility, and developer experience.",
        "Send the occasional documentation or accessibility fix to projects I use.",
      ],
      tags: ["Open source", "Writing", "TypeScript", "Accessibility"],
    },
  ],
  id: [
    {
      id: "northlight",
      kind: "work",
      title: "Developer Full-Stack Senior",
      organisation: "Northlight Studio",
      location: "Kopenhagen · Hybrid",
      start: "2023",
      end: "Sekarang",
      summary:
        "Studio produk yang membuat aplikasi web untuk tim tahap awal. Saya memimpin arsitektur frontend dan tetap ikut di desain API serta proses rilis.",
      highlights: [
        "Memimpin pembangunan ulang produk analitik milik klien, dari dashboard lama menjadi aplikasi React dengan code splitting per rute.",
        "Memperkenalkan design system bersama dan klien API bertipe yang sekarang dipakai di empat proyek klien.",
        "Mempersingkat waktu tunggu CI dengan memecah rangkaian tes dan meng-cache instalasi dependensi.",
        "Membimbing dua developer level menengah lewat code review terstruktur dan sesi pairing.",
      ],
      tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "Design system"],
    },
    {
      id: "cobalt",
      kind: "work",
      title: "Developer Full-Stack",
      organisation: "Cobalt Systems",
      location: "Berlin · Remote",
      start: "2020",
      end: "2023",
      summary:
        "Platform analitik B2B untuk tim operasional. Saya mengerjakan klien React, layanan Node, dan model data untuk pelaporan.",
      highlights: [
        "Merancang model izin dan API yang dipakai oleh setiap peran di workspace.",
        "Membangun halaman laporan dengan filter yang menyimpan state query kompleks di URL.",
        "Membuat halaman lebih cepat dimuat dengan memperkecil bundle klien dan menunda modul grafik yang berat.",
        "Menambahkan integration test di alur penagihan dan ekspor, dua bagian yang paling sering bermasalah.",
      ],
      tags: ["React", "TypeScript", "REST API", "Prisma", "PostgreSQL"],
    },
    {
      id: "freelance",
      kind: "freelance",
      title: "Developer Web Freelance",
      organisation: "Independen",
      location: "Remote",
      start: "2019",
      end: "2020",
      summary:
        "Merancang dan membangun situs web yang fokus serta toko online kecil untuk studio independen dan bisnis lokal.",
      highlights: [
        "Mengerjakan situs pemasaran responsif dan toko ringan dari awal sampai selesai.",
        "Menyusun alur serah terima yang bisa diulang untuk pengelolaan konten dan pemasangan analitik.",
        "Belajar menentukan lingkup kerja dari hasil yang diinginkan klien, bukan dari daftar fitur.",
      ],
      tags: ["JavaScript", "CSS", "Aksesibilitas", "CMS"],
    },
    {
      id: "open-source",
      kind: "development",
      title: "Open-source & penulisan teknis",
      organisation: "Praktik independen",
      location: "Remote",
      start: "2022",
      end: "Sekarang",
      summary:
        "Cara saya belajar di depan umum: utilitas kecil, code review yang teliti, dan catatan seputar rekayasa antarmuka.",
      highlights: [
        "Merawat utilitas TypeScript kecil untuk validasi formulir bertipe.",
        "Menulis artikel praktis soal arsitektur React, aksesibilitas, dan developer experience.",
        "Sesekali mengirim perbaikan dokumentasi atau aksesibilitas ke proyek yang saya pakai.",
      ],
      tags: ["Open source", "Penulisan", "TypeScript", "Aksesibilitas"],
    },
  ],
};

export const experienceKindLabelsContent: Localized<
  Record<TimelineKind, string>
> = {
  en: {
    work: "Full-time",
    freelance: "Freelance",
    education: "Education",
    certification: "Certification",
    development: "Personal development",
  },
  id: {
    work: "Penuh waktu",
    freelance: "Freelance",
    education: "Pendidikan",
    certification: "Sertifikasi",
    development: "Pengembangan pribadi",
  },
};
