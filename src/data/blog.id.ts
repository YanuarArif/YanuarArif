import { blogMedia } from '@/data/media'
import type { BlogPost } from '@/types'

/**
 * ─────────────────────────────────────────────────────────────
 *  BLOG CONTENT — INDONESIAN
 *  Terjemahan dari `blog.en.ts`. Slug, tanggal terbit, dan blok kode
 *  sengaja dipertahankan sama agar URL dan contoh kode tetap konsisten.
 * ─────────────────────────────────────────────────────────────
 */
export const blogPostsId: BlogPost[] = [
  {
    slug: 'understanding-react-hooks',
    title: 'Memahami React Hooks: Model Mental yang Mudah Diingat',
    excerpt:
      'Hooks berhenti terasa tak terduga setelah saya berhenti memikirkannya sebagai lifecycle method. Ini model yang saya pakai sekarang.',
    category: 'React',
    publishedAt: '2026-09-18',
    cover: blogMedia.hooks,
    coverAlt: 'Ilustrasi abstrak komponen yang terhubung dan state mengalir melalui pohon React',
    tags: ['React', 'Hooks', 'Dasar'],
    featured: true,
    content: [
      {
        type: 'paragraph',
        text: 'Saat pertama kali membaca tutorial hooks, saya paham sintaksnya tetapi tidak sama sekali perilakunya. Pembaruan state seolah muncul di tempat yang salah. Effect berjalan lebih sering dari yang saya duga. Saran "tinggal tambahkan dependency" berhasil sampai menyebabkan infinite loop. Masalahnya bukan API; masalahnya adalah model yang saya bawa. Saya masih berpikir dalam lifecycle komponen, padahal hooks bukan lifecycle method dengan ejaan berbeda.',
      },
      { type: 'heading', level: 2, text: 'Hooks adalah nilai, bukan garis waktu' },
      {
        type: 'paragraph',
        text: 'Komponen fungsi adalah fungsi yang mengembalikan UI. Setiap render memanggil fungsi itu dengan props saat ini. Nilai yang dibuat di dalamnya — state, variabel turunan, callback — milik render tersebut. Tidak ada instance komponen berumur panjang dengan objek `this.state` yang diedit di tempat. Ketika state berubah, React memanggil fungsi itu lagi dan membandingkan hasilnya.',
      },
      {
        type: 'paragraph',
        text: 'Setelah itu klik, `useState` berhenti terasa misterius. Itulah cara komponen fungsi meminta React mengingat sebuah nilai antar pemanggilan, dan cara meminta render baru ketika nilai itu berubah.',
      },
      {
        type: 'code',
        language: 'tsx',
        code: `function Counter() {
  const [count, setCount] = useState(0)

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  )
}`,
      },
      {
        type: 'paragraph',
        text: 'Setiap klik membuat render baru dengan `count` baru. Event handler menutup (closure) `count` dari render tempat ia dibuat. Itulah sebabnya nilai usang di callback adalah konsekuensi alami dari model ini, bukan bug di React. Perbaikannya biasanya berupa functional update: `setCount((current) => current + 1)`.',
      },
      { type: 'heading', level: 2, text: 'Effect menyinkronkan; bukan berjalan "setelah render"' },
      {
        type: 'paragraph',
        text: 'Pergeseran mental kedua adalah mendeskripsikan effect berdasarkan apa yang disinkronkannya, bukan kapan ia berjalan. "Ambil data setelah mount" adalah garis waktu. "Jaga judul dokumen tetap sinkron dengan proyek aktif" adalah relasi. Relasi bertahan melewati render ulang dan punya input serta cleanup yang jelas.',
      },
      {
        type: 'code',
        language: 'tsx',
        code: `useEffect(() => {
  const controller = new AbortController()

  async function load() {
    const response = await fetch('/api/projects', {
      signal: controller.signal,
    })
    const data = await response.json()
    setProjects(data.items)
  }

  load()
  return () => controller.abort()
}, [])`,
      },
      {
        type: 'paragraph',
        text: 'Di sini effect memulai permintaan dan mengembalikan cleanup yang membatalkannya. React menjalankan cleanup sebelum effect berikutnya atau saat komponen dilepas. Itulah seluruh kontraknya: siapkan sesuatu, lalu bereskan. Berpikir dalam istilah setup dan cleanup membuat sebagian besar bug effect hilang.',
      },
      {
        type: 'callout',
        title: 'Aturan praktis yang berguna',
        text: 'Jika sebuah nilai berubah dan UI harus ikut berubah, nilai itu milik state. Jika nilai bisa diturunkan dari props atau state lain saat render, turunkan saja. Effect adalah untuk menghubungkan ke sistem di luar React, bukan untuk menghitung nilai.',
      },
      { type: 'heading', level: 2, text: 'Array dependency mendeskripsikan input' },
      {
        type: 'paragraph',
        text: 'Array dependency bukan jadwal. Bukan "jalankan sekali" atau "jalankan saat saya mau". Itu adalah daftar nilai yang dibaca effect dari komponen. React membandingkan daftar ini dengan render sebelumnya dan menyinkronkan ulang ketika ada input yang berubah. Jawaban jujur untuk "dependency mana yang harus saya sertakan?" adalah "yang benar-benar dibaca effect". Jika itu menyebabkan terlalu banyak eksekusi, effect atau nilainya yang biasanya perlu diubah.',
      },
      {
        type: 'list',
        items: [
          'Pindahkan pengambilan data ke hook khusus atau pustaka query agar caching dan pembatalan ditangani sekali.',
          'Buat event handler stabil dengan useCallback hanya ketika dependency membutuhkannya — bukan secara default.',
          'Gunakan ref ketika Anda perlu nilai terbaru tanpa menjadikannya input effect.',
          'Ekstrak effect menjadi custom hook ketika ia punya nama jelas dan satu tanggung jawab.',
        ],
      },
      { type: 'heading', level: 2, text: 'Checklist yang masih saya pakai' },
      {
        type: 'list',
        ordered: true,
        items: [
          'Bisakah nilai ini dihitung saat render alih-alih disimpan?',
          'Apakah effect ini terhubung ke sesuatu di luar React, dan bisa membersihkan dirinya sendiri?',
          'Apakah komponen ini tetap masuk akal jika dipanggil dua kali berturut-turut dengan props yang sama?',
          'Apakah saya sedang menyinkronkan dengan sistem eksternal, atau mencoba bereaksi terhadap render tertentu?',
        ],
      },
      {
        type: 'quote',
        text: 'Hooks tidak lebih sulit daripada class. Hooks hanya kurang memaafkan model mental yang kabur.',
      },
      {
        type: 'paragraph',
        text: 'Hasil praktis dari model ini adalah kode yang lebih sederhana. Effect menjadi lebih kecil, nilai turunan kembali ke render, dan stale closure menjadi sinyal jelas bahwa sebuah nilai dibaca dari render yang salah. Sintaksnya bagian yang mudah — modelnya yang membuat semuanya dapat diprediksi.',
      },
    ],
  },
  {
    slug: 'scalable-react-applications',
    title: 'Membangun Aplikasi React yang Skalabel Tanpa Over-Engineering',
    excerpt:
      'Sebagian besar basis kode React tidak gagal karena terlalu kecil. Mereka jadi sulit diubah ketika batasnya tidak jelas. Ini struktur yang tumbuh bersama produk.',
    category: 'Arsitektur',
    publishedAt: '2026-07-06',
    cover: blogMedia.scalable,
    coverAlt: 'Ilustrasi abstrak berlapis yang merepresentasikan batas aplikasi frontend dan modul',
    tags: ['React', 'Arsitektur', 'TypeScript'],
    content: [
      {
        type: 'paragraph',
        text: 'Skalabilitas sering dipakai sebagai alasan untuk struktur folder berbelit, global state, dan lapisan abstraksi yang "akan terbayar nanti". Dalam praktik, sebagian besar lapisan itu langsung memakan waktu dan tidak pernah mengembalikannya. Aplikasi React menjadi skalabel ketika batasnya jelas dan dependensinya mengarah ke arah yang masuk akal. Itu sebagian besar masalah desain, bukan masalah pohon file.',
      },
      { type: 'heading', level: 2, text: 'Mulai dari batas, bukan folder' },
      {
        type: 'paragraph',
        text: 'Sebelum membuat direktori, putuskan bagian produk mana yang berubah bersama. Papan proyek, layar penagihan, dan halaman pengaturan akun adalah fitur berbeda. Mereka mungkin berbagi tombol, klien API, dan formatter, tetapi tidak boleh masuk ke internal satu sama lain. Setelah itu eksplisit, tata letak folder menjadi konsekuensi, bukan perdebatan.',
      },
      {
        type: 'code',
        language: 'text',
        code: `src/
  features/
    projects/
      components/
      hooks/
      api.ts
      types.ts
    billing/
      components/
      hooks/
      api.ts
      types.ts
  components/ui/       shared primitives only
  lib/                 framework-agnostic helpers
  pages/               route composition
  data/                static content`,
      },
      {
        type: 'paragraph',
        text: 'Aturan pentingnya bukan nama persisnya. Yang penting adalah sebuah fitur memiliki akses datanya dan komponen internalnya, sementara folder bersama tetap kecil dan benar-benar dapat dipakai ulang. Folder bersama yang berubah menjadi aplikasi kedua biasanya tanda bahwa batas fitur tidak pernah diputuskan.',
      },
      { type: 'heading', level: 2, text: 'Pisahkan state berdasarkan kepemilikan' },
      {
        type: 'paragraph',
        text: 'Banyak kompleksitas mengejutkan berasal dari menempatkan state di tempat yang salah. Saya memakai empat keranjang:',
      },
      {
        type: 'list',
        items: [
          'State UI lokal (panel terbuka, input draf) tetap di komponen terdekat.',
          'State URL (filter, tab terpilih, paginasi) berada di search params tempat ia bisa dibagikan dan dimuat ulang.',
          'State server (daftar, record, mutasi) berada di lapisan query yang menangani caching, retry, dan invalidasi.',
          'Global state klien sebaiknya jarang. Jika dua fitur berjauhan membutuhkannya, tanyakan apakah server atau URL yang seharusnya memilikinya.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Ketika setiap filter di layar kompleks berada di search params, pengujian menjadi lebih sederhana dan pengguna mendapat tautan yang bisa dikirim ke kolega. Itu kemenangan skalabilitas tanpa abstraksi apa pun.',
      },
      { type: 'heading', level: 2, text: 'Biarkan router memiliki halamannya' },
      {
        type: 'paragraph',
        text: 'Code splitting di tingkat rute adalah salah satu peningkatan performa termurah. Biarkan homepage eager, pisahkan layar detail dan rute sekunder, dan beri Suspense skeleton yang mempertahankan tata letak.',
      },
      {
        type: 'code',
        language: 'tsx',
        code: `const ProjectPage = lazy(() => import('./pages/ProjectPage'))

export function ProjectRoute() {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <ProjectPage />
    </Suspense>
  )
}`,
      },
      {
        type: 'callout',
        title: 'Fallback Suspense adalah UI',
        text: 'Layar kosong atau spinner di tengah halaman adalah lompatan tata letak yang menunggu terjadi. Pesan ruang yang akan ditempati konten, lalu animasikan konten masuk jika perlu.',
      },
      { type: 'heading', level: 2, text: 'Biarkan tipe menjadi dokumentasi' },
      {
        type: 'paragraph',
        text: 'TypeScript membayar dirinya di batas: respons API, skema formulir, dan props komponen. Parse data tak dikenal sekali di tepi, lalu biarkan sisa aplikasi bekerja dengan tipe yang tepercaya. Hindari mengekspor tipe dari internal komponen hanya agar fitur lain bisa bergantung padanya. Jika dua fitur membutuhkan bentuk yang sama, bentuk itu milik modul domain bersama — dengan nama yang disengaja.',
      },
      { type: 'heading', level: 2, text: 'Ukur sebelum mengabstraksi' },
      {
        type: 'paragraph',
        text: 'Begitu basis kode punya tabel data generik, form builder, dan state manager khusus, setiap perubahan harus dipahami melalui tiga abstraksi. Kadang itu wajar. Sering kali itu antisipasi yang menyamar sebagai arsitektur. Duplikasi komponen kecil dua kali, perhatikan perbedaan nyatanya, lalu ekstrak bagian yang stabil. Kasus penggunaan ketiga adalah brief desain yang jauh lebih baik daripada yang pertama.',
      },
      {
        type: 'list',
        ordered: true,
        items: [
          'Beri nama batas fitur dan simpan akses datanya di dalamnya.',
          'Pindahkan state ke pemilik terkecil yang benar, lalu ke URL atau server bila sesuai.',
          'Pisahkan rute sebelum memisahkan komponen.',
          'Beri tipe pada tepi sistem, bukan setiap variabel lokal.',
          'Ekstrak kode bersama setelah duplikasi nyata kedua, bukan sebelum yang pertama.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Tidak ada yang baru dari semua ini, dan itulah intinya. Aplikasi React yang skalabel biasanya adalah kumpulan keputusan kecil dan jelas yang diulang secara konsisten. Arsitektur seharusnya membuat perubahan berikutnya lebih mudah dipahami — lalu menyingkir dari jalan.',
      },
    ],
  },
  {
    slug: 'typescript-patterns',
    title: 'Pola TypeScript yang Saya Pakai Setiap Hari',
    excerpt:
      'Kumpulan kecil pola TypeScript yang membuat kode aplikasi lebih aman tanpa mengubahnya menjadi teka-teki tingkat tipe.',
    category: 'TypeScript',
    publishedAt: '2026-05-22',
    cover: blogMedia.typescript,
    coverAlt: 'Ilustrasi biru abstrak tentang penyempitan tipe TypeScript dan bentuk union',
    tags: ['TypeScript', 'Pola', 'Praktik terbaik'],
    content: [
      {
        type: 'paragraph',
        text: 'TypeScript paling berguna ketika ia menghilangkan sekelas ketidakpastian runtime dari kode sehari-hari. Ini pola yang paling sering saya pakai — bukan senam tipe yang pintar, hanya kebiasaan kecil yang membuat state eksplisit dan membiarkan compiler menangkap kesalahan yang membosankan.',
      },
      { type: 'heading', level: 2, text: 'Discriminated union untuk state' },
      {
        type: 'paragraph',
        text: 'Sebuah permintaan punya lebih banyak state daripada "loading" dan "data". Memodelkannya sebagai boolean terpisah menciptakan kombinasi mustahil — loading dan error pada saat yang sama, atau data yang ada sebelum permintaan berhasil. Discriminated union membuat setiap state valid dengan aturannya sendiri.',
      },
      {
        type: 'code',
        language: 'ts',
        code: `type RequestState<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; message: string }

function render(state: RequestState<Project[]>) {
  switch (state.status) {
    case 'idle':
      return 'Select a project'
    case 'loading':
      return 'Loading projects…'
    case 'success':
      return state.data.map((project) => project.name)
    case 'error':
      return state.message
  }
}`,
      },
      {
        type: 'paragraph',
        text: 'Switch-nya lengkap (exhaustive). Tambahkan status baru dan setiap renderer yang tidak menanganinya gagal typecheck. Itu mode kegagalan yang jauh lebih baik daripada kasus yang terlewat saat runtime.',
      },
      { type: 'heading', level: 2, text: 'satisfies menjaga pemeriksaan bentuk tanpa melebarkan tipe' },
      {
        type: 'paragraph',
        text: 'Anotasi seperti `const config: Record<string, string>` melebarkan tipe dan menghilangkan key yang baru saja Anda tulis. `satisfies` memeriksa nilai terhadap sebuah bentuk sambil mempertahankan inferensi literalnya.',
      },
      {
        type: 'code',
        language: 'ts',
        code: `const statusLabels = {
  active: 'Active',
  paused: 'Paused',
  archived: 'Archived',
} satisfies Record<string, string>

// statusLabels.active adalah "Active", bukan string`,
      },
      {
        type: 'paragraph',
        text: 'Saya memakai ini untuk peta rute, design token, dan objek lookup ketika saya ingin validasi sekaligus autocomplete yang berguna di hilir.',
      },
      { type: 'heading', level: 2, text: 'Parse di batas, percaya di dalam' },
      {
        type: 'paragraph',
        text: 'Tipe hilang saat runtime. Respons jaringan bisa apa saja, bahkan jika fungsinya dianotasi mengembalikan objek bertipe. Parse sekali di tempat data masuk ke aplikasi, lalu jaga kode internal bebas dari pemeriksaan defensif.',
      },
      {
        type: 'code',
        language: 'ts',
        code: `const projectSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1),
  archivedAt: z.string().datetime().nullable(),
})

const project = projectSchema.parse(await response.json())`,
      },
      {
        type: 'callout',
        title: 'Jangan melakukan cast untuk melewati batas',
        text: 'Assertion `as Project` adalah janji yang tidak bisa ditepati compiler. Validasi runtime adalah satu-satunya tempat janji itu benar-benar bisa diverifikasi.',
      },
      { type: 'heading', level: 2, text: 'Sempitkan dengan type predicate, bukan cast' },
      {
        type: 'paragraph',
        text: 'Ketika sebuah helper memeriksa nilai, nyatakan di signature-nya. Predikat menjaga pemanggil tetap type-safe dan membuat kondisinya dapat dipakai ulang.',
      },
      {
        type: 'code',
        language: 'ts',
        code: `function isDefined<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined
}

const names = projectIds.map(getProject).filter(isDefined).map((p) => p.name)`,
      },
      { type: 'heading', level: 2, text: 'Lebih pilih objek const daripada enum di kode aplikasi' },
      {
        type: 'paragraph',
        text: 'String union dan objek `as const` lebih mudah diserialisasi, dicatat di log, dan dilewatkan ke API browser. Keduanya juga menghindari artefak runtime yang diperkenalkan enum biasa.',
      },
      {
        type: 'code',
        language: 'ts',
        code: `const PROJECT_KINDS = ['personal', 'client', 'internal'] as const
type ProjectKind = (typeof PROJECT_KINDS)[number]`,
      },
      {
        type: 'paragraph',
        text: 'Benang merahnya adalah setiap pola membuat state nyata menjadi eksplisit dan menghilangkan peluang kode menyiratkan sesuatu yang tidak bisa diperiksa compiler. Itu penggunaan TypeScript yang lebih baik daripada membangun sistem tipe yang hanya bisa dibaca penulisnya.',
      },
    ],
  },
  {
    slug: 'docker-for-frontend-developers',
    title: 'Memulai Docker untuk Frontend Developer',
    excerpt:
      'Anda tidak perlu menjalankan Kubernetes produksi untuk memetik manfaat container. Satu Dockerfile bisa membuat build frontend reproducible dalam kurang dari dua puluh baris.',
    category: 'DevOps',
    publishedAt: '2026-02-11',
    cover: blogMedia.docker,
    coverAlt: 'Ilustrasi abstrak tumpukan container dan pipeline build',
    tags: ['Docker', 'DevOps', 'Build'],
    content: [
      {
        type: 'paragraph',
        text: 'Lama saya memperlakukan Docker sebagai pekerjaan infrastruktur yang terjadi entah di mana setelah kode saya selesai. Pergeseran mental datang ketika sebuah build berhasil di mesin saya dan gagal di mesin kolega dengan versi Node yang sedikit berbeda. Container bukan hanya untuk produksi; ia adalah cara menjadikan lingkungan sebagai bagian dari artefak.',
      },
      { type: 'heading', level: 2, text: 'Image, container, dan mengapa Anda peduli' },
      {
        type: 'paragraph',
        text: 'Image adalah sistem file beku plus metadata. Container adalah proses berjalan berdasarkan image itu. Anda membangun image sekali dan bisa menjalankan image yang sama di laptop, di CI, dan di server. Untuk proyek frontend, itu biasanya berarti versi Node yang dapat diprediksi, instalasi dependensi yang deterministik, dan langkah build yang tidak bergantung pada perkakas global.',
      },
      { type: 'heading', level: 2, text: 'Dockerfile multi-stage' },
      {
        type: 'paragraph',
        text: 'Aplikasi Vite dibangun menjadi file statis. Container yang membangunnya seharusnya bukan container yang menyajikannya. Build multi-stage membiarkan tahap pertama menyimpan Node dan dependensi, sementara image akhir hanya berisi aset terkompilasi dan server web kecil.',
      },
      {
        type: 'code',
        language: 'dockerfile',
        code: `FROM oven/bun:1 AS build
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile
COPY . .
RUN bun run build

FROM nginx:alpine AS runtime
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]`,
      },
      {
        type: 'paragraph',
        text: 'Tahap build dibuang. Image runtime tidak punya kode sumber, dependensi dev, atau runtime Node untuk diserang. Itu pengurangan berarti baik dari ukuran maupun permukaan serangan.',
      },
      { type: 'heading', level: 2, text: 'Abaikan lebih dari node_modules' },
      {
        type: 'paragraph',
        text: 'File `.dockerignore` menjaga build context tetap kecil dan mencegah state lokal bocor ke image. Minimal, kecualikan dependensi, output build, riwayat Git, dan file environment lokal.',
      },
      {
        type: 'code',
        language: 'text',
        code: `node_modules
dist
.git
.env
.env.*
*.log
coverage`,
      },
      {
        type: 'callout',
        title: 'Jangan pernah memanggang rahasia ke dalam image',
        text: 'Build frontend hanya melihat variabel yang tersedia saat build. Jika sebuah nilai adalah rahasia, ia sama sekali tidak pantas ada di bundle klien. Gunakan konfigurasi runtime untuk endpoint publik bila memungkinkan.',
      },
      { type: 'heading', level: 2, text: 'Build dan jalankan secara lokal' },
      {
        type: 'code',
        language: 'bash',
        code: `docker build -t portfolio:local .
docker run --rm -p 8080:80 portfolio:local`,
      },
      {
        type: 'paragraph',
        text: 'Buka `http://localhost:8080`. Jika aplikasi single-page memakai rute sisi klien, server web butuh fallback ke `index.html`. Dengan nginx itu aturan `try_files`; dengan static host biasanya konfigurasi rewrite. Melakukan ini dengan benar secara lokal menghemat 404 yang membingungkan di produksi.',
      },
      { type: 'heading', level: 2, text: 'Apa yang tidak bisa diperbaiki Docker' },
      {
        type: 'list',
        items: [
          'Ia tidak akan membuat build lambat menjadi cepat kecuali layer caching dihormati.',
          'Ia tidak menggantikan CI. Ia memberi CI lingkungan yang reproducible untuk dijalankan.',
          'Ia tidak akan menyajikan SPA dengan benar tanpa aturan fallback.',
          'Ia tidak akan menyembunyikan lockfile yang tidak konsisten — gunakan instalasi frozen di CI.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Mulailah dengan satu Dockerfile dan satu layanan. Ketika Anda mulai menjelaskan "berhasil secara lokal tapi tidak di server deploy", Anda sudah punya alasan untuk mengontainerkan build. Itu kemenangan yang cukup bagi sebagian besar proyek frontend.',
      },
    ],
  },
  {
    slug: 'database-design-fundamentals',
    title: 'Dasar-Dasar Desain Basis Data: Mulai dari Pertanyaan',
    excerpt:
      'Skema yang baik bukan hasil penerapan aturan normalisasi. Ia dimulai dari pertanyaan yang perlu dijawab produk — dan batasan yang tidak boleh dilanggarnya.',
    category: 'Basis Data',
    publishedAt: '2025-12-03',
    cover: blogMedia.database,
    coverAlt: 'Ilustrasi abstrak tabel relasional dan baris data yang terhubung',
    tags: ['Basis Data', 'PostgreSQL', 'Pemodelan data'],
    content: [
      {
        type: 'paragraph',
        text: 'Ketika mulai membangun aplikasi full-stack, saya merancang tabel dengan mendaftar field di sebuah layar. Itu berhasil sampai produk membutuhkan tampilan kedua dari data yang sama. Skema telah mengodekan antarmuka, bukan domain, dan setiap fitur baru membutuhkan migrasi. Pendekatan yang lebih baik memang lebih lambat di awal dan jauh lebih cepat setelahnya.',
      },
      { type: 'heading', level: 2, text: 'Ajukan pertanyaan sebelum membuka editor skema' },
      {
        type: 'paragraph',
        text: 'Skema adalah kumpulan jawaban atas pertanyaan. Entitas mana yang ada secara independen? Apa yang bisa benar pada saat yang sama? Fakta mana yang tidak boleh diduplikasi? Untuk fitur faktur sederhana, daftarnya mungkin:',
      },
      {
        type: 'list',
        items: [
          'Bisakah seorang pelanggan punya banyak faktur, dan bisakah satu faktur punya lebih dari satu pelanggan?',
          'Bisakah item baris faktur ada tanpa faktur?',
          'Apakah harga berubah seiring waktu, dan haruskah faktur lama menyimpan harga saat dibuat?',
          'Bisakah faktur dihapus, atau hanya dibatalkan?',
          'Operasi mana yang harus terjadi secara atomik?',
        ],
      },
      {
        type: 'paragraph',
        text: 'Pertanyaan-pertanyaan ini menghasilkan entitas, relasi, dan batasan. Layar menghasilkan field. Memulai dari layar adalah cara sebuah item baris akhirnya menyimpan harga produk yang diam-diam berubah saat produk diedit.',
      },
      { type: 'heading', level: 2, text: 'Modelkan relasi secara eksplisit' },
      {
        type: 'paragraph',
        text: 'Gunakan tabel join untuk relasi banyak-ke-banyak dan beri makna sendiri bila perlu. Baris pesanan bukan sekadar relasi antara pesanan dan produk; ia punya kuantitas dan harga satuan yang dicatat saat pembelian. Memperlakukannya sebagai baris kelas satu membuat riwayat itu eksplisit.',
      },
      {
        type: 'code',
        language: 'sql',
        code: `create table orders (
  id uuid primary key default gen_random_uuid(),
  customer_id uuid not null references customers(id),
  status text not null check (status in ('draft', 'paid', 'voided')),
  created_at timestamptz not null default now()
);

create table order_lines (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references orders(id) on delete cascade,
  product_id uuid not null references products(id),
  quantity integer not null check (quantity > 0),
  unit_price_cents integer not null check (unit_price_cents >= 0)
);`,
      },
      { type: 'heading', level: 2, text: 'Normalisasi sampai invariant mudah dilindungi' },
      {
        type: 'paragraph',
        text: 'Normalisasi sering diajarkan sebagai urutan bentuk normal. Dalam praktik, saya memakai uji yang lebih sederhana: bisakah satu fakta diperbarui di tepat satu tempat? Jika alamat pelanggan disimpan di setiap pesanan, koreksi membutuhkan pembaruan massal dan pesanan lama mungkin kehilangan akurasi historisnya. Snapshot alamat terpisah pada pesanan kemudian menjadi pilihan yang disengaja, bukan kecelakaan.',
      },
      {
        type: 'callout',
        title: 'Denormalisasi dengan sengaja',
        text: 'Menyimpan salinan nilai untuk mempertahankan riwayat, menghindari join berat, atau menegakkan aturan bisnis tidak masalah — selama Anda tahu salinan mana yang otoritatif dan bagaimana konsistensinya dijaga.',
      },
      { type: 'heading', level: 2, text: 'Indeks untuk query, bukan untuk kolom' },
      {
        type: 'paragraph',
        text: 'Indeks yang berguna mengikuti pola akses: kolom di filter, lalu pengurutannya. Menambahkan indeks ke setiap foreign key adalah langkah pertama yang umum, tetapi tidak otomatis berguna. Lihat query plan untuk query yang benar-benar berjalan, dan hapus indeks yang hanya membebani penulisan.',
      },
      {
        type: 'code',
        language: 'sql',
        code: `-- Mendukung tampilan umum "pesanan terbuka terbaru untuk seorang pelanggan"
create index orders_customer_status_created_idx
  on orders (customer_id, status, created_at desc);`,
      },
      { type: 'heading', level: 2, text: 'Lindungi invariant dengan transaksi dan batasan' },
      {
        type: 'paragraph',
        text: 'Kode aplikasi bisa di-retry, dideploy dua kali, atau berlomba dengan permintaan lain. Basis data seharusnya menegakkan aturan yang harus selalu berlaku. Gunakan foreign key, unique constraint, dan check constraint untuk invariant struktural, serta transaksi untuk operasi yang melintasi banyak baris. Pesanan `paid` tanpa catatan pembayaran seharusnya mustahil, bukan sekadar tidak mungkin.',
      },
      { type: 'heading', level: 2, text: 'Migrasi adalah bagian dari desain' },
      {
        type: 'paragraph',
        text: 'Pikirkan bagaimana skema akan berubah saat data sudah ada. Tambahkan kolom nullable, isi ulang secara batch, deploy kode yang menangani kedua bentuk, lalu perketat batasan.',
      },
      {
        type: 'paragraph',
        text: 'Kemampuan mengembangkan skema dengan aman lebih berharga daripada mendapatkan setiap kolom benar pada percobaan pertama.',
      },
      {
        type: 'paragraph',
        text: 'Pola di balik semua ini adalah menuliskan invariant sebelum menulis tabel. Setelah pertanyaannya eksplisit, skema menjadi lebih mudah dijelaskan ke developer lain — dan jauh lebih mudah diubah ketika produk mau tak mau meminta sesuatu yang baru.',
      },
    ],
  },
]
