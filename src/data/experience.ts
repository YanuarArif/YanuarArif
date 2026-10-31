import type { Localized, TimelineEntry, TimelineKind } from '@/types'

/**
 * Fictional sample history — replace with your own roles.
 * `kind` controls the icon used by the timeline and is translated through
 * `experienceKindLabelsContent`.
 */
export const experienceContent: Localized<TimelineEntry[]> = {
  en: [
    {
      id: 'northlight',
      kind: 'work',
      title: 'Senior Full-Stack Developer',
      organisation: 'Northlight Studio',
      location: 'Copenhagen · Hybrid',
      start: '2023',
      end: 'Present',
      summary:
        'Product studio building web applications for early-stage teams. I lead frontend architecture while staying close to API design and delivery.',
      highlights: [
        'Led the rebuild of a client analytics product from a legacy dashboard to a route-split React application.',
        'Introduced a shared design system and typed API client used across four client projects.',
        'Reduced CI feedback time by splitting test suites and caching dependency installs.',
        'Mentored two mid-level developers through structured code review and pairing sessions.',
      ],
      tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Design systems'],
    },
    {
      id: 'cobalt',
      kind: 'work',
      title: 'Full-Stack Developer',
      organisation: 'Cobalt Systems',
      location: 'Berlin · Remote',
      start: '2020',
      end: '2023',
      summary:
        'B2B analytics platform for operations teams. I worked across the React client, Node services, and the reporting data model.',
      highlights: [
        'Designed a permissions model and API used by every workspace role.',
        'Built a filterable reporting interface that kept complex query state in the URL.',
        'Improved page performance by reducing client bundle size and deferring heavy chart modules.',
        'Added integration tests around the most error-prone billing and export flows.',
      ],
      tags: ['React', 'TypeScript', 'REST APIs', 'Prisma', 'PostgreSQL'],
    },
    {
      id: 'freelance',
      kind: 'freelance',
      title: 'Freelance Web Developer',
      organisation: 'Independent',
      location: 'Remote',
      start: '2019',
      end: '2020',
      summary:
        'Designed and built focused websites and small commerce experiences for independent studios and local businesses.',
      highlights: [
        'Delivered responsive marketing sites and lightweight storefronts end to end.',
        'Established a repeatable handoff process for content editing and analytics setup.',
        'Learned to scope work around outcomes rather than feature lists.',
      ],
      tags: ['JavaScript', 'CSS', 'Accessibility', 'CMS'],
    },
    {
      id: 'open-source',
      kind: 'development',
      title: 'Open-source & technical writing',
      organisation: 'Independent practice',
      location: 'Remote',
      start: '2022',
      end: 'Present',
      summary:
        'A deliberate practice for learning in public: small utilities, careful code reviews, and notes on interface engineering.',
      highlights: [
        'Maintain a small TypeScript utility for typed form validation.',
        'Write practical articles about React architecture, accessibility, and developer experience.',
        'Contribute occasional documentation and accessibility fixes to projects I use.',
      ],
      tags: ['Open source', 'Writing', 'TypeScript', 'Accessibility'],
    },
  ],
  id: [
    {
      id: 'northlight',
      kind: 'work',
      title: 'Developer Full-Stack Senior',
      organisation: 'Northlight Studio',
      location: 'Kopenhagen · Hybrid',
      start: '2023',
      end: 'Sekarang',
      summary:
        'Studio produk yang membangun aplikasi web untuk tim tahap awal. Saya memimpin arsitektur frontend sekaligus tetap dekat dengan desain API dan proses rilis.',
      highlights: [
        'Memimpin pembangunan ulang produk analitik klien dari dashboard legacy menjadi aplikasi React dengan pemisahan rute.',
        'Memperkenalkan design system bersama dan klien API bertipe yang dipakai di empat proyek klien.',
        'Memangkas waktu umpan balik CI dengan memisahkan rangkaian pengujian dan meng-cache instalasi dependensi.',
        'Membimbing dua developer tingkat menengah melalui code review terstruktur dan sesi pairing.',
      ],
      tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Design system'],
    },
    {
      id: 'cobalt',
      kind: 'work',
      title: 'Developer Full-Stack',
      organisation: 'Cobalt Systems',
      location: 'Berlin · Remote',
      start: '2020',
      end: '2023',
      summary:
        'Platform analitik B2B untuk tim operasional. Saya bekerja di klien React, layanan Node, dan model data pelaporan.',
      highlights: [
        'Merancang model izin dan API yang dipakai setiap peran workspace.',
        'Membangun antarmuka pelaporan dengan filter yang menyimpan state query kompleks di URL.',
        'Meningkatkan performa halaman dengan mengurangi ukuran bundle klien dan menunda modul grafik yang berat.',
        'Menambahkan integration test pada alur penagihan dan ekspor yang paling rawan error.',
      ],
      tags: ['React', 'TypeScript', 'REST API', 'Prisma', 'PostgreSQL'],
    },
    {
      id: 'freelance',
      kind: 'freelance',
      title: 'Developer Web Freelance',
      organisation: 'Independen',
      location: 'Remote',
      start: '2019',
      end: '2020',
      summary:
        'Merancang dan membangun situs web terfokus serta pengalaman commerce kecil untuk studio independen dan bisnis lokal.',
      highlights: [
        'Mengirim situs pemasaran responsif dan toko ringan secara menyeluruh dari awal sampai akhir.',
        'Menyusun proses serah terima yang dapat diulang untuk penyuntingan konten dan pemasangan analitik.',
        'Belajar menyusun lingkup kerja berdasarkan hasil, bukan daftar fitur.',
      ],
      tags: ['JavaScript', 'CSS', 'Aksesibilitas', 'CMS'],
    },
    {
      id: 'open-source',
      kind: 'development',
      title: 'Open-source & penulisan teknis',
      organisation: 'Praktik independen',
      location: 'Remote',
      start: '2022',
      end: 'Sekarang',
      summary:
        'Praktik yang sengaja dilakukan untuk belajar di depan publik: utilitas kecil, code review yang cermat, dan catatan tentang rekayasa antarmuka.',
      highlights: [
        'Mengelola utilitas TypeScript kecil untuk validasi formulir bertipe.',
        'Menulis artikel praktis tentang arsitektur React, aksesibilitas, dan developer experience.',
        'Sesekali berkontribusi dokumentasi dan perbaikan aksesibilitas pada proyek yang saya pakai.',
      ],
      tags: ['Open source', 'Penulisan', 'TypeScript', 'Aksesibilitas'],
    },
  ],
}

export const experienceKindLabelsContent: Localized<Record<TimelineKind, string>> = {
  en: {
    work: 'Full-time',
    freelance: 'Freelance',
    education: 'Education',
    certification: 'Certification',
    development: 'Personal development',
  },
  id: {
    work: 'Penuh waktu',
    freelance: 'Freelance',
    education: 'Pendidikan',
    certification: 'Sertifikasi',
    development: 'Pengembangan pribadi',
  },
}
