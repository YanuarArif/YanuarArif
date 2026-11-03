import { projectMedia } from "@/data/media";
import type { Project } from "@/types";

/**
 * ─────────────────────────────────────────────────────────────
 *  PROJECTS — INDONESIAN
 *  Padanan dari `projects.en.ts`. Nama produk, slug, dan nama
 *  teknologi sengaja tidak diterjemahkan.
 *
 *  Setiap studi kasus di sini berasal dari aplikasi yang benar-benar
 *  dibangun. Tangkapan layar memakai gambar asli dari `projectMedia`.
 *  Isi `links` hanya jika demo atau repositori publik tersedia —
 *  komponen otomatis menyembunyikan tombol yang kosong.
 * ─────────────────────────────────────────────────────────────
 */
export const projectsId: Project[] = [
  {
    slug: "kivapos",
    name: "KivaPOS",
    category: "POS · Manajemen Keuangan",
    summary:
      "Aplikasi kasir dan pembukuan untuk bisnis kecil: penjualan, pembelian, stok, produk dan layanan, sampai laporan keuangan dalam satu dashboard.",
    description:
      "KivaPOS adalah aplikasi point of sale berbasis web: setiap transaksi langsung memperbarui stok dan laporan, katalog produk dan layanan dikelola di tempat yang sama, dan paket langganan punya batas penggunaan yang terlihat jelas.",
    year: "2026",
    role: "Full-stack developer",
    duration: "Sedang berjalan",
    thumbnail: projectMedia.kivapos.cover,
    thumbnailAlt:
      "Halaman utama KivaPOS dengan navigasi fitur, harga, dan pratinjau dashboard produk",
    featured: true,
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Vercel",
    ],
    features: [
      {
        title: "Kasir dan penjualan dalam satu alur",
        description:
          "Transaksi dibuat dari katalog yang sama dengan stok, lalu tercatat ke laporan penjualan tanpa perlu rekap ulang.",
      },
      {
        title: "Pembelian yang langsung menambah stok",
        description:
          "Setiap pembelian membawa stok masuk, harga beli, dan faktur pembayaran, sehingga persediaan dan utang usaha tetap terhubung.",
      },
      {
        title: "Produk dan layanan dalam satu katalog",
        description:
          "Barang dan jasa dikelola bersama: kode produk, barcode, satuan, stok gudang, harga beli, dan harga jual.",
      },
      {
        title: "Laporan keuangan otomatis",
        description:
          "Total penjualan, pembelian, laba rugi, dan pengeluaran dihitung dari transaksi yang sama, lengkap dengan tren bulanan dan monitor produk.",
      },
      {
        title: "Paket langganan yang transparan",
        description:
          "Masa uji coba, harga bulanan, serta kuota penyimpanan, pengguna, dan transaksi ditampilkan sebagai pemakaian nyata, bukan aturan tersembunyi.",
      },
      {
        title: "Pengaturan peran dan bisnis",
        description:
          "Profil bisnis, karyawan, notifikasi, keamanan, dan penagihan diatur per akun, jadi pemilik dan staf melihat menu yang sesuai.",
      },
    ],
    links: {},
    caseStudy: {
      overview:
        "KivaPOS adalah aplikasi point of sale dan pembukuan untuk toko, warung, dan bisnis jasa yang masih mengandalkan catatan terpisah. Situsnya menjelaskan produk, sedangkan aplikasinya menyatukan transaksi harian dengan pekerjaan yang biasanya menyusul di akhir bulan: memeriksa stok, menghitung laba, dan menutup buku.",
      problem:
        "Banyak usaha kecil memakai tiga alat sekaligus: aplikasi kasir, buku stok, dan spreadsheet keuangan. Ketiganya jarang berbicara satu sama lain, jadi pemilik harus menyalin angka, menyesuaikan stok secara manual, dan baru tahu laba setelah semua rekap selesai. Masalahnya bukan kurang fitur, tetapi tidak ada satu sumber data yang dipercaya untuk penjualan, stok, dan laporan sekaligus.",
      solution:
        "Saya membangun satu aplikasi web dengan transaksi sebagai sumber utama. Penjualan dan pembelian ditulis sebagai transaksi, pergerakan stok diturunkan dari transaksi itu, dan kartu ringkasan, grafik, serta ekspor laporan membaca hasil agregasi yang sama per periode. Di atasnya ada lapisan paket langganan yang mengatur masa uji coba, harga bulanan, dan kuota akun.",
      stack: [
        {
          label: "Antarmuka",
          items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        },
        {
          label: "Data & infrastruktur",
          items: ["PostgreSQL", "Prisma", "Vercel"],
        },
      ],
      process: [
        {
          title: "Memetakan urutan kerja harian",
          description:
            "Saya mulai dari urutan yang paling sering terjadi di lapangan: barang datang, stok bertambah, barang terjual, stok berkurang, lalu pemilik menutup buku. Urutan itu yang menentukan navigasi, bukan daftar fitur.",
        },
        {
          title: "Menyusun dashboard dari pertanyaan pemilik",
          description:
            "Halaman ringkasan dan laporan disusun dari pertanyaan yang benar-benar ditanyakan pemilik usaha: berapa penjualan bulan ini, berapa labanya, dan stok apa yang hampir habis.",
        },
        {
          title: "Menghubungkan transaksi, stok, dan laporan",
          description:
            "Pembelian dan penjualan ditulis sebagai transaksi, lalu pergerakan stok dan angka laporan diturunkan dari sana. Tidak ada input ganda untuk hal yang sama.",
        },
        {
          title: "Merancang paket bersama fitur intinya",
          description:
            "Halaman paket dikerjakan bersamaan dengan dashboard supaya batas pengguna, transaksi, dan penyimpanan bisa ditampilkan sebagai penggunaan nyata sejak versi pertama.",
        },
      ],
      challenges: [
        {
          title: "Angka yang tidak boleh berbeda antarhalaman",
          problem:
            "Total penjualan muncul di kartu ringkasan, grafik tren, dan berkas ekspor. Kalau setiap widget menghitung sendiri, satu filter yang berbeda cukup membuat laporan saling bertentangan.",
          solution:
            "Semua angka diturunkan dari satu lapisan agregasi per periode. Kartu, grafik, dan ekspor menerima hasil yang sama, dan pemilih periode di halaman laporan mengendalikan semuanya.",
        },
        {
          title: "Stok yang bergerak dari dua arah",
          problem:
            "Pembelian menambah stok, penjualan menguranginya, dan koreksi manual bisa terjadi kapan saja. Menyimpan satu angka stok lalu menimpanya membuat riwayatnya hilang saat jumlahnya tidak cocok.",
          solution:
            "Stok dicatat sebagai pergerakan masuk, keluar, dan penyesuaian, lalu jumlah akhirnya dihitung dari catatan itu. Setiap selisih bisa ditelusuri ke transaksi yang menyebabkannya.",
        },
        {
          title: "Batas paket tanpa mengunci data",
          problem:
            "Masa uji coba punya batas pengguna, transaksi, dan penyimpanan. Pengecekan yang tersebar di banyak halaman membuat batas mudah terlewat, sementara pembatasan yang terlalu ketat membuat data lama tidak bisa dibaca.",
          solution:
            "Hak paket dan kuota ditempatkan di satu lapisan yang dipakai semua aksi server. Halaman paket menampilkan pemakaian berjalan, dan data yang sudah ada tetap bisa dibaca meski kuota habis.",
        },
      ],
      results: [
        "Pemilik usaha bisa melihat penjualan, pembelian, laba rugi, dan stok dari satu dashboard, tanpa memindahkan angka ke spreadsheet setiap bulan.",
        "Setiap transaksi penjualan atau pembelian langsung memperbarui stok, jadi jumlah persediaan tidak perlu disesuaikan manual.",
        "Laporan bisa disaring per bulan dan diekspor, sehingga tutup buku memakai data yang sama dengan yang terlihat sehari-hari.",
        "Masa uji coba, harga bulanan, dan pemakaian paket terlihat di satu halaman sebelum pengguna diminta memperpanjang.",
      ],
      lessons: [
        "Aplikasi keuangan hanya sekuat alur inputnya. Merapikan pencatatan stok lebih terasa dampaknya daripada menambah grafik.",
        "Satu sumber angka untuk kartu, grafik, dan ekspor mencegah laporan yang saling bertentangan.",
        "Batas paket sebaiknya dirancang bersama fitur intinya, bukan ditempel setelah aplikasi selesai.",
      ],
      screenshots: [
        {
          src: projectMedia.kivapos.reports,
          alt: "Halaman Laporan Keuangan KivaPOS dengan kartu total penjualan, pembelian, laba rugi, dan grafik tren bulanan",
          caption:
            "Ringkasan, grafik tren, dan ekspor memakai periode serta sumber data yang sama.",
        },
        {
          src: projectMedia.kivapos.plans,
          alt: "Halaman Paket & Penagihan KivaPOS dengan masa uji coba, harga bulanan, dan ringkasan penggunaan",
          caption:
            "Kuota pengguna, transaksi, dan penyimpanan ditampilkan sebagai pemakaian nyata.",
        },
      ],
    },
  },
  {
    slug: "saleta-food",
    name: "Saleta Food",
    category: "Company profile · Supplier F&B",
    summary:
      "Situs profil dan katalog produk untuk supplier makanan dan minuman, dengan foto produk besar dan tombol pesan langsung di setiap kartu.",
    description:
      "Saleta Food adalah situs company profile untuk supplier frozen food dan bahan makanan: katalog produk yang rapi, halaman kategori, dan jalur pemesanan tanpa akun.",
    year: "2025",
    role: "Full-stack developer",
    duration: "Sedang berjalan",
    thumbnail: projectMedia.saletafood.cover,
    thumbnailAlt:
      "Halaman utama Saleta Food dengan foto bahan makanan, judul supplier, dan tombol Pesan Sekarang",
    featured: true,
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    features: [
      {
        title: "Halaman utama yang menjual kepercayaan",
        description:
          "Foto bahan makanan segar dan satu kalimat posisi perusahaan: supplier food & beverage yang menghubungkan produk lokal ke pasar global.",
      },
      {
        title: "Katalog yang mudah dipindai",
        description:
          "Grid produk menampilkan foto, nama, dan deskripsi singkat dengan ritme yang sama, sehingga pembeli bisa membandingkan banyak produk dalam satu layar.",
      },
      {
        title: "Navigasi kategori",
        description:
          "Menu kategori membawa pengunjung langsung ke kelompok produk yang dicari, tanpa menggulir seluruh katalog.",
      },
      {
        title: "Pesan tanpa membuat akun",
        description:
          "Tombol Pesan Sekarang ada di hero dan di setiap kartu produk, jadi pembeli bisa langsung menghubungi tim penjualan.",
      },
      {
        title: "Profil dan kontak perusahaan",
        description:
          "Halaman Tentang Kami dan Kontak melengkapi katalog, supaya pembeli bisa mengenal supplier sebelum memesan.",
      },
    ],
    links: {},
    caseStudy: {
      overview:
        "Saleta Food menjual bahan makanan dan frozen food ke rumah tangga serta pelaku usaha. Situsnya berfungsi sebagai etalase: katalog produk yang selalu tampil rapi, informasi perusahaan, dan satu langkah jelas untuk memesan.",
      problem:
        "Katalog supplier sering hidup di brosur PDF dan unggahan media sosial. Keduanya cepat basi, sulit dicari, dan tidak menampilkan produk secara utuh dalam satu halaman. Pembeli yang datang dari tautan atau mesin pencari juga tidak punya tempat tetap untuk melihat pilihan sebelum menghubungi penjual.",
      solution:
        "Saya membangun situs berbasis Next.js yang memisahkan data produk dari komponen tampilannya. Katalog, kategori, dan halaman pendukung memakai satu komponen kartu produk yang sama, dan setiap kartu menyediakan tombol pesan supaya pengunjung tidak perlu mencari kontak.",
      stack: [
        {
          label: "Antarmuka",
          items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        },
        {
          label: "Media & deploy",
          items: ["next/image", "Vercel"],
        },
      ],
      process: [
        {
          title: "Menentukan isi katalog lebih dulu",
          description:
            "Saya mengumpulkan produk, kategori, dan deskripsi singkat sebelum menyentuh tata letak. Struktur data ini yang menentukan bentuk halaman, bukan sebaliknya.",
        },
        {
          title: "Menyusun satu komponen kartu produk",
          description:
            "Kartu dipakai di beranda dan halaman produk, lengkap dengan foto berukuran tetap, nama, deskripsi yang dipotong rapi, dan tombol pesan.",
        },
        {
          title: "Menyusun halaman pendukung",
          description:
            "Tentang Kami, Kategori, dan Kontak dibuat dengan pola yang sama supaya navigasi tetap konsisten dan mudah ditambah halaman baru.",
        },
        {
          title: "Merapikan foto produk",
          description:
            "Foto asli dipotong ke rasio yang sama, dikompres, dan disajikan dalam ukuran yang sesuai layar agar halaman katalog tetap ringan.",
        },
      ],
      challenges: [
        {
          title: "Foto produk yang berat",
          problem:
            "Foto diambil dengan ponsel dan kamera berukuran besar. Menampilkan semuanya apa adanya membuat halaman katalog lambat, terutama di koneksi seluler.",
          solution:
            "Semua foto dipotong ke rasio yang sama lalu dikirim dalam ukuran responsif. Foto di luar layar dimuat belakangan, sehingga halaman pertama tetap ringan.",
        },
        {
          title: "Katalog yang berubah tanpa developer",
          problem:
            "Daftar produk berubah hampir setiap minggu. Kalau setiap produk ditulis di dalam komponen, perubahan kecil butuh deploy ulang.",
          solution:
            "Produk disimpan sebagai data terpisah dan dirender oleh satu komponen. Menambah atau menonaktifkan produk cukup mengubah datanya.",
        },
        {
          title: "Ajakan memesan yang tidak mengganggu",
          problem:
            "Tombol pesan yang terlalu banyak membuat halaman terasa seperti iklan, sementara satu tombol di akhir halaman mudah terlewat.",
          solution:
            "Tombol pesan diulang dengan bobot visual yang sama: satu di hero, satu di setiap kartu produk, tanpa mengalahkan foto dan nama produk.",
        },
      ],
      results: [
        "Katalog lengkap dengan foto, nama, dan deskripsi bisa dijelajahi dalam satu halaman tanpa berpindah antarunggahan media sosial.",
        "Setiap produk punya tombol pesan yang membawa pengunjung ke langkah berikutnya, bukan hanya informasi.",
        "Produk baru bisa ditambahkan lewat data tanpa mengubah tata letak halaman.",
        "Halaman utama tetap ringan meski menampilkan foto produk beresolusi tinggi.",
      ],
      lessons: [
        "Untuk katalog, model data produk lebih penting daripada animasi. Isinya berubah lebih sering daripada tampilannya.",
        "Satu komponen kartu yang dipakai berulang menjaga katalog tetap konsisten saat produk bertambah.",
        "Foto adalah isi utama situs ini, jadi ukuran dan rasionya ditentukan sejak awal, bukan setelah halaman selesai.",
      ],
      screenshots: [
        {
          src: projectMedia.saletafood.products,
          alt: "Halaman katalog Saleta Food menampilkan grid produk dengan foto, nama, dan tombol Pesan Sekarang",
          caption:
            "Grid produk memakai komponen yang sama dengan beranda, jadi katalog tetap konsisten saat produk bertambah.",
        },
      ],
    },
  },
];
