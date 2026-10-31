import databaseCover from '@/assets/images/blog/database-design.svg'
import dockerCover from '@/assets/images/blog/docker.svg'
import hooksCover from '@/assets/images/blog/react-hooks.svg'
import scalableCover from '@/assets/images/blog/scalable-react.svg'
import typescriptCover from '@/assets/images/blog/typescript-patterns.svg'
import portraitPhoto from '@/assets/images/portrait-yanuararif.jpg'
import fintrackCover from '@/assets/images/projects/fintrack-cover.svg'
import fintrackDetail from '@/assets/images/projects/fintrack-detail.svg'
import fitlifeCover from '@/assets/images/projects/fitlife-cover.svg'
import fitlifeDetail from '@/assets/images/projects/fitlife-detail.svg'
import shopeaseCover from '@/assets/images/projects/shopease-cover.svg'
import shopeaseDetail from '@/assets/images/projects/shopease-detail.svg'
import taskflowCover from '@/assets/images/projects/taskflow-cover.svg'
import taskflowDetail from '@/assets/images/projects/taskflow-detail.svg'

/**
 * Shared media. Both language versions of the content point at the same
 * files, so the imports live here instead of being duplicated per locale.
 *
 * The portrait is the author's own 1885x2303 crop of
 * profile-yanuararif-crop.jpg, resized to 900x1100 (9:11) with no further
 * cropping. The stored pixels are already in display orientation, and all
 * metadata, including GPS, is stripped.
 */
export const portraitImage = portraitPhoto

export const projectMedia = {
  taskflow: { cover: taskflowCover, detail: taskflowDetail },
  shopease: { cover: shopeaseCover, detail: shopeaseDetail },
  fintrack: { cover: fintrackCover, detail: fintrackDetail },
  fitlife: { cover: fitlifeCover, detail: fitlifeDetail },
} as const

export const blogMedia = {
  hooks: hooksCover,
  scalable: scalableCover,
  typescript: typescriptCover,
  docker: dockerCover,
  database: databaseCover,
} as const
