import { portraitImage } from '@/data/media'
import type { About, Localized, Profile } from '@/types'

/**
 * ─────────────────────────────────────────────────────────────
 *  EDIT YOUR PERSONAL DETAILS HERE.
 *  Every string is provided in English (`en`) and Indonesian (`id`).
 *  Keep both versions in sync — TypeScript requires both to exist.
 * ─────────────────────────────────────────────────────────────
 */
export const profileContent: Localized<Profile> = {
  en: {
    name: 'Yanuar Lukman Arif',
    firstName: 'Yanuar',
    initials: 'YA',
    role: 'Full-Stack Developer',
    tagline: 'Fast, accessible products, built end to end.',
    intro:
      "I'm a full-stack developer who turns complex product ideas into fast, accessible interfaces — backed by APIs and data models that stay simple as they grow. I care about the details users feel and the architecture teams maintain.",
    location: 'Purbalingga, Indonesia',
    locationShort: 'Purbalingga, ID',
    timezone: 'WIB · UTC+7',
    email: 'yanuarlukman@gmail.com',
    siteUrl: 'https://yanuararif.vercel.app',
    seoDescription:
      'Yanuar Lukman Arif is a full-stack developer in Purbalingga, Indonesia building fast, accessible web products with React, TypeScript, and Node.js.',
    availability: {
      available: true,
      label: 'Available for new projects',
      detail: 'Freelance & full-time · remote-friendly',
    },
    socials: [
      {
        label: 'GitHub',
        href: 'https://github.com/YanuarArif',
        platform: 'github',
      },
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/yanuarlukmanarif',
        platform: 'linkedin',
      },
      {
        label: 'Email',
        href: 'mailto:yanuarlukman@gmail.com',
        platform: 'email',
      },
    ],
  },
  id: {
    name: 'Yanuar Lukman Arif',
    firstName: 'Yanuar',
    initials: 'YA',
    role: 'Developer Full-Stack',
    tagline: 'Produk cepat dan aksesibel, dibangun dari hulu ke hilir.',
    intro:
      'Saya developer full-stack yang mengubah ide produk yang rumit menjadi antarmuka cepat dan aksesibel — didukung API serta model data yang tetap sederhana saat tumbuh. Saya peduli pada detail yang dirasakan pengguna dan arsitektur yang mudah dirawat tim.',
    location: 'Purbalingga, Indonesia',
    locationShort: 'Purbalingga, ID',
    timezone: 'WIB · UTC+7',
    email: 'yanuarlukman@gmail.com',
    siteUrl: 'https://yanuararif.vercel.app',
    seoDescription:
      'Yanuar Lukman Arif adalah developer full-stack di Purbalingga, Indonesia yang membangun produk web cepat dan aksesibel dengan React, TypeScript, dan Node.js.',
    availability: {
      available: true,
      label: 'Terbuka untuk proyek baru',
      detail: 'Freelance & penuh waktu · ramah remote',
    },
    socials: [
      {
        label: 'GitHub',
        href: 'https://github.com/YanuarArif',
        platform: 'github',
      },
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/yanuarlukmanarif',
        platform: 'linkedin',
      },
      {
        label: 'Email',
        href: 'mailto:yanuarlukman@gmail.com',
        platform: 'email',
      },
    ],
  },
}

/**
 * About section copy. Keep it specific and human — this is where a portfolio
 * stops sounding like a résumé and starts sounding like a person.
 */
export const aboutContent: Localized<About> = {
  en: {
    portrait: {
      src: portraitImage,
      alt: 'Abstract portrait illustration of Yanuar Lukman Arif',
    },
    paragraphs: [
      "I've spent the last six years building web products across early-stage startups and small product studios. That usually means working close to the problem: a conversation with the person using the software, a rough wireframe, an API contract, and then the long stretch of making the whole thing feel effortless.",
      'My background started in frontend engineering, but the parts I enjoyed most were always one layer deeper — designing data models, shaping API boundaries, and removing the small bits of friction that make a product tiring to use. Today I work comfortably across React and TypeScript on the client, Node.js and PostgreSQL on the server, and the deployment pipeline in between.',
      'I like teams that value clear thinking over ceremony. I write things down, prefer boring solutions when they fit, and treat accessibility and performance as product requirements rather than cleanup tasks. Away from the editor you can usually find me on a long walk with a camera, reading about typography, or slowly making a very small mechanical keyboard project more complicated than it needs to be.',
    ],
    interests: [
      'Design systems and component architecture',
      'Accessible, keyboard-first interfaces',
      'Web performance and Core Web Vitals',
      'Product discovery and technical writing',
    ],
    goals: [
      'Join a product team where engineering quality is treated as a long-term investment.',
      'Lead the frontend architecture for a product used by thousands of people every day.',
      'Keep growing as a generalist while developing deeper expertise in distributed systems.',
      'Mentor earlier-career developers through code review and practical pairing.',
    ],
    learning: [
      {
        title: 'Rust for small tools',
        description:
          'Building a CLI for image processing to understand ownership and error handling beyond TypeScript.',
      },
      {
        title: 'PostgreSQL performance',
        description:
          'Working through query plans, indexes, and partitioning with realistic data sets.',
      },
      {
        title: 'Motion design',
        description:
          'Studying how timing and easing can make interfaces clearer without adding noise.',
      },
    ],
    highlights: [
      {
        title: 'Product-minded',
        description:
          'Comfortable moving from an ambiguous problem to a small, shippable slice — and iterating from real feedback.',
        icon: 'compass',
      },
      {
        title: 'Accessibility by default',
        description:
          'Semantic markup, keyboard paths, reduced motion, and contrast checks are part of the first implementation, not an audit.',
        icon: 'accessibility',
      },
      {
        title: 'End-to-end ownership',
        description:
          'From data model and API design to interface polish, tests, deployment, and the documentation that follows.',
        icon: 'layers',
      },
    ],
  },
  id: {
    portrait: {
      src: portraitImage,
      alt: 'Ilustrasi potret abstrak Yanuar Lukman Arif',
    },
    paragraphs: [
      'Enam tahun terakhir saya habiskan membangun produk web di startup tahap awal dan studio produk kecil. Itu biasanya berarti bekerja dekat dengan masalahnya: percakapan dengan orang yang memakai perangkat lunak, wireframe kasar, kontrak API, lalu fase panjang membuat semuanya terasa mudah.',
      'Latar belakang saya dimulai dari frontend, tetapi bagian yang paling saya nikmati selalu satu lapis lebih dalam — merancang model data, membentuk batas API, dan menghilangkan gesekan kecil yang membuat produk melelahkan dipakai. Kini saya nyaman bekerja dengan React dan TypeScript di sisi klien, Node.js dan PostgreSQL di sisi server, serta pipeline deployment di antaranya.',
      'Saya menyukai tim yang menghargai pemikiran jernih dibanding seremoni. Saya menuliskan hal penting, memilih solusi membosankan bila memang cocok, dan memperlakukan aksesibilitas serta performa sebagai kebutuhan produk, bukan pekerjaan bersih-bersih. Di luar editor, Anda bisa menemukan saya berjalan jauh dengan kamera, membaca soal tipografi, atau perlahan membuat proyek keyboard mekanik kecil jadi lebih rumit dari seharusnya.',
    ],
    interests: [
      'Design system dan arsitektur komponen',
      'Antarmuka aksesibel yang mengutamakan keyboard',
      'Performa web dan Core Web Vitals',
      'Product discovery dan penulisan teknis',
    ],
    goals: [
      'Bergabung dengan tim produk yang memperlakukan kualitas rekayasa sebagai investasi jangka panjang.',
      'Memimpin arsitektur frontend untuk produk yang dipakai ribuan orang setiap hari.',
      'Terus tumbuh sebagai generalis sambil memperdalam keahlian di sistem terdistribusi.',
      'Membimbing developer yang lebih junior lewat code review dan sesi pairing praktis.',
    ],
    learning: [
      {
        title: 'Rust untuk perkakas kecil',
        description:
          'Membangun CLI untuk pemrosesan gambar guna memahami ownership dan penanganan error di luar TypeScript.',
      },
      {
        title: 'Performa PostgreSQL',
        description:
          'Mempelajari query plan, indeks, dan partisi dengan kumpulan data yang realistis.',
      },
      {
        title: 'Motion design',
        description:
          'Mempelajari bagaimana timing dan easing dapat membuat antarmuka lebih jelas tanpa menambah kebisingan.',
      },
    ],
    highlights: [
      {
        title: 'Berorientasi produk',
        description:
          'Nyaman bergerak dari masalah yang ambigu menjadi potongan kecil yang bisa dirilis — lalu melakukan iterasi dari umpan balik nyata.',
        icon: 'compass',
      },
      {
        title: 'Aksesibilitas sejak awal',
        description:
          'Markup semantik, jalur keyboard, reduced motion, dan pemeriksaan kontras menjadi bagian implementasi pertama, bukan audit susulan.',
        icon: 'accessibility',
      },
      {
        title: 'Kepemilikan menyeluruh',
        description:
          'Dari model data dan desain API hingga polesan antarmuka, pengujian, deployment, dan dokumentasi yang menyertainya.',
        icon: 'layers',
      },
    ],
  },
}
