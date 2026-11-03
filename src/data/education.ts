import type { Education, LearningTopic, Localized } from "@/types";

/**
 * ─────────────────────────────────────────────────────────────
 *  EDUCATION, CERTIFICATIONS, AND THE LEARNING JOURNEY
 *
 *  `institution` and `year` are intentionally left out: the school name and
 *  graduation year are not known yet, and guessing them would be a false
 *  credential. Add them here when you have them — the card shows an editable
 *  placeholder until then.
 *
 *  No certifications are listed on purpose. The Experience section renders a
 *  designed empty state instead of fictional credentials.
 *
 *  Learning is recorded separately from both employment and formal education.
 *  There are no certificates, no completion dates, and no proficiency levels —
 *  only what was studied and how far it has progressed.
 * ─────────────────────────────────────────────────────────────
 */
export const educationContent: Localized<Education[]> = {
  en: [
    {
      id: "smk-tkj",
      level: "Vocational High School (SMK)",
      program: "Computer and Network Engineering (TKJ)",
      location: "Indonesia",
      note: "Vocational education",
      summary:
        "Studied Computer and Network Engineering (TKJ), a vocational program focused on computer hardware, networking fundamentals, network configuration, operating systems, and server administration.",
      subjects: [
        "Computer Hardware",
        "Computer Networking",
        "Network Configuration",
        "Operating Systems",
        "Server Administration",
        "Network Troubleshooting",
      ],
    },
  ],
  id: [
    {
      id: "smk-tkj",
      level: "Sekolah Menengah Kejuruan (SMK)",
      program: "Teknik Komputer dan Jaringan (TKJ)",
      location: "Indonesia",
      note: "Pendidikan vokasi",
      summary:
        "Menempuh program kejuruan Teknik Komputer dan Jaringan (TKJ) yang membahas perangkat keras komputer, dasar jaringan, konfigurasi jaringan, sistem operasi, dan administrasi server.",
      subjects: [
        "Perangkat Keras Komputer",
        "Jaringan Komputer",
        "Konfigurasi Jaringan",
        "Sistem Operasi",
        "Administrasi Server",
        "Troubleshooting Jaringan",
      ],
    },
  ],
};

/**
 * The Learning Journey. Self-directed study only: not employment, not a
 * qualification, and deliberately without progress percentages.
 */
export const learningJourneyContent: Localized<LearningTopic[]> = {
  en: [
    {
      id: "web-foundations",
      topic: "JavaScript, TypeScript & React",
      description:
        "Self-directed study during the career break, working through programming fundamentals, modern JavaScript, static typing with TypeScript, and component-based interfaces with React.",
      period: "2021 — 2023",
      status: "Self-directed",
      focus: [
        "Programming fundamentals",
        "Modern JavaScript",
        "Static typing",
        "Type safety",
        "Component-based UI",
        "React fundamentals",
      ],
    },
    {
      id: "python-ai",
      topic: "Python for AI",
      description:
        "Currently learning Python and exploring its applications in artificial intelligence, focusing on programming fundamentals and building practical knowledge of AI development.",
      status: "Currently learning",
      ongoing: true,
      focus: ["Python fundamentals", "AI fundamentals"],
    },
  ],
  id: [
    {
      id: "web-foundations",
      topic: "JavaScript, TypeScript & React",
      description:
        "Belajar mandiri selama jeda karier: dasar-dasar pemrograman, JavaScript modern, pengetikan statis dengan TypeScript, dan antarmuka berbasis komponen dengan React.",
      period: "2021 — 2023",
      status: "Belajar mandiri",
      focus: [
        "Dasar pemrograman",
        "JavaScript modern",
        "Pengetikan statis",
        "Keamanan tipe",
        "UI berbasis komponen",
        "Dasar React",
      ],
    },
    {
      id: "python-ai",
      topic: "Python untuk AI",
      description:
        "Sedang mempelajari Python dan mengeksplorasi penerapannya di bidang kecerdasan buatan, dengan fokus pada dasar pemrograman dan pemahaman praktis pengembangan AI.",
      status: "Sedang dipelajari",
      ongoing: true,
      focus: ["Dasar Python", "Dasar AI"],
    },
  ],
};