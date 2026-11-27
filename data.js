/* ==========================================================================
   DATA PORTOFOLIO  →  SEMUA ISI WEB DIEDIT DI SINI (lewat VS Code)
   Setelah edit: simpan (Ctrl+S), lalu refresh browser (atau pakai Live Server).

   CARA MEMASUKKAN FOTO:
   1. Taruh file foto di folder "images" (sejajar dengan joshua.html)
   2. Tulis nama filenya di bawah, contoh: "images/kenangan-sma.jpeg"
   3. Kalau kosong ("") atau file tidak ditemukan, muncul bingkai kosong.
   ========================================================================== */

const PORTFOLIO = {

    // ---------------- DATA PRIBADI ----------------
    profile: {
        nama: "Joshua Izzy",
        tagline: "Satu perjalanan, banyak cerita, dan mimpi yang terus bertumbuh.",
        ttl: "Tepian Taduh, 6 Mei 2008",           // ← periksa & sesuaikan
        alamat: "Pontianak, Kalimantan Barat",
        minat: "Teknologi, analisis & Kepemimpinan",
        kontak: "h1101261052@students.untan.ac.id",          // ← ganti email aslimu
        semboyan: "\"Berbuat baik selagi mampu tertawa selagi bisa.\"",
        bio: "Selamat datang di perjalanan saya—dari kenangan masa SMA, pengalaman di kampus, hingga momen kebersamaan yang membentuk cerita."
    },

    // ---------------- PENDIDIKAN ----------------
    sma: {
        nama: "Kenangan SMA — Keluarga XII C",
        tahun: "2023 - 2026",
        jurusan: "Ilmu Pengetahuan Alam (IPA)",
        deskripsi: "Masa di SMA Negeri 3 Sintang menjadi tempat belajar, tumbuh bersama, dan mengumpulkan kenangan yang selalu dirindukan.",
        foto: "images/kenangan-sma.jpeg"
    },

    kuliah: {
        nama: "Perjalanan Kuliah — Sistem Informasi",
        tahun: "2026 - Sekarang",                   // ← sesuaikan tahun masuk
        jurusan: "Universitas Tanjungpura",
        deskripsi: "Kegiatan mentoring menjadi ruang untuk belajar, berbagi pengalaman, dan membangun kebersamaan bersama teman-teman Sistem Informasi.",
        foto: "images/mentoring-sisfo.jpeg"
    },

    // ---------------- GALERI KENANGAN (5 FOTO) ----------------
    galeri: [
        {
            judul: "Kenangan Keluarga XII C",
            momen: "Masa SMA • Momen Berharga",
            cerita: "Tempat belajar, bertumbuh, dan merayakan kebersamaan selama masa SMA.",
            foto: "images/kenangan-sma.jpeg"
        },
        {
            judul: "MENGGEMPARKAN PKKMB SAMUDRA 2026",
            momen: "Kegiatan Kelompok • Masa awal memasuki perkulihan",
            cerita: "Momen kebersamaan bersama Kelompok Tectonic dalam kegiatan PKKMB.",
            foto: "images/tectonic.jpeg"
        },
        {
            judul: "Mentoring Sistem Informasi",
            momen: "Kehidupan Kampus",
            cerita: "Berbagi pengalaman dan semangat belajar bersama teman-teman di kampus.",
            foto: "images/mentoring-sisfo.jpeg"
        },
        {
            judul: "SMANTA Trettriova",
            momen: "Foto Angkatan • SMA Negeri 3 Sintang",
            cerita: "Satu angkatan, banyak cerita, dan kenangan masa sekolah yang terus dibawa.",
            foto: "images/smanta-trettriova.jpeg"
        },
        {
            judul: "Olahraga Sistem Informasi",
            momen: "Kebersamaan di Lapangan",
            cerita: "Momen olahraga bersama yang menambah cerita dan kekompakan di luar kegiatan kuliah.",
            foto: "images/olahraga-sisfo.jpeg"
        }
    ],

    // ----------------   ----------------
    // Isi "isi" memakai tanda ` ` (backtick) supaya bisa multi-baris.
    materi: [
        {
            kategori: "Arahan suci•Tentang HMSI ",
            judul: "Nabil Nur Fauzan  & Syukri",
            ringkasan: "Ringkasan singkat materi partisi 1  .",
            isi: `HMSI atau Himpunan Mahasiswa Sistem Informasi dibentuk pada 23 Juli 2016. Menjadi sarana komunikatif, akomodatif, dan penyambungan akademik dan non-akademik. Menyalurkan informasi tentang lomba-lomba..
                Visi dan Misi
                Mewujudkan mahasiswa Sistem Informasi MIPA yang inovatif, dan adaptif



`
        },
        {
            kategori: "Pilar Kegelapan • Sistem Informasi",
            judul: "Devi Gusmitaa",
            ringkasan: "Ringkasan singkat materi Partisi 1.",
            isi:`Sistem Informasi merupakan hubungan antara Teknologi, Manajemen dan Bisnis.
                Etika dalam berkomunikasi, dilingkungan perkuliahan. Dengan memperhatikan sopan santun dalam menyampaikan suatu gagasan, berkomunikasi hanya pada saat jam kerja.
.`
        },
        {
            kategori: "Pilar Cahaya • Public Speaking",
            judul: "Irwansyah",
            ringkasan: "Ringkasan singkat materi Partisi 2 .",
            isi: `Public speaking adalah suatu teknik untuk memengaruhi pendengar didepan khalayak ramai atau didepan umum. Dengan menjaga penampilan yang rapih, tata bahasa yang terstruktur, kontak mata yang dijaga kepada pendengar. Gesture saat berbicara juga sangat penting agar pendengar menjadi nyaman menerima dan percaya atas yang disampaikan oleh pembicara..`
        },
        {
            kategori: "Pilar Kegelapan • Psikologi",
            judul: "Fitri",
            ringkasan: "Ringkasan singkat materi Partisi 2.",
            isi: `Pentingnya menjaga kesehatan psikologi terutama pada mahasiswa saat masa transisi dari bangku pendidikan tingkat SMA ke Perkuliahan. Karena budaya pembelajarannya sangat berbeda. Seorang mahasiswa sangat mugnkin mengalami stress karena tekanan besar yang didapat ketika perkuliahan.
                Mengenal diri lebih dalam dengan cara menulis hal-hal yang dialami melalui Kompas Jiwa dengan poin-poin
                1.	Titik Balik
                2.	Modal Awal
                3.	Celah Pertumbuhan
                4.	Potensi Diri
                5.	Arah Hidup

.`
        }
    ]
};
