import { blogMedia } from "@/data/media";
import type { BlogPost } from "@/types";

/**
 * ─────────────────────────────────────────────────────────────
 *  BLOG CONTENT — INDONESIAN
 *  Padanan dari `blog.en.ts`. Slug, tanggal terbit, dan blok kode
 *  sengaja dipertahankan sama agar URL dan contoh kode tetap konsisten.
 * ─────────────────────────────────────────────────────────────
 */
export const blogPostsId: BlogPost[] = [
  {
    slug: "understanding-react-hooks",
    title: "Akhirnya Saya Paham React Hooks",
    excerpt:
      "Hooks berhenti terasa tak terduga setelah saya berhenti menganggapnya sebagai lifecycle method. Ini model yang saya pakai sekarang.",
    category: "React",
    publishedAt: "2026-09-18",
    cover: blogMedia.hooks,
    coverAlt:
      "Ilustrasi abstrak komponen yang terhubung dan state mengalir melalui pohon React",
    tags: ["React", "Hooks", "Dasar"],
    featured: true,
    content: [
      {
        type: "paragraph",
        text: 'Waktu pertama kali membaca tutorial hooks, saya paham sintaksnya tapi sama sekali tidak paham perilakunya. Pembaruan state seperti muncul di tempat yang salah. Effect berjalan lebih sering dari dugaan saya. Saran "tinggal tambahkan dependency" manjur, sampai suatu saat malah bikin infinite loop. Masalahnya bukan di API, tapi di model yang ada di kepala saya. Saya masih berpikir dengan lifecycle komponen, padahal hooks bukan lifecycle method yang cuma ganti nama.',
      },
      {
        type: "heading",
        level: 2,
        text: "Hooks adalah nilai, bukan garis waktu",
      },
      {
        type: "paragraph",
        text: "Komponen fungsi hanyalah fungsi yang mengembalikan UI. Setiap render memanggilnya dengan props saat itu, dan semua yang dibuat di dalamnya (state, variabel turunan, callback) milik render tersebut. Tidak ada instance berumur panjang dengan objek `this.state` yang diubah di tempat. Saat state berubah, React memanggil fungsinya lagi lalu membandingkan hasilnya.",
      },
      {
        type: "paragraph",
        text: "Begitu bagian ini masuk di kepala, `useState` tidak lagi terasa misterius. Ia hanyalah cara komponen fungsi meminta React mengingat sebuah nilai di antara pemanggilan, dan meminta render ulang saat nilai itu berubah.",
      },
      {
        type: "code",
        language: "tsx",
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
        type: "paragraph",
        text: "Tiap klik menghasilkan render baru dengan `count` yang baru, dan event handler menangkap (closure) `count` dari render tempat ia dibuat. Jadi nilai usang di dalam callback adalah akibat wajar dari modelnya, bukan bug di React. Perbaikan yang biasa dipakai adalah functional update: `setCount((current) => current + 1)`.",
      },
      {
        type: "heading",
        level: 2,
        text: 'Effect menyinkronkan, bukan berjalan "setelah render"',
      },
      {
        type: "paragraph",
        text: 'Pergeseran kedua adalah menjelaskan sebuah effect lewat apa yang ia jaga tetap sinkron, bukan kapan ia berjalan. "Ambil data setelah mount" itu garis waktu. "Jaga judul dokumen sama dengan proyek yang aktif" itu hubungan. Hubungan tetap berlaku di setiap render ulang dan punya input serta cleanup yang jelas.',
      },
      {
        type: "code",
        language: "tsx",
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
        type: "paragraph",
        text: "Di sini effect memulai request dan mengembalikan fungsi cleanup yang membatalkannya. React menjalankan cleanup itu sebelum effect berikutnya, atau saat komponen dilepas. Itu seluruh kesepakatannya: pasang sesuatu, lalu bereskan. Sejak saya terbiasa berpikir dengan setup dan cleanup, sebagian besar bug effect saya hilang.",
      },
      {
        type: "callout",
        title: "Aturan praktis",
        text: "Kalau sebuah nilai berubah dan UI harus ikut berubah, nilai itu masuk state. Kalau nilainya bisa dihitung dari props atau state lain saat render, hitung saja di situ. Effect dipakai untuk terhubung ke hal-hal di luar React, bukan untuk menghitung nilai.",
      },
      {
        type: "heading",
        level: 2,
        text: "Array dependency berisi daftar input",
      },
      {
        type: "paragraph",
        text: 'Array dependency bukan jadwal. Ia tidak berarti "jalankan sekali" atau "jalankan kalau saya mau". Isinya daftar nilai yang dibaca effect dari komponen. React membandingkannya dengan render sebelumnya dan menyinkronkan ulang kalau ada yang berubah. Jadi jawaban jujur untuk "dependency mana yang harus saya masukkan?" adalah "apa pun yang benar-benar dibaca effect". Kalau akibatnya effect terlalu sering jalan, biasanya effect atau nilainya yang perlu diubah.',
      },
      {
        type: "list",
        items: [
          "Pindahkan pengambilan data ke hook khusus atau library query, supaya caching dan pembatalan diurus di satu tempat.",
          "Pakai useCallback hanya ketika sebuah dependency memang butuh fungsi yang stabil, jangan sebagai kebiasaan.",
          "Pakai ref kalau butuh nilai terbaru tanpa menjadikannya input effect.",
          "Pisahkan effect jadi custom hook kalau ia sudah punya nama yang jelas dan hanya mengerjakan satu hal.",
        ],
      },
      { type: "heading", level: 2, text: "Checklist yang masih saya pakai" },
      {
        type: "list",
        ordered: true,
        items: [
          "Bisakah nilai ini dihitung saat render, tanpa perlu disimpan?",
          "Apakah effect ini terhubung ke sesuatu di luar React, dan bisa membereskan dirinya sendiri?",
          "Apakah komponen ini masih masuk akal kalau dipanggil dua kali berturut-turut dengan props yang sama?",
          "Saya sedang menyinkronkan dengan sistem eksternal, atau sedang mencoba bereaksi pada satu render tertentu?",
        ],
      },
      {
        type: "quote",
        text: "Hooks tidak lebih sulit dari class. Hooks hanya kurang toleran terhadap model mental yang samar.",
      },
      {
        type: "paragraph",
        text: "Dalam praktik, model ini menghasilkan kode yang lebih sederhana. Effect jadi lebih kecil, nilai turunan kembali ke render, dan stale closure menjadi tanda yang jelas bahwa kita sedang membaca nilai dari render yang salah. Sintaksnya bagian yang mudah. Modelnyalah yang membuat semuanya bisa diprediksi.",
      },
    ],
  },
  {
    slug: "scalable-react-applications",
    title: "Membuat Aplikasi React Tetap Mudah Tumbuh Tanpa Over-Engineering",
    excerpt:
      "Kebanyakan codebase React tidak gagal karena terlalu kecil. Ia jadi sulit diubah karena batas antarbagiannya tidak jelas. Ini struktur yang ikut tumbuh bersama produk.",
    category: "Arsitektur",
    publishedAt: "2026-07-06",
    cover: blogMedia.scalable,
    coverAlt:
      "Ilustrasi abstrak berlapis yang menggambarkan batas aplikasi frontend dan modul",
    tags: ["React", "Arsitektur", "TypeScript"],
    content: [
      {
        type: "paragraph",
        text: '"Skalabilitas" sering dipakai untuk membenarkan struktur folder yang rumit, global state, dan lapisan abstraksi yang katanya "akan terbayar nanti". Kenyataannya, kebanyakan lapisan itu langsung memakan waktu dan tidak pernah mengembalikannya. Aplikasi React bisa tumbuh dengan sehat kalau batasnya jelas dan arah dependensinya masuk akal. Itu lebih banyak soal desain, bukan soal susunan file.',
      },
      { type: "heading", level: 2, text: "Mulai dari batas, bukan folder" },
      {
        type: "paragraph",
        text: "Sebelum membuat direktori, tentukan dulu bagian produk mana yang berubah bersama-sama. Papan proyek, layar penagihan, dan halaman pengaturan akun adalah fitur yang terpisah. Mereka boleh berbagi tombol, API client, dan formatter, tapi tidak boleh saling mengintip isi dalamnya. Kalau itu sudah jelas, tata letak folder tinggal mengikuti dan tidak ada lagi yang perlu diperdebatkan.",
      },
      {
        type: "code",
        language: "text",
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
        type: "paragraph",
        text: "Nama persisnya tidak penting. Yang penting, sebuah fitur memegang akses datanya sendiri dan komponen internalnya, sementara folder bersama tetap kecil dan benar-benar bisa dipakai ulang. Kalau folder bersama membengkak jadi aplikasi kedua, kemungkinan besar batas antarfitur memang belum pernah ditentukan.",
      },
      {
        type: "heading",
        level: 2,
        text: "Bagi state menurut siapa pemiliknya",
      },
      {
        type: "paragraph",
        text: "Banyak kerumitan muncul hanya karena state diletakkan di tempat yang salah. Saya membaginya ke empat kelompok:",
      },
      {
        type: "list",
        items: [
          "State UI lokal (panel yang terbuka, input yang belum dikirim) tetap di komponen terdekat.",
          "State URL (filter, tab terpilih, paginasi) ditaruh di search params, supaya bisa dibagikan dan tidak hilang saat halaman dimuat ulang.",
          "State server (daftar, record, mutasi) ditaruh di lapisan query yang mengurus caching, retry, dan invalidasi.",
          "Global state di sisi klien sebaiknya jarang dipakai. Kalau dua fitur yang berjauhan sama-sama membutuhkannya, tanyakan dulu apakah server atau URL sebaiknya yang memegangnya.",
        ],
      },
      {
        type: "paragraph",
        text: "Kalau semua filter di layar yang kompleks disimpan di search params, pengujian jadi lebih mudah dan pengguna bisa mengirim tautannya ke rekan kerja. Itu keuntungan skalabilitas yang tidak butuh abstraksi apa pun.",
      },
      { type: "heading", level: 2, text: "Serahkan halaman ke router" },
      {
        type: "paragraph",
        text: "Code splitting di tingkat rute adalah salah satu peningkatan performa yang paling murah. Muat homepage secara eager, pecah layar detail dan rute sekunder, lalu beri Suspense skeleton yang menjaga tata letak tetap stabil.",
      },
      {
        type: "code",
        language: "tsx",
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
        type: "callout",
        title: "Fallback Suspense juga bagian dari UI",
        text: "Layar kosong atau satu spinner di tengah halaman hanya menunggu waktu untuk membuat tata letak melompat. Sisakan ruang sebesar konten yang akan muncul, lalu beri animasi masuk kalau memang membantu.",
      },
      { type: "heading", level: 2, text: "Biarkan tipe jadi dokumentasinya" },
      {
        type: "paragraph",
        text: "TypeScript paling terasa manfaatnya di perbatasan: respons API, skema formulir, dan props komponen. Parse data yang tidak dikenal sekali saja di tepi, lalu biarkan bagian lain aplikasi bekerja dengan tipe yang sudah bisa dipercaya. Jangan mengekspor tipe dari bagian dalam komponen hanya supaya fitur lain bisa bergantung padanya. Kalau dua fitur butuh bentuk data yang sama, tempatnya di modul domain bersama dengan nama yang dipilih dengan sengaja.",
      },
      {
        type: "heading",
        level: 2,
        text: "Ukur dulu sebelum membuat abstraksi",
      },
      {
        type: "paragraph",
        text: "Begitu sebuah codebase punya tabel data generik, form builder, dan state manager buatan sendiri, setiap perubahan harus dipahami lewat tiga lapis abstraksi. Kadang itu memang perlu. Lebih sering itu hanya menebak masa depan yang dibungkus sebagai arsitektur. Duplikasi komponen kecil dua kali, lihat apa saja yang benar-benar beda, lalu ekstrak bagian yang tetap sama. Kebutuhan ketiga adalah bahan yang jauh lebih baik daripada kebutuhan pertama.",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Beri nama pada batas fitur, dan simpan akses datanya di dalam batas itu.",
          "Taruh state di pemilik terkecil yang benar, lalu pindahkan ke URL atau server kalau memang lebih cocok.",
          "Pecah rute dulu sebelum memecah komponen.",
          "Beri tipe pada tepi sistem, bukan pada setiap variabel lokal.",
          "Ekstrak kode bersama setelah duplikasi nyata yang kedua, jangan sebelum yang pertama.",
        ],
      },
      {
        type: "paragraph",
        text: "Tidak ada yang baru dari semua ini, dan tidak apa-apa. Aplikasi React yang sehat biasanya hanyalah kumpulan keputusan kecil yang jelas, dibuat dengan cara yang sama setiap kali. Arsitektur seharusnya membuat perubahan berikutnya lebih mudah dipikirkan, lalu tidak mengganggu.",
      },
    ],
  },
  {
    slug: "typescript-patterns",
    title: "Pola TypeScript yang Saya Pakai Setiap Hari",
    excerpt:
      "Beberapa pola TypeScript yang membuat kode aplikasi lebih aman tanpa berubah jadi teka-teki tipe.",
    category: "TypeScript",
    publishedAt: "2026-05-22",
    cover: blogMedia.typescript,
    coverAlt:
      "Ilustrasi biru abstrak tentang penyempitan tipe TypeScript dan bentuk union",
    tags: ["TypeScript", "Pola", "Praktik terbaik"],
    content: [
      {
        type: "paragraph",
        text: "TypeScript paling berguna ketika ia menyingkirkan satu kelompok ketidakpastian runtime dari kode sehari-hari. Ini pola yang paling sering saya pakai. Bukan trik tipe yang canggih, hanya kebiasaan kecil yang membuat state eksplisit dan membiarkan compiler menangkap kesalahan-kesalahan membosankan.",
      },
      { type: "heading", level: 2, text: "Discriminated union untuk state" },
      {
        type: "paragraph",
        text: 'Sebuah request punya lebih banyak state daripada sekadar "loading" dan "data". Kalau dimodelkan dengan beberapa boolean terpisah, muncul kombinasi yang mustahil, misalnya loading dan error sekaligus, atau data yang sudah ada sebelum request berhasil. Discriminated union membuat setiap state valid dengan aturannya sendiri.',
      },
      {
        type: "code",
        language: "ts",
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
        type: "paragraph",
        text: "Switch-nya bersifat exhaustive. Tambahkan status baru, dan setiap renderer yang belum menanganinya akan gagal di typecheck. Itu jauh lebih baik daripada ketahuan ada case yang terlewat saat aplikasi sudah berjalan.",
      },
      {
        type: "heading",
        level: 2,
        text: "satisfies memeriksa bentuk tanpa melebarkan tipe",
      },
      {
        type: "paragraph",
        text: "Anotasi seperti `const config: Record<string, string>` melebarkan tipe dan membuat key yang baru saja kamu tulis hilang dari tipenya. `satisfies` memeriksa nilai terhadap sebuah bentuk sambil mempertahankan tipe literalnya.",
      },
      {
        type: "code",
        language: "ts",
        code: `const statusLabels = {
  active: 'Active',
  paused: 'Paused',
  archived: 'Archived',
} satisfies Record<string, string>

// statusLabels.active adalah "Active", bukan string`,
      },
      {
        type: "paragraph",
        text: "Saya memakainya untuk peta rute, design token, dan objek lookup, tempat saya ingin ada validasi sekaligus autocomplete yang enak di bagian lain.",
      },
      {
        type: "heading",
        level: 2,
        text: "Parse di perbatasan, percaya di dalam",
      },
      {
        type: "paragraph",
        text: "Tipe menghilang saat runtime. Respons dari jaringan bisa berisi apa saja, bahkan kalau fungsinya mengaku mengembalikan objek bertipe. Parse sekali di tempat data masuk ke aplikasi, maka kode di dalamnya tidak perlu lagi dipenuhi pengecekan defensif.",
      },
      {
        type: "code",
        language: "ts",
        code: `const projectSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1),
  archivedAt: z.string().datetime().nullable(),
})

const project = projectSchema.parse(await response.json())`,
      },
      {
        type: "callout",
        title: "Jangan melewati perbatasan dengan cast",
        text: "Assertion `as Project` adalah janji yang tidak bisa ditepati compiler. Validasi saat runtime adalah satu-satunya tempat janji itu bisa benar-benar diperiksa.",
      },
      {
        type: "heading",
        level: 2,
        text: "Sempitkan dengan type predicate, bukan cast",
      },
      {
        type: "paragraph",
        text: "Kalau sebuah helper memeriksa suatu nilai, tuliskan itu di signature-nya. Predicate menjaga pemanggil tetap type-safe dan membuat pengecekannya bisa dipakai ulang.",
      },
      {
        type: "code",
        language: "ts",
        code: `function isDefined<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined
}

const names = projectIds.map(getProject).filter(isDefined).map((p) => p.name)`,
      },
      {
        type: "heading",
        level: 2,
        text: "Pilih objek const daripada enum di kode aplikasi",
      },
      {
        type: "paragraph",
        text: "String union dan objek `as const` lebih mudah diserialisasi, dicatat di log, dan dilempar ke API browser. Keduanya juga tidak menghasilkan kode runtime tambahan seperti yang dibuat enum biasa.",
      },
      {
        type: "code",
        language: "ts",
        code: `const PROJECT_KINDS = ['personal', 'client', 'internal'] as const
type ProjectKind = (typeof PROJECT_KINDS)[number]`,
      },
      {
        type: "paragraph",
        text: "Kesamaan dari semua pola ini: masing-masing membuat sebuah state nyata menjadi eksplisit dan mencegah kode menyiratkan sesuatu yang tidak bisa diperiksa compiler. Itu penggunaan TypeScript yang lebih sehat daripada membangun sistem tipe yang hanya bisa dibaca penulisnya sendiri.",
      },
    ],
  },
  {
    slug: "docker-for-frontend-developers",
    title: "Docker untuk Frontend Developer: Mulai dari Mana",
    excerpt:
      "Kamu tidak perlu Kubernetes di production untuk bisa merasakan manfaat container. Satu Dockerfile sudah cukup untuk membuat build frontend bisa diulang dalam kurang dari dua puluh baris.",
    category: "DevOps",
    publishedAt: "2026-02-11",
    cover: blogMedia.docker,
    coverAlt: "Ilustrasi abstrak tumpukan container dan pipeline build",
    tags: ["Docker", "DevOps", "Build"],
    content: [
      {
        type: "paragraph",
        text: "Lama sekali saya menganggap Docker sebagai urusan infrastruktur yang terjadi di suatu tempat setelah kode saya selesai. Pandangan itu berubah ketika sebuah build berhasil di laptop saya tapi gagal di laptop rekan kerja, yang versi Node-nya sedikit berbeda. Container bukan cuma untuk production. Ia cara untuk menjadikan lingkungan kerja bagian dari apa yang kita kirim.",
      },
      {
        type: "heading",
        level: 2,
        text: "Image, container, dan kenapa itu penting",
      },
      {
        type: "paragraph",
        text: "Image adalah filesystem yang dibekukan beserta metadatanya. Container adalah proses yang berjalan dari image itu. Image cukup dibuat sekali, lalu image yang sama bisa dijalankan di laptop, di CI, dan di server. Untuk proyek frontend, artinya versi Node yang bisa ditebak, instalasi dependensi yang deterministik, dan build yang tidak bergantung pada tool yang terpasang secara global.",
      },
      { type: "heading", level: 2, text: "Dockerfile multi-stage" },
      {
        type: "paragraph",
        text: "Aplikasi Vite dibuild menjadi file statis, dan container yang membuild-nya tidak perlu sekaligus menyajikannya. Dengan build multi-stage, tahap pertama menyimpan Node dan dependensi, sementara image akhir hanya berisi aset hasil kompilasi dan sebuah web server kecil.",
      },
      {
        type: "code",
        language: "dockerfile",
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
        type: "paragraph",
        text: "Tahap build dibuang begitu saja. Image runtime tidak berisi kode sumber, dependensi dev, maupun runtime Node yang bisa diserang, jadi ukurannya lebih kecil dan permukaan serangannya lebih sempit.",
      },
      {
        type: "heading",
        level: 2,
        text: "Abaikan lebih dari sekadar node_modules",
      },
      {
        type: "paragraph",
        text: "File `.dockerignore` menjaga build context tetap kecil dan mencegah kondisi lokal ikut masuk ke image. Minimal, kecualikan dependensi, hasil build, riwayat Git, dan file environment lokal.",
      },
      {
        type: "code",
        language: "text",
        code: `node_modules
dist
.git
.env
.env.*
*.log
coverage`,
      },
      {
        type: "callout",
        title: "Jangan pernah menyimpan rahasia di dalam image",
        text: "Build frontend hanya melihat variabel yang tersedia saat build. Kalau sebuah nilai bersifat rahasia, ia sama sekali tidak pantas ada di bundle klien. Untuk endpoint publik, pakai konfigurasi runtime bila memungkinkan.",
      },
      { type: "heading", level: 2, text: "Build dan jalankan di lokal" },
      {
        type: "code",
        language: "bash",
        code: `docker build -t portfolio:local .
docker run --rm -p 8080:80 portfolio:local`,
      },
      {
        type: "paragraph",
        text: "Buka `http://localhost:8080`. Kalau aplikasi single-page kamu memakai rute di sisi klien, web server butuh fallback ke `index.html`. Di nginx itu berupa aturan `try_files`, sedangkan di static host biasanya berupa pengaturan rewrite. Memastikan ini benar di lokal akan menghindarkanmu dari 404 yang membingungkan di production.",
      },
      {
        type: "heading",
        level: 2,
        text: "Yang tidak bisa diselesaikan Docker",
      },
      {
        type: "list",
        items: [
          "Build yang lambat tidak akan jadi cepat, kecuali layer caching dimanfaatkan.",
          "Docker tidak menggantikan CI. Ia hanya memberi CI lingkungan yang bisa diulang untuk dijalankan.",
          "SPA tidak akan tersaji dengan benar tanpa aturan fallback.",
          "Lockfile yang tidak konsisten tidak akan tersembunyi, jadi pakai instalasi frozen di CI.",
        ],
      },
      {
        type: "paragraph",
        text: 'Mulailah dengan satu Dockerfile dan satu layanan. Begitu kamu mendengar diri sendiri bilang "di lokal jalan, tapi di server deploy tidak", kamu sudah punya alasan untuk membuat build-nya berbasis container. Untuk kebanyakan proyek frontend, itu sudah cukup.',
      },
    ],
  },
  {
    slug: "database-design-fundamentals",
    title: "Dasar-Dasar Desain Basis Data: Mulai dari Pertanyaan",
    excerpt:
      "Skema yang baik tidak lahir dari menerapkan aturan normalisasi. Ia dimulai dari pertanyaan yang harus dijawab produk, dan aturan yang tidak boleh dilanggarnya.",
    category: "Basis Data",
    publishedAt: "2025-12-03",
    cover: blogMedia.database,
    coverAlt:
      "Ilustrasi abstrak tabel relasional dan baris data yang saling terhubung",
    tags: ["Basis Data", "PostgreSQL", "Pemodelan data"],
    content: [
      {
        type: "paragraph",
        text: "Waktu mulai membangun aplikasi full-stack, saya merancang tabel dengan mendaftar field yang ada di sebuah layar. Itu berhasil sampai produknya butuh tampilan kedua dari data yang sama. Ternyata skemanya mencerminkan antarmuka, bukan domainnya, dan setiap fitur baru berarti migrasi baru. Cara yang lebih baik memang lebih lambat di awal, tapi jauh lebih cepat sesudahnya.",
      },
      {
        type: "heading",
        level: 2,
        text: "Ajukan pertanyaan sebelum membuka editor skema",
      },
      {
        type: "paragraph",
        text: "Skema adalah kumpulan jawaban atas pertanyaan. Entitas mana yang berdiri sendiri? Apa yang bisa benar pada saat yang sama? Fakta mana yang tidak boleh diduplikasi? Untuk fitur faktur yang sederhana, daftarnya bisa seperti ini:",
      },
      {
        type: "list",
        items: [
          "Bisakah satu pelanggan punya beberapa faktur, dan bisakah satu faktur dimiliki lebih dari satu pelanggan?",
          "Bisakah item baris faktur ada tanpa fakturnya?",
          "Apakah harga berubah dari waktu ke waktu, dan haruskah faktur lama tetap memakai harga saat faktur itu dibuat?",
          "Bisakah faktur dihapus, atau hanya dibatalkan?",
          "Operasi mana yang harus terjadi secara atomik?",
        ],
      },
      {
        type: "paragraph",
        text: "Pertanyaan-pertanyaan ini menghasilkan entitas, relasi, dan batasan. Sebuah layar hanya menghasilkan field. Memulai dari layar adalah cara sebuah item baris akhirnya menyimpan harga produk yang diam-diam berubah setiap kali produknya diedit.",
      },
      { type: "heading", level: 2, text: "Modelkan relasi secara eksplisit" },
      {
        type: "paragraph",
        text: "Pakai tabel join untuk relasi banyak-ke-banyak, dan beri mereka arti sendiri bila perlu. Baris pesanan bukan sekadar penghubung antara pesanan dan produk. Ia punya jumlah dan harga satuan yang dicatat saat pembelian. Memperlakukannya sebagai baris tersendiri membuat riwayat itu tercatat jelas.",
      },
      {
        type: "code",
        language: "sql",
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
      {
        type: "heading",
        level: 2,
        text: "Normalisasi sampai invariant mudah dijaga",
      },
      {
        type: "paragraph",
        text: "Normalisasi biasanya diajarkan sebagai urutan bentuk normal. Dalam praktik, saya memakai uji yang lebih sederhana: bisakah satu fakta diperbarui di satu tempat saja? Kalau alamat pelanggan disimpan di setiap pesanan, memperbaikinya butuh pembaruan massal, dan pesanan lama bisa kehilangan akurasi historisnya. Menyimpan snapshot alamat terpisah di pesanan lalu menjadi keputusan yang disengaja, bukan kebetulan.",
      },
      {
        type: "callout",
        title: "Denormalisasi boleh, asal disengaja",
        text: "Menyimpan salinan sebuah nilai untuk menjaga riwayat, menghindari join yang berat, atau menegakkan aturan bisnis itu tidak masalah, selama kamu tahu salinan mana yang jadi acuan dan bagaimana semuanya dijaga tetap konsisten.",
      },
      {
        type: "heading",
        level: 2,
        text: "Indeks dibuat untuk query, bukan untuk kolom",
      },
      {
        type: "paragraph",
        text: "Indeks yang berguna mengikuti pola aksesnya: kolom di filter dulu, baru urutannya. Membuat indeks di setiap foreign key memang langkah pertama yang umum, tapi belum tentu berguna. Lihat query plan dari query yang benar-benar berjalan, dan buang indeks yang cuma memperlambat penulisan.",
      },
      {
        type: "code",
        language: "sql",
        code: `-- Mendukung tampilan umum "pesanan terbuka terbaru untuk seorang pelanggan"
create index orders_customer_status_created_idx
  on orders (customer_id, status, created_at desc);`,
      },
      {
        type: "heading",
        level: 2,
        text: "Jaga invariant dengan transaksi dan batasan",
      },
      {
        type: "paragraph",
        text: "Kode aplikasi bisa dijalankan ulang, ter-deploy dua kali, atau berebut dengan request lain. Basis data seharusnya yang menegakkan aturan yang harus selalu berlaku. Pakai foreign key, unique constraint, dan check constraint untuk aturan struktural, serta transaksi untuk operasi yang menyentuh banyak baris. Pesanan berstatus `paid` tanpa catatan pembayaran seharusnya mustahil terjadi, bukan sekadar jarang.",
      },
      { type: "heading", level: 2, text: "Migrasi adalah bagian dari desain" },
      {
        type: "paragraph",
        text: "Pikirkan bagaimana skema akan berubah ketika datanya sudah ada. Tambahkan kolom nullable, isi ulang secara bertahap, deploy kode yang bisa menangani kedua bentuk, baru perketat batasannya. Bisa mengubah skema dengan aman lebih berharga daripada langsung benar di setiap kolom pada percobaan pertama.",
      },
      {
        type: "paragraph",
        text: "Kebiasaan di balik semua ini adalah menuliskan invariant sebelum menulis tabel. Setelah pertanyaannya jelas, skema lebih mudah dijelaskan ke developer lain, dan jauh lebih mudah diubah ketika produk pasti akan menanyakan sesuatu yang baru.",
      },
    ],
  },
];
