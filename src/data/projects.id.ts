import { projectMedia } from '@/data/media'
import type { Project } from '@/types'

/**
 * ─────────────────────────────────────────────────────────────
 *  FEATURED PROJECTS — INDONESIAN
 *  Terjemahan dari `projects.en.ts`. Nama produk, slug, tautan,
 *  dan nama teknologi sengaja tidak diterjemahkan.
 * ─────────────────────────────────────────────────────────────
 */
export const projectsId: Project[] = [
  {
    slug: 'taskflow',
    name: 'TaskFlow',
    category: 'SaaS · Produktivitas',
    summary:
      'Ruang kerja proyek yang lebih tenang untuk tim produk kecil, dibangun di sekitar papan yang mengutamakan keyboard dan log aktivitas yang transparan.',
    description:
      'TaskFlow adalah studi kasus SaaS manajemen proyek yang mencakup papan real-time, izin, drag-and-drop yang aksesibel, dan pendekatan sengaja untuk mengurangi kebisingan antarmuka.',
    year: '2025',
    role: 'Desain produk & rekayasa full-stack',
    duration: '12 minggu',
    thumbnail: projectMedia.taskflow.cover,
    thumbnailAlt:
      'Antarmuka aplikasi TaskFlow menampilkan papan kanban dengan kolom sprint dan panel aktivitas',
    featured: true,
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Hono', 'PostgreSQL', 'Redis', 'Docker'],
    features: [
      {
        title: 'Papan yang mengutamakan keyboard',
        description:
          'Buat, pindahkan, dan selesaikan tugas tanpa menyentuh mouse, dengan command palette untuk hal lainnya.',
      },
      {
        title: 'Kolaborasi real-time yang tenang',
        description:
          'Urutan yang ditentukan server dan pembaruan optimistis menjaga rekan tim tetap sinkron tanpa antarmuka yang melompat-lompat.',
      },
      {
        title: 'Aktivitas yang menjelaskan dirinya',
        description:
          'Linimasa yang mudah dibaca mencatat keputusan dan perubahan kepemilikan, bukan hanya perubahan field.',
      },
      {
        title: 'Izin sesuai peran',
        description:
          'Cakupan workspace, proyek, dan tugas ditegakkan dalam satu lapisan kebijakan yang dipakai semua endpoint.',
      },
      {
        title: 'Tampilan untuk cara berpikir berbeda',
        description:
          'Tampilan papan, daftar, dan linimasa ringkas berbagi satu model filter dan menyimpan state di URL.',
      },
      {
        title: 'Data yang mudah dibawa',
        description:
          'Ekspor CSV dan JSON dihasilkan dari lapisan query bertipe, sehingga tim tidak pernah terkunci.',
      },
    ],
    links: {
      demo: 'https://example.com/demo/taskflow',
      repository: 'https://github.com/YanuarArif/taskflow',
    },
    caseStudy: {
      overview:
        'TaskFlow adalah ruang kerja manajemen proyek yang dirancang untuk tim produk beranggotakan tiga hingga lima belas orang. Alih-alih bersaing pada jumlah fitur, produk ini fokus pada beberapa momen yang membuat papan berguna setiap hari: menangkap pekerjaan dengan cepat, memahami apa yang berubah, dan memindahkan tugas tanpa kehilangan konteks.',
      problem:
        'Tim kecil cenderung mengumpulkan alat, bukan menggantinya. Papan yang ada terlalu ringan untuk menjawab "siapa yang mengubah ini dan mengapa?" atau terlalu bisa dikonfigurasi sehingga merawat ruang kerja menjadi proyek tersendiri. Brief-nya adalah membangun ruang kerja harian yang andal, tetap cepat pada papan berisi ratusan tugas, sepenuhnya bisa dioperasikan dari keyboard, dan membuat perubahan mudah dipahami tanpa dashboard audit.',
      solution:
        'Saya merancang ruang kerja tiga panel yang ringkas — navigasi, papan, dan aktivitas — di sekitar model tugas yang otoritatif di server. Setiap mutasi melewati endpoint perintah bertipe, urutan tugas memakai indeks fraksional, dan event ditulis bersamaan dengan perubahan data. Hasilnya adalah papan yang bisa diperbarui secara optimistis namun tetap direkonsiliasi dengan rapi saat dua orang memindahkan kartu yang sama.',
      stack: [
        { label: 'Antarmuka', items: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'Motion'] },
        { label: 'Aplikasi', items: ['Hono', 'Zod', 'Node.js', 'REST API'] },
        { label: 'Data & infrastruktur', items: ['PostgreSQL', 'Prisma', 'Redis', 'Docker'] },
      ],
      process: [
        {
          title: 'Memetakan ritual harian',
          description:
            'Saya mewawancarai empat tim produk kecil dan mengamati cara mereka memakai papan saat ini. Sebagian besar gesekan berasal dari rapat status dan kepemilikan yang tidak jelas, bukan fitur yang kurang.',
        },
        {
          title: 'Merancang model informasi',
          description:
            'Workspace, proyek, tugas, komentar, dan event dimodelkan sebelum antarmuka. Izin dan riwayat aktivitas diperlakukan sebagai data kelas satu, bukan fitur yang ditambahkan belakangan.',
        },
        {
          title: 'Membangun potongan vertikal',
          description:
            'Setiap potongan dirilis menyeluruh — skema, endpoint, antarmuka, pengujian. Papan lebih dulu, lalu aktivitas, filter, dan ekspor. Ini menjaga masalah integrasi tetap terlihat sejak awal.',
        },
        {
          title: 'Menguji dengan kelompok beta kecil',
          description:
            'Tiga tim memakai produk selama dua minggu. Saya mengamati sesi, mengukur kondisi error, dan memangkas dua fitur yang menambah konfigurasi tanpa mengubah perilaku.',
        },
      ],
      challenges: [
        {
          title: 'Memindahkan tanpa mouse',
          problem:
            'Papan yang hanya mendukung drag-and-drop pointer tidak bisa dipakai pengguna keyboard dan teknologi bantu. Event drag native juga sangat sedikit memberi informasi ke screen reader.',
          solution:
            'Kartu menyediakan menu pindah dan pintasan keyboard khusus. Live region yang sopan mengumumkan kolom dan posisi baru setelah setiap pemindahan, dan API perintah yang sama menangani aksi pointer, keyboard, serta massal.',
        },
        {
          title: 'Pengurutan ulang bersamaan',
          problem:
            'Dua orang memindahkan kartu pada saat yang sama menghasilkan posisi duplikat dan kadang pembaruan yang hilang. Menulis ulang setiap baris pada tiap pemindahan tidak akan diskalakan pada papan besar.',
          solution:
            'Saya memakai indeks string fraksional dan field revisi per tugas. Pemindahan dikirim sebagai perintah "letakkan setelah tugas X", diselesaikan di server, dan klien hanya merekonsiliasi tugas yang revisinya berubah.',
        },
        {
          title: 'Membuat aktivitas mudah dibaca',
          problem:
            'Log event bisa menjadi kebisingan. Mencatat setiap mutasi field membuat linimasa tak terpakai dalam sehari.',
          solution:
            'Event dimodelkan sebagai perintah bermakna — ditugaskan, dipindahkan, diblokir, diselesaikan — dan suntingan berurutan oleh orang yang sama dikelompokkan. UI menampilkan kalimat, pelaku, dan waktu relatif alih-alih diff JSON.',
        },
      ],
      results: [
        'Kelompok beta menggantikan alat pelacak kedua untuk perencanaan sprint, mengurangi pembaruan ganda dalam tinjauan mingguan mereka.',
        'Pembuatan dan pemindahan tugas lewat keyboard teruji lebih cepat daripada interaksi pointer bagi pengguna lama.',
        'Papan besar hasil seed (800 tugas) tetap responsif selama uji pengurutan ulang, tanpa perintah yang hilang di simulasi sesi bersamaan.',
        'Linimasa aktivitas menjadi panel sekunder yang paling sering dipakai dalam sesi beta, terutama untuk menyelesaikan pertanyaan kepemilikan.',
      ],
      lessons: [
        'Antarmuka yang cepat biasanya hasil dari model data yang jelas, bukan komponen yang lebih cepat.',
        'Batasan aksesibilitas justru memperbaiki desain interaksi untuk semua orang; alur keyboard akhirnya menjadi cara utama memindahkan tugas.',
        'Memangkas konfigurasi lebih sulit daripada menambah fitur, tetapi itulah alasan utama ruang kerja ini terasa lebih tenang daripada alternatifnya.',
      ],
      screenshots: [
        {
          src: projectMedia.taskflow.detail,
          alt: 'Linimasa aktivitas TaskFlow dan panel detail tugas dengan komentar bertipe serta riwayat status',
          caption:
            'Detail tugas dan aktivitas disimpan dalam satu panel agar keputusan tetap menempel pada pekerjaannya.',
        },
      ],
    },
  },
  {
    slug: 'shopease',
    name: 'ShopEase',
    category: 'E-commerce',
    summary:
      'Storefront headless untuk merek perabot rumah independen, dengan penjelajahan editorial, pencarian instan, dan checkout yang tidak mengganggu.',
    description:
      'ShopEase adalah studi kasus platform e-commerce yang mencakup pencarian berfaset, performa katalog berat gambar, pemilihan produk yang aksesibel, dan keranjang yang tangguh.',
    year: '2024',
    role: 'Lead frontend & design system',
    duration: '16 minggu',
    thumbnail: projectMedia.shopease.cover,
    thumbnailAlt:
      'Storefront ShopEase dengan gambar produk besar, judul editorial, dan grid produk pilihan',
    featured: true,
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Stripe', 'Cloudflare'],
    features: [
      {
        title: 'Halaman koleksi editorial',
        description:
          'Tim merchandising menyusun cerita dari blok yang dapat dipakai ulang tanpa merusak tata letak atau anggaran performa.',
      },
      {
        title: 'Pencarian berfaset instan',
        description:
          'Filter berdasarkan material, warna, dan ketersediaan dengan state berbasis URL yang mudah dibagikan dan di-cache.',
      },
      {
        title: 'Pengiriman gambar cepat',
        description:
          'Sumber responsif, format modern, dan placeholder blur-up mencegah foto produk besar mendominasi halaman.',
      },
      {
        title: 'Keranjang persisten',
        description:
          'Keranjang berbasis server bertahan saat refresh, banyak tab, dan login tanpa menduplikasi item.',
      },
      {
        title: 'Pemilihan varian aksesibel',
        description:
          'Pemilih warna dan ukuran menampilkan nama asli, ketersediaan, dan fokus keyboard alih-alih swatch dekoratif.',
      },
      {
        title: 'Pelacakan pesanan',
        description:
          'Tampilan pasca-pembelian sederhana menampilkan progres pemenuhan, bukti transaksi, dan kontak dukungan di satu tempat.',
      },
    ],
    links: {
      demo: 'https://example.com/demo/shopease',
      repository: 'https://github.com/YanuarArif/shopease',
    },
    caseStudy: {
      overview:
        'ShopEase adalah storefront headless yang dibangun untuk kumpulan merek perabot rumah independen. Brief desain meminta nuansa katalog cetak — fotografi yang lapang, tipografi yang matang, penjelajahan tanpa terburu-buru — tanpa mengorbankan kecepatan dan kejelasan yang diharapkan dari toko modern.',
      problem:
        'Kumpulan merek ini memakai tema hosted yang terlihat layak di koneksi cepat dan terasa tak terpakai di ponsel. Halaman produk memuat lebih dari 4 MB gambar, filter memicu navigasi penuh, dan pemilihan warna bergantung pada swatch kecil tanpa label. Tim juga perlu menerbitkan edisi musiman tanpa developer.',
      solution:
        'Saya membangun storefront React di atas API commerce kecil, dengan model konten berbasis blok untuk halaman editorial. Pencarian dan filter berada di URL, gambar dikirim responsif dari Cloudflare, dan keranjang direkonsiliasi di server pada setiap mutasi. Hasilnya storefront yang terasa editorial namun berperilaku seperti aplikasi.',
      stack: [
        { label: 'Antarmuka', items: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'React Router'] },
        { label: 'Commerce', items: ['Node.js', 'PostgreSQL', 'Stripe', 'Zod'] },
        { label: 'Pengiriman', items: ['Cloudflare', 'GitHub Actions', 'Playwright'] },
      ],
      process: [
        {
          title: 'Mengaudit katalog nyata',
          description:
            'Saya memprofilkan toko yang ada dengan foto produk asli dan skrip pihak ketiga, lalu menetapkan anggaran performa untuk template daftar dan produk sebelum mendesain.',
        },
        {
          title: 'Merancang sistem blok',
          description:
            'Halaman editorial dimodelkan sebagai kumpulan kecil blok dengan props terbatas. Tim merchandising bisa menyusun cerita dengan bebas tanpa menciptakan tata letak baru atau inline style.',
        },
        {
          title: 'Memprototipe jalur pembelian',
          description:
            'Halaman produk, pemilih varian, drawer keranjang, dan checkout diprototipekan bersama. Kasus tepi seperti kombinasi tak tersedia dan perubahan harga ditangani di prototipe, bukan ditambal setelah rilis.',
        },
        {
          title: 'Mengukur dan menyempurnakan',
          description:
            'Lighthouse, pengujian perangkat dengan throttle, dan pemeriksaan screen reader menjadi bagian setiap pull request. QA akhir mencakup lima viewport mobile paling umum dan dua perangkat Android lama.',
        },
      ],
      challenges: [
        {
          title: 'Gambar berat, anggaran kecil',
          problem:
            'Fotografi produk resolusi tinggi adalah inti merek, tetapi satu halaman koleksi mudah melewati beberapa megabyte gambar.',
          solution:
            'Art direction ditangani dengan sedikit preset rasio aspek dan sumber AVIF/WebP. Gambar di atas lipatan dimuat eager dengan dimensi yang sudah dipesan; sisanya lazy-load dengan placeholder kualitas rendah, menjaga layout shift mendekati nol.',
        },
        {
          title: 'Keranjang melenceng antar tab',
          problem:
            'Pengguna sering menjelajah di beberapa tab. Keranjang yang hanya ada di klien menimpa perubahan terbaru dan kadang memunculkan lagi item yang sudah dihapus.',
          solution:
            'Keranjang menjadi sumber daya server dengan field versi. Setiap mutasi mengirim versi yang diharapkan, dan respons usang memicu pengambilan ulang alih-alih diterapkan. Broadcast channel ringan memperbarui tab lain di browser yang sama.',
        },
        {
          title: 'Pemilihan varian yang berfungsi untuk semua',
          problem:
            'Swatch sebelumnya hanya menyampaikan warna secara visual dan menonaktifkan kombinasi tanpa menjelaskan alasannya.',
          solution:
            'Setiap opsi punya label teks dan jumlah ketersediaan. Kombinasi tak tersedia tetap bisa difokuskan dengan alasan, dan memilih opsi memperbarui ringkasan live berisi nama produk lengkap, ukuran, harga, dan status stok.',
        },
      ],
      results: [
        'Template koleksi yang didesain ulang memangkas berat gambar awal lebih dari setengah dalam perbandingan internal.',
        'Interaksi filter menjadi instan dan mudah dibagikan; tim memakai state URL langsung dalam kampanye musiman.',
        'Pengabaian checkout dalam pengujian kegunaan menurun setelah varian tak tersedia dijelaskan secara inline.',
        'Suntingan merchandising yang dulu butuh developer kini terbit dari editor konten tanpa perubahan kode.',
      ],
      lessons: [
        'Pekerjaan performa adalah pekerjaan desain: memilih rasio gambar lebih awal mencegah sebagian besar masalah mahal.',
        'Model state URL bersama mengurangi bug sekaligus dokumentasi — setiap filter punya satu sumber kebenaran.',
        'Perbaikan aksesibilitas terbaik juga menjadi interaksi paling jelas bagi semua orang.',
      ],
      screenshots: [
        {
          src: projectMedia.shopease.detail,
          alt: 'Halaman produk ShopEase dengan detail material, pemilih warna dan ukuran aksesibel, serta panel tambah ke keranjang',
          caption:
            'Pilihan material, warna, dan ukuran tetap terlihat dan menjelaskan ketersediaan sebelum checkout.',
        },
      ],
    },
  },
  {
    slug: 'fintrack',
    name: 'FinTrack',
    category: 'Fintech · Dashboard',
    summary:
      'Dashboard keuangan pribadi untuk freelancer: penghasilan tidak tetap, biaya berulang, dan proyeksi yang jujur soal ketidakpastian.',
    description:
      'FinTrack adalah studi kasus dashboard keuangan pribadi yang mencakup deteksi transaksi berulang, visualisasi data aksesibel, impor CSV, dan desain yang peduli privasi.',
    year: '2024',
    role: 'Desain produk & rekayasa frontend',
    duration: '10 minggu',
    thumbnail: projectMedia.fintrack.cover,
    thumbnailAlt:
      'Dashboard FinTrack dengan grafik arus kas, rincian kategori, dan transaksi terbaru',
    featured: true,
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Redis'],
    features: [
      {
        title: 'Proyeksi arus kas',
        description:
          'Menggabungkan biaya berulang yang diketahui dengan pandangan konservatif atas penghasilan tidak tetap, dipisahkan jelas dari nilai aktual.',
      },
      {
        title: 'Deteksi transaksi berulang',
        description:
          'Menyarankan langganan dan tagihan dari irama transaksi, lalu membiarkan pengguna mengonfirmasi atau mengabaikannya.',
      },
      {
        title: 'Kategori yang berguna',
        description:
          'Aturan diprioritaskan di atas tebakan otomatis, dan setiap saran bisa dikoreksi dalam satu langkah.',
      },
      {
        title: 'Impor CSV',
        description:
          'Alur pemetaan kolom dengan pratinjau dan deteksi duplikat menangani ekspor dari berbagai bank.',
      },
      {
        title: 'Grafik aksesibel',
        description:
          'Setiap grafik punya padanan tabel, ringkasan yang terbaca, dan titik data yang dapat diakses keyboard.',
      },
      {
        title: 'Privat secara bawaan',
        description:
          'Tanpa koneksi bank pada demonstrasi; semua data tetap di akun pengguna dan dapat diekspor atau dihapus.',
      },
    ],
    links: {
      demo: 'https://example.com/demo/fintrack',
      repository: 'https://github.com/YanuarArif/fintrack',
    },
    caseStudy: {
      overview:
        'FinTrack adalah dashboard keuangan yang dirancang di sekitar masalah umum freelancer: penghasilan datang tidak merata, tetapi sewa, perangkat lunak, dan pajak tidak. Produk ini membantu orang melihat apa yang benar-benar terikat, apa yang kemungkinan besar, dan apa yang masih tidak pasti — tanpa berpura-pura proyeksi adalah jaminan.',
      problem:
        'Sebagian besar alat anggaran mengasumsikan gaji tetap. Freelancer akhirnya mengisi kategori secara manual atau mengabaikan dashboard sepenuhnya. Alat yang ada juga cenderung menyajikan proyeksi percaya diri dari data tipis, yang lebih buruk daripada tidak menampilkan proyeksi sama sekali.',
      solution:
        'Saya merancang model dua lapis: item berulang yang terkonfirmasi dan penghasilan historis yang teramati. Dashboard memisahkan arus kas terikat dari arus kas terproyeksi, menampilkan asumsi di balik setiap angka, dan mendorong pengguna mengoreksi kategori alih-alih diam-diam belajar dari kesalahan.',
      stack: [
        { label: 'Antarmuka', items: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Recharts'] },
        { label: 'Aplikasi', items: ['Node.js', 'REST API', 'PostgreSQL', 'Redis'] },
        { label: 'Kualitas', items: ['Vitest', 'Testing Library', 'Docker'] },
      ],
      process: [
        {
          title: 'Berbicara dengan freelancer',
          description:
            'Enam percakapan membuat satu hal jelas: pertanyaan yang berguna bukan "berapa yang saya belanjakan?" melainkan "berapa yang aman saya komit bulan depan?"',
        },
        {
          title: 'Mendefinisikan proyeksi secara jujur',
          description:
            'Saya menuliskan setiap asumsi — penghasilan tidak tetap, buffer, sisihan pajak, item berulang — dan membuat semuanya terlihat serta bisa diedit di antarmuka.',
        },
        {
          title: 'Membangun jalur data lebih dulu',
          description:
            'Ingesti CSV, deduplikasi, dan aturan kategori diimplementasikan sebelum grafik. Dashboard hanya sekuat alur impornya.',
        },
        {
          title: 'Mendesain dengan data nyata yang berantakan',
          description:
            'Pengujian memakai ekspor anonim dengan kolom hilang, baris duplikat, dan deskripsi yang tumpang tindih. Ini memunculkan kasus tepi yang akan disembunyikan data sintetis.',
        },
      ],
      challenges: [
        {
          title: 'Tanggal, zona waktu, dan tagihan berulang',
          problem:
            'Tagihan yang ditagih pada hari terakhir bulan terus bergeser dalam proyeksi saat pengguna bepergian atau browser berjalan di zona waktu berbeda.',
          solution:
            'Semua tanggal keuangan disimpan sebagai tanggal kalender murni tanpa komponen waktu. Aturan pengulangan diperluas di server memakai zona waktu akun, dan klien hanya memformat tanggal yang sudah terselesaikan.',
        },
        {
          title: 'Grafik yang tidak bisa dibaca siapa pun',
          problem:
            'Grafik arus kas pertama bergantung pada warna dan hover, gagal untuk pengguna screen reader, dan menyembunyikan perbedaan antara nilai aktual dan terproyeksi.',
          solution:
            'Grafik kini menjadi salah satu representasi dari tabel ringkasan kecil. Nilai aktual memakai tanda solid, proyeksi memakai tanda bergaris, dan setiap bulan punya titik data yang dapat difokuskan dengan ringkasan teks lengkap. Tabel tersedia di balik disclosure, bukan terjebak di tooltip.',
        },
        {
          title: 'Ketidakkonsistenan impor',
          problem:
            'Ekspor CSV bank berbeda dalam delimiter, format tanggal, encoding, dan nama kolom. Impor awal membuat duplikat setiap kali pengguna mencoba ulang.',
          solution:
            'Importer memisahkan parsing, pemetaan, dan normalisasi. Fingerprint deterministik dari tanggal, jumlah, dan deskripsi mencegah duplikat, dan setiap impor dipratinjau sebelum disimpan.',
        },
      ],
      results: [
        'Kelompok kegunaan dapat mengidentifikasi biaya terikat versus penghasilan terproyeksi tanpa instruksi.',
        'Deteksi duplikat bertahan pada impor berulang dengan rentang tanggal tumpang tindih dalam fixture pengujian.',
        'Setiap grafik dashboard memperoleh tabel dan ringkasan teks setara, membuat informasi inti tersedia tanpa penglihatan atau input pointer.',
        'Halaman asumsi proyeksi menjadi bagian onboarding yang disengaja, bukan pengaturan lanjutan.',
      ],
      lessons: [
        'Kepercayaan adalah material desain. Menampilkan asumsi lebih berharga daripada menyempurnakan algoritma proyeksi.',
        'Alur impor layak mendapat perhatian desain yang sama dengan dashboard; sebagian besar masalah data berasal dari sana.',
        'Grafik aksesibel biasanya adalah grafik yang lebih jelas, karena memaksa Anda menyatakan apa yang dikatakan visualnya.',
      ],
      screenshots: [
        {
          src: projectMedia.fintrack.detail,
          alt: 'Tampilan proyeksi FinTrack dengan arus kas aktual dan terproyeksi, kontrol asumsi, dan tabel data',
          caption:
            'Proyeksi bergaris dan berlabel, dengan tabel ringkasan tersedia di samping grafik.',
        },
      ],
    },
  },
  {
    slug: 'fitlife',
    name: 'FitLife',
    category: 'Kesehatan & Kebugaran',
    summary:
      'Pendamping latihan untuk orang yang berolahraga dalam jendela singkat dan tidak konsisten — offline-first, minim gesekan, dan jujur soal kemajuan.',
    description:
      'FitLife adalah studi kasus aplikasi pelacak kebugaran yang mencakup arsitektur mobile offline-first, sinkronisasi latar belakang, grafik aktivitas aksesibel, dan performa pada perangkat sederhana.',
    year: '2023',
    role: 'Developer full-stack',
    duration: '14 minggu',
    thumbnail: projectMedia.fitlife.cover,
    thumbnailAlt:
      'Layar aplikasi mobile FitLife menampilkan ring aktivitas, rencana latihan mingguan, dan ringkasan latihan',
    featured: true,
    tech: ['React Native', 'Expo', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
    features: [
      {
        title: 'Latihan offline',
        description:
          'Sesi tercatat secara lokal dan tersinkron saat koneksi kembali, tanpa menghambat timer atau kehilangan set.',
      },
      {
        title: 'Rencana yang menyesuaikan',
        description:
          'Rencana mingguan yang menjadwalkan ulang sesi terlewat alih-alih mengubah streak menjadi sumber rasa bersalah.',
      },
      {
        title: 'Kemajuan yang bermakna',
        description:
          'Menyoroti konsistensi dan tren pribadi alih-alih membandingkan orang dengan papan peringkat sembarang.',
      },
      {
        title: 'Pencatatan minim gesekan',
        description:
          'Latihan bisa dimulai dari rencana, rutinitas tersimpan, atau satu ketukan di layar utama — tanpa akun untuk memulai.',
      },
      {
        title: 'Ringkasan aksesibel',
        description:
          'Grafik menyertakan ringkasan dan tampilan daftar, dengan teks yang dapat diskalakan dan dukungan reduced motion di seluruh aplikasi.',
      },
      {
        title: 'Lapisan sosial privat',
        description:
          'Grup latihan opsional berbagi penyelesaian dan dukungan, tidak pernah metrik tubuh atau lokasi presisi.',
      },
    ],
    links: {
      demo: 'https://example.com/demo/fitlife',
      repository: 'https://github.com/YanuarArif/fitlife',
    },
    caseStudy: {
      overview:
        'FitLife adalah pendamping latihan untuk orang yang tidak berlatih dengan jadwal sempurna. Dirancang di sekitar sesi singkat, minggu yang tak terduga, dan ponsel yang sering offline di gym atau ruang bawah tanah. Aplikasi memperlakukan sesi terlewat sebagai hal normal dan membuat melanjutkan jadi mudah.',
      problem:
        'Sebagian besar aplikasi kebugaran menghargai streak tanpa putus, sehingga minggu yang terputus terasa seperti kegagalan. Mereka juga membutuhkan koneksi untuk pencatatan dasar dan mengubur kemajuan berguna di balik perbandingan sosial. Brief-nya adalah membangun sesuatu yang tetap berguna di koneksi buruk dan minggu sibuk.',
      solution:
        'Saya membangun klien mobile offline-first dengan antrean latihan lokal dan sinkronisasi deterministik. Rencana mingguan dihasilkan dari ketersediaan dan dihitung ulang saat sesi terlewat. Kemajuan dibingkai sebagai tren pribadi — konsistensi, volume, dan pemulihan — dengan ringkasan aksesibel alih-alih satu skor.',
      stack: [
        { label: 'Mobile', items: ['React Native', 'Expo', 'TypeScript', 'SQLite'] },
        { label: 'Backend', items: ['Node.js', 'PostgreSQL', 'Redis', 'Zod'] },
        { label: 'Pengiriman', items: ['Docker', 'GitHub Actions', 'Sentry'] },
      ],
      process: [
        {
          title: 'Mengamati sesi nyata',
          description:
            'Saya mengikuti lima orang melalui latihan singkat dan mencatat setiap gangguan. Penanganan ponsel, timer istirahat, dan transisi offline lebih penting daripada pustaka latihan.',
        },
        {
          title: 'Mendesain untuk minggu yang terputus',
          description:
            'Perencana mingguan berbasis hari tersedia, bukan hari tetap. Sesi terlewat masuk ke backlog ringan yang bisa diabaikan tanpa penalti.',
        },
        {
          title: 'Membangun sinkronisasi sebelum layar',
          description:
            'Lapisan data local-first dan protokol sinkronisasi datang sebelum antarmuka yang dipoles, sehingga setiap layar diuji terhadap perilaku offline dan konflik nyata.',
        },
        {
          title: 'Menguji di perangkat sederhana',
          description:
            'Bulan terakhir fokus pada perangkat Android lama, pengaturan teks besar, dan reduced motion. Animasi dan rendering grafik disesuaikan berdasarkan pengukuran, bukan asumsi.',
        },
      ],
      challenges: [
        {
          title: 'Konflik offline',
          problem:
            'Sebuah latihan bisa diedit di dua perangkat, atau sinkronisasi bisa mencoba ulang setelah server menerima sebagian sesi. Last-write-wins sederhana diam-diam membuang set.',
          solution:
            'Setiap sesi adalah log event append-only dengan ID yang dibuat klien. Server menerima event idempoten dan menyelesaikan urutan berdasarkan timestamp plus urutan per perangkat. Suntingan yang berkonflik disimpan sebagai event terpisah alih-alih ditimpa.',
        },
        {
          title: 'Animasi di ponsel kelas bawah',
          problem:
            'Ring aktivitas dan transisi kehilangan frame di perangkat Android lama dan mengabaikan preferensi reduced motion.',
          solution:
            'Saya mengganti animasi kontinu dengan satu ring gradien dan transform bergaya CSS yang murah bila memungkinkan, mengurangi jumlah elemen beranimasi, dan menghormati pengaturan gerak OS. Waktu frame terukur membaik signifikan di perangkat uji tertua.',
        },
        {
          title: 'Kemajuan tanpa tekanan',
          problem:
            'Penguji awal membaca skor aktivitas sebagai nilai rapor. Seminggu terlewat membuat mereka berhenti membuka aplikasi.',
          solution:
            'Skor dihapus. Layar utama kini menampilkan aksi berguna berikutnya, ringkasan penyelesaian mingguan sederhana, dan catatan saat rencana disesuaikan. Tren tetap tersedia tetapi tidak pernah dibingkai sebagai lulus/gagal.',
        },
      ],
      results: [
        'Penguji beta menyelesaikan sesi offline tanpa kehilangan data saat koneksi diputus paksa.',
        'Layar utama yang direvisi meningkatkan kunjungan kembali setelah minggu terlewat pada kelompok uji.',
        'Layar inti lolos pemeriksaan teks besar dan reduced motion di perangkat tertua yang didukung.',
        'Logika sinkronisasi tercakup oleh pengujian replay event deterministik, termasuk pengiriman duplikat dan di luar urutan.',
      ],
      lessons: [
        'Dukungan offline adalah keputusan produk, bukan lapisan cache yang ditempel di akhir.',
        'Menghapus skor bisa menjadi fitur ketika skor mengubah perilaku ke arah yang lebih buruk.',
        'Anggaran performa di perangkat nyata lebih berguna daripada benchmark di mesin pengembangan.',
      ],
      screenshots: [
        {
          src: projectMedia.fitlife.detail,
          alt: 'Layar sesi latihan FitLife dengan timer istirahat, pencatatan set, dan indikator sinkronisasi offline',
          caption:
            'Sesi tetap sepenuhnya bisa dipakai offline; status sinkronisasi terlihat tetapi tidak pernah mengganggu latihan.',
        },
      ],
    },
  },
]
