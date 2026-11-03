import databaseCover from '@/assets/images/blog/database-design.svg'
import dockerCover from '@/assets/images/blog/docker.svg'
import hooksCover from '@/assets/images/blog/react-hooks.svg'
import scalableCover from '@/assets/images/blog/scalable-react.svg'
import typescriptCover from '@/assets/images/blog/typescript-patterns.svg'
import portraitPhoto from '@/assets/images/portrait-yanuararif.jpg'
import kivaposCover from '@/assets/images/projects/kivapos-cover.webp'
import kivaposPlans from '@/assets/images/projects/kivapos-plans.webp'
import kivaposReports from '@/assets/images/projects/kivapos-reports.webp'
import saletafoodCover from '@/assets/images/projects/saletafood-cover.webp'
import saletafoodProducts from '@/assets/images/projects/saletafood-products.webp'

/**
 * Shared media. Both language versions of the content point at the same
 * files, so the imports live here instead of being duplicated per locale.
 *
 * Project screenshots are real captures from the live applications, stored as
 * WebP at 1600px wide so a retina card stays sharp without shipping the
 * original multi-megabyte PNGs. The untouched sources live in
 * `public/images/projects/`.
 *
 * The portrait is the author's own 1885x2303 crop of
 * profile-yanuararif-crop.jpg, resized to 900x1100 (9:11) with no further
 * cropping. The stored pixels are already in display orientation, and all
 * metadata, including GPS, is stripped.
 */
export const portraitImage = portraitPhoto

export const projectMedia = {
  kivapos: {
    cover: kivaposCover,
    reports: kivaposReports,
    plans: kivaposPlans,
  },
  saletafood: {
    cover: saletafoodCover,
    products: saletafoodProducts,
  },
} as const

export const blogMedia = {
  hooks: hooksCover,
  scalable: scalableCover,
  typescript: typescriptCover,
  docker: dockerCover,
  database: databaseCover,
} as const
