import { projectMedia } from "@/data/media";
import type { Project } from "@/types";

/**
 * ─────────────────────────────────────────────────────────────
 *  FEATURED PROJECTS — INDONESIAN
 *  Padanan dari `projects.en.ts`. Nama produk, slug, tautan,
 *  dan nama teknologi sengaja tidak diterjemahkan.
 * ─────────────────────────────────────────────────────────────
 */
export const projectsId: Project[] = [
  {
    slug: "taskflow",
    name: "TaskFlow",
    category: "SaaS · Produktivitas",
    summary:
      "Ruang kerja proyek yang tidak bising untuk tim produk kecil, dibangun di sekitar papan yang bisa dikendalikan penuh lewat keyboard dan log aktivitas yang mudah dibaca.",
    description:
      "TaskFlow adalah studi kasus perangkat lunak manajemen proyek: papan real-time, izin akses, drag-and-drop yang aksesibel, dan usaha sengaja untuk menjaga antarmukanya tidak ramai.",
    year: "2025",
    role: "Desain produk & rekayasa full-stack",
    duration: "12 minggu",
    thumbnail: projectMedia.taskflow.cover,
    thumbnailAlt:
      "Antarmuka aplikasi TaskFlow menampilkan papan kanban dengan kolom sprint dan panel aktivitas",
    featured: true,
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Hono",
      "PostgreSQL",
      "Redis",
      "Docker",
    ],
    features: [
      {
        title: "Papan yang mengutamakan keyboard",
        description:
          "Buat, pindahkan, dan selesaikan tugas tanpa menyentuh mouse. Sisanya bisa dijangkau lewat command palette.",
      },
      {
        title: "Real-time tanpa tampilan yang loncat-loncat",
        description:
          "Server yang menentukan urutan dan klien memperbarui tampilan lebih dulu (optimistis), jadi rekan tim yang jauh tetap sinkron dan kartu tidak berpindah-pindah sendiri.",
      },
      {
        title: "Aktivitas yang menjelaskan dirinya sendiri",
        description:
          "Linimasa yang enak dibaca mencatat keputusan dan perpindahan kepemilikan, bukan hanya field mana yang diubah.",
      },
      {
        title: "Izin sesuai peran",
        description:
          "Izin di tingkat workspace, proyek, dan tugas dijalankan di satu lapisan kebijakan yang dipakai semua endpoint.",
      },
      {
        title: "Tampilan untuk gaya kerja yang berbeda",
        description:
          "Tampilan papan, daftar, dan linimasa ringkas memakai satu model filter yang sama, dan statenya disimpan di URL.",
      },
      {
        title: "Data yang mudah dibawa pergi",
        description:
          "Ekspor CSV dan JSON dibuat dari lapisan query bertipe, jadi tim selalu bisa membawa datanya.",
      },
    ],
    links: {
      demo: "https://example.com/demo/taskflow",
      repository: "https://github.com/YanuarArif/taskflow",
    },
    caseStudy: {
      overview:
        "TaskFlow adalah ruang kerja proyek untuk tim produk beranggotakan tiga sampai lima belas orang. Produk ini tidak berusaha menang di jumlah fitur. Ia fokus pada beberapa momen yang membuat papan berguna setiap hari: mencatat pekerjaan dengan cepat, melihat apa yang berubah, dan memindahkan tugas tanpa kehilangan konteks.",
      problem:
        'Tim kecil biasanya menambah alat, bukan menggantinya. Papan yang mereka pakai kalau tidak terlalu sederhana untuk menjawab "siapa yang mengubah ini, dan kenapa?", ya terlalu bisa diatur sampai merawat ruang kerjanya jadi proyek tersendiri. Permintaannya: ruang kerja harian yang bisa diandalkan, tetap cepat meski satu papan berisi ratusan tugas, bisa dipakai penuh lewat keyboard, dan membuat perubahan mudah diikuti tanpa dashboard audit terpisah.',
      solution:
        "Saya merancang tata letak tiga panel yang ringkas (navigasi, papan, aktivitas) di sekitar model tugas yang keputusan akhirnya ada di server. Setiap perubahan lewat endpoint perintah bertipe, urutan tugas memakai indeks fraksional, dan event ditulis dalam langkah yang sama dengan perubahan datanya. Papan diperbarui lebih dulu di sisi klien, dan tetap bisa direkonsiliasi dengan rapi ketika dua orang memindahkan kartu yang sama.",
      stack: [
        {
          label: "Antarmuka",
          items: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "Motion"],
        },
        { label: "Aplikasi", items: ["Hono", "Zod", "Node.js", "REST API"] },
        {
          label: "Data & infrastruktur",
          items: ["PostgreSQL", "Prisma", "Redis", "Docker"],
        },
      ],
      process: [
        {
          title: "Memetakan rutinitas harian",
          description:
            "Saya mewawancarai empat tim produk kecil dan mengamati cara mereka memakai papan yang ada. Sebagian besar gesekan datang dari rapat status dan kepemilikan yang tidak jelas, bukan dari fitur yang kurang.",
        },
        {
          title: "Merancang model informasi",
          description:
            "Workspace, proyek, tugas, komentar, dan event saya modelkan sebelum menyentuh antarmuka. Izin dan riwayat aktivitas sudah jadi bagian dari data sejak awal, bukan fitur tambahan belakangan.",
        },
        {
          title: "Membangun per potongan vertikal",
          description:
            "Setiap potongan dikerjakan sampai tuntas dari ujung ke ujung: skema, endpoint, antarmuka, tes. Papan dulu, lalu aktivitas, filter, dan ekspor. Dengan cara ini masalah integrasi ketahuan lebih awal.",
        },
        {
          title: "Menguji dengan kelompok beta kecil",
          description:
            "Tiga tim memakainya selama dua minggu. Saya mengamati sesi mereka, mencatat kondisi error, dan memangkas dua fitur rencana awal yang hanya menambah pengaturan tanpa mengubah cara siapa pun bekerja.",
        },
      ],
      challenges: [
        {
          title: "Memindahkan kartu tanpa mouse",
          problem:
            "Papan yang hanya mendukung drag-and-drop dengan pointer tidak bisa dipakai pengguna keyboard dan teknologi bantu, dan event drag bawaan browser hampir tidak memberi informasi ke screen reader.",
          solution:
            "Setiap kartu punya menu pindah dan pintasan keyboard khusus. Live region yang tidak menyela mengumumkan kolom dan posisi baru setelah tiap perpindahan, dan API perintah yang sama dipakai untuk aksi lewat pointer, keyboard, maupun massal.",
        },
        {
          title: "Pengurutan ulang yang terjadi bersamaan",
          problem:
            "Kalau dua orang memindahkan kartu di waktu yang sama, posisi bisa kembar dan sesekali ada pembaruan yang hilang. Menulis ulang semua baris di setiap perpindahan juga tidak akan kuat untuk papan besar.",
          solution:
            'Saya memakai indeks string fraksional dan field revisi di tiap tugas. Perpindahan dikirim sebagai perintah "letakkan setelah tugas X", server yang menyelesaikannya, dan klien hanya merekonsiliasi tugas yang revisinya berubah.',
        },
        {
          title: "Membuat aktivitas enak dibaca",
          problem:
            "Log event gampang berubah jadi tumpukan noise. Mencatat setiap perubahan field membuat linimasa tidak terpakai dalam sehari.",
          solution:
            "Event dimodelkan sebagai aksi yang punya arti (ditugaskan, dipindahkan, diblokir, diselesaikan), dan suntingan beruntun dari orang yang sama digabung. UI menampilkan satu kalimat, siapa pelakunya, dan waktu relatif, bukan diff JSON.",
        },
      ],
      results: [
        "Kelompok beta berhenti memakai alat pelacak kedua untuk perencanaan sprint, sehingga pembaruan ganda di tinjauan mingguan mereka berkurang.",
        "Bagi pengguna yang kembali, membuat dan memindahkan tugas lewat keyboard terbukti lebih cepat daripada lewat pointer.",
        "Papan berisi 800 tugas hasil seed tetap responsif di uji pengurutan ulang, tanpa perintah yang hilang di simulasi sesi bersamaan.",
        "Linimasa aktivitas jadi panel samping yang paling sering dibuka di sesi beta, terutama untuk memastikan siapa yang memegang apa.",
      ],
      lessons: [
        "Antarmuka yang cepat biasanya berasal dari model data yang jelas, bukan dari komponen yang lebih ngebut.",
        "Batasan aksesibilitas ternyata memperbaiki interaksi untuk semua orang. Alur keyboard akhirnya jadi cara utama memindahkan tugas.",
        "Memangkas pengaturan lebih susah daripada menambah fitur, tapi itulah alasan utama ruang kerja ini terasa lebih tenang dibanding alternatifnya.",
      ],
      screenshots: [
        {
          src: projectMedia.taskflow.detail,
          alt: "Linimasa aktivitas TaskFlow dan panel detail tugas dengan komentar bertipe serta riwayat status",
          caption:
            "Detail tugas dan aktivitas ada di satu panel, jadi keputusan tetap menempel pada pekerjaannya.",
        },
      ],
    },
  },
  {
    slug: "shopease",
    name: "ShopEase",
    category: "E-commerce",
    summary:
      "Storefront headless untuk merek perabot rumah independen, dengan tampilan jelajah ala majalah, pencarian instan, dan checkout yang tidak menghalangi.",
    description:
      "ShopEase adalah studi kasus e-commerce yang membahas pencarian berfaset, performa katalog yang penuh gambar, pemilihan produk yang aksesibel, dan keranjang yang tahan banting.",
    year: "2024",
    role: "Lead frontend & design system",
    duration: "16 minggu",
    thumbnail: projectMedia.shopease.cover,
    thumbnailAlt:
      "Storefront ShopEase dengan gambar produk besar, judul editorial, dan grid produk pilihan",
    featured: true,
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "Stripe",
      "Cloudflare",
    ],
    features: [
      {
        title: "Halaman koleksi ala editorial",
        description:
          "Tim merchandising menyusun cerita dari blok yang bisa dipakai ulang tanpa merusak tata letak maupun anggaran performa.",
      },
      {
        title: "Pencarian berfaset instan",
        description:
          "Filter berdasarkan material, warna, dan ketersediaan. Statenya ada di URL, jadi mudah dibagikan dan di-cache.",
      },
      {
        title: "Pengiriman gambar yang cepat",
        description:
          "Sumber gambar responsif, format modern, dan placeholder blur-up menjaga foto produk beresolusi besar tidak membebani halaman.",
      },
      {
        title: "Keranjang yang tidak hilang",
        description:
          "Keranjang berbasis server tetap utuh saat halaman di-refresh, dibuka di beberapa tab, atau saat login, tanpa item ganda.",
      },
      {
        title: "Pemilihan varian yang aksesibel",
        description:
          "Pemilih warna dan ukuran menampilkan nama sebenarnya, ketersediaan, dan fokus keyboard, bukan swatch yang cuma hiasan.",
      },
      {
        title: "Pelacakan pesanan",
        description:
          "Halaman pasca-pembelian yang sederhana menampilkan progres pengiriman, bukti pembayaran, dan kontak dukungan di satu tempat.",
      },
    ],
    links: {
      demo: "https://example.com/demo/shopease",
      repository: "https://github.com/YanuarArif/shopease",
    },
    caseStudy: {
      overview:
        "ShopEase adalah storefront headless untuk sekumpulan merek perabot rumah independen. Permintaan desainnya adalah nuansa katalog cetak (foto yang lapang, tipografi yang rapi, menjelajah tanpa terburu-buru) tanpa mengorbankan kecepatan dan kejelasan yang diharapkan dari toko online modern.",
      problem:
        "Kumpulan merek ini memakai tema hosted yang terlihat wajar di koneksi cepat, tapi hampir tidak bisa dipakai di ponsel. Halaman produk memuat lebih dari 4 MB gambar, filter memicu muat ulang halaman penuh, dan pemilihan warna bergantung pada swatch kecil tanpa label. Tim mereka juga harus bisa menerbitkan edisi musiman tanpa bantuan developer.",
      solution:
        "Saya membangun storefront React di atas API commerce yang kecil, dengan model konten berbasis blok untuk halaman editorial. Pencarian dan filter ada di URL, gambar dikirim secara responsif dari Cloudflare, dan server merekonsiliasi keranjang di setiap perubahan. Hasilnya terasa seperti majalah, tapi berperilaku seperti aplikasi.",
      stack: [
        {
          label: "Antarmuka",
          items: [
            "React",
            "TypeScript",
            "Vite",
            "Tailwind CSS",
            "React Router",
          ],
        },
        {
          label: "Commerce",
          items: ["Node.js", "PostgreSQL", "Stripe", "Zod"],
        },
        {
          label: "Pengiriman",
          items: ["Cloudflare", "GitHub Actions", "Playwright"],
        },
      ],
      process: [
        {
          title: "Mengaudit katalog yang sebenarnya",
          description:
            "Saya memprofil toko yang ada dengan foto produk asli dan skrip pihak ketiganya, lalu menetapkan anggaran performa untuk template daftar dan halaman produk sebelum mulai mendesain.",
        },
        {
          title: "Merancang sistem blok",
          description:
            "Halaman editorial disusun dari sekumpulan kecil blok dengan props yang terbatas. Tim merchandising bebas mengatur cerita tanpa perlu membuat tata letak baru atau menulis inline style.",
        },
        {
          title: "Memprototipe jalur pembelian",
          description:
            "Halaman produk, pemilih varian, drawer keranjang, dan checkout saya buat prototipenya bersamaan. Kasus tepi seperti kombinasi yang habis dan perubahan harga diselesaikan di prototipe, bukan ditambal setelah rilis.",
        },
        {
          title: "Mengukur dan menyempurnakan",
          description:
            "Lighthouse, uji perangkat dengan throttling, dan pengecekan dengan screen reader jadi bagian dari setiap pull request. QA akhir mencakup lima ukuran layar mobile yang paling umum dan dua ponsel Android lama.",
        },
      ],
      challenges: [
        {
          title: "Gambar berat, anggaran kecil",
          problem:
            "Foto produk beresolusi tinggi adalah inti merek ini, tapi satu halaman koleksi saja gampang melewati beberapa megabyte gambar.",
          solution:
            "Art direction memakai beberapa preset rasio aspek dan sumber AVIF/WebP. Gambar di bagian atas halaman dimuat langsung dengan dimensi yang sudah dipesan. Sisanya di-lazy-load dengan placeholder berkualitas rendah, sehingga layout shift nyaris nol.",
        },
        {
          title: "Keranjang tidak sinkron antar tab",
          problem:
            "Orang sering menjelajah di beberapa tab. Keranjang yang hanya ada di klien menimpa perubahan yang lebih baru dan kadang memunculkan lagi item yang sudah dihapus.",
          solution:
            "Keranjang dijadikan resource di server dengan field versi. Tiap perubahan mengirim versi yang diharapkan, dan respons yang sudah usang memicu pengambilan ulang, bukan diterapkan. Broadcast channel yang ringan memperbarui tab lain di browser yang sama.",
        },
        {
          title: "Pemilihan varian yang bisa dipakai semua orang",
          problem:
            "Swatch lama hanya menyampaikan warna secara visual, dan menonaktifkan beberapa kombinasi tanpa memberi tahu alasannya.",
          solution:
            "Setiap opsi punya label teks dan jumlah stok. Kombinasi yang tidak tersedia tetap bisa difokuskan dan menjelaskan alasannya, dan memilih opsi memperbarui ringkasan langsung berisi nama produk lengkap, ukuran, harga, dan status stok.",
        },
      ],
      results: [
        "Dalam perbandingan internal, template koleksi yang didesain ulang memangkas bobot gambar awal lebih dari setengah.",
        "Filter jadi instan dan mudah dibagikan, dan tim langsung memakai state URL itu di kampanye musiman.",
        "Di uji kegunaan, lebih sedikit orang yang meninggalkan checkout setelah varian yang tidak tersedia dijelaskan langsung di tempatnya.",
        "Suntingan merchandising yang dulu butuh developer sekarang bisa terbit dari editor konten, tanpa mengubah kode.",
      ],
      lessons: [
        "Performa itu bagian dari desain. Menentukan rasio gambar sejak awal mencegah sebagian besar masalah yang mahal.",
        "Model state URL yang dipakai bersama mengurangi bug dan dokumentasi, karena setiap filter punya satu sumber kebenaran.",
        "Perbaikan aksesibilitas yang paling bagus ternyata juga jadi interaksi paling jelas buat semua orang.",
      ],
      screenshots: [
        {
          src: projectMedia.shopease.detail,
          alt: "Halaman produk ShopEase dengan detail material, pemilih warna dan ukuran aksesibel, serta panel tambah ke keranjang",
          caption:
            "Pilihan material, warna, dan ukuran tetap terlihat dan menjelaskan ketersediaan sebelum checkout.",
        },
      ],
    },
  },
  {
    slug: "fintrack",
    name: "FinTrack",
    category: "Fintech · Dashboard",
    summary:
      "Dashboard keuangan pribadi untuk freelancer: penghasilan yang tidak tetap, biaya berulang, dan proyeksi yang terus terang soal ketidakpastiannya.",
    description:
      "FinTrack adalah studi kasus keuangan pribadi yang membahas deteksi transaksi berulang, visualisasi data yang aksesibel, impor CSV, dan desain yang menjaga privasi.",
    year: "2024",
    role: "Desain produk & rekayasa frontend",
    duration: "10 minggu",
    thumbnail: projectMedia.fintrack.cover,
    thumbnailAlt:
      "Dashboard FinTrack dengan grafik arus kas, rincian kategori, dan transaksi terbaru",
    featured: true,
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "Redis",
    ],
    features: [
      {
        title: "Proyeksi arus kas",
        description:
          "Menggabungkan biaya berulang yang sudah diketahui dengan perkiraan hati-hati atas penghasilan yang tidak tetap, dan dipisahkan dengan jelas dari angka aktual.",
      },
      {
        title: "Deteksi transaksi berulang",
        description:
          "Menyarankan langganan dan tagihan dari seberapa sering transaksi muncul, lalu pengguna bisa mengonfirmasi atau mengabaikannya.",
      },
      {
        title: "Kategori yang berguna",
        description:
          "Aturan didahulukan daripada tebakan otomatis, dan setiap saran bisa dikoreksi dalam satu langkah.",
      },
      {
        title: "Impor CSV",
        description:
          "Alur pemetaan kolom dengan pratinjau dan deteksi duplikat bisa menangani ekspor dari berbagai bank.",
      },
      {
        title: "Grafik yang aksesibel",
        description:
          "Setiap grafik disertai versi tabel, ringkasan yang bisa dibaca, dan titik data yang bisa dijangkau lewat keyboard.",
      },
      {
        title: "Privat sejak awal",
        description:
          "Demo ini tidak terhubung ke bank mana pun. Semua data tetap di akun pengguna dan bisa diekspor atau dihapus.",
      },
    ],
    links: {
      demo: "https://example.com/demo/fintrack",
      repository: "https://github.com/YanuarArif/fintrack",
    },
    caseStudy: {
      overview:
        "FinTrack adalah dashboard keuangan yang dibangun dari masalah yang akrab bagi freelancer: penghasilan datang tidak merata, sementara sewa, langganan software, dan pajak tetap harus dibayar. Aplikasi ini membantu orang melihat apa yang sudah pasti keluar, apa yang kemungkinan besar terjadi, dan apa yang masih belum jelas, tanpa berpura-pura bahwa proyeksi adalah janji.",
      problem:
        "Kebanyakan alat anggaran mengasumsikan gaji tetap, sehingga freelancer akhirnya mengisi kategori secara manual atau malah tidak membuka dashboard sama sekali. Banyak juga yang menampilkan proyeksi yang terlihat yakin padahal datanya sedikit, dan itu lebih buruk daripada tidak menampilkan proyeksi.",
      solution:
        "Saya merancang model dua lapis: item berulang yang sudah dikonfirmasi dan riwayat penghasilan yang teramati. Dashboard memisahkan arus kas yang sudah pasti dari arus kas hasil proyeksi, menampilkan asumsi di balik setiap angka, dan meminta pengguna mengoreksi kategori, bukan diam-diam belajar dari kesalahannya sendiri.",
      stack: [
        {
          label: "Antarmuka",
          items: ["React", "TypeScript", "Vite", "Tailwind CSS", "Recharts"],
        },
        {
          label: "Aplikasi",
          items: ["Node.js", "REST API", "PostgreSQL", "Redis"],
        },
        { label: "Kualitas", items: ["Vitest", "Testing Library", "Docker"] },
      ],
      process: [
        {
          title: "Ngobrol dengan freelancer",
          description:
            'Enam percakapan membuat satu hal jelas. Pertanyaan yang berguna bukan "berapa yang sudah saya habiskan?", tapi "berapa yang aman saya tanggung bulan depan?"',
        },
        {
          title: "Merumuskan proyeksi secara jujur",
          description:
            "Saya menuliskan semua asumsi (penghasilan tidak tetap, dana cadangan, sisihan pajak, item berulang) dan membuat masing-masing terlihat serta bisa diedit di antarmuka.",
        },
        {
          title: "Membangun jalur data lebih dulu",
          description:
            "Ingesti CSV, deduplikasi, dan aturan kategori dikerjakan sebelum grafik. Dashboard hanya bisa dipercaya sejauh alur impornya bisa dipercaya.",
        },
        {
          title: "Mendesain dengan data nyata yang berantakan",
          description:
            "Saya menguji dengan ekspor yang sudah dianonimkan, lengkap dengan kolom yang hilang, baris ganda, dan deskripsi yang saling tumpang tindih. Dari situ muncul kasus tepi yang tidak akan terlihat kalau pakai data buatan.",
        },
      ],
      challenges: [
        {
          title: "Tanggal, zona waktu, dan tagihan berulang",
          problem:
            "Tagihan yang jatuh di hari terakhir tiap bulan terus bergeser di proyeksi kalau pengguna sedang bepergian atau browsernya memakai zona waktu lain.",
          solution:
            "Semua tanggal keuangan disimpan sebagai tanggal kalender biasa tanpa komponen jam. Aturan pengulangan dijabarkan di server memakai zona waktu akun, dan klien cuma memformat tanggal hasilnya.",
        },
        {
          title: "Grafik yang tidak terbaca oleh siapa pun",
          problem:
            "Grafik arus kas pertama bergantung pada warna dan hover, tidak bisa dipakai pengguna screen reader, dan menyembunyikan perbedaan antara nilai aktual dan proyeksi.",
          solution:
            "Sekarang grafik hanyalah salah satu cara menampilkan tabel ringkasan yang kecil. Nilai aktual memakai penanda penuh, proyeksi memakai penanda berongga, dan setiap bulan punya titik data yang bisa difokuskan lengkap dengan ringkasan teks. Tabelnya ada di balik disclosure, tidak terjebak di dalam tooltip.",
        },
        {
          title: "Impor yang tidak konsisten",
          problem:
            "Ekspor CSV dari bank berbeda-beda dalam delimiter, format tanggal, encoding, dan nama kolom. Impor versi awal membuat duplikat setiap kali pengguna mengulang.",
          solution:
            "Importer memisahkan tahap parsing, pemetaan, dan normalisasi. Fingerprint deterministik dari tanggal, jumlah, dan deskripsi mencegah duplikat, dan setiap impor dipratinjau sebelum disimpan.",
        },
      ],
      results: [
        "Peserta uji bisa membedakan biaya yang sudah pasti dari penghasilan proyeksi tanpa diberi petunjuk.",
        "Di fixture pengujian, deteksi duplikat tetap bertahan saat impor diulang dengan rentang tanggal yang tumpang tindih.",
        "Setiap grafik di dashboard kini punya tabel dan ringkasan teks padanannya, jadi informasi intinya tidak bergantung pada penglihatan atau pointer.",
        "Halaman asumsi proyeksi menjadi bagian onboarding yang disengaja, bukan pengaturan lanjutan.",
      ],
      lessons: [
        "Kepercayaan adalah bahan desain. Menampilkan asumsi lebih berharga daripada memperhalus algoritma proyeksi.",
        "Alur impor layak mendapat perhatian desain sebesar dashboard. Kebanyakan masalah data bermula di situ.",
        "Grafik yang aksesibel biasanya juga lebih jelas, karena kita dipaksa menyebutkan apa sebenarnya yang ingin disampaikan gambarnya.",
      ],
      screenshots: [
        {
          src: projectMedia.fintrack.detail,
          alt: "Tampilan proyeksi FinTrack dengan arus kas aktual dan terproyeksi, kontrol asumsi, dan tabel data",
          caption:
            "Proyeksi diberi garis tepi dan label, dengan tabel ringkasan di samping grafik.",
        },
      ],
    },
  },
  {
    slug: "fitlife",
    name: "FitLife",
    category: "Kesehatan & Kebugaran",
    summary:
      "Pendamping latihan untuk orang yang berolahraga di sela waktu singkat dan tidak teratur: offline-first, minim gesekan, dan apa adanya soal kemajuan.",
    description:
      "FitLife adalah studi kasus aplikasi pelacak kebugaran yang membahas arsitektur mobile offline-first, sinkronisasi di latar belakang, grafik aktivitas yang aksesibel, dan performa di perangkat sederhana.",
    year: "2023",
    role: "Developer full-stack",
    duration: "14 minggu",
    thumbnail: projectMedia.fitlife.cover,
    thumbnailAlt:
      "Layar aplikasi mobile FitLife menampilkan ring aktivitas, rencana latihan mingguan, dan ringkasan latihan",
    featured: true,
    tech: [
      "React Native",
      "Expo",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "Docker",
    ],
    features: [
      {
        title: "Latihan offline",
        description:
          "Sesi dicatat di perangkat dan disinkronkan saat koneksi kembali, tanpa mengganggu timer atau menghilangkan set.",
      },
      {
        title: "Rencana yang menyesuaikan",
        description:
          "Rencana mingguan menjadwal ulang sesi yang terlewat, supaya streak tidak berubah jadi sumber rasa bersalah.",
      },
      {
        title: "Kemajuan yang bermakna",
        description:
          "Yang ditonjolkan adalah konsistensi dan tren pribadi, bukan peringkat orang di papan skor yang asal-asalan.",
      },
      {
        title: "Pencatatan yang ringan",
        description:
          "Mulai latihan dari rencana, rutinitas tersimpan, atau satu ketukan di layar utama. Tidak perlu akun untuk memulai.",
      },
      {
        title: "Ringkasan yang aksesibel",
        description:
          "Grafik disertai ringkasan dan tampilan daftar, dan aplikasi mendukung teks yang bisa diperbesar serta reduced motion di semua layar.",
      },
      {
        title: "Fitur sosial yang privat",
        description:
          "Grup latihan bersifat opsional dan hanya membagikan latihan yang selesai serta dukungan semangat, tidak pernah data tubuh atau lokasi yang presisi.",
      },
    ],
    links: {
      demo: "https://example.com/demo/fitlife",
      repository: "https://github.com/YanuarArif/fitlife",
    },
    caseStudy: {
      overview:
        "FitLife adalah pendamping latihan untuk orang yang jadwalnya tidak selalu rapi. Aplikasi ini dirancang untuk sesi yang singkat, minggu yang sulit ditebak, dan ponsel yang sering offline di gym atau ruang bawah tanah. Sesi yang terlewat dianggap hal biasa, dan kembali berlatih dibuat semudah mungkin.",
      problem:
        "Kebanyakan aplikasi kebugaran memberi hadiah untuk streak yang tidak putus, jadi satu minggu yang terganggu terasa seperti kegagalan. Aplikasi semacam itu juga butuh koneksi untuk pencatatan dasar dan mengubur kemajuan yang berguna di bawah perbandingan sosial. Tugasnya adalah membuat sesuatu yang tetap berguna di koneksi jelek dan di minggu yang sibuk.",
      solution:
        "Saya membangun klien mobile offline-first dengan antrean latihan lokal dan sinkronisasi yang deterministik. Rencana mingguan dibuat dari hari-hari yang memang kosong dan dihitung ulang kalau ada sesi yang terlewat. Kemajuan ditampilkan sebagai tren pribadi (konsistensi, volume, dan pemulihan) dengan ringkasan yang aksesibel, bukan satu skor.",
      stack: [
        {
          label: "Mobile",
          items: ["React Native", "Expo", "TypeScript", "SQLite"],
        },
        { label: "Backend", items: ["Node.js", "PostgreSQL", "Redis", "Zod"] },
        { label: "Pengiriman", items: ["Docker", "GitHub Actions", "Sentry"] },
      ],
      process: [
        {
          title: "Mengamati sesi yang sebenarnya",
          description:
            "Saya mengikuti lima orang selama latihan singkat dan mencatat setiap gangguan. Cara memegang ponsel, timer istirahat, dan saat koneksi putus ternyata lebih penting daripada pustaka gerakan.",
        },
        {
          title: "Mendesain untuk minggu yang terganggu",
          description:
            "Perencana mingguan bekerja dari hari yang tersedia, bukan hari yang tetap. Sesi yang terlewat masuk ke backlog ringan yang bisa diabaikan tanpa penalti.",
        },
        {
          title: "Membangun sinkronisasi sebelum layar",
          description:
            "Lapisan data local-first dan protokol sinkronisasi dikerjakan sebelum antarmuka dipoles, jadi setiap layar diuji pada kondisi offline dan konflik yang sungguhan.",
        },
        {
          title: "Menguji di perangkat sederhana",
          description:
            "Bulan terakhir dipakai untuk ponsel Android lama, pengaturan teks besar, dan reduced motion. Animasi dan rendering grafik disetel berdasarkan hasil pengukuran, bukan tebakan.",
        },
      ],
      challenges: [
        {
          title: "Konflik data saat offline",
          problem:
            "Satu latihan bisa diedit di dua perangkat, atau sinkronisasi bisa mencoba lagi setelah server sudah menerima sebagian sesi. Aturan last-write-wins yang sederhana diam-diam membuang beberapa set.",
          solution:
            "Setiap sesi adalah log event append-only dengan ID yang dibuat di klien. Server menerima event yang idempoten dan mengurutkannya berdasarkan timestamp ditambah nomor urut per perangkat. Suntingan yang bentrok disimpan sebagai event terpisah, tidak ditimpa.",
        },
        {
          title: "Animasi di ponsel kelas bawah",
          problem:
            "Ring aktivitas dan transisinya sering patah-patah di perangkat Android lama dan tidak menghormati pengaturan reduced motion.",
          solution:
            "Saya mengganti animasi yang terus berjalan dengan satu ring gradien, memakai transform yang murah bila memungkinkan, mengurangi jumlah elemen beranimasi, dan mengikuti pengaturan gerak dari sistem operasi. Waktu per frame yang terukur membaik cukup jauh di perangkat uji yang paling tua.",
        },
        {
          title: "Kemajuan tanpa tekanan",
          problem:
            "Penguji awal menganggap skor aktivitas sebagai nilai rapor. Setelah satu minggu terlewat, mereka berhenti membuka aplikasi.",
          solution:
            "Skornya saya hapus. Layar utama sekarang menampilkan langkah berguna berikutnya, ringkasan penyelesaian mingguan yang sederhana, dan catatan saat rencana disesuaikan. Tren masih ada, tapi tidak pernah diperlakukan sebagai lulus atau gagal.",
        },
      ],
      results: [
        "Penguji beta menyelesaikan sesi offline tanpa kehilangan data, bahkan saat koneksi sengaja diputus.",
        "Di kelompok uji, layar utama yang direvisi membuat lebih banyak orang kembali setelah melewatkan satu minggu.",
        "Layar-layar inti lolos pemeriksaan teks besar dan reduced motion di perangkat tertua yang didukung.",
        "Logika sinkronisasi dicakup oleh tes replay event yang deterministik, termasuk pengiriman ganda dan yang tidak berurutan.",
      ],
      lessons: [
        "Dukungan offline adalah keputusan produk, bukan lapisan cache yang ditambahkan di akhir.",
        "Menghapus skor bisa menjadi fitur kalau skor itu mendorong perilaku ke arah yang salah.",
        "Anggaran performa di perangkat sungguhan lebih menjelaskan banyak hal daripada benchmark di mesin pengembang.",
      ],
      screenshots: [
        {
          src: projectMedia.fitlife.detail,
          alt: "Layar sesi latihan FitLife dengan timer istirahat, pencatatan set, dan indikator sinkronisasi offline",
          caption:
            "Sesi bisa dipakai penuh tanpa internet. Status sinkronisasi terlihat, tapi tidak pernah mengganggu latihan.",
        },
      ],
    },
  },
];
