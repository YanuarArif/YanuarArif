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
      detail: "	Freelance & Full-time (Remote)",
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
    tagline: "Membangun aplikasi web dari awal hingga siap digunakan.",
    intro:
      "Saya seorang Full-Stack Developer yang senang membangun aplikasi web. Saya fokus pada performa, pengalaman pengguna, dan kode yang mudah dikembangkan.",
    location: "Purbalingga, Indonesia",
    locationShort: "Purbalingga, ID",
    timezone: "WIB · UTC+7",
    email: "yanuarlukman@gmail.com",
    siteUrl: "https://yanuararif.vercel.app",
    seoDescription:
      "Yanuar Lukman Arif adalah full-stack developer asal Purbalingga, Indonesia. Berfokus membangun aplikasi web yang cepat dan ramah pengguna dengan React, TypeScript, dan Node.js.",
    availability: {
      available: true,
      label: "Siap Mengerjakan Project Baru",
      detail: "Freelance & Full-time (Remote)",
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
    // Empty on purpose: the About section only renders the interests block
    // when this list has items. Restore the entries from git history if you
    // want it back.
    interests: [],
    // Empty on purpose: the About section only renders the goals block when
    // this list has items. The contact link below it stays visible.
    goals: [],
    // Empty on purpose: the About section only renders its "currently learning"
    // card when this list has items. Restore the entries from git history if
    // you want the card back.
    learning: [],
    highlights: [
      {
        title: "Tidy, fast interfaces",
        description:
          "I build React and TypeScript interfaces that stay tidy, responsive, and comfortable to use on modest devices.",
        icon: "layout",
      },
      {
        title: "Shipped for real clients",
        description:
          "I’ve built websites for merchants, schools, and business owners, from gathering requirements through to release.",
        icon: "store",
      },
      {
        title: "Backend and data",
        description:
          "I connect the interface to Node.js and PostgreSQL, including the data models and API flow behind it.",
        icon: "database",
      },
      {
        title: "Quick to learn, open to feedback",
        description:
          "I pick up new tools on my own, including AI experiments, and I’m glad to get feedback on the work I ship.",
        icon: "brain",
      },
    ],
  },
  id: {
    portrait: {
      src: portraitImage,
      alt: "Foto Yanuar Lukman Arif",
    },
    paragraphs: [
      "Selama lebih dari satu tahun terakhir, saya membuat website untuk pedagang, sekolahan dan pembisnis lainnya. Saya juga telah membuat aplikasi ringan berkaitan dengan Artificial Intelligence atau Ai.",
      "Berawal dari frontend, saya menyadari minat besar saya pada pondasi di baliknya—seperti database, alur API, dan detail kecil yang ada di dalamnya yang memengaruhi kenyamanan pengguna. Saat ini saya aktif menggunakan React dan TypeScript di frontend, Node.js dan PostgreSQL di backend, serta mengelola alur deployment.",
      "Saya menyukai alur kerja yang lugas dan efisien. Saya terbiasa mendokumentasikan proses, memilih solusi yang teruji, serta memprioritaskan performa dan aksesibilitas sejak awal pengembangan. Di luar urusan koding, saya suka membaca hal baru di luar pemograman.",
    ],
    // Empty on purpose, same as the English list above.
    interests: [],
    // Empty on purpose, same as the English list above.
    goals: [],
    // Empty on purpose, same as the English list above.
    learning: [],
    highlights: [
      {
        title: "Antarmuka Rapi dan Cepat",
        description:
          "Membangun antarmuka dengan React dan TypeScript yang rapi, responsif, serta tetap nyaman dipakai di perangkat sederhana.",
        icon: "layout",
      },
      {
        title: "Terbiasa Proyek Nyata",
        description:
          "Sudah mengerjakan website untuk pedagang, sekolah, dan pemilik usaha—dari menggali kebutuhan sampai rilis.",
        icon: "store",
      },
      {
        title: "Backend dan Basis Data",
        description:
          "Menghubungkan tampilan ke Node.js dan PostgreSQL, termasuk merancang model data dan alur API di belakangnya.",
        icon: "database",
      },
      {
        title: "Cepat Belajar, Terbuka Masukan",
        description:
          "Terbiasa mempelajari perkakas baru secara mandiri, termasuk eksplorasi AI, dan senang menerima masukan atas hasil kerja.",
        icon: "brain",
      },
    ],
  },
};
