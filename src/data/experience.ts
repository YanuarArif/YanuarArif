import type { Locale, Localized, WorkExperience } from "@/types";

/**
 * ─────────────────────────────────────────────────────────────
 *  CAREER TIMELINE — the source of truth for the Experience section.
 *
 *  Rules kept here on purpose:
 *  • Dates are the real ones and are never adjusted, even where two roles
 *    overlap (BaBe and JalanTikus.com). The timeline renders newest first via
 *    `sortNewestFirst()`, which is ordering only — no date is touched.
 *  • The freelance start month has not been confirmed, so that entry is
 *    year-only (`precision: "year"`) and its duration is shown as a lower
 *    bound rather than an invented precise figure.
 *  • `duration` is stored only for completed, month-precise entries. Ongoing
 *    entries compute it at render time, so the current role keeps counting.
 *  • Visual Advertising and DascoMart carry no `role`, because no job title is
 *    known for them. Nothing is invented to fill the gap.
 *  • A career break is a timeline entry with `kind: "break"`: no employment
 *    type, presented as a deliberate gap. Learning that happened during the
 *    break lives in the separate Learning Journey section, not here.
 * ─────────────────────────────────────────────────────────────
 */
export const workExperienceContent: Localized<WorkExperience[]> = {
  en: [
    {
      id: "freelance",
      kind: "role",
      organisation: "Freelance",
      role: "Full-Stack Web Developer",
      location: "Remote",
      type: "self-employed",
      start: "2023",
      end: null,
      precision: "year",
      labels: { en: "Engineering", id: "Rekayasa" },
      summary:
        "Building full-stack websites and web applications for freelance projects, focusing on practical solutions, maintainable code, and modern web technologies.",
    },
    {
      id: "career-break",
      kind: "break",
      location: "Purbalingga, Indonesia",
      start: "2021-09",
      end: "2023-08",
      labels: { en: "Personal break", id: "Jeda pribadi" },
      duration: { en: "2 years", id: "2 tahun" },
      summary:
        "A personal career break before transitioning into freelance web development.",
    },
    {
      id: "barlingreload",
      kind: "role",
      organisation: "BarlingReload",
      role: "Server Administrator",
      location: "Purbalingga, Indonesia",
      type: "full-time",
      start: "2019-10",
      end: "2021-08",
      labels: { en: "Server operations", id: "Operasional server" },
      duration: { en: "1 year, 11 months", id: "1 tahun 11 bulan" },
      summary:
        "Maintained game server operations through installation, configuration, routine maintenance, and troubleshooting issues reported by players and staff.",
    },
    {
      id: "jalantikus",
      kind: "role",
      organisation: "JalanTikus.com",
      role: "Content Writer",
      location: "Remote",
      type: "parallel",
      start: "2017-12",
      end: "2018-10",
      labels: { en: "Content", id: "Konten" },
      duration: { en: "11 months", id: "11 bulan" },
      summary:
        "Wrote technology articles for Indonesian readers, from researching topics and preparing drafts to publishing content.",
    },
    {
      id: "babe",
      kind: "role",
      organisation: "BaBe",
      role: "Content Writer",
      location: "Remote",
      type: "parallel",
      start: "2016-09",
      end: "2018-01",
      labels: { en: "Content", id: "Konten" },
      duration: { en: "1 year, 5 months", id: "1 tahun 5 bulan" },
      summary:
        "Prepared daily editorial content, from initial drafts to editing and publication.",
    },
    {
      id: "dascomart",
      kind: "role",
      organisation: "DascoMart",
      location: "Bobotsari, Indonesia",
      start: "2015-11",
      end: "2016-03",
      labels: { en: "Retail", id: "Ritel" },
      duration: { en: "5 months", id: "5 bulan" },
      summary:
        "Worked in a local retail environment, assisting with customer service and daily store operations.",
    },
    {
      id: "visual-advertising",
      kind: "role",
      organisation: "Visual Advertising",
      location: "Purbalingga, Indonesia",
      start: "2015-09",
      end: "2015-11",
      labels: { en: "Advertising", id: "Periklanan" },
      duration: { en: "3 months", id: "3 bulan" },
      summary:
        "An early three-month role in a small advertising team, supporting the work the team handled.",
    },
  ],
  id: [
    {
      id: "freelance",
      kind: "role",
      organisation: "Freelance",
      role: "Developer Web Full-Stack",
      location: "Remote",
      type: "self-employed",
      start: "2023",
      end: null,
      precision: "year",
      labels: { en: "Engineering", id: "Rekayasa" },
      summary:
        "Membangun situs dan aplikasi web full-stack untuk proyek freelance, dengan fokus pada solusi praktis, kode yang mudah dirawat, dan teknologi web modern.",
    },
    {
      id: "career-break",
      kind: "break",
      location: "Purbalingga, Indonesia",
      start: "2021-09",
      end: "2023-08",
      labels: { en: "Personal break", id: "Jeda pribadi" },
      duration: { en: "2 years", id: "2 tahun" },
      summary:
        "Jeda karier pribadi sebelum beralih ke pengembangan web freelance.",
    },
    {
      id: "barlingreload",
      kind: "role",
      organisation: "BarlingReload",
      role: "Administrator Server",
      location: "Purbalingga, Indonesia",
      type: "full-time",
      start: "2019-10",
      end: "2021-08",
      labels: { en: "Server operations", id: "Operasional server" },
      duration: { en: "1 year, 11 months", id: "1 tahun 11 bulan" },
      summary:
        "Menjaga operasional server game lewat instalasi, konfigurasi, perawatan rutin, dan penanganan masalah yang dilaporkan pemain maupun staf.",
    },
    {
      id: "jalantikus",
      kind: "role",
      organisation: "JalanTikus.com",
      role: "Penulis Konten",
      location: "Remote",
      type: "parallel",
      start: "2017-12",
      end: "2018-10",
      labels: { en: "Content", id: "Konten" },
      duration: { en: "11 months", id: "11 bulan" },
      summary:
        "Menulis artikel teknologi untuk pembaca Indonesia, mulai dari riset topik dan penyusunan draf sampai penerbitan konten.",
    },
    {
      id: "babe",
      kind: "role",
      organisation: "BaBe",
      role: "Penulis Konten",
      location: "Remote",
      type: "parallel",
      start: "2016-09",
      end: "2018-01",
      labels: { en: "Content", id: "Konten" },
      duration: { en: "1 year, 5 months", id: "1 tahun 5 bulan" },
      summary:
        "Menyiapkan konten editorial harian, dari draf awal sampai penyuntingan dan penerbitan.",
    },
    {
      id: "dascomart",
      kind: "role",
      organisation: "DascoMart",
      location: "Bobotsari, Indonesia",
      start: "2015-11",
      end: "2016-03",
      labels: { en: "Retail", id: "Ritel" },
      duration: { en: "5 months", id: "5 bulan" },
      summary:
        "Bekerja di lingkungan ritel lokal, membantu pelayanan pelanggan dan operasional toko sehari-hari.",
    },
    {
      id: "visual-advertising",
      kind: "role",
      organisation: "Visual Advertising",
      location: "Purbalingga, Indonesia",
      start: "2015-09",
      end: "2015-11",
      labels: { en: "Advertising", id: "Periklanan" },
      duration: { en: "3 months", id: "3 bulan" },
      summary:
        "Peran awal selama tiga bulan di tim periklanan kecil, membantu pekerjaan yang ditangani tim.",
    },
  ],
};

/* ── Display formatting ─────────────────────────────────────────────── */

/** Month names written the way the timeline label reads them. */
const monthNames: Record<Locale, readonly string[]> = {
  en: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  id: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Agu",
    "Sep",
    "Okt",
    "Nov",
    "Des",
  ],
};

/**
 * Turns a date key into its display label. A `null` key means the entry is
 * still running, so an empty string is returned and the caller supplies its
 * localized "present" label. A `YYYY` key stays year-only — no month invented.
 */
export function formatPeriodDate(key: string | null, locale: Locale): string {
  if (!key) {
    return "";
  }

  const [year, month] = key.split("-");

  if (!month) {
    return year;
  }

  const monthName = monthNames[locale][Number(month) - 1];

  return monthName ? `${monthName} ${year}` : year;
}

/** Sort key for a date key (`YYYY-MM` or `YYYY`). A missing value sorts last. */
export function periodSortKey(key: string | null): number {
  if (!key) {
    return 0;
  }

  const [year, month] = key.split("-");

  return Number(year) * 100 + (month ? Number(month) : 12);
}

/**
 * Newest first, with ongoing entries pinned above finished ones. The end date
 * breaks ties so overlapping roles stay in a stable, sensible order.
 *
 * Ordering only: this never rewrites a date, so the BaBe / JalanTikus.com
 * overlap survives exactly as recorded.
 */
export function sortNewestFirst<T extends WorkExperience>(
  entries: readonly T[],
): T[] {
  return [...entries].sort((a, b) => {
    const ongoingDelta = Number(b.end === null) - Number(a.end === null)

    if (ongoingDelta !== 0) {
      return ongoingDelta
    }

    return (
      periodSortKey(b.start) - periodSortKey(a.start) ||
      periodSortKey(b.end) - periodSortKey(a.end)
    )
  })
}