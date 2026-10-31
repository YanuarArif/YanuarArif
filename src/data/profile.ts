import { portraitImage } from "@/data/media";
import type { About, Localized, Profile } from "@/types";

/**
 * ─────────────────────────────────────────────────────────────
 *  EDIT YOUR PERSONAL DETAILS HERE.
 *  Every string is provided in English (`en`) and Indonesian (`id`).
 *  Keep both versions in sync — TypeScript requires both to exist.
 * ─────────────────────────────────────────────────────────────
 */
export const profileContent: Localized<Profile> = {
  en: {
    name: "Yanuar Lukman Arif",
    firstName: "Yanuar",
    initials: "YA",
    role: "Full-Stack Developer",
    tagline: "I build web products from the database to the button.",
    intro:
      "I’m a full-stack developer. I take messy product ideas and turn them into fast, accessible interfaces, with an API and a database underneath that stay simple as the product grows. I pay attention to what users notice, and to what the next developer will have to live with.",
    location: "Purbalingga, Indonesia",
    locationShort: "Purbalingga, ID",
    timezone: "WIB · UTC+7",
    email: "yanuarlukman@gmail.com",
    siteUrl: "https://yanuararif.vercel.app",
    seoDescription:
      "Yanuar Lukman Arif is a full-stack developer based in Purbalingga, Indonesia. He builds fast, accessible web apps with React, TypeScript, and Node.js.",
    availability: {
      available: true,
      label: "Available for new projects",
      detail: "Freelance or full-time, remote is fine",
    },
    socials: [
      {
        label: "GitHub",
        href: "https://github.com/YanuarArif",
        platform: "github",
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/yanuarlukmanarif",
        platform: "linkedin",
      },
      {
        label: "Email",
        href: "mailto:yanuarlukman@gmail.com",
        platform: "email",
      },
    ],
  },
  id: {
    name: "Yanuar Lukman Arif",
    firstName: "Yanuar",
    initials: "YA",
    role: "Full-Stack Developer",
    tagline: "Merakit produk web, dari basis data hingga tampilan akhir.",
    intro:
      "Saya seorang full-stack developer. Saya mengubah ide produk yang rumit menjadi aplikasi web yang cepat dan intuitif, dengan arsitektur API dan basis data yang tetap rapi seiring berjalannya waktu. Saya peduli pada kenyamanan pengguna sekaligus kemudahan perawatan kode bagi tim.",
    location: "Purbalingga, Indonesia",
    locationShort: "Purbalingga, ID",
    timezone: "WIB · UTC+7",
    email: "yanuarlukman@gmail.com",
    siteUrl: "https://yanuararif.vercel.app",
    seoDescription:
      "Yanuar Lukman Arif adalah full-stack developer asal Purbalingga, Indonesia. Berfokus membangun aplikasi web yang cepat dan ramah pengguna dengan React, TypeScript, dan Node.js.",
    availability: {
      available: true,
      label: "Terbuka untuk proyek baru",
      detail: "Freelance maupun penuh waktu (remote)",
    },
    socials: [
      {
        label: "GitHub",
        href: "https://github.com/YanuarArif",
        platform: "github",
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/yanuarlukmanarif",
        platform: "linkedin",
      },
      {
        label: "Email",
        href: "mailto:yanuarlukman@gmail.com",
        platform: "email",
      },
    ],
  },
};

/**
 * About section copy. Keep it specific and human — this is where a portfolio
 * stops sounding like a résumé and starts sounding like a person.
 */
export const aboutContent: Localized<About> = {
  en: {
    portrait: {
      src: portraitImage,
      alt: "Portrait photograph of Yanuar Lukman Arif",
    },
    paragraphs: [
      "For about six years I’ve been building web products at early-stage startups and small product studios. The work usually starts close to the problem: a chat with the person who’ll use the software, a rough wireframe, an API contract. Then comes the long stretch of making the whole thing feel easy to use.",
      "I started in frontend, but I always liked the layer just below it more: data models, API boundaries, and the small frictions that make an app tiring to use. These days I’m comfortable with React and TypeScript on the client, Node.js and PostgreSQL on the server, and the deployment pipeline in between.",
      "I like teams that think clearly and skip the ceremony. I write things down, pick the boring solution when it fits, and treat accessibility and performance as part of the requirements, not a cleanup job for later. Outside the editor I’m usually out on a long walk with a camera, reading about typography, or making a tiny mechanical keyboard project more complicated than it needs to be.",
    ],
    interests: [
      "Design systems and component architecture",
      "Accessible, keyboard-first interfaces",
      "Web performance and Core Web Vitals",
      "Product discovery and technical writing",
    ],
    goals: [
      "Join a product team that treats engineering quality as a long-term investment.",
      "Lead frontend architecture for a product that thousands of people use every day.",
      "Stay a generalist while going deeper on distributed systems.",
      "Mentor newer developers through code review and pairing.",
    ],
    learning: [
      {
        title: "Rust for small tools",
        description:
          "Writing a small image-processing CLI to learn ownership and error handling outside TypeScript.",
      },
      {
        title: "PostgreSQL performance",
        description:
          "Reading query plans and trying out indexes and partitioning on realistic data.",
      },
      {
        title: "Motion design",
        description:
          "Looking at how timing and easing can make an interface easier to follow without adding noise.",
      },
    ],
    highlights: [
      {
        title: "Product-minded",
        description:
          "I’m good at taking a vague problem, cutting it down to a small piece that can ship, and improving it from real feedback.",
        icon: "compass",
      },
      {
        title: "Accessibility by default",
        description:
          "Semantic markup, keyboard paths, reduced motion, and contrast checks go into the first version instead of waiting for an audit.",
        icon: "accessibility",
      },
      {
        title: "End-to-end ownership",
        description:
          "Data model, API, interface polish, tests, deployment, and the docs that go with them.",
        icon: "layers",
      },
    ],
  },
  id: {
    portrait: {
      src: portraitImage,
      alt: "Foto Yanuar Lukman Arif",
    },
    paragraphs: [
      "Selama enam tahun terakhir, saya merakit berbagai produk web untuk startup dan studio produk. Pekerjaan saya biasanya dimulai langsung dari akar masalah: berdiskusi dengan pengguna, membuat sketsa alur (wireframe), menyusun kesepakatan API, lalu memastikan aplikasi nyaman dan mulus saat digunakan.",
      "Berawal dari frontend, saya menyadari minat besar saya pada fondasi di baliknya—seperti model data, alur API, dan detail kecil yang memengaruhi kenyamanan pengguna. Saat ini saya aktif menggunakan React dan TypeScript di frontend, Node.js dan PostgreSQL di backend, serta mengelola alur deployment.",
      "Saya menyukai alur kerja yang lugas dan efisien. Saya terbiasa mendokumentasikan proses, memilih solusi yang teruji, serta memprioritaskan performa dan aksesibilitas sejak awal pengembangan. Di luar urusan koding, saya suka berjalan santai sambil membawa kamera, membaca tentang tipografi, atau mengutak-atik rakitan mechanical keyboard.",
    ],
    interests: [
      "Design system dan arsitektur komponen",
      "Antarmuka aksesibel berbasis navigasi keyboard",
      "Performa web dan Core Web Vitals",
      "Product discovery dan penulisan teknis",
    ],
    goals: [
      "Bergabung dengan tim yang memandang kualitas rekayasa sebagai investasi jangka panjang.",
      "Memimpin arsitektur frontend untuk produk yang digunakan ribuan orang tiap hari.",
      "Tetap menjadi generalis sambil mendalami sistem terdistribusi.",
      "Membimbing developer lain melalui code review dan pair programming.",
    ],
    learning: [
      {
        title: "Rust untuk perkakas CLI",
        description:
          "Membuat CLI pemrosesan gambar untuk mempelajari ownership dan error handling di luar ekosistem TypeScript.",
      },
      {
        title: "Optimasi PostgreSQL",
        description:
          "Menganalisis query plan serta menguji penggunaan indeks dan partisi pada himpunan data nyata.",
      },
      {
        title: "Motion design",
        description:
          "Mempelajari timing dan easing agar alur antarmuka lebih alami tanpa terasa mengganggu.",
      },
    ],
    highlights: [
      {
        title: "Pola Pikir Berbasis Produk",
        description:
          "Terbiasa memecah masalah kompleks menjadi potongan fitur siap rilis, lalu mengembangkannya berdasarkan masukan pengguna.",
        icon: "compass",
      },
      {
        title: "Aksesibilitas Sejak Awal",
        description:
          "Markup semantik, navigasi keyboard, mode reduced motion, dan uji kontras warna langsung diterapkan sejak versi awal.",
        icon: "accessibility",
      },
      {
        title: "Tanggung Jawab Menyeluruh (End-to-End)",
        description:
          "Menangani seluruh alur: mulai dari model data, API, tampilan antarmuka, pengujian, deployment, hingga dokumentasinya.",
        icon: "layers",
      },
    ],
  },
};
